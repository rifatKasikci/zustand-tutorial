import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const tasksStore = (set) => ({
    tasks: [],
    draggedTask: null,
    setDraggedTask: (title) => set(() => ({ draggedTask: title })),
    moveTask: (title, statusType) => set((store) => ({ tasks: store.tasks.map((task) => task.title === title ? { ...task, statusType: statusType } : task) })),
    addTask: (task) => set(state => ({ tasks: [...state.tasks, task] })),
    removeTask: (task) => set(state => ({ tasks: state.tasks.filter(task => task !== task) })),
})


const log = (config) => (set, get, api) => config(
    (...args)=>{
        console.log(args)
        set(...args)
    },
    get,
    api
)

export const useTasksStore = create(log(persist(devtools(tasksStore),{name: 'tasks'})))