const path = require("path");
const ejs = require("ejs");
const { toMatchSnapshot } = require("jest-snapshot");

expect.extend({ toMatchSnapshot });

describe("burgerInfo.ejs", () => {
	it("should render correctly", async () => {
		const filePath = path.join(__dirname, "burgerInfo.ejs");
		const data = {
			burger: {
				burger_name: "Cheeseburger",
				price: 50,
				id: 1
			},
			ingredients: [
				{ id: 1, ingrediant_name: "Lettuce" },
				{ id: 2, ingrediant_name: "Tomato" },
				{ id: 3, ingrediant_name: "Cheese" }
			],
			cart: []
		};

		const html = await ejs.renderFile(filePath, data, { async: true });
		expect(html).toMatchSnapshot();
	});
});
