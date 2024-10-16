const ejs = require("ejs");
const path = require("path");
const fs = require("fs");

describe("thankyou.ejs", () => {
	it("renders correctly", async () => {
		// Mock data
		const data = { cart: [] };

		// Mock the include function to avoid errors
		const options = {
			views: [path.join(__dirname, "partials")],
			filename: path.join(__dirname, "thankyou.ejs"),
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

		// Compare the rendered HTML to the snapshot
		expect(html).toMatchSnapshot();
	});
});
