import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div
      className="bg-no-repeat bg-cover h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: `url('/assets/matrixCodeGreen.gif')` }}
    >
      <form className="bg-black p-6 space-y-4 rounded-md border border-red-600 text-green-500 text-xl font-mono">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-black border-b border-red-600 p-2 text-green-400 focus:outline-none focus:border-green-500"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-black border-b border-red-600 p-2 text-green-400 focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="flex items-end place-content-between">
          <a href="./">Back</a>
          <button
            type="button"
            onClick={handleLogin}
            className="bg-red-600 text-black font-mono p-2 rounded-md hover:bg-red-400 focus:outline-none"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
