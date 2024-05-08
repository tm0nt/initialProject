const express = require('express');
const session = require('express-session');
const passport = require('passport');
const authCallback = require("./src/routes/auth/authCallbacks");
const authRoutes = require("./src/routes/auth/authRoutes");
require('dotenv').config();

const app = express();

// Config Passport
require('./src/config/facebook/facebookStrategy');
require('./src/config/google/googleStrategy');
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(authCallback);
app.use(authRoutes);

// Started Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});
