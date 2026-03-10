import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const user = { name, email, password };
        localStorage.setItem("registeredUser", JSON.stringify(user));

        alert("Registration successful");
        navigate("/");
    }

    return (
        <div className="auth-container">
            <form onSubmit={handleRegister} className="auth-box">
                <h2>Register</h2>

                <input type="text" placeholder="Full Name" required onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />

                <button>Register</button>

                <p>Already have account? <Link to="/">Login</Link></p>
            </form>
        </div>
    );
}

export default Register;