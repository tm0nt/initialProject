const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: '/auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
// Here you process the profile returned by Facebook
    return done(null, profile);
}));

module.exports = passport;
