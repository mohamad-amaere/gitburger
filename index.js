const express = require("express")

const app = express();

app.set("view engine", "ejs");

app.get("/GitBurger", (req, res) => {
    res.send("GitBurger")
})

app.get("/Menu", (req, res) => {
    res.render("Menu")
})

app.get("/VS_Burger", (req, res) => {
    res.render("Vs_burger")
})

app.get("/Docker_Burger", (req, res) => {
    res.render("Docker_Burger")
})

app.get("/GitHub_Burger", (req, res) => {
    res.render("GitHub_Burger")
})

app.get("/Css_Burger", (req, res) => {
    res.render("Css_Burger")
})
app.listen(1337)

