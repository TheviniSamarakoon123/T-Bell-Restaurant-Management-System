import React from 'react'

const NavPage = () => {
  return (
    <div>
        <nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
        <div className="flex items-center px-2 lg:px-0">
            <div className="flex-shrink-0">
            <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Logo" />
            </div>
            <div className="hidden lg:block lg:ml-6">
            <div className="flex space-x-4">
                <a href="/buffet-admin" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">BuffetAdmin</a>
                <a href="/add-buffet" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">AddBuffet</a>
                <a href="/reservation" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reservation</a>
            </div>
            </div>
        </div>
        </div>
    </div>
        </nav>
    </div>
  )
}

export default NavPage