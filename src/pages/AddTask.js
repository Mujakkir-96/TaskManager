import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

function AddTask() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    const [status, setStatus] = useState("Pending");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        const newTask = {
            id: Date.now(),
            title,
            description,
            deadline,
            status
        };

        localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));

        navigate("/tasks");
    }

    return (
        <>
            <Navbar />
            <div className="form-container">
                <form onSubmit={handleSubmit} className="task-form">
                    <h2><FaPlusCircle /> Add New Task</h2>

                    <input
                        type="text"
                        placeholder="Task Title"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        placeholder="Description"
                        required
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <input
                        type="date"
                        required
                        onChange={(e) => setDeadline(e.target.value)}
                    />

                    <select onChange={(e) => setStatus(e.target.value)}>
                        <option>Pending</option>
                        <option>Completed</option>
                    </select>

                    <button>Add Task</button>
                </form>
            </div>
        </>
    );
}

export default AddTask;