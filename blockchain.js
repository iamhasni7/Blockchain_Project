function Blockchain() {
    this.chain = [];
    this.pendingTransactions = [];
}

Blockchain.prototype.createNewBlock = function(nonce, prevBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        prevBlockHash: prevBlockHash,
        hash: hash
    };

    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

module.exports = Blockchain;