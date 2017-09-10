const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./services/passport');
const config = require('./config');
mongoose.connect(config.mongoURI);
const app = express();
app.use(cookieSession({
    maxAge : 30 * 24 * 60 * 60 * 1000,
    keys:[config.cookieKey]
}))
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
app.get('/', (req, res) => {
    res.send({
        message: "hi there"
    });
});
app.get('/user', (req, res) => {
    res.send(req.user);
});

app.listen(config.port, () => {
    console.log(`app listening on port ${config.port}`);
});
