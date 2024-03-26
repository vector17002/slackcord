//@ts-nocheck
import { useEffect } from "react"
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation"
import notification from "/sound.mp3"
import { useUserContext } from "../context/UserContext"
import toast from "react-hot-toast"
import useGetConversation from "./fetchConversation"
const getNewMessages = () => {
const {user} = useUserContext()
 const { socket } = useSocketContext();
 const {messages, setMessages , selectedConversation } = useConversation();
 const { conversations} = useGetConversation()

 useEffect(() =>{
    socket?.on("newMessage", (newMessage: any) => {
        if(newMessage.recieverId === user._id){
        if(newMessage.senderId === selectedConversation._id){
        setMessages([...messages,newMessage])
        }
        const sound = new Audio(notification)
        sound.play();
        const senderName = conversations.filter((conversation) => {
            return conversation._id === newMessage.senderId
        })
        toast.success(`Recieved message from ${senderName[0].nickname}`) 
        }
    })
    return () => socket?.off("newMessage")
 },[socket, setMessages,messages])
}
export default getNewMessages