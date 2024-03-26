import express from "express";
import dotenv from "dotenv";
import dbConnect from "./DB/dbconnect.js";
import authRoute from "./routes/authRoute.js";
import messageRoute from "./routes/messageRoute.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
import cookies from "cookie-parser"
import { app , server} from "./socket/socket.js"


dotenv.config();
const PORT = process.env.PORT || 3000;

//MIDDLEWARES
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))
app.use(express.json()); //HELPS IN PARSING THE INCOMING REQUEST FROM JSON PAYLOADS(from req.body())
app.use(cookies()); //HELPS ACCESING COOKIES TO GET CURRENT USER INFO

// app.get("/", (req, res) => {
//   res.send("Hello there from server");
// });

//AUTH ROUTE
app.use("/api/auth", authRoute);

//MESSAGES ROUTE
app.use("/api/messages", messageRoute);

//USER ROUTES
app.use("/api/users", userRoute);

server.listen(PORT, () => {
  dbConnect();
  console.log(`Server running at port ${PORT}`);
});
