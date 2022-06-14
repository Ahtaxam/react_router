import React from 'react'
import { useParams } from 'react-router-dom'

function Userabout() {
    const params = useParams();
    const userId = params.UserId;
  return (
    <div>About user {userId} </div>
  )
}

export default Userabout