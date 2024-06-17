import React from 'react'
import logo from '../../images/newslogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase/setup'
import { signOut } from 'firebase/auth'
const NavBar = (props) => {
        const navigate = useNavigate()

    const logout= async ()=>{
        try {
            await signOut(auth)
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }


  return (
   <div className='grid grid-cols-3 bg-black text-white fixed'>
    <div className='flex p-2'>
    <img src={logo} alt="" className='h-12' />
{ auth.currentUser ? <button onClick={logout} className='text-white hover:border border-white-600 p-3 ml-10 '>
    Log out
    </button>:
    <Link to="/login">
        <button className='text-white hover:border border-white-600 p-3 w-48'>
            
        <i class="fa-solid fa-user"></i> Sign in</button>
 </Link>}

    </div>

    <div className='flex'>
    <button onClick={()=>props.setMenu("All")} className=' font-semibold text-sm'>
        Home
    </button>
    <button onClick={()=>props.setMenu("Science")} className='ml-7 font-semibold text-sm'>
        Science
    </button>
    <button onClick={()=>props.setMenu("Movies")} className='ml-7 font-semibold text-sm'>
        Movies
    </button>
    <button onClick={()=>props.setMenu("Food")} className='ml-7 font-semibold text-sm'>
       Food
    </button>
    <button onClick={()=>props.setMenu("Travel")} className='ml-7 font-semibold text-sm'>
        Travel
    </button>
    <button onClick={()=>props.setMenu("Worklife")} className='ml-7 font-semibold text-sm'>
       Worklife
    </button>
    <button onClick={()=>props.setMenu("Future")} className='ml-7 font-semibold text-sm'>
        Future
    </button>
    <button onClick={()=>props.setMenu("Culture")} className='ml-7 font-semibold text-sm'>
        Culture
    </button>
    </div>
    <div className='flex items-center ml-40 p-4'>
    <i class="fa-brands fa-searchengin mt-1" ></i>
    <input onChange={(e)=>props.setSearch(e.target.value)} className='items-center ml-3 flex bg-black ' placeholder='Search'/>
    </div>
   </div>
  )
}

export default NavBar