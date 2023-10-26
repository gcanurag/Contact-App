const express = require('express');
const flash = require('express-flash');
const session = require('express-session');
const route = require('./routes/routes');
require("./model/index")

const app = express();

app.use(session({
    secret: 'SECRETKEY',
    resave: false,
    saveUninitialized: false,
}))

app.use(flash());

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("", route);






app.listen(3000, () => {
    console.log('Server started on port 3000');
});