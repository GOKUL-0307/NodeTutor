//console.log(global)

const os=require('os')
const path=require('path')
//creating object

const math=require('./math')

console.log(math.add(8,7));
console.log(math.sub(8,7));
console.log(math.mul(8,7));
console.log(math.div(8,7));

// object destructuring
const{add,sub,mul,div}=require('./math')
console.log(add(7,6));
console.log(sub(7,6));
console.log(mul(7,6));
console.log(div(7,6));