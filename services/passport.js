const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const config = require('../config');
const User = require('../models/User');
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    User.findById(id).exec((err,user) => {
        done(null, user);
    })
});
passport.use(new GoogleStrategy({
    clientID: config.googleClientID,
    clientSecret: config.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy:true
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({
        googleId: profile.id
    }).exec((err, existingUser) => {
        if (existingUser) {
            return done(null, existingUser);
        }
        var user = new User({
            googleId: profile.id
        });
        user.save(() => {
            done(null, user);
        });
    });
}));
