import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === formData.username && user.password === formData.password
    );
    if (user) {
      alert("Login successful!");
      // You can redirect the user to the products page or another protected route here
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4">
        <fieldset className="bg-base-200 border border-black p-4 rounded-box">
          <legend className="text-2xl font-semibold mb-4">Login</legend>

          <label className="block mb-2">Username</label>
          <input
            type="text"
            name="username"
            className="w-full mb-4 p-2 border border-base-300 rounded"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            className="w-full mb-4 p-2 border border-base-300 rounded"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="w-full p-2 bg-custom-primary text-white rounded hover:bg-custom-primary-dark">
            Login
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
