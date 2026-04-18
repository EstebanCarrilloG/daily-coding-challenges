
/**
 Given the speed you are traveling in miles per hour (MPH), and a speed limit in kilometers per hour (KPH), determine whether you are speeding and if you will get a warning or a ticket.

 - 1 mile equals 1.60934 kilometers.
 - If you are traveling less than or equal to the speed limit, return "Not Speeding".
 - If you are traveling 5 KPH or less over the speed limit, return "Warning".
 - If you are traveling more than 5 KPH over the speed limit, return "Ticket".
 * @param {number} speedMph 
 * @param {number} speedLimitKph 
 * @returns {string("Not Speeding" | "Warning" | "Ticket" ) }
 */
export function speedCheck(speedMph, speedLimitKph) {
    let speedKilometers = speedMph * 1.60934
    console.log(speedLimitKph - 5, speedKilometers, speedLimitKph)
    if (speedKilometers <= speedLimitKph) return "Not Speeding"
    if (speedKilometers <= speedLimitKph + 5 && speedKilometers >= speedLimitKph) return "Warning"
    if (speedKilometers + 5 >= speedLimitKph) return "Ticket"
}
