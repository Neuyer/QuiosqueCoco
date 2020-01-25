const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');


const app = express();

mongoose.connect('mongodb+srv://root:root@cluster0-xrxsk.mongodb.net/quiosque?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})


app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);