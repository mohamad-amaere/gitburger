const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

describe("index.ejs", () => {
	it("should match the snapshot", async () => {
		const filePath = path.join(__dirname, "index.ejs");
		const template = fs.readFileSync(filePath, "utf-8");

		const data = {
			menu: [
				{ id: 1, burger_name: "Cheeseburger", price: "$5.99" },
				{ id: 2, burger_name: "Veggie Burger", price: "$6.99" }
			],
			cart: []
		};

		// Mock the include function to avoid errors
		const options = {
			views: [path.join(__dirname, "partials")],
			filename: path.join(__dirname, "index.ejs"),
			context: {
				include: (filePath) => {
					const partialPath = path.join(
						__dirname,
						"partials",
						`${filePath}.ejs`
					);
					if (fs.existsSync(partialPath)) {
						return fs.readFileSync(partialPath, "utf-8");
					}
					return "";
				}
			}
		};

		// Render the template
		const html = await ejs.renderFile(
			path.join(__dirname, "thankyou.ejs"),
			data,
			options
		);
		expect(html).toMatchSnapshot();
	});
});
