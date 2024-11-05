import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="w-[50%] h-[40%] bg-slate-100  flex items-center p-10 justify-center flex-col gap-5 rounded-lg shadow-lg">
        <input
          type="email"
          className="p-4 text-2xl border-none outline-none w-full placeholder:text-gray-500 text-gray-900"
          placeholder="Email"
        />
        <input
          type="text"
          className="p-4 text-2xl border-none outline-none w-full placeholder:text-gray-500 text-gray-900"
          placeholder="Password"
        />
        <button className="p-4 border-none outline-none w-full bg-red-500 text-white text-2xl active:bg-red-400 ">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
