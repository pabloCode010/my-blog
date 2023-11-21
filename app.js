const express = require('express');
const app = express();

const ip = require('ip');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;
const indexRouter = require('./src/routes/index');
const postRouter = require('./src/routes/post');

// Views engine
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/src/views`);

// Middlewares
app.use(morgan("dev"));
app.use(express.static("public"));

// Routes
app.use(indexRouter);
app.use(postRouter);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log(`http://${ip.address()}:${PORT}`);
});