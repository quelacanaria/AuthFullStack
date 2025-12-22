import React, { useState, useEffect } from 'react';
import { useNavigate, Link , useLocation} from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { Appcontent } from './AppContext';
function Header({show}){
const {userInformation} = useContext(Appcontent);
const url = 'http://localhost:3000';
const navigate = useNavigate();
    const logout = async() => {
        try{
            await axios.post(`${url}/api/auth/logout`,{},{withCredentials: true});
            localStorage.removeItem('token');
            window.location.href = "/";//this makes reload to logout
        }catch(error){
            console.log('error -> ', error)
        }
    }
    const location = useLocation();
    return(
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">QueDev</a>
                </div>
                <div className={`${show}`}>
                    <details className="dropdown">
                        <summary className="btn m-1"> 
                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>    
                        </summary>
                        <ul className="w-[70px] content-center menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm px-[5px]">
                            {location.pathname !== '/AdminDashboard' ? (userInformation?.role !== 'admin' ? '' : <li><Link to='/AdminDashboard' >Admin</Link></li>): ''}
                            {location.pathname === '/Dashboard' ? <li><Link to='./Settings'>Settings</Link></li> : <li><Link to='/Dashboard'>Home</Link></li>}
                            <li onClick={logout} ><a>Logout</a></li>
                        </ul>
                    </details>
                </div>
            </div>
        </>
    )
}

export default Header;