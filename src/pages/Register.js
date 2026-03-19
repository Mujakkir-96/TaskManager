import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../utils/api";

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