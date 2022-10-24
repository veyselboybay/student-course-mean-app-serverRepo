import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  //Check if there is a token in cookies
  const token = req.cookies.auth_token;
  if (!token) {
    return res.status(401).json("UnAuthorized!");
  }
  // console.log(token);
  // check token if it is valid
  const validPass = jwt.verify(token, process.env.SECRET_KEY);
  if (!validPass) {
    return res.status(401).json("Not Valid token");
  }
  res.userId = validPass._id;
  // console.log(req.userId);
  next();
};
