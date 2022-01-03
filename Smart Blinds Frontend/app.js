if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const path = require('path');
const ExpressError = require('./utils/ExpressError');
const db = require('./db') // PostgresSQL Database Connection
const session = require('express-session'); // Used for sessions and storing cookies
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes Here

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on Port ${port}`);
});
