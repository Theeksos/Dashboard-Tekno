import React, { useState } from 'react';
import Add from '../component/Add_Order.jsx';
import Update from '../component/Update_Order.jsx'
import Delete from '../component/Delete.jsx'
import Link from 'next/link';
import { useRouter } from 'next/router';

const WorkOrder = () => {

    const router = useRouter();

    const handleLogout = () => {
        router.push("/")
    }

    const [isAddOpen, setIsAddOpen] = useState(false);

    const handleOpenAdd = () => {
        setIsAddOpen(true);
      };
    
      const handleCloseAdd = () => {
        setIsAddOpen(false);
      };
    
      const handleAddSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(Object.fromEntries(formData.entries()));
        setIsAddOpen(false);
      };

      const [isUpdateOpen, setIsUpdateOpen] = useState(false);

      const handleOpenUpdate = () => {
          setIsUpdateOpen(true);
        };
      
        const handleCloseUpdate = () => {
          setIsUpdateOpen(false);
        };
      
        const handleUpdateSubmit = (event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          console.log(Object.fromEntries(formData.entries()));
          setIsUpdateOpen(false);
        };

        const [isDeleteOpen, setIsDeleteOpen] = useState(false);

        const handleOpenDelete = () => {
          setIsDeleteOpen(true);
        };
      
        const handleCloseDelete = () => {
          setIsDeleteOpen(false);
        };

        const [showContent, setShowContent] = useState(false);
    
        const toggleContent = () => {
            setShowContent(!showContent);
        };
    
    return (
        <div className="flex h-screen">
          <div className="w-64 bg-[#1E3A8A] text-white">
            <h1 className="text-2xl font-bold p-4">Teknomadya</h1>
            <nav>
              <ul className="space-y-4 p-4">
                <li>
                  <Link href="/dashboard">
                    <a className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
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
                    <a className="flex items-center space-x-2 bg-blue-700 p-2 rounded">
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
                    <div className='page'>
                        Work Order
                        <button onClick={toggleContent}>
                            {showContent ? 'Hide More' : 'Show More'}
                        </button>
                    </div>
                    <table className={`table ${showContent ? 'expanded' : ''}`}>
                        <tr>
                            <th>No</th>
                            <th className="center">Week</th>
                            <th>Date</th>
                            <th>Due Date</th>
                            <th>PIC</th>
                            <th>Work Giver</th>
                            <th>Project</th>
                            <th>Account</th>
                            <th>Work Order</th>
                            {showContent && (
                            <>
                                <th>Priority</th>
                                <th>Status</th>
                                <th>Progress</th>
                                <th>Note</th>
                                <th>Action</th>
                            </>
                            )
                            }
                        </tr>
                        <tr>
                            <td>1</td>
                            <td className="center">4</td>
                            <td>14/8/2024</td>
                            <td>16/8/2024</td>
                            <td>John Doe</td>
                            <td>Alex Smith</td>
                            <td>Business</td>
                            <td>ryan@gmail.com</td>
                            <td>Web Design</td>
                            {showContent && (
                                
                            <>
                                <td>Low</td>
                                <td>Revision</td>
                                <td>On progress</td>
                                <td>Requires client feedback</td>
                                <td>
                                    <div className="icon">
                                    <button onClick={handleOpenAdd}>
                                        <img src="assets/action/Add.png" alt="" />
                                    </button>
                                    <Add isOpen={isAddOpen} onClose={handleCloseAdd} onSubmit={handleAddSubmit} />
                                    <button onClick={handleOpenUpdate}>
                                        <img src="assets/action/Update.png" alt="" />
                                    </button>
                                    <Update isOpen={isUpdateOpen} onClose={handleCloseUpdate} onSubmit={handleUpdateSubmit} />
                                    <button onClick={handleOpenDelete}>
                                        <img src="assets/action/Delete.png" alt="" />
                                    </button>
                                    <Delete isOpen={isDeleteOpen} onClose={handleCloseDelete} />
                                    </div>
                                </td>
                            </>
                            )}
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    );
};
export default WorkOrder;