import { useState } from "react"
import { useModalsStore } from "../stores/modals"
import { useTasksStore } from "../stores/tasks"
import { StatusTypes } from "../../consts/StatusTypes"

function AddTaskModal()  {

    const [task, setTask] = useState('')
    
    const isOpen = useModalsStore((state)=>state.addTaskModalOpen)
    const addTask = useTasksStore((state)=>state.addTask)
    const toggleAddTaskModal = useModalsStore((state)=>state.toggleAddTaskModal)
    const addTaskModalType = useModalsStore((state)=>state.addTaskModalType)

    const handleAddTask = () => {
        const newTask = {
            title: task,
            completed: false,
            statusType: addTaskModalType
        }
        console.log(newTask)
        addTask(newTask)
        setTask('')
        toggleAddTaskModal()
    }

    return (
        <>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 p-5 border-gray-300 rounded-lg flex flex-col gap-y-5 items-center' style={{
            display: isOpen ? '' : 'none',
        }}>
            <h1>Add To Do</h1>
            <input onChange={(e)=>{setTask(e.target.value)}} value={task} type="text" placeholder="Title" />
            <button className="border w-full bg-white rounded-sm" onClick={handleAddTask}>Add</button>
            <button className="border w-full bg-white rounded-sm" onClick={toggleAddTaskModal}>Cancel</button>
        </div>
        </>
    )
}
export default AddTaskModal