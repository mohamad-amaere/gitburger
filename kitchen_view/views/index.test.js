const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const { JSDOM } = require("jsdom");

describe("index.ejs", () => {
	let document;

	beforeAll(async () => {
		const filePath = path.join(__dirname, "index.ejs");
		const template = fs.readFileSync(filePath, "utf-8");
		const orders = [
			{
				orderId: "123",
				orderDate: "2023-10-01",
				items: [
					{
						item: { burger_name: "Cheeseburger" },
						quantity: 2,
						ingredients: [
							{ customization: "Extra", name: "Cheese" },
							{ customization: "No", name: "Onions" }
						]
					}
				]
			}
		];
		const html = await ejs.render(template, { orders }, { async: true });

		const dom = new JSDOM(html);
		document = dom.window.document;
	});

	it("should match the snapshot", () => {
		expect(document.documentElement.outerHTML).toMatchSnapshot();
	});
});
