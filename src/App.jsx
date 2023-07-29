import './App.css'
import { useTasksStore } from './stores/tasks'
import AddTaskModal from './modals/AddTaskModal'
import { useModalsStore } from './stores/modals'
import Column from './components/Column'
import { StatusTypes } from '../consts/StatusTypes'

function App() {

  return (
    <>
      <div className="flex justify-start items-start p-10 w-full h-full">
        <Column statusType={StatusTypes.TODO} title='Todo'/>
        <Column statusType={StatusTypes.INPROGRESS} title='In Progress'/>
        <Column statusType={StatusTypes.COMPLETED} title='Completed'/>
      </div>
    </>
  )
}

export default App