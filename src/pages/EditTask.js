import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateTask, getTasks } from "../utils/api";

function EditTask() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [task, setTask] = useState({
        id: "",
        title: "",
        description: "",
        deadline: "",
        status: "Pending"
    });

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const fetchTask = async () => {
            const tasks = await getTasks(user.id);

            const selectedTask = tasks.find(
                t => t.id === id || t.id === parseInt(id)
            );

            if (selectedTask) {
                setTask(selectedTask);
            }
        };

        fetchTask();
    }, [id]);

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        await updateTask(task);

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