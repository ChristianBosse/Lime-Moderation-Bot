const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

app.listen(port, () => {
    console.log(`Server is running on at http://localhost:4000 port ${port}`);
});
