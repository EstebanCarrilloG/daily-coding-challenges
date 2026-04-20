/**
 December 21st is the winter solstice for the northern hemisphere and the summer solstice for the southern hemisphere. That means it's the day with the least daylight in the north and the most daylight in the south.
 Given a latitude number from -90 to 90, return a rough approximation of daylight hours on the solstice using the following table:
 {...}
  - If the given latitude does not exactly match a table entry, use the value of the closest latitude.
 * @param {number} latitude 
 * @returns {number}
 */
export function daylightHours(latitude) {

  const data = [[-90, 24], [-75, 23], [-60, 21], [-45, 15], [-30, 13], [-15, 12], [0, 12], [15, 11], [30, 10], [45, 9], [60, 6], [75, 2], [90, 0]];

  const isExactLatitude = data.filter((e, i) => {
    if (e[0] === latitude) {
      return e
    }
  })

  if (isExactLatitude.length > 0) {
    return isExactLatitude[0][1]
  }

  return data.map((e, i) => {

    if (latitude > data[i][0] && latitude < data[i + 1][0]) {

      if (latitude >= 0) {

        let values = Math.min(Math.abs(data[i][0] - latitude), Math.abs(data[i + 1][0] - latitude))
        if (data[i][0] - latitude === values) {
          return data[i]
        } else {
          return data[i + 1]
        }
      }

      let values = Math.min((data[i][0] + latitude), (data[i + 1][0] + latitude))

      if (data[i][0] - latitude === values) {
        return data[i]
      } else {
        return data[i + 1]
      }
    }

  }).filter(e => e !== undefined)[0][1]

}