import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'

const Login = () => {
  return (
       <div className="flex justify-center items-center h-screen bg-orange-500">
      <div className="p-6 bg-gray-200 rounded-lg shadow-lg w-full sm:w-96">
        <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-orange-300 focus:outline-none"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-orange-300 focus:outline-none"
            placeholder="Your password"
          />
        </div>
        <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
          Log In
        </button>
        <div className="mt-4 text-center">
          <p className="text-gray-600">or</p>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-2 hover:bg-blue-700">
          Log In with Google
        </button>

        <div className='text-right pt-4 place-items-end text-blue-700'><Link to={'/signup'}><ul>Create new account ...</ul></Link></div>
      </div>
    </div>
  )
}

export default Login