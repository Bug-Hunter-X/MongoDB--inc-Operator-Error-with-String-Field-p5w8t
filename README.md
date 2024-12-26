# MongoDB $inc Operator Error with String Field
This example demonstrates an error that can occur when using MongoDB's `$inc` operator with a field that's not a number. The `$inc` operator is designed to increment numeric values; attempting to use it with a string will cause an error.

**bug.js** shows the incorrect usage, and **bugSolution.js** demonstrates the correct approach.

Solutions include:

1. Ensuring the field is of numeric type (int or double)
2. Using different operators if the field is not a number
