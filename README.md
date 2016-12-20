# function-warehouse
some function

## isObject

(is-object.js)[https://github.com/Jiasm/function-warehouse/blob/master/is-object.js]
```javascript
const isObject = require('is-object.js')
console.log(isObject(null))           // => false
console.log(isObject([]))             // => false
console.log(isObject({}))             // => true
console.log(isObject(new Object()))   // => true
```
