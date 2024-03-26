//@ts-nocheck
import { useState } from "react";
import toast from "react-hot-toast";
import { useUserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading , setLoading] = useState(false)

  const { setUser } = useUserContext();

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
      setLoading(true)
      const user = await fetch("/api/auth/login", {
        method: "POST",
        credentials: 'include',
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({
         username,
         password
        })
      });
      const data = await user.json()

      if(data.error)
      throw new Error("No data")
    
      localStorage.setItem("user" , JSON.stringify(data))
      setUser(data)
    } catch (error) {
      console.log(error)
      toast.error("Invalid credentials!");
    }finally{
      setLoading(false)
    }
  };
  return (
    <>
      <div className="mx-auto flex min-w-96 flex-col items-center justify-center">
        <div className="w-full rounded-lg bg-gray-800 bg-opacity-0 bg-clip-padding p-6 shadow-md backdrop-blur-lg backdrop-filter">
          <h1 className="text-center text-3xl font-semibold text-gray-300">
            Slack
            <span className="text-yellow-500"> Cord</span>
          </h1> 
          <form onSubmit={handleSubmit}>
            <div className="mt-5 flex flex-col gap-5">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter username"
                className="input input-bordered h-10 w-full"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter password"
                className="input input-bordered h-10 w-full"
              />
            </div>
            <Link
              to="/signup"
              className="mt-5 inline-block text-sm hover:text-blue-600 hover:underline text-white"
            >
              Don't have an account?
            </Link>
            <button
              type="submit"
              className="btn btn-block btn-primary btn-sm mt-4"
            >
              {loading ? <span className="laoding loading-spinner"></span> : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
