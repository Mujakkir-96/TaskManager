import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { getAssignments, addAssignment, deleteAssignment } from "../utils/api";

function Assignments() {
    const [assignments, setAssignments] = useState([]);
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [dueDate, setDueDate] = useState("");

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        fetchAssignments();
    }, []);

    const fetchAssignments = async () => {
        const data = await getAssignments(user.id);
        setAssignments(data);
    };

    const handleAdd = async (e) => {
        e.preventDefault();

        await addAssignment({
            user_id: user.id,
            subject,
            title,
            due_date: dueDate
        });

        setTitle("");
        setSubject("");
        setDueDate("");

        fetchAssignments(); // refresh list
    };

    const handleDelete = async (id) => {
        await deleteAssignment(id);
        fetchAssignments();
    };

    return (
        <>
            <Navbar />
            <div className="assignment-container">
                <h2>Assignment Manager</h2>

                <form onSubmit={handleAdd} className="assignment-form">
                    <input
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Assignment Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        required
                    />
                    <button>Add</button>
                </form>

                <div className="task-grid">
                    {assignments.map(a => (
                        <div key={a.id} className="task-card">
                            <h3>{a.title}</h3>
                            <p>{a.subject}</p>
                            <small>Due: {a.due_date}</small>

                            <button
                                style={{ marginTop: "10px", background: "red", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px" }}
                                onClick={() => handleDelete(a.id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Assignments;