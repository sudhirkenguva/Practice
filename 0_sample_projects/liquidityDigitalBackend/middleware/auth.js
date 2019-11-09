let ensureAuthenticated = (req, res, next) => {
    return next();
    if (req.isAuthenticated()) { 
        return next(); 
    }
    res.status(401).send({msg:"Req is not authorized!"});
  }


  module.exports = {
      ensureAuthenticated: ensureAuthenticated
  }