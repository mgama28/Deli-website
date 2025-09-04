"use strict";

const express = require('express'),
    app = express(),
    layouts = require('express-ejs-layouts'),
    errorController = require('./controllers/errorController'),
    homeController = require('./controllers/homeController');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(express.json());

app.get('/', homeController.index);
app.get('/about', homeController.about);
app.get('/contact', homeController.contact);
app.get('/menu', homeController.menu);
app.get('/trays', homeController.trays);
app.get('/sandwiches', homeController.sandwiches);
app.get('/delimeats', homeController.delimeats);
app.get('/deliitems', homeController.deliitems);

app.use(errorController.logErrors);
app.use(errorController.noPageFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost${app.get("port")}`);
})