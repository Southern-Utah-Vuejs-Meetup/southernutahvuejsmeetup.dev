const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const dist = __dirname + "/dist/";

app.set("x-powered-by", false);
app.use(express.static(dist));
app.use(express.json());

app.get("*", (req, res) => res.sendFile(dist + "index.html"));
app.listen(port, () => console.log(`App running on port ${port}.`));
