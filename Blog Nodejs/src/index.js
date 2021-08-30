const express = require("express");
const morgan = require("morgan");
const handlebars  = require('express-handlebars');
const app = express();
const port = 3000;

app.use(morgan('combined'))
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.get("/", (req, res) => res.send("Hello World!"))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

