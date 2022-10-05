const express = require("express");
const app = express();
const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();
const bodyParser = require("body-parser");
const {v4: uuid} = require("uuid");

const nodeAddress = uuid().split("-").join("");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// This End-Point will provide us complete blockchain.
app.get("/blockchain", function (req, res) {
    res.send(bitcoin);
})

//This End-Point will add a new transaction using POSTMAN.
app.post("/transaction", function (req, res) {
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({note: `This transaction will be added in block ${blockIndex}`});
})

// This End-Point will add a new block into the blockchain.
app.get("/mineNewBlock", function (req, res) {
    const lastBlock = bitcoin.getLastBlock();
    const prevBlockHash = lastBlock["hash"];

    const currentBlockData = {
        transaction: bitcoin.pendingTransactions,
        index: lastBlock["index"] + 1
    }

    bitcoin.createNewTransaction(10, "0000000000", nodeAddress);

    const nonce = bitcoin.proofOfWork(prevBlockHash, currentBlockData);

    const blockHash = bitcoin.hashBlock(prevBlockHash, currentBlockData, nonce);

    const newBlock = bitcoin.createNewBlock(nonce, prevBlockHash, blockHash);
    res.json({note: "New block mined successfully", block: newBlock});
})

// This End-Point will use to send transactions i.e a simple web wallet.
app.get("/wallet", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/wallet", function (req, res) {
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.senderAddress, req.body.recipientAddress);
    res.json({note: `This transaction will be added in block ${blockIndex}`});
})

app.listen(3000);