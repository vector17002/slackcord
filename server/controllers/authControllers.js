import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const SignUp = async (req, res) => {
  try {
    const { nickname, username, password, confirmpassword, gender } = req.body;

    if (password !== confirmpassword)
      return res.status(400).json({ error: "Password dont match" });

    const user = await User.findOne({ username });

    if (user) return res.status(400).json({ error: "Username already exists" });

    //HASHING THE PASSWORD
    const salt = await bcrypt.genSalt(11);
    const hashedpassword = await bcrypt.hash(password, salt);
    console.log(hashedpassword);

    const lwr = username.toLowerCase();
    //SETTING THE PROFILE PIC ON THE BASIS OF GENDER
    const boysProfilePic = `https://avatar.iran.liara.run/public/boy?username=${lwr}`;
    const girlsProfilePic = `https://avatar.iran.liara.run/public/girl?username=${lwr}`;

    const newUser = new User({
      nickname,
      username,
      password: hashedpassword,
      gender,
      profilePic: gender === "male" ? boysProfilePic : girlsProfilePic,
    });

    if (newUser) {
      generateToken(newUser._id , res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        nickname: newUser.nickname,
        username: newUser.username,
        password: newUser.password,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(500).json("Invalid user data");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const Login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "User not found" });

    //CHECKING THE HASHES PASSWORD
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ error: "Invalid password" });

    generateToken(user._id, res);

    res.status(201).json({
      _id: user._id,
      nickname: user.nickname,
      username: user.username,
      password: user.password,
      profilePic : user.profilePic,
      gender : user.gender
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const Logout = async (req, res) => {
  try {
    // res.cookie("jwttoken", "", { maxAge: 0 });
    res.status(200).json("Logged out succesfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
