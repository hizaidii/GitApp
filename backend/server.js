import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import path from "path";

import "./passport/github.auth.js";

import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";
import authRoutes from "./routes/auth.route.js";

import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4445;
const __dirname = path.resolve();

app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Not required if deploying on the same domain
// const corsOptions = {
//   origin: "http://localhost:5173", // Set to your frontend application's origin
//   credentials: true, // This allows cookies and other credentials to be sent with the request
// };
// app.use(cors(corsOptions));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

// static route to start frontend when on the same domain
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  connectMongoDB();
});
