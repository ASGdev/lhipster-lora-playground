const decoder = require('node-red-contrib-cayennelpp/decode.js').decodeCayenneLpp;
console.log(decoder);

let decoded = decoder("016700E1027329EC038807FDD800BEE10000C8");

console.log(decoded);