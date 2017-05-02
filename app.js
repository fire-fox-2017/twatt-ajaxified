const express = require('express');
const bodyParser = require('body-parser');
const OAuth = require('oauth');
const router = express.Router();
require('dotenv').config();

const app = express();

const index = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);

app.listen(5000);
