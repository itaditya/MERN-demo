const passport = require('passport');
module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    app.get('/auth/google/callback', passport.authenticate('google'),(req,res)=>{
        res.redirect('/user');
    });
    app.get('/logout', (req,res)=>{
        req.logout();
        res.send({
            message:"logged out !"
        })
    });
}
