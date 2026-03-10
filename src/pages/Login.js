import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem("registeredUser"));

        if (!user || user.email !== email || user.password !== password) {
            setError("Invalid email or password");
            return;
        }

        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
    }

    return (
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
    );
}

export default Login;