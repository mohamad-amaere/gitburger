const express = require("express")

const app = express();

app.set("view engine", "ejs");

app.get("/GitBurger", (req, res) => {
    res.send("GitBurger")
})


app.get("/Menu", (req, res) => {
    res.render("Menu")
})


app.get("/GitHub_Burger", (req, res) => {
    res.render("GitHub_Burger")
})

app.listen(1337)

