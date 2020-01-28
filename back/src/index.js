const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');
const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_CONNECCTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(session({
    secret: process.env.KEY,
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 3600000 }
}))
app.listen(process.env.PORT);