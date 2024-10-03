import React, { useState, useEffect } from 'react';
import Add from '../component/Add_Log.jsx';
import Update from '../component/Update_Log.jsx';
import Delete from '../component/Delete.jsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';

const WorkLog = () => {
    const router = useRouter();
    
    // State untuk menyimpan work log yang di-fetch
    const [workLogs, setWorkLogs] = useState([]);

    // Fungsi fetch data work logs
    const fetchWorkLogs = async () => {
        try {
            const response = await fetch('/api/worklog', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                setWorkLogs(data);  // Simpan data yang di-fetch ke state
            } else {
                console.error('Failed to fetch work logs');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Mengambil data saat komponen di-mount
    useEffect(() => {
        fetchWorkLogs();
    }, []);

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

    const handleAddSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/worklog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Worklog added:', result);
                setIsAddOpen(false);
                fetchWorkLogs();  // Refresh data setelah menambah
            } else {
                console.error('Failed to add worklog');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [currentData, setCurrentData] = useState(null);

    const handleOpenUpdate = (data) => {
        setCurrentData(data);  // Data dari row yang ingin di-update
        setIsUpdateOpen(true);
    };

    const handleCloseUpdate = () => {
        setIsUpdateOpen(false);
    };

    const handleUpdateSubmit = async (event, updatedData) => {
        event.preventDefault();
        try {
            const response = await fetch(`/api/worklog/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            if (response.ok) {
                console.log('Data berhasil di-update');
                setIsUpdateOpen(false);
                fetchWorkLogs();  // Refresh data setelah update
            } else {
                console.error('Failed to update data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleOpenDelete = (id) => {
        setSelectedId(id);  // Set ID dari data yang dipilih untuk dihapus
        setIsDeleteOpen(true);
    };

    const handleCloseDelete = () => {
        setIsDeleteOpen(false);
        setSelectedId(null);
    };

    const handleDeleteSubmit = async () => {
        try {
            const response = await fetch(`/api/worklog/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: selectedId }),
            });

            if (response.ok) {
                console.log('Data berhasil dihapus');
                setIsDeleteOpen(false);
                setSelectedId(null);
                fetchWorkLogs();  // Refresh data setelah delete
            } else {
                console.error('Failed to delete data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
                                <a className="flex items-center space-x-2 bg-blue-700 p-2 rounded">
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
                        <h3 className="page">Work Log</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>PIC</th>
                                    <th className="center">Week</th>
                                    <th>Date</th>
                                    <th>Opportunity</th>
                                    <th>Type</th>
                                    <th>Account</th>
                                    <th>Activity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {workLogs.map((log, index) => (
                                    <tr key={log.id}>
                                        <td>{index + 1}</td>
                                        <td>{log.pic}</td>
                                        <td className="center">{log.week}</td>
                                        <td>{log.date}</td>
                                        <td>{log.opportunity}</td>
                                        <td>{log.type}</td>
                                        <td>{log.account}</td>
                                        <td>{log.activity}</td>
                                        <td>
                                            <div className="icon">
                                                <button onClick={handleOpenAdd}>
                                                    <img src="assets/action/Add.png" alt="" />
                                                </button>
                                                <Add isOpen={isAddOpen} onClose={handleCloseAdd} onSubmit={handleAddSubmit} />
                                                <button onClick={() => handleOpenUpdate(log)}>
                                                    <img src="assets/action/Update.png" alt="" />
                                                </button>
                                                <Update isOpen={isUpdateOpen} onClose={handleCloseUpdate} onSubmit={handleUpdateSubmit} initialData={currentData} />
                                                <button onClick={() => handleOpenDelete(log.id)}>
                                                    <img src="assets/action/Delete.png" alt="" />
                                                </button>
                                                <Delete isOpen={isDeleteOpen} onClose={handleCloseDelete} onDelete={handleDeleteSubmit} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkLog;
