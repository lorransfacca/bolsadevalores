const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let transactions = [];

app.get("/api/transactions", (req, res) => res.json(transactions));

app.post("/api/transactions", (req, res) => {
    const transaction = req.body;
    transactions.push(transaction);
    res.status(201).json(transaction);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
