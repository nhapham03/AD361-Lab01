// Program requirements:
// Items can be added to the grocery list.
// Items can be deleted from the grocery list.
// The subtotal is calculated without tax.
// The total is calculated with tax.
// A receipt can be printed.

const ITEMS = [
  { name: "paper towels", price: 21.99 },
  { name: "sandwich", price: 8.75 },
  { name: "eggs", price: 6.75 },
  { name: "avocado oil", price: 10.0 },
];

export function addItem(name: string, price: number) {
  const newItem = { name: name, price: price };
  ITEMS.push(newItem);
}

export function deleteItem(name: string) {
  const namesOfITEMS = ITEMS.map((i) => i.name);
  const idx = namesOfITEMS.indexOf(name);
  if (idx !== -1) {
    ITEMS.splice(idx, 1);
  }
  return ITEMS;
}

export function total(): number {
  let sum = 0;
  for (const i of ITEMS) {
    sum += i.price;
  }
  return sum;
}

export function tax(taxRate: number): number {
  return total() * taxRate;
}

export function printReceipt(taxRate: number) {
  console.log("************************");

  for (const i of ITEMS) {
    console.log(`${i.name} : $${i.price}}`);
  }

  console.log("************************");
  const subtotal = total();
  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
  const taxAmount = tax(taxRate);
  console.log(`Tax: $ + ${taxAmount.toFixed(2)}`);
  console.log(`Total: $${(subtotal + taxAmount).toFixed(2)}`);
}

// AI transparency: AI was used to clean up this code.
