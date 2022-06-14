import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function Users() {
    const [searchParams , setParams] = useSearchParams();
    const getParams = searchParams.get('search');
    console.log(getParams);
  return (
      <>
    <div>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>

        <button onClick={() =>setParams({search:"filter"})}>Show filter user</button>
        <button onClick={() => setParams({})}>Remove filter</button>

    </div>
    <Outlet/>

    <div>
        {
            getParams ? <h1>Showing filter users</h1>:<h2>Showing all users</h2>
        }
    </div>
    </>
    
  )
}

export default Users