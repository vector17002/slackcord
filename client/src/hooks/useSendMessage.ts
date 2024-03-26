//@ts-nocheck
import { useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast"

const useSendMessage = () => {
  const [loading , setLoading] = useState(false)
  const {messages , setMessages , selectedConversation} = useConversation()

  const sendMessage = async (message : any)=>{
    try {
        setLoading(true);
        const res = await fetch(`http://localhost:3000/api/messages/send/${selectedConversation._id}`, {
            method: "POST",
            credentials: 'include',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({message})
        })
        const data = await res.json()
        setMessages([...messages,data])
    } catch (error) {
        console.log(error)
        toast.error("Error sending message")
    }finally{
        setLoading(false)
    }
  }

  return {loading , sendMessage};
}

export default useSendMessage