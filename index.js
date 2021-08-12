const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;

app.use(
	cors({
		origin: null,
	})
);

app.get("/", (req, res) => {
	let randomNumber = Math.floor(Math.random() * 100);
	res.send(`${randomNumber}`);
});

app.listen(process.env.PORT || port, () => {
	console.log("App Started!");
});
