//@ts-nocheck
import { useState } from "react"
import toast from "react-hot-toast";
import { useUserContext } from "../context/UserContext";

interface userSignupProps{
    nickname: String,
    username : String,
    password : String,
    confirmpassword : String,
    gender : string
}

const userSignup = () => {
    const [loading , setLoading] = useState(false);
    const { setUser }  = useUserContext();

    const signUp = async({username , nickname , password , confirmpassword , gender} : userSignupProps) =>{
        const success = handleInputErrors({username , nickname , password , confirmpassword , gender});

        if(!success)
        return;
        try {
            setLoading(true)
            const res = await fetch("http://localhost:3000/api/auth/signup" , {
                method: "POST",
                credentials : 'include',
                headers: {"Content-type" : "application/json"},
                body: JSON.stringify({
                    nickname,
                    username,
                    password,
                    confirmpassword,
                    gender
                })
            })

            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }

            setUser(JSON.stringify(data))
            localStorage.setItem("user" , JSON.stringify(data));
            
        } catch(error){
            toast.error("Something went Wrong");
        }finally{
            setLoading(false)
        }
    }

    return {loading,signUp}
}
export default userSignup;

function handleInputErrors({username , nickname , password , confirmpassword , gender} : userSignupProps){
   if(!username || !nickname || !password || !confirmpassword || !gender){
   toast.error("Please fill in all the fields")
return false;
}

if(password !== confirmpassword){
    toast.error("Password do not match")
    return false;
}

if(password.length < 6){
    toast.error("Password must have atleast 6 characters")
    return false
}

return true
}