import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwttoken
    
    if (!token) return res.status(400).json({ error: "Token not found" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded)
      return res
        .status(400)
        .json({ error: "Unauthorised - No token Provided" });

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) return res.status(401).json({ error: "User not found" });

    req.user = user;

    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export default protectRoute;
