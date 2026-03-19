const BASE_URL = "http://localhost/student-manager-api";

export const registerUser = async (data) => {
    const res = await fetch(`${BASE_URL}/auth/register.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const loginUser = async (data) => {
    const res = await fetch(`${BASE_URL}/auth/login.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const getTasks = async (user_id) => {
    const res = await fetch(`${BASE_URL}/tasks/read.php?user_id=${user_id}`);
    return res.json();
};

export const addTask = async (data) => {
    const res = await fetch(`${BASE_URL}/tasks/create.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const updateTask = async (data) => {
    const res = await fetch(`${BASE_URL}/tasks/update.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const deleteTask = async (id) => {
    const res = await fetch(`${BASE_URL}/tasks/delete.php?id=${id}`);
    return res.json();
};
export const getAssignments = async (user_id) => {
    const res = await fetch(`${BASE_URL}/assignments/read.php?user_id=${user_id}`);
    return res.json();
};

export const addAssignment = async (data) => {
    const res = await fetch(`${BASE_URL}/assignments/create.php`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const deleteAssignment = async (id) => {
    const res = await fetch(`${BASE_URL}/assignments/delete.php?id=${id}`);
    return res.json();
};
export const getTaskById = async (user_id) => {
    const res = await fetch(`${BASE_URL}/tasks/read.php?user_id=${user_id}`);
    return res.json();
};