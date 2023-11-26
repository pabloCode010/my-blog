const express = require("express");
const app = express();
require("dotenv").config();

const ip = require("ip");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;
const indexRouter = require("./src/routes/index");
const postRouter = require("./src/routes/post");
const connect = require("./src/db/connect");
const api = require("./src/API/routes/router");

// Views engine
app.set("view engine", "ejs");
app.set("views", `${__dirname}/src/views`);

// Middlewares
app.use(morgan("dev"));
app.use(express.static("public"));

// Routes Views
app.use(indexRouter);
app.use(postRouter);

// Middlewares -> Api
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(api);

const start = async () => {
  await connect(process.env.MONGO_URI);
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log(`http://${ip.address()}:${PORT}`);
  });
};

start();