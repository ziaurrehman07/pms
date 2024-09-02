import dotenv from "dotenv";
import { app } from "../src/app.js";
import connectDB from "../src/DB/index.js";
import { task } from "./utils/emailSender.util.js";
import cron from "node-cron";
import cors from "cors";

dotenv.config({
  path: "../.env",
});

app.use(
  cors({
    origin: "https://pms-s6t8.onrender.com",
    Credential: true,
    methods: "GET,POST,PUT,DELETE", // Allowed HTTP methods
  })
);
const port = process.env.PORT || 3000;
console.log(port);

connectDB()
  .then(
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    })
  )
  .catch((error) => {
    console.log("MongoDB connection failed !!! ", error);
  });

cron.schedule("0 12 * * *", task);
