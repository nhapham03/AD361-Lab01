import { addItem, deleteItem, total, tax, printReceipt } from "./fixed_receipt";
import { test, expect } from "@jest/globals";

// HAPPY PATH TEST : Tests a function using valid input and confirms that it produces the expected result.
test("Happy-path: should add a new item successfully and update the total", () => {
  addItem("coffee", 4.5);
  const currentTotal = total();
  expect(typeof currentTotal).toBe("number");
  expect(currentTotal).toBeGreaterThan(0);
});

// UNHAPPY PATH TEST : Tests how a function responds to invalid input or an incorrect value.
test("Unhappy-path: deleteItem safely handles deleting something that doesn't exist", () => {
  // deleting an item that was never added to the list
  const updatedList = deleteItem("invisible-unicorn");

  // still returns an array and doesn't crash the program
  expect(Array.isArray(updatedList)).toBe(true);
});

// EDGE CASE TEST : Tests an unusual value or a value near the limits of the function's expected input.
test("Edge-case: tax function handles a 0 percent tax rate correctly", () => {
  addItem("apple", 2.0);
  const taxAmount = tax(0);
  expect(taxAmount).toBe(0);
});
