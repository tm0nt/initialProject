const passport = require('passport');

exports.authenticateFacebook = passport.authenticate('facebook');
exports.authenticateGoogle = passport.authenticate('google', { scope: ['profile'] });

exports.facebookCallback = passport.authenticate('facebook', { failureRedirect: '/' }, (req, res) => {
    res.send('Successfully authenticated via Facebook');
});

exports.googleCallback = passport.authenticate('google', { failureRedirect: '/' }, (req, res) => {
    res.send('Successfully authenticated via Google');
});
