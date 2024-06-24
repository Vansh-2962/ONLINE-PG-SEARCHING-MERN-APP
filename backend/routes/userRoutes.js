import express from "express";
import {
  login,
  signup,
  logout,
  getUser,
  editProfile,
  upload,
} from "../controllers/userController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/getUser/:id").get(getUser);
router.route("/editProfile/:id").put(upload.single("file"), editProfile);

export default router;
