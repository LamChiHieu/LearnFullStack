import express from "express";
import bodyParser from "body-parser";
let viewEngine = require("./config/viewEngine");
let innitWebRoutes = require("./route/web");
var env = require('dotenv');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
innitWebRoutes(app);

env.config();
let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log('Nodejs server is running with:', port);
});

