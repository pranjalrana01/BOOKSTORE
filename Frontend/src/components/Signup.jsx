import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <div className='flex h-screen items-center justify-center '>
      <div  className="width-[900px] h-[400px]">
        <div className="modal-box w-[500px] h-[400px] ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg">Signup</h3>
          <div className="mt-4 spacey-2">
            <span>Name</span>
            <br />
            <input type="text" placeholder="Enter your Name" className="w-80 px-3 py-1 border rounded-md outline-none"/>
          </div>
          <div className="mt-4 spacey-2">
            <span>Email</span>
            <br />
            <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none"/>
          </div>
          <div className="mt-4 spacey-2">
            <span>Password</span>
            <br />
            <input type="text" placeholder="Enter your password" className="w-80 px-3 py-1 border rounded-md outline-none"/>
          </div>
          <div className="flex justify-around py-10">
            {/*button */}
          <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 cursor-pointer w-19">Signup</button>
          <p className='text-xl'>Have Account?
            <button  className="underline text-blue-500 cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>
                Login
            </button>
            <Login />
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
