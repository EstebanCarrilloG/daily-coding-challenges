import { createServer } from "node:http";
import { promises as fs } from "node:fs";
import path from "node:path";
import { URL } from "node:url";
import { clearCatalogCache, getCatalog, getSolution } from "./catalog.js";

const PORT = Number(process.env.PORT) || 4000;
const HOST = process.env.HOST || "127.0.0.1";
const PUBLIC_DIR = path.resolve(process.cwd(), "src", "ui", "public");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": MIME_TYPES[".json"],
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

async function serveStatic(requestUrl, response) {
  const relativePath = requestUrl.pathname === "/" ? "index.html" : requestUrl.pathname.slice(1);
  const normalizedPath = path.normalize(relativePath);
  const safeRelativePath = normalizedPath.replace(/^([.][.][\\/])+/, "");
  const filePath = path.resolve(PUBLIC_DIR, safeRelativePath);

  if (!filePath.startsWith(PUBLIC_DIR)) {
    sendJson(response, 403, { error: "Forbidden" });
    return;
  }

  try {
    const fileContent = await fs.readFile(filePath);
    const extension = path.extname(filePath);
    const contentType = MIME_TYPES[extension] || "application/octet-stream";

    response.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": extension === ".html" ? "no-store" : "public, max-age=300",
    });
    response.end(fileContent);
  } catch {
    sendJson(response, 404, { error: "Not Found" });
  }
}

async function handleApi(requestUrl, response) {
  if (requestUrl.pathname === "/api/catalog") {
    const refresh = requestUrl.searchParams.get("refresh");
    if (refresh === "1") {
      clearCatalogCache();
    }

    const catalog = await getCatalog();
    sendJson(response, 200, catalog);
    return;
  }

  if (requestUrl.pathname === "/api/solution") {
    const year = requestUrl.searchParams.get("year");
    const month = requestUrl.searchParams.get("month");
    const day = requestUrl.searchParams.get("day");

    const solution = await getSolution({ year, month, day });

    if (!solution) {
      sendJson(response, 404, { error: "Solution not found" });
      return;
    }

    sendJson(response, 200, solution);
    return;
  }

  sendJson(response, 404, { error: "Not Found" });
}

const server = createServer(async (request, response) => {
  if (!request.url) {
    sendJson(response, 400, { error: "Bad Request" });
    return;
  }

  try {
    const requestHost = request.headers.host || `${HOST}:${PORT}`;
    const requestUrl = new URL(request.url, `http://${requestHost}`);

    if (requestUrl.pathname.startsWith("/api/")) {
      await handleApi(requestUrl, response);
      return;
    }

    await serveStatic(requestUrl, response);
  } catch (error) {
    sendJson(response, 500, {
      error: "Unexpected error",
      detail: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Calendar UI running at http://${HOST}:${PORT}`);
});
