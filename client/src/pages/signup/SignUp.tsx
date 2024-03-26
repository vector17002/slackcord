import { useState } from "react";
import Gender from "./Gender";
import userSignup from "../../hooks/userSignup";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    nickname: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: ""
  })
  
  const {loading , signUp} = userSignup();

  const handleCheckBox = (gender : string) => {
    setInputs({ ...inputs, gender});
  }
  const handleSubmit = async (e: any)  =>{
    e.preventDefault();
    await signUp(inputs);
  }
  return (
    <>
      <div className="mx-auto flex min-w-96 flex-col items-center justify-center">
        <div className="w-full rounded-lg bg-gray-800 bg-opacity-0 bg-clip-padding p-6 shadow-md backdrop-blur-lg backdrop-filter">
          <h1 className="text-center text-3xl font-semibold text-gray-300">
            Signup to
            <span className="text-yellow-500"> Slack Cord</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-5 flex flex-col gap-5">
              <input
                value={inputs.nickname}
                type="text"
                placeholder="Enter your name"
                className="input input-bordered h-10 w-full"
                onChange={(e) => setInputs({ ...inputs, nickname: e.target.value })}
              />
              <input
                value={inputs.username}
                type="text"
                placeholder="Create username"
                className="input input-bordered h-10 w-full" onChange={(e) => setInputs({ ...inputs, username: e.target.value })}

              />
              <input
                value={inputs.password}
                type="password"
                placeholder="Create password"
                className="input input-bordered h-10 w-full" onChange={(e) => setInputs({ ...inputs, password: e.target.value })}

              />
              <input
                value={inputs.confirmpassword}
                type="text"
                placeholder="Confirm Password"
                className="input input-bordered h-10 w-full" onChange={(e) => setInputs({ ...inputs, confirmpassword: e.target.value })}

              />
              <Gender onCheckboxChange={handleCheckBox} selectedGender={inputs.gender} />
            </div>
            <Link
              to="/login"
              className="mt-5 inline-block text-sm hover:text-blue-600 hover:underline text-white"
            >
              Already have an account?
            </Link>
            <button
              type="submit"
              className="btn btn-block btn-primary btn-sm mt-4"
            >
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
