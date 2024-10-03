import React from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import imageDashboard from "../assets/Dashboard.png"
import imageLog from "../assets/Work_Log.png"
import imageOrder from "../assets/Work_Order.png"
import imageCalendar from "../assets/Calendar.png"

const Calendar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/")
    }
    
    return (
        <div className="container">
            <section className="sidebar">
                <h1>Teknomadya</h1>
                <div className="nav">
                    <ul>
                        <li>
                            <img src={imageDashboard} alt="Dashboard" />
                            <Link to={"/dashboard"}>Dashboard</Link>
                        </li>
                        <li>
                            <img src={imageLog} alt="Work Log" />
                            <Link to={"/work-log"}>Work Log</Link>
                        </li>
                        <li>
                            <img src={imageOrder} alt="Work Order" />
                            <Link to={"/work-order"}>Work Order</Link>
                        </li>
                        <li className="nav_active">
                            <img src={imageCalendar} alt="Calendar" />
                            <Link to={"/calendar"}>Calendar</Link>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="main">
                <div className="navbar">
                    <div className="text">
                        <p>Welcome,</p>
                        <h3>This is Calendar</h3>
                    </div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
                <div className="content">
                    <div className="content_calendar">
                        <h3 className='page'>Calendar</h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Calendar;
