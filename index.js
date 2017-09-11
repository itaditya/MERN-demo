const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
var morgan = require('morgan');
const passport = require('passport');

require('./services/passport');
const config = require('./config');
mongoose.connect(config.mongoURI);
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieSession({
    maxAge : 30 * 24 * 60 * 60 * 1000,
    keys:[config.cookieKey]
}))
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
app.get('/', (req, res) => {
    res.send({
        message: "hi there"
    });
});
app.get('/api/me', (req, res) => {
    res.send(req.user);
});

app.listen(config.port, () => {
    console.log(`app listening on port ${config.port}`);
});
