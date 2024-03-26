import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
  try {
    const currUser = req.user._id
    const allUsers = await User.find({ _id: { $ne: currUser } });

    res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
