import React from 'react'
import { useParams } from 'react-router-dom'
import CreateTask from '../components/CreateTask';

const Tache = () => {
    const {projectId}=useParams(); 
  return (
    <CreateTask projectId={projectId}/>
  )
}

export default Tache