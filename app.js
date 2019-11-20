'use strict';

const express = require('express');
const app = express();
const admin = require('./routers/admin');
const user = require('./routers/user')
// set view engine using ejs
app.set('view-engine', 'ejs');

// set router route root 
app.use('/user', user);
app.use('/admin', admin);

app.listen(3000, () => {
    console.log('app listen on port 3000');
});