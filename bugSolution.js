```javascript
// Correct usage of $inc operator with a numeric field
db.collection('myCollection').updateOne( { name: "John" }, { $inc: { age: 1 } } );

//Alternative if the field is a string and we want to concatenate:

db.collection('myCollection').updateOne( { name: "John" }, { $set: { "age": db.collection('myCollection').findOne({name: "John"}).age + "1" } } );
```