```javascript
// Incorrect use of $inc operator with a string field
db.collection('myCollection').updateOne( { name: "John" }, { $inc: { "age": "1" } } );
```