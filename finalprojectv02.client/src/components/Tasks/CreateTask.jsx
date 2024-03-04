import axios from 'axios';
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';




const CreateTask = ({ projectId }) => {
    const [task, setTask] = useState({
        TaskDescription: "",
        StatusId: 1,  //can be in progress or closed
        ProjectId: projectId,
        TacheUserId: localStorage.getItem("userId"),
        StartDate: undefined,
        EndDate:undefined,
    });
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const response = await axios.post("http://localhost:5292/api/tache", task);
            console.log(response)

        } catch (error) {
            Object.entries(error.response.data.errors).forEach(function([_,validationError]){
            for(let i =0;i<=validationError.length;i++){
                if(validationError[i]!==undefined && isNaN(validationError[i])){
                    toast.error(validationError[i])
                }
            }
            })
        }
    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-row gap-3'>
            <input type="text"
                className='input input-bordered input-primary w-full max-w-xs'
                placeholder='Task Description'
                onChange={(e) => setTask({ ...task, TaskDescription: e.target.value })}
                value={task.TaskDescription}
            />
            <input type="date"
                className='input input-bordered input-primary w-full max-w-xs'
                onChange={(e) => setTask({ ...task, StartDate: e.target.value })}
                value={task.StartDate}
            />
            <input type="date"
                className='input input-bordered input-primary w-full max-w-xs'
                onChange={(e) => setTask({ ...task, EndDate: e.target.value })}
                value={task.EndDate}
            />

            <button className='btn btn-outline btn-accent'>Create</button>
        </form>
    )
}

export default CreateTask