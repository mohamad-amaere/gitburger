const express = require("express")

const app = express();

app.set("view engine", "ejs");

app.get("/GitBurger", (req, res) => {
    res.send("GitBurger")
})


app.get("/Menu", (req, res) => {
    res.render("Menu")
})

app.listen(1337)

