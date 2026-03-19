import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import "../style.css";

function Navbar() {
    const navigate = useNavigate();
    const user = localStorage.getItem("user");

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const logout = () => {
        try {
            localStorage.removeItem("user");
            setMenuOpen(false);
            navigate("/");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    if (!user) return null;

    return (
        <div className="navbar">
            <h2>Student Manager</h2>

            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                <Link to="/tasks" onClick={() => setMenuOpen(false)}>Tasks</Link>
                <Link to="/add-task" onClick={() => setMenuOpen(false)}>Add Task</Link>
                <Link to="/assignments" onClick={() => setMenuOpen(false)}>Assignments</Link>

                <button className="theme-btn" onClick={toggleTheme}>
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                </button>

                <button onClick={logout}>Logout</button>
            </div>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
        </div>
    );
}

export default Navbar;
