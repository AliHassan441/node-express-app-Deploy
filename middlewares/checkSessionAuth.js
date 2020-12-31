function checkSessionAuth(req, res, next){
    //set variablen for every pug file
    if(req.session.user) return next();
    else return res.redirect("/login");
}
module.exports = checkSessionAuth;