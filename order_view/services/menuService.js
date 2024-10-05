const { db, QueryTypes } = require("./DBService");

async function getMenu() {
	const query = `SELECT * FROM burgers`;
	const menu = await db.query(query, { type: QueryTypes.SELECT });
	return menu;
}

async function searchBurger(searchString) {
	const query = `SELECT * FROM burgers WHERE burger_name LIKE '%${searchString}%'`;
	const menu = await db.query(query, { type: QueryTypes.SELECT });
	return menu;
}

async function getBurgerById(burgerId) {
	const query = `SELECT * FROM burgers WHERE id = ${burgerId}`;
	const burger = await db.query(query, { type: QueryTypes.SELECT });
	return burger;
}

async function getBurgerIngredients(burgerId) {
	const query = `SELECT * FROM burger_ingrediants WHERE burger_id = ${burgerId}`;
	const ingredients = await db.query(query, { type: QueryTypes.SELECT });
	return ingredients;
}

module.exports = { getMenu, searchBurger, getBurgerById, getBurgerIngredients };

