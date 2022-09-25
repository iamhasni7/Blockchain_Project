const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Blockchain is the future!")
})

app.listen(3000);