import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

function Assignments() {
    const [assignments, setAssignments] = useState([]);
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [dueDate, setDueDate] = useState("");

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("assignments")) || [];
        setAssignments(stored);
    }, []);

    const addAssignment = (e) => {
        e.preventDefault();

        const newAssignment = {
            id: Date.now(),
            title,
            subject,
            dueDate
        };

        const updated = [...assignments, newAssignment];
        localStorage.setItem("assignments", JSON.stringify(updated));
        setAssignments(updated);

        setTitle("");
        setSubject("");
        setDueDate("");
    };

    return (
        <>
            <Navbar />
            <div className="assignment-container">
                <h2>Assignment Manager</h2>

                <form onSubmit={addAssignment} className="assignment-form">
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
                            <small>Due: {a.dueDate}</small>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Assignments;