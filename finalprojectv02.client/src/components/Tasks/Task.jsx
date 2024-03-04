import axios from "axios";
import { useDrag } from "react-dnd";
import toast from "react-hot-toast";
const Task = ({ task, setTasks,projectId }) => {
    const [{ isDragging }, drag] = useDrag(() => ({   //we used "ctrl+space" to add "import { useDrag } from 'react-dnd';" on the top
        type: "task",
        item: { id: task.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()  //we are making the react dnd state being acceptable by the props
        })
    }))

    console.log(isDragging)


    const handleRemove =  (id) => {
        axios.delete("http://localhost:5292/api/tache/"+id)
        .then((res)=>{
            axios.get(`http://localhost:5292/api/tache/${localStorage.getItem("userId")}/${projectId}`)
            .then(res=>setTasks(res.data.$values))
            .catch(err=>console.log(err));
            toast("Task has been removed",{icon:"⛔"});
        })
        .catch(err=>console.log(err));
    };

    return (
        <div ref={drag} className={`flex items-center mt-8 p-4 rounded-md text-sm ${isDragging ? "opacity-25" : "opacity-100"} text-black bg-slate-600 relative cursor-grab`}>
            <p>{task.name}</p>
            <button className='absolute bottom-1 right-1 text-slate-400' onClick={() => handleRemove(task.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
        </div>
    );
};
export default Task;