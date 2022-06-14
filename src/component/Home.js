import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home({text}) {
  const navigate = useNavigate()
  return (
      <>
    <div>it is Home Component - {text}</div>
    <button onClick={() => navigate('/order_summary')}>Place order</button>
    <br/>
    <Link to="/about">Go to About</Link>
    </>
  )
}

export default Home