import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
dotenv.config();

const app = express();

//middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.static("uploads"));
app.use(bodyParser.json());

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/room", roomRoutes);

app.listen(process.env.PORT, () => {
  dbConnect();
  console.log("Server running at port " + process.env.PORT + "😎");
});
