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

async function createOrder(cart) {
	let query = `INSERT INTO burger_orders (order_date) VALUES (NOW())`;
	const order = await db.query(query, { type: QueryTypes.INSERT });

	for (const item of cart) {
		query = `INSERT INTO burger_order_items (burger_order_id, burger_id, quantity) VALUES (${order[0]}, ${item.burgerId}, ${item.quantity})`;
		await db.query(query, { type: QueryTypes.INSERT });

		const burgerIngredients = await getBurgerIngredients(item.burgerId);

		if (item.IncludedIngredients?.length > 0) {
			const difference = burgerIngredients.filter((ingredient) => {
				return !item.IncludedIngredients.includes(ingredient.id.toString());
			});

			for (const ingredient of item.IncludedIngredients) {
				query = `INSERT INTO burger_order_ingrediants_customizations (burger_order_items_id, ingrediant_id, customization) VALUES (${item.burgerId}, ${ingredient}, '+')`;
				await db.query(query, { type: QueryTypes.INSERT });
			}

			for (const ingredient of difference) {
				query = `INSERT INTO burger_order_ingrediants_customizations (burger_order_items_id, ingrediant_id, customization) VALUES (${item.burgerId}, ${ingredient.id}, '-')`;
				await db.query(query, { type: QueryTypes.INSERT });
			}
		} else {
			for (const ingredient of burgerIngredients) {
				query = `INSERT INTO burger_order_ingrediants_customizations (burger_order_items_id, ingrediant_id, customization) VALUES (${item.burgerId}, ${ingredient.id}, '+')`;
				await db.query(query, { type: QueryTypes.INSERT });
			}
		}
	}
}

module.exports = {
	getMenu,
	searchBurger,
	getBurgerById,
	getBurgerIngredients,
	createOrder
};

