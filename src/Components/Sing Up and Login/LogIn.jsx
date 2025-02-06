import { useState } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigateToRoot = useNavigate();  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const success = login(email, password);
    if (success) {
        toast.success('Login Successful!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      // Redirect to root
      navigateToRoot('/')  

    } else {
      toast.error('Invalid email or password. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4">
        <fieldset className="bg-base-200 border border-black p-4 rounded-box">
          <legend className="text-2xl font-semibold mb-4">Login</legend>

          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full mb-4 p-2 border border-base-300 rounded"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            className="w-full mb-4 p-2 border border-base-300 rounded"
            placeholder="Enter your password"
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
