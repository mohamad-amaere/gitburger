const express = require("express");
const kitchenService = require("./services/kitchenService");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
	const orders = await kitchenService.getOrders();

	res.render("index", { orders });
});

app.listen(1338);
