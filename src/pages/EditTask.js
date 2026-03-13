import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function EditTask() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [task, setTask] = useState({
        title: "",
        description: "",
        deadline: "",
        status: "Pending"
    });

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const selectedTask = tasks.find(t => t.id === parseInt(id));
        if (selectedTask) setTask(selectedTask);
    }, [id]);

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.map(t =>
            t.id === parseInt(id) ? task : t
        );

        localStorage.setItem("tasks", JSON.stringify(tasks));
        navigate("/tasks");
    };

    return (
        <>
            <Navbar />
            <div className="form-container">
                <form onSubmit={handleUpdate} className="task-form">
                    <h2>Edit Task</h2>

                    <input
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="date"
                        name="deadline"
                        value={task.deadline}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="status"
                        value={task.status}
                        onChange={handleChange}
                    >
                        <option>Pending</option>
                        <option>Completed</option>
                    </select>

                    <button>Update Task</button>
                </form>
            </div>
        </>
    );
}

export default EditTask;