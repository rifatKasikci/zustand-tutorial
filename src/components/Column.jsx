import { StatusTypes } from "../../consts/StatusTypes"
import AddTaskModal from "../modals/AddTaskModal"
import { useModalsStore } from "../stores/modals"
import { useTasksStore } from "../stores/tasks"
import ColumnItem from "./ColumnItem"

export default function Column({title, statusType}){
    
    const tasks = useTasksStore((state)=>state.tasks.filter((task)=>task.statusType === statusType))
    const toggleAddTaskModal = useModalsStore((state)=>state.toggleAddTaskModal)
    const setAddTaskModalType = useModalsStore((state)=>state.setAddTaskModalType)
    const setDraggedTask = useTasksStore((state)=>state.setDraggedTask)
    const draggedTask = useTasksStore((state)=>state.draggedTask)
    const moveTask = useTasksStore((state)=>state.moveTask)


    const handleAddClick = () => {
        setAddTaskModalType(statusType)
        toggleAddTaskModal()
    }
    
    return (
        <>
        <div className="flex-col items-center justify-center w-full h-full ml-5 border p-3"
        onDragOver={(e)=>{e.preventDefault()}}
        onDrop={(e)=>{
            moveTask(draggedTask, statusType)
            setDraggedTask(null)
        }}
        >
            <div className="border-b flex justify-between border-indigo-500 pb-2">
                <h1 className="text-4xl font-semibold">{title}</h1>
                <button className="text-4xl font-semibold" onClick={handleAddClick}>+</button>
            </div>
            <div className="flex flex-col gap-y-5 mt-5">
                {
                    tasks.map((task, index) => {
                        return (
                            <ColumnItem task={task} key={index}/>
                        )
                    })
                }
            </div>
        </div>
        <AddTaskModal/>
        </>
    )
}
