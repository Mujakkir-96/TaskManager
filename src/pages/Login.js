import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { loginUser } from "../utils/api";

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
            <div className="auth-container">
                <form onSubmit={handleLogin} className="auth-box">
                    <h2>Login</h2>

                    {error && <p className="error">{error}</p>}

                    <input
                        type="email"
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button>Login</button>

                    <p>Don't have account? <Link to="/register">Register</Link></p>
                </form>
            </div>
        </>
    );
}

export default Login;