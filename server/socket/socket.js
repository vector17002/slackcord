import { Server } from "socket.io";
import http from "http"
import express from "express";

const app = express()

const userSocketMap = {} //{userId : socketId}

const server = http.createServer(app)
const io = new Server(server, {
    cors:{
        origin: ["http://localhost:3000"],
        methods: ["GET","POST"],
    }
})

io.on("connection" , (socket) =>{
    console.log("A user is connected" , socket.id)

    const userId = socket.handshake.query.userId

    if(userId != undefined)
    userSocketMap[userId] = socket.id

    io.emit("getOnlineUsers" , Object.keys(userSocketMap))

    socket.on("disconnect" , () =>{
        console.log("A user is disconnected" , socket.id)
        delete userSocketMap[userId]
        io.emit("getOnlineUsers" , Object.keys(userSocketMap))
    })
})

export const getRecieverSocketId = (recieverId) =>{
 return userSocketMap[recieverId];
}

export {app , io , server}