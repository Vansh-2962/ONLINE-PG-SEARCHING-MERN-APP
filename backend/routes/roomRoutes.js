import express from "express";
import {
  createRoom,
  getAllRooms,
  getOwnerDetails,
  getUserRoom,
  purchaseRoom,
  upload,
} from "../controllers/roomController.js";

const router = express.Router();

router.route("/createPG/:id").post(upload.single("file"), createRoom);
router.route("/getAllRooms").get(getAllRooms);
router.route("/getUserRoom/:id").get(getUserRoom);
router.route("/getOwnerDetails/:id").get(getOwnerDetails);
router.route("/purchase/:id/:roomId").post(purchaseRoom);
export default router;
