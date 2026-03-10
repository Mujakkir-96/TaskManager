import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddTask from "./pages/AddTask";
import TaskList from "./pages/TaskList";
import EditTask from "./pages/EditTask";
import Assignments from "./pages/Assignments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/edit/:id" element={<EditTask />} />
        <Route path="/assignments" element={<Assignments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;