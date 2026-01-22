/**
 * Updates the inventory with the given shipment.
 * If a product is already in the inventory, the quantity is added to the existing quantity.
 * If a product is not in the inventory, it is added to the inventory with the given quantity.
 * @param {Array<Array<number|string>>} inventory - The current inventory.
 * @param {Array<Array<number|string>>} shipment - The shipment to add to the inventory.
 * @returns {Array<Array<number|string>>} The updated inventory.
 */
export function updateInventory(inventory, shipment) {
  for (let i = 0; i < inventory.length; i++) {
    const [quantity, product] = inventory[i];
    for (let j = 0; j < shipment.length; j++) {
      if (product === shipment[j][1]) {
        inventory[i][0] += shipment[j][0];
        shipment.splice(j, 1);
        break;
      }
    }
  }

  return inventory.concat(shipment);
}
