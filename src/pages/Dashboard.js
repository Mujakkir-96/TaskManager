import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [assignments, setAssignments] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const storedAssignments =
            JSON.parse(localStorage.getItem("assignments")) || [];

        setTasks(storedTasks);
        setAssignments(storedAssignments);
    }, []);

    const completed = tasks.filter(t => t.status === "Completed").length;
    const pending = tasks.filter(t => t.status === "Pending").length;

    return (
        <>
            <Navbar />
            <div className="dashboard">
                <h1>Welcome, {user?.name} 👋</h1>

                <div className="cards">
                    <div className="card">
                        <h3>Total Tasks</h3>
                        <p>{tasks.length}</p>
                    </div>

                    <div className="card">
                        <h3>Completed Tasks</h3>
                        <p>{completed}</p>
                    </div>

                    <div className="card">
                        <h3>Pending Tasks</h3>
                        <p>{pending}</p>
                    </div>

                    <div className="card">
                        <h3>Total Assignments</h3>
                        <p>{assignments.length}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;