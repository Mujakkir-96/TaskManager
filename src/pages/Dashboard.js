import Navbar from "../components/Navbar";

function Dashboard() {
    return (
        <>
            <Navbar />
            <div style={{ padding: "40px" }}>
                <h1>Dashboard</h1>
                <p>Welcome to Student Task Manager</p>
            </div>
        </>
    );
}

export default Dashboard;