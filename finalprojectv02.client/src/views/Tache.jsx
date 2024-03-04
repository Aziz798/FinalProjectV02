import React from 'react'
import { useParams } from 'react-router-dom'
import CreateTask from '../components/Tasks/CreateTask';
import ListTask from '../components/Tasks/ListTask';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Tache = () => {
  const { projectId } = useParams();
  return (
    <DndProvider backend={HTML5Backend}>
    <div className='bg-slate-100 w-screen h-screen flex flex-col items-center p-4 gap-16 pt-32'>
      <Toaster/>
      {/* <CreateTask projectId={projectId}/> */}
      <ListTask projectId={projectId}/>
    </div>
  </DndProvider>
  )
}

export default Tache