const withAuth = (req, res, next) => {
    //conditional that checks if the user is logged in
    //if not- send to login page
    //else- next();
    if (!req.session.logged_in) {
        res.redirect('/login');
      } else {
        next();
      }
    };
    
    module.exports = withAuth;


//export withAuth;