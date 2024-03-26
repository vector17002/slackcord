//@ts-nocheck
import { useState } from "react"
import toast from "react-hot-toast"
import { useUserContext } from "../context/UserContext"

const useLogout = () =>{
  const [loading , setLoading] = useState(false)
  const { setUser} = useUserContext();
  const logout = async () =>{
    try {
        setLoading(true)
        const res = await fetch("http://localhost:3000/api/auth/logout" , {
            method: "GET",
            headers: {"Content-Type" : "application/json"}
        })
        localStorage.removeItem("user")
        setUser(null)
    } catch (error) {
        console.log(error)
        toast.error("Somthing went wrong")
    }finally{
        setLoading(true)
    }
  }

  return {loading , logout}
}
export default useLogout
