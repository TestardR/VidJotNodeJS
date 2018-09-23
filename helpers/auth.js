module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash('error_msg', "Vous n'êtes pas autorisé");
    res.redirect('/users/login');
  }
};
