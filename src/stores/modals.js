import { create } from "zustand"

const modalsStore = (set) => ({
    addTaskModalOpen : false,
    toggleAddTaskModal : () => set(state => ({ addTaskModalOpen: !state.addTaskModalOpen })),
    addTaskModalData : {},
    addTaskModalType: "",
    setAddTaskModalType : (statusType) => set(state => ({ addTaskModalType: statusType })),
})

export const useModalsStore = create(modalsStore)