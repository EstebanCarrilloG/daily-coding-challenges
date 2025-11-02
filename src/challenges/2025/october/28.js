/* 
Navigator

On October 28, 1994, Netscape Navigator was released, helping millions explore the early web.

Given an array of browser commands you executed on Netscape Navigator, return the current page you are on after executing all the commands using the following rules:

You always start on the "Home" page, which will not be included in the commands array.
Valid commands are:
"Visit Page": Where "Page" is the name of the page you are visiting. For example, "Visit About" takes you to the "About" page. When you visit a new page, make sure to discard any forward history you have.
"Back": Takes you to the previous page in your history or stays on the current page if there isn't one.
"Forward": Takes you forward in the history to the page you came from or stays on the current page if there isn't one.
For example, given ["Visit About Us", "Back", "Forward"], return "About Us".
}
*/

/**
 * Given an array of browser commands you executed on Netscape Navigator,
 * return the current page you are on after executing all the commands.
 *
 * @param {Array<string>} commands - Array of browser commands
 * @returns {string} - Current page after executing all the commands
 */
export function navigate(commands) {
  let tabs = ["Home"];
  let currentTab = "Home";

  commands.forEach((e, i) => {
    if (e.includes("Visit")) {
      currentTab = e.replace("Visit ", "");
      tabs.push(currentTab);
    }
    if (e === "Forward")
      currentTab =
        tabs[tabs.indexOf(currentTab) + 1] !== undefined
          ? tabs[tabs.indexOf(currentTab) + 1]
          : currentTab;
    if (e === "Back")
      currentTab =
        tabs[tabs.indexOf(currentTab) - 1] !== undefined
          ? tabs[tabs.indexOf(currentTab) - 1]
          : currentTab;
  });

  return currentTab;
}
