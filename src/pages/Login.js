import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { loginUser } from "../utils/api";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await loginUser({ email, password });

        if (res.status === "success") {
            localStorage.setItem("user", JSON.stringify(res.user));
            navigate("/dashboard");
        } else {
            setError(res.message);
        }
    };

    return (
        <>
            <Navbar />

            <div className="login-wrapper">
                <form onSubmit={handleLogin} className="login-card">
                    <h2>Welcome Back 👋</h2>
                    <p className="subtitle">Login to your account</p>

                    {error && <p className="error">{error}</p>}

                    <div className="input-group">
                        <FaEnvelope className="icon" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <FaLock className="icon" />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button className="login-btn">Login</button>

                    <p className="link-text">
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </form>
            </div>
        </>
    );
}

export default Login;