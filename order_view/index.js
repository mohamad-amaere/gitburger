const express = require("express")
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const menuService = require("./services/menuService");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
	const search_query = req.query.serach_burger;
	let menu = [];
	const cart = req.cookies.cart || [];

	if (search_query) {
		menu = await menuService.searchBurger(search_query);
	} else {
		menu = await menuService.getMenu();
	}
	res.render("index", { menu, cart });
});

app.get("/burger/:burgerId", async (req, res) => {
	const burgerId = req.params.burgerId;
	const result = await menuService.getBurgerById(burgerId);
	const ingredients = await menuService.getBurgerIngredients(burgerId);
	const cart = req.cookies.cart || [];

	res.render("burgerInfo", {
		burger: result[0],
		ingredients,
		cart
	});
});

app.post("/burger/:burgerId", async (req, res) => {
	const body = req.body;
	const burgerId = req.params.burgerId;
	const quantity = body.quantity;
	const includedIngredients = body.ingredients;
	const price = req.body.price;

	let cart = req.cookies.cart || [];

	cart.push({
		burgerId,
		quantity,
		IncludedIngredients: includedIngredients,
		price: Number(price) * Number(quantity)
	});

	res.cookie("cart", cart);

	res.redirect("/");
});

app.post("/order", async (req, res) => {
	const cart = req.cookies.cart || [];

	await menuService.createOrder(cart);

	res.clearCookie("cart");
	res.redirect(`/thankyou`);
});

app.get("/thankyou", async (req, res) => {
	const cart = req.cookies.cart || [];
	res.render("thankyou", { cart });
});


app.listen(1337)

