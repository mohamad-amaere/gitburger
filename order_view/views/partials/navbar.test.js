const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const { JSDOM } = require("jsdom");

describe("navbar.ejs", () => {
	let document;

	beforeAll(async () => {
		const filePath = path.join(__dirname, "navbar.ejs");
		const template = fs.readFileSync(filePath, "utf-8");
		const html = await ejs.render(template, {
			cart: [{ burgerId: "1", quantity: 2, price: 50 }]
		});

		const dom = new JSDOM(html, { runScripts: "dangerously" });
		document = dom.window.document;
	});

	it("should match the snapshot", () => {
		expect(document.documentElement.outerHTML).toMatchSnapshot();
	});

	it("should open the cart dialog when the cart button is clicked", () => {
		const cartButton = document.getElementById("cart-button");
		const cartDialog = document.getElementById("cart-dialog");

		expect(cartDialog.classList.contains("active")).toBe(false);

		cartButton.click();

		expect(cartDialog.classList.contains("active")).toBe(true);
	});
});
