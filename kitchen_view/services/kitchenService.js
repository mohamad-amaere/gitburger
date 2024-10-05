const { db, QueryTypes } = require("./DBService");

async function getOrders() {
	let query = "SELECT * FROM burger_orders;";
	const res = await db.query(query, { type: QueryTypes.SELECT });

	let orders = [];
	for (const order of res) {
		// items
		orderInfo = {
			orderId: order.id,
			orderDate: order.order_date,
			items: [],
			subTotal: 0
		};
		query = `SELECT * FROM burger_order_items WHERE burger_order_id = ${order.id}`;
		const items = await db.query(query, { type: QueryTypes.SELECT });

		if (!items[0]?.burger_id) {
			continue;
		}

		for (const item of items) {
			const query2 = `SELECT * FROM burgers WHERE id = ${item.burger_id}`;
			const itemInfo = await db.query(query2, { type: QueryTypes.SELECT });

			// ingredients
			query = `SELECT * FROM burger_order_ingrediants_customizations WHERE burger_order_items_id = ${item.id}`;
			const ingredients = await db.query(query, { type: QueryTypes.SELECT });

			const ingredientsInformation = [];

			for (const ingredient of ingredients) {
				const query3 = `SELECT * FROM burger_ingrediants WHERE id = ${ingredient.ingrediant_id}`;
				const ingredientInfo = await db.query(query3, {
					type: QueryTypes.SELECT
				});
				ingredientsInformation.push({
					name: ingredientInfo[0].ingrediant_name,
					customization: ingredient.customization
				});
			}

			orderInfo.orderId = order.id;
			orderInfo.items.push({
				item: itemInfo[0],
				quantity: item.quantity,
				ingredients: ingredientsInformation
			});
			orderInfo.subTotal += item.price;
		}

		orders.push(orderInfo);
	}

	return orders;
}

module.exports = {
	getOrders
};
