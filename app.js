'use strict';

const express = require('express');
const app = express();
const admin = require('./routers/admin');
const user = require('./routers/user');
const port = process.env.PORT || 3000;

// set view engine using ejs
app.set('view engine', 'ejs');
app.use(express.static('./styles'))
app.locals.convertToDate = require('./helpers/convertDate');
app.locals.formatNumber = require('./helpers/formatNumber');

// set router root
app.use('/', user);
app.use('/admin', admin);

app.listen(port, () => {
    console.log('app listen on port 3000');
});