import jwt from "jsonwebtoken";

const generateToken = (userId , res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwttoken" , token,{
    expires: new Date(Date.now() + 25892000000),
    httpOnly: true,
    secure: null
  })
};

export default generateToken;
