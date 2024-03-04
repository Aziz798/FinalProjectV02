import Header from "./Header"
import { useDrop } from "react-dnd";
import Task from "./Task";

const Section = ({ setTasks,tasks, status ,projectId}) => {
    const [{ isOver }, drop] = useDrop(() => ({   //we used "ctrl+space" to add "import { useDrag } from 'react-dnd';" on the top
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()  //we are making the react dnd state being acceptable by the props
        })
    }))

    const text = status === 'inProgress' ? "In Progress" : (status === 'closed' ? "Closed" : "Todo");
    const bg = status === 'inProgress' ? "bg-purple-500" : (status === 'closed' ? "bg-green-500" : "bg-slate-500");
    return (
        <div ref={drop} className={`w-64 ${isOver ? "bg-slate-200" : ""} rounded-md p-2`}>
            <Header text={text} bg={bg} count={tasks.length} />
            {tasks.length > 0 && tasks.map((task) => (
            <Task key={task.taskId} projectId={projectId} task={task} setTasks={setTasks} />
            ))}
        </div>
    )
}

export default Section