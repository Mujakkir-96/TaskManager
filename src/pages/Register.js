import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../utils/api";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const res = await registerUser({ name, email, password });

        if (res.status === "success") {
            alert("Registration successful");
            navigate("/");
        } else {
            alert(res.message);
        }
    };

    return (
        <div className="login-wrapper">
            <form onSubmit={handleRegister} className="login-card">
                <h2>Create Account 🚀</h2>
                <p className="subtitle">Join the system</p>

                <div className="input-group">
                    <FaUser className="icon" />
                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <FaEnvelope className="icon" />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <FaLock className="icon" />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className="login-btn">Register</button>

                <p className="link-text">
                    Already have an account? <Link to="/">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Register;