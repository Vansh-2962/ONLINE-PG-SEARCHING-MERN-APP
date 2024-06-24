import Room from "../models/roomModel.js";
import User from "../models/userModel.js";
import multer from "multer";
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

export const createRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, address, location, price, size } = req.body;
    const file = req.file;

    if (!title || !description || !address || !location || !price || !size) {
      res.status(400).json({ msg: "All fields are required" });
    }

    const user = User.findById(id);
    if (!user) {
      res.status(400).json({ msg: "User not found" });
    }
    const room = await Room.create({
      title,
      description,
      address,
      location,
      price,
      size,
      image: file.filename,
      owner: id,
    });
    if (room) {
      res.status(200).json(room);
    }
    res.json(id);
  } catch (err) {
    console.log(err);
  }
};

export const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find().populate("owner", "-password");
    if (!rooms) {
      res.status(400), json({ msg: "No rooms available!" });
    }
    res.status(200).json(rooms);
  } catch (error) {
    console.log(error);
  }
};

export const getUserRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ id });
    if (!id) {
      return res.status(400).json({ msg: "User not found!" });
    }
    const userRoom = await Room.findOne({ owner: id });
    if (!userRoom) {
      return res.status(400).json({ msg: "Room not found!" });
    }
    return res.status(200).json(userRoom);
  } catch (error) {
    console.log(error);
  }
};

export const getOwnerDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const ownerId = await Room.findOne({ _id: id }).select("owner");

    if (!ownerId) {
      return res.status(400).json({ msg: "Owner not found!" });
    } else {
      const owner = await User.findOne({ _id: ownerId.owner });
      res.status(200).json(owner);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

export const purchaseRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const { roomId } = req.params;
    const user = await User.findOne({ _id: id });
    const room = await Room.findOne({ _id: roomId });
    if (!user) {
      res.status(404).json({ msg: "User not found" });
    }
    if (!room) {
      res.status(404).json({ msg: "Sorry room isn't available" });
    }
    const response = await Room.findOneAndUpdate(
      { _id: roomId },
      { $push: { tenant: user._id } },
      { new: true }
    );

    if (response) {
      res.status(200).json({ msg: "Room purchased successfully", response });
    }
  } catch (error) {
    console.log(error);
  }
};
