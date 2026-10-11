# Static Testing

## Issue 1

- Location: Line 12, inside file `receipt.ts`.
- Issue: There is an additional comma between the item objects, possibly human error.
- Explanation: This error will create an additional undefined object inside our array.
- Suggested fix: Remove the comma completely.
- Status: Fixed.

## Issue 2

- Location: Line 17, inside file `receipt.ts`.
- Issue: Object reassignments for name and price has syntax errors.
- Explanation: When reassigning objects, use ":" instead of "=" .Another syntax error is "name" & "price" inside the quote string, this will rename each time a new item added, it will have the name "name" and price "price".
- Suggested fix: Remove the literal sting marks and replace "=" to ":"
- Status: Fixed.

## Issue 3

- Location: Line 22, inside file `receipt.ts`.
- Issue: Logical defects and incorrect use of built-in method '.indexOf' and 'pop()'.
- Explanation: The original code uses ITEMS.indexOf("name"), which searched for the literal string "name" instead of the function parameter, and used .pop(), which always removes the last item in the array instead of the requested item. And, direct .indexOf() fails on an array of objects.
- Suggested fix: Updated the function to extract the item names using .map(), find the correct index using .indexOf(name), and remove the specific item using .splice(index, 1).
- Status: Fixed.

## Issue 4

- Location: Line 28, inside file `receipt.ts`.
- Issue: Logic Bug inside the for loop.
- Explanation: Iterating through the list of 3 is incorrect, you can't assume there is 3 items in the array at all times.
- Suggested fix: Create a for loop that iterates over each element inside `ITEMS` array. In TypeScript, numbers are not allowed to be iterated over.
- Status: Fixed.

## Issue 5

- Location: Line 29, inside file `receipt.ts`.
- Issue: the variable `total` is not initialized, syntax errors on the math operation.
- Explanation: To calculate the sum total, we have to loop through each element of ITEMS array first, then calculate their price sum of each element. The syntax here is incorrect, we can't access item price by calling "["price"]".
- Suggested fix: Create a for loop and loop through each element inside the ITEMS array, return sum of each element/item price with correct math and syntax.
- Status: Fixed.

## Issue 6

- Location: Line 34, inside file `receipt.ts`.
- Issue: Missing tax return type.
- Explanation: function tax is expected to return a number, calculated by the total amount plus tax.
- Suggested fix: adding number type to the `tax`.
- Status: Fixed.

## Issue 7

- Location: Line 35, inside file `receipt.ts`.
- Issue: Logic bug in tax function/operation.
- Explanation: it adds total() + taxRate instead of multiplying the subtotal by the tax rate percentage.
- Suggested fix: Multiply the total amount to the taxRate to calculate the tax amount, which is the add on.
- Status: Fixed.

## Issue 8

- Location: Line 43, inside file `receipt.ts`.
- Issue: Incorrect syntax for display message, use backticks `..` instead of '..'.
- Explanation: Syntax error, system won't understand.
- Suggested fix: Replace single quotes with backticks.
- Status: Fixed.

## Issue 9

- Location: Line 43, inside file `receipt.ts`.
- Issue: Incorrect indexing and syntax inside template literals.
- Explanation: The loop for (const i of ITEMS) assigns each object directly to i, but the code attempted to access properties using array-like dictionary indexing (ITEMS[i][name]). Additionally, single quotes were used instead of backticks, causing template literal interpolation to fail.
- Suggested fix: Change the template literal string to use backticks (`...`) and access the object properties directly using item.name and item.price
- Status: Fixed.

## Issue 10

- Location: Line 49, inside file `receipt.ts`.
- Issue: Broken quotes and math syntax in the tax and total console.log lines.
- Explanation: The string formatting had missing quotes and unclosed brackets around taxRate. It was treating taxRate like text instead of actually running the math, which threw syntax errors.
- Suggested fix: Clean up the template literals using proper backticks and expression syntax.
- Status: Fixed.

## Also identify at least one example of each of the following:

- Root cause: At line 34, taxRate format is not clearly discussed, we don't know its true type, is a whole or a decimal number?
- Error: At line 17 - improper object property reassignments, used "=" instead of ":".
- Defect: At line 23 - using .pop() to remove an item at an index, this function only removes the last item/element from the array. Correction by using .splice().
- Failure: At line 22-23, we expect the function to delete the item "name", but the function only removes the last item from the list.
