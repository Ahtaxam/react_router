import React from 'react'
import { useNavigate } from 'react-router-dom'

function Order_summary() {
  const navigate = useNavigate()
  return (
    <div>order_summary
      <button onClick={() =>navigate('/')}>GO Back</button>
    </div>
  )
}

export default Order_summary