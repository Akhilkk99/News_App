import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'

const Main = () => {
  const[menu,setMenu]=useState("")
  const [search,setSearch]=useState("")
  return (
    <div className='grid grid-rows-2'>
        <NavBar setMenu={setMenu} setSearch={setSearch}/>
        <Home menu={menu} search={search}/>
    </div>
  )
}

export default Main