import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import multer from "multer";
// SIGNUP
export const signup = async (req, res) => {
  try {
    const { fullname, email, password, contact, location, role } = req.body;
    if (!email || !password || !fullname || !contact || !location || !role) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    if (password.length < 6) {
      return res
        .status(406)
        .json({ msg: "Password should not be less than 6 characters" });
    }

    //check user in database
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    //hashing the password
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullname,
      email,
      password: hashedPass,
      contact,
      location,
      role,
    });
    await newUser.save();

    if (newUser) {
      return res.status(200).json({ msg: "Signup successfull" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

//LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "User does not exists!" });
    }

    //payload
    const payload = {
      id: user._id,
    };

    //generating token
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    const isPass = await bcrypt.compare(password, user.password);
    if (!isPass) {
      return res.status(400).json({ msg: "Incorrect password or email" });
    } else {
      res.status(200).cookie("token", token);
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

//logout
export const logout = async (req, res) => {
  try {
    res
      .cookie("token", " ", { expires: new Date(0) })
      .json({ msg: "Logged out successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server error" });
  }
};

//get my user
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      res.status(200).json(user);
    }
  } catch (error) {
    console.log(error);
  }
};

//multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

export const upload = multer({ storage: storage });

export const editProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, email, contact, location, address } = req.body;
    const file = req.file;
    console.log(file);

    const user = await User.findByIdAndUpdate(
      id,
      {
        fullname,
        email,
        contact,
        location,
        address,
        profilePic: file.filename,
      },
      { new: true }
    );
    if (!user) {
      res.status(400).json({ msg: "User Not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Could not be updated" });
  }
};
