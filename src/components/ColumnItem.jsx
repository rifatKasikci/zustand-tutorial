import { useTasksStore } from "../stores/tasks"

const ColumnItem = ({task}) => {
    
    const setDraggedTask = useTasksStore((state)=>state.setDraggedTask)
    const deleteTask = useTasksStore((state)=>state.removeTask)

    return (
        <>
        <div className="flex justify-between mt-2" draggable onDragStart={(e)=>{setDraggedTask(task.title)}}>
            <h1>{task.title}</h1>
            <button onClick={()=>{deleteTask(task)}} className="bg-red-600 text-white rounded-sm p-1">Remove</button>
        </div>
        </>
    )
}

export default ColumnItem