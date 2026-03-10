import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const user = localStorage.getItem("user");

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    if (!user) return null;

    return (
        <div className="navbar">
            <h2>Student Manager</h2>
            <div>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/tasks">Tasks</Link>
                <Link to="/add-task">Add Task</Link>
                <Link to="/assignments">Assignments</Link>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
}

export default Navbar;