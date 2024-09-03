require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoConnect = require("./database/db")

// const indexRouter = require('./routes/index');

const port = process.env.PORT || 5000;

const app = express();
app.use(morgan(':method :url :response-time'));

// get data from body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// get data from body end

app.use(cors()); // Use this after the variable declaration

app.get('/', (req, res) => {
    const message = `Hello`;
    res.send(message);
});

app.use('/api', indexRouter);

mongoConnect()

app.listen(port, async (err) => {
    if (err) {
        console.log(err);
        return process.exit(1);
    }
    console.log(`Server is running on ${port}`);
});
