'use strict';

const express = require('express');
const app = express();
const routerRoute = require('./routers/routerRoute');

// set view engine using ejs
app.set('view-engine', 'ejs');

// set router route root url
app.use('/route', routerRoute);

app.listen(3000, () => {
    console.log('app listen on port 3000');
});