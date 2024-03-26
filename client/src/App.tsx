//@ts-nocheck
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useUserContext } from "./context/UserContext";

function App() {
  const { user } = useUserContext();
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <Routes>
        <Route path="/" element={user ? <Home/> : <Navigate  to="/login"/>} /> 
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>} /> 
        <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUp/>} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
