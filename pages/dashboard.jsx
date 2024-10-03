import React from 'react';
import 'tailwindcss/tailwind.css';
import  Link  from 'next/link';
import { useRouter } from 'next/router';

const Dashboard = () => {

    const router = useRouter();

    const handleLogout = () => {
        router.push("/")
    }
    
    return (
        <div className="flex h-screen">
          <div className="w-64 bg-[#1E3A8A] text-white">
            <h1 className="text-2xl font-bold p-4">Teknomadya</h1>
            <nav>
              <ul className="space-y-4 p-4">
                <li>
                  <Link href="/dashboard">
                    <a className="flex items-center space-x-2 bg-blue-700 p-2 rounded">
                      Dashboard
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/log">
                    <a className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
                      Work Log
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/order">
                    <a className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
                      Work Order
                    </a>
                  </Link>
                </li>
                <li>    
                  <Link href="/calendar">
                    <a className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
                      Calendar
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-center bg-gray-100 p-4 shadow">
              <div>
                <p>Welcome,</p>
                <h3 className="font-bold">User</h3>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                Logout
              </button>
            </div>

            <div className="p-6 bg-gray-50 flex-1">
                <div className="content">
                    <h3 className='page'>Dashboard</h3>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Dashboard;
