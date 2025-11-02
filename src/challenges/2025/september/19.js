// Photo Storage
/* Given a photo size in megabytes (MB), 
and hard drive capacity in gigabytes (GB), 
return the number of photos the hard drive 
can store. */

/**
 * Returns the number of photos a hard drive can store given the size of the photos
 * in megabytes (MB) and the hard drive capacity in gigabytes (GB).
 * @param {number} photoSizeMb - The size of the photos in megabytes.
 * @param {number} hardDriveSizeGb - The capacity of the hard drive in gigabytes.
 * @returns {number} The number of photos the hard drive can store.
 */
export function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
  return Math.floor((hardDriveSizeGb * 1000) / photoSizeMb);
}
