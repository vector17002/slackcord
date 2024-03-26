import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useGetConversation = () =>{
const [loading , setLoading] = useState(false)
const [conversations , setConversations] = useState([])
useEffect(()=>{
    const getConversation =  async () =>{
        try {
            setLoading(true)
            const res = await fetch("http://localhost:3000/api/users/" , {
                credentials: 'include'
            })
            
            const data = await res.json()
            if(data.error)
            toast.error("Error loading conversations")
    
            setConversations(data)
        } catch (error) {
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