// import React from 'react'
// import Link from "next/link"
// const Dashboard = () => {
//   return (
//     <>
//     <nav className='w-[250px] h-[700px] bg-blue-950 text-[20px] font-[400] text-white p-6 leading-[60px] '>
//         <ul>
//             <Link href="/users" ><li>Users</li></Link>
//            <Link href="/orders"><li>Orders</li></Link> 
//            <Link href="/products"><li>Products</li></Link> 
//         </ul>
//     </nav>
//       {/* Vertical Separator */}
//       <div className="border-l border-gray-300 h-full lg:block hidden mx-4"></div>
//     </>
//   )
// }

// export default Dashboard
import React from 'react'
import Link from 'next/link'

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav className="w-[250px] h-full bg-blue-950 text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-8 text-center text-blue-200">Dashboard</h1>
          <ul className="space-y-6">
            <li>
              <Link href="/users">
                <p className="block px-4 py-2 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300">
                  Users
                </p>
              </Link>
            </li>
            <li>
              <Link href="/orders">
                <p className="block px-4 py-2 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300">
                  Orders
                </p>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <p className="block px-4 py-2 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300">
                  Products
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {/* Optional Footer or additional section */}
          <p className="text-sm text-center text-blue-400 mt-10">© 2025 QafixMart</p>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold text-gray-800">Welcome to Your Dashboard</h2>
        {/* Add main content here */}
      </div>

      {/* Vertical Separator (optional, you can remove this if you don't need it) */}
      <div className="border-l border-gray-300 h-full lg:block hidden mx-4"></div>
    </div>
  )
}

export default Dashboard
