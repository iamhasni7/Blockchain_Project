const express = require("express");
const app = express();
const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get("/blockchain", function (req, res) {
    res.send(bitcoin);
})

app.post("/transaction", function (req, res) {
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({note: 'This transaction will be added in block ${blockIndex}'});
})

app.listen(3000);