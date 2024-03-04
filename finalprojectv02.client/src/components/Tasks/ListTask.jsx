import axios from "axios";
import { useState, useEffect } from "react";
import Section from "./Section";

const ListTask = ({ projectId }) => {
    const [tasks, setTasks] = useState(null);
    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [closed, setClosed] = useState([]);
    useEffect(() => {
        async function getAllTasks() {
            try {
                const userId = localStorage.getItem("userId");
                const response = await axios.get(`http://localhost:5292/api/tache/5/${projectId}`);
                setTasks(response.data.$values);
                console.log(tasks);
            } catch (error) {
                console.log(error);
            }
        }
        getAllTasks();
    }, []);
    // useEffect(() => {
    //     if (Array.isArray(tasks)) {
    //         const fTodos = tasks.filter((task) => task.status.statusName === "todo");
    //         const fInProgress = tasks.filter((task) => task.status.statusName === "inProgress");
    //         const fClosed = tasks.filter((task) => task.status.statusName === "closed");
    //         setTodos(fTodos);
    //         setInProgress(fInProgress);
    //         setClosed(fClosed);
    //     }
    // }, [tasks]);
    return (
        <div className='flex gap-16'>
            {/* <Section status="todo" tasks={todos} setTasks={setTasks} projectId={projectId} />
            <Section status="inProgress" tasks={inProgress} setTasks={setTasks} projectId={projectId}/>
            <Section status="closed" tasks={closed} setTasks={setTasks} projectId={projectId}/> */}
        </div>
    )
}

export default ListTask