/* 
File Storage

Given a file size, a unit for the file size, and hard drive capacity in gigabytes (GB), return the number of files the hard drive can store using the following constraints:

The unit for the file size can be bytes ("B"), kilobytes ("KB"), or megabytes ("MB").
Return the number of whole files the drive can fit.
Use the following conversions:
Unit	Equivalent
1 B	1 B
1 KB	1000 B
1 MB	1000 KB
1 GB	1000 MB
For example, given 500, "KB", and 1 as arguments, determine how many 500 KB files can fit on a 1 GB hard drive.

*/

/**
 * Returns the number of whole files the hard drive can store given a file size,
 * a unit for the file size, and hard drive capacity in gigabytes (GB).
 * @param {number} fileSize - The size of the files.
 * @param {string} fileUnit - The unit for the file size, can be bytes ("B"), kilobytes ("KB"), or megabytes ("MB").
 * @param {number} driveSizeGb - The capacity of the hard drive in gigabytes (GB).
 * @returns {number} The number of whole files the drive can fit.
 */
export function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  let driverSizeMb = driveSizeGb * 1000;

  if (fileUnit === "B") {
    fileSize = fileSize / 1000;
    fileUnit = "KB";
  }
  if (fileUnit === "MB") {
    fileSize = fileSize * 1000;
    fileUnit = "KB";
  }

  if (fileUnit === "KB") return Math.floor(driverSizeMb / (fileSize / 1000));
}
