const express = require("express")
const menuService  = require("./services/menuService")
const app = express();

app.set("view engine", "ejs");

app.get("/GitBurger", async (req, res) => {
    const menu = await menuService.getMenu();
    res.render("GitBurger", {menu})
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

app.get("/Python_Burger", (req, res) => {
    res.render("Python_Burger")
})


app.listen(1337)

