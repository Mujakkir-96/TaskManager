import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";


function Navbar() {
    const navigate = useNavigate();
    const user = localStorage.getItem("user");
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    if (!user) return null;

    return (
        <div className="navbar">
            <h2>Student Manager</h2>
            <div className="items">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/tasks">Tasks</Link>
                <Link to="/add-task">Add Task</Link>
                <Link to="/assignments">Assignments</Link>

                <div>

                    <button className="theme-btn" onClick={toggleTheme}>
                        {theme === "light" ? <FaMoon /> : <FaSun />}
                    </button>

                    <button onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;