module.exports = (req, res) => {
  
  // Testing Sesisons
  if(req.session.variableName) {
    req.session.variableName.visited++;
  } else {
    req.session.variableName = {
      visited : 1
    };
  }
  
  res.status(200).json({
    msg: "Hello from API server 😵",
    sessionID: req.sessionID,
    session: req.session
  });
};
