import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// Routes import
import userRouter from "../src/routes/user.route.js";
import companyRouter from "./routes/company.route.js";
import jobRouter from "./routes/job.route.js";
import feedbackRouter from "./routes/feedback.route.js";

// Secured routes
app.use("/api/v1/users", userRouter);
app.use("/api/v2/companies", companyRouter);
app.use("/api/v3/companies/job", jobRouter);
app.use("/api/v4/feedback", feedbackRouter);
export { app };
