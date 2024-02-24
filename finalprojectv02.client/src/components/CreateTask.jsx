import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify';
import toast from 'react-hot-toast';



const CreateTask = ({projectId}) => {
    const [task, setTask] = useState({
        TaskDescription:"",
        StatusId:"",  //can be in progress or closed
        ProjectId:  projectId ,
        TacheUserId: localStorage.getItem("userId"),
        StartDate: "",
        EndDate:""
    });

    const [validationError, setValidationError]=useState({
        TaskDescription:null,
        StatusId:null,  //can be in progress or closed
        StartDate:null,
        EndDate:null
    });

    const [status, setStatus]=useState(null);
    useEffect(()=>{
        async function getStatuses(){
            try {
                const response = await axios.get("http://localhost:5292/api/tache/status")
                setStatus(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getStatuses();
    },[projectId])

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5292/api/tache", task);
            console.log(response)
        } catch (error) {
            setValidationError(error.response.data.Errors)
        }

        toast.success("🎊 Task Created 🎊")
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text"
        className='border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1' 
        onChange={(e)=>setTask({...task, TaskDescription:e.target.value})}
        value={task.TaskDescription}
        />
        <input type="date"
        className='border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1' 
        onChange={(e)=>setTask({...task, StartDate:e.target.value})}
        value={task.StartDate}
        />
        <input type="date"
        className='border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1' 
        onChange={(e)=>setTask({...task, EndDate:e.target.value})}
        value={task.EndDate}
        />

        <button className='bg-cyan-500 rounded-md px-4 h-12 text-white'>Create</button>
    </form>
  )
}

export default CreateTask