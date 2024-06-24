import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ msg: "User is not authenticated" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (decode) {
      req.user = decode.id;
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "invalid or expired Token" });
  }
};

export default isAuthenticated;
