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

app.get("/", async (req, res) => {
    const search_query = req.query.serach_burger;
    let menu = [];
    if (search_query) {
        menu = await menuService.searchBurger(search_query);
    } else {
        menu = await menuService.getMenu();
    }
    res.render("index", { menu});
});

app.get("/burger/:burgerId", async (req, res) => {
	const burgerId = req.params.burgerId;
	const result = await menuService.getBurgerById(burgerId);
	const ingredients = await menuService.getBurgerIngredients(burgerId);

	res.render("burgerInfo", {
		burger: result[0],
		ingredients
	});
});

app.listen(1337)

