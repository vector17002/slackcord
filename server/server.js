import path from "path"
import express from "express";
import dotenv from "dotenv";
import dbConnect from "./DB/dbconnect.js";
import authRoute from "./routes/authRoute.js";
import messageRoute from "./routes/messageRoute.js";
import userRoute from "./routes/userRoute.js";
import cookies from "cookie-parser"
import { app , server} from "./socket/socket.js"
import { CronJob } from 'cron'


dotenv.config();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve()

//MIDDLEWARES
app.use(express.json()); //HELPS IN PARSING THE INCOMING REQUEST FROM JSON PAYLOADS(from req.body())
app.use(cookies()); //HELPS ACCESING COOKIES TO GET CURRENT USER INFO
// app.use(cors({
//   origin:["http://localhost:3000"],
//   credentials:true
// }))

export async function setApplicationRunning(){
  //console.log('temp');
}

const stopRenderSpinDown = new CronJob('* * * * *' , setApplicationRunning , null , true , 'UTC' )
stopRenderSpinDown.start()

//AUTH ROUTE
app.use("/api/auth", authRoute);

//MESSAGES ROUTE
app.use("/api/messages", messageRoute);

//USER ROUTES
app.use("/api/users", userRoute);


app.use(express.static(path.join(__dirname , "/client/dist")));

app.get("*" , (req,res) => {
  res.sendFile(path.join(__dirname ,"client" , "dist" , "index.html"))
})

server.listen(PORT, () => {
  dbConnect();
  console.log(`Server running at port ${PORT}`);
});
