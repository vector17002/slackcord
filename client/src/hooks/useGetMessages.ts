//@ts-nocheck
import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {   
    const [loading ,setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();
    useEffect(()=>{
        const getMessages = async () =>{
            try {
                setLoading(true)
                const res = await fetch(`/api/messages/${selectedConversation._id}`,
                {
                    credentials: 'include'
                })
                const data = await res.json();
                setMessages(data)
            } catch (error) {
                toast.error("Error getting messages")
            }finally{
                setLoading(false)
            }
        }
        if(selectedConversation?._id)
        getMessages()
    },[selectedConversation?._id , setMessages])
    return {messages , loading}
}
export default useGetMessages