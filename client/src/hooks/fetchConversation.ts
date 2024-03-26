import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useGetConversation = () =>{
const [loading , setLoading] = useState(false)
const [conversations , setConversations] = useState([])
useEffect(()=>{
    const getConversation =  async () =>{
        try {
            setLoading(true)
            const res = await fetch("/api/users/" , {
                credentials: 'include'
            })
            
            const data = await res.json()
            if(data.error)
            toast.error("Error loading conversations")

            setConversations(data)
        } catch (error) {
            console.log(error)
            toast.error("Error at obtaining conversations")
        }finally{
            setLoading(false)
        }
    }
    getConversation()
},[])
return {loading , conversations}
}
export default useGetConversation