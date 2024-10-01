const express = require("express")

const app = express();

app.set("view engine", "ejs");

app.get("/GitBurger", (req, res) => {
    res.send("GitBurger")
})

app.listen(1337)
