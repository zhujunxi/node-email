const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

module.exports = function generateHtml(htmlData) {
    const template = ejs.compile(
        fs.readFileSync(path.resolve(__dirname, "../ejs/mail.ejs"), "utf-8")
    );
    const html = template(htmlData)

    return html
}