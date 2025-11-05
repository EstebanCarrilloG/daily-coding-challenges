/* 
Video Storage

Given a video size, a unit for the video size, 
a hard drive capacity, and a unit for the hard drive, 
return the number of videos the hard drive can store 
using the following constraints:

The unit for the video size can be bytes ("B"), kilobytes ("KB"), megabytes ("MB"), or gigabytes ("GB").
If not given one of the video units above, return "Invalid video unit".
The unit of the hard drive capacity can be gigabytes ("GB") or terabytes ("TB").
If not given one of the hard drive units above, return "Invalid drive unit".
Return the number of whole videos the drive can fit.
Use the following conversions:

Unit	Equivalent
1 B	    1 B
1 KB	1000 B
1 MB	1000 KB
1 GB	1000 MB
1 TB	1000 GB

For example, given 500, "MB", 100, and "GB" as arguments, determine how many 500 MB videos can fit on a 100 GB hard drive.
*/

/**
 * Returns the number of whole videos the hard drive can store given a video size, a unit for the video size, a hard drive capacity, and a unit for the hard drive.
 * @param {number} videoSize - The size of the videos.
 * @param {string} videoUnit - The unit for the video size, can be bytes ("B"), kilobytes ("KB"), megabytes ("MB"), or gigabytes ("GB").
 * @param {number} driveSize - The capacity of the hard drive.
 * @param {string} driveUnit - The unit for the hard drive capacity, can be gigabytes ("GB") or terabytes ("TB").
 * @returns {number} The number of whole videos the drive can fit.
 */
export function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  if (videoUnit === "TB") {
    return "Invalid video unit";
  }

  if (driveUnit !== "GB" && driveUnit !== "TB") {
    return "Invalid drive unit";
  }

  if (videoUnit === "B") {
    videoSize = videoSize / 1000;
    videoUnit = "KB";
  }

  if (videoUnit === "KB") {
    videoSize = videoSize / 1000;
    videoUnit = "MB";
  }

  if (videoUnit === "MB") {
    videoSize = videoSize / 1000;
  }

  console.log(videoSize);

  return Math.floor(
    (driveUnit === "TB" ? driveSize * 1000 : driveSize) / videoSize
  );
}
