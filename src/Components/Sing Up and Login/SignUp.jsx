import { useState } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const { signup } = useAuth();
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

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
        const { name, email, password } = formData;
        const success = signup(name, email, password);
        if (success) {
            toast.success('Congratulation! signup Successful ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            setFormData({ name: "", email: "", password: "" });
            navigateToRoot('/')

        } else {
            toast.error('User already exists. Please choose a different email.', {
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
                    <legend className="text-2xl font-semibold mb-4">Signup</legend>

                    <label className="block mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full mb-4 p-2 border border-base-300 rounded"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

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
                        Signup
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default Signup;
