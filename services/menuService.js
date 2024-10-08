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

async function GetBurger(id) {
	const query = `SELECT * FROM burgers WHERE id = ${id}`
	const menu = await db.query(query, { type: QueryTypes.SELECT });
	return menu;
}



module.exports = { getMenu, searchBurger, GetBurger };

