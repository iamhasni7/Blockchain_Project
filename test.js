const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(1234, "kjhdalsdkfgkjdsfslkjdfh", "oihfiuagfkjdsfkj");
bitcoin.createNewBlock(2658, "oihfiuagfkjdsfkj", "oihfiuagfkjdsfkjtwo");

console.log(bitcoin);