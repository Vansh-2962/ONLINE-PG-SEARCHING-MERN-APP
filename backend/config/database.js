import mongoose from "mongoose";

const dbConnect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/pg_database")
    .then(() => {
      console.log("Successfully connected to database!😃");
    })
    .catch(() => {
      console.log("Database connection Failed!😔");
    });
};

export default dbConnect;
