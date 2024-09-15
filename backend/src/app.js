import cookieParser from "cookie-parser";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

// Routes import
import userRouter from "../src/routes/user.route.js";
import companyRouter from "./routes/company.route.js";
import jobRouter from "./routes/job.route.js";
import feedbackRouter from "./routes/feedback.route.js";
import masterAdminrouter from "./routes/masterAdmin.route.js"

// Secured routes
app.use("/api/v1/users", userRouter);
app.use("/api/v2/companies", companyRouter);
app.use("/api/v3/companies/job", jobRouter);
app.use("/api/v4/feedback", feedbackRouter);

//admin secured routes
app.use("/api/v0/master-admin", masterAdminrouter)
export { app };
