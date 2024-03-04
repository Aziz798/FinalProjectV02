import React from 'react'
import { useParams } from 'react-router-dom'

const CreateProject = () => {
    const{id} = useParams();
    console.log(id);
  return (
    <div>CreateProject</div>
  )
}

export default CreateProject