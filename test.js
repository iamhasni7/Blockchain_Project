const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(1234, "kjhdalsdkfgkjdsfslkjdfh", "oihfiuagfkjdsfkj");
bitcoin.createNewBlock(2658, "oihfiuagfkjdsfkj", "oihfiuagfkjdsfkjtwo");

const previousBlockHash = "fgksdjfhiuweury8934r2i3rkaejfbiaw88urekrfj";
const currentBlockData = [
    {
        amount: 10,
        sender: "kjdshflisdhfiu093u4kd",
        receiver: "klfdkhfdskfdshudfsk"
    },
    {
        amount: 20,
        sender: "kasdjdshflisdhfiu093u4kd",
        receiver: "klkyukjhfdkhfdskfdshudfsk"
    }
]
const nonce = 5485616;

var hash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

console.log(hash);