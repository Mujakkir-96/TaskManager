import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, []);

    const deleteTask = (id) => {
        const updated = tasks.filter(task => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(updated));
        setTasks(updated);
    }

    return (
        <>
            <Navbar />
            <div className="task-list">
                <h2>Your Tasks</h2>

                {tasks.length === 0 && <p>No tasks added yet.</p>}

                <div className="task-grid">
                    {tasks.map(task => (
                        <div key={task.id} className="task-card">
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <small>Deadline: {task.deadline}</small>

                            <span className={`badge ${task.status === "Completed" ? "completed" : "pending"}`}>
                                {task.status}
                            </span>

                            <div className="actions">
                                <FaEdit onClick={() => navigate(`/edit/${task.id}`)} />
                                <FaTrash onClick={() => deleteTask(task.id)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default TaskList;