const jwt = require("jsonwebtoken");

const CheckToken = (req, res, next) => {
  // Check if Authorization header exists
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).send({ msg: "Unauthorized - No token provided" });
  }

  // Extract the token from the Authorization header
  const token = authHeader.split(' ')[1]; // Assuming Bearer token scheme

  try {
    const verifiedToken = jwt.verify(token, process.env.Signature);
    req.user = verifiedToken; // Attach the decoded token payload to the request object
    next();
  } catch (err) {
    console.error("Error verifying token:", err);
    return res.status(401).send({ msg: "Unauthorized - Invalid token" });
  }
};

module.exports = CheckToken;
