import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Appcontent } from './AppContext';
import Greet from '../components/notifications/Greet'
function Settings() {
    const {userInformation, getDataSettings, handleAvatarClick, handleFileChange, fileInputRef, containerGreetMess, 
        showGreet
    } = useContext(Appcontent);

    useEffect(() => {
        getDataSettings();
    }, []);

    return (
        <>
        <div className="min-h-screen bg-base-200 p-4 md:p-8 flex justify-center items-start">
            <div className="card w-full max-w-2xl bg-base-100 shadow-2xl overflow-hidden">
                
                {/* 1. Header Section (Banner & Avatar) */}
                <div className="relative h-48 md:h-56 bg-gradient-to-r from-blue-400 to-indigo-500" onClick={handleAvatarClick}>
                    {/* Background Banner Image (Optional) */}
                    <img 
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000" 
                        alt="banner" 
                        className="w-full h-full object-cover opacity-50"
                    />
                    
                    {/* Floating Avatar */}
                    <div className="absolute -bottom-12 left-8 z-10">
    {/* Added 'relative' to this container for positioning the pencil */}
    {/* Added onClick={handleAvatarClick} assuming you have that function from previous steps */}
    <div className="avatar group cursor-pointer relative" onClick={handleAvatarClick}>
        <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
        />

        {/* THE MAIN PROFILE PICTURE */}
        <div className="w-24 md:w-32 rounded-full ring ring-white ring-offset-base-100 ring-offset-2 shadow-xl bg-neutral relative overflow-hidden">
            {/* 1. PRIMARY IMAGE */}
            <img
                src={`${userInformation?.url}?v=${Date.now()}`}
                alt="Profile"
                className="transition-opacity duration-300 group-hover:opacity-30 object-cover w-full h-full"
            />
            {/* 2. HOVER OVERLAY (Camera Icon) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
            </div>
        </div>

        {/* --- NEW: THE PENCIL BADGE --- */}
        {/* Positioned absolutely at the bottom right of the relative parent */}
        <div className="absolute bottom-0 right-0 z-20">
             {/* A small white circle with a shadow and border */}
            <div className="bg-base-100 p-1.5 md:p-2 rounded-full shadow-md border border-base-200 text-base-content/70 group-hover:text-primary transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>
            </div>
        </div>
         {/* ----------------------------- */}

    </div>
</div>
                </div>

                {/* 2. Content Section */}
                <div className="card-body pt-16">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="card-title text-3xl font-bold">Account Settings</h2>
                        <div className="badge badge-primary badge-outline px-4 py-3 uppercase tracking-wider font-semibold">
                            {userInformation?.role || 'User'}
                        </div>
                    </div>

                    <div className="divider">Information</div>

                    {/* 3. Form Section */}
                    <div className="space-y-6">
                        
                        {/* Username Row */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Username</span>
                            </label>
                            <div className="flex gap-3">
                                <input 
                                    type="text" 
                                    value={userInformation?.username} 
                                    className="input input-bordered w-full bg-base-200 focus:outline-none" 
                                    readOnly 
                                />
                                <Link to={'/ChangeUsername'} className="btn btn-primary btn-square shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Email Row */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email Address</span>
                            </label>
                            <div className="flex gap-3">
                                <input 
                                    type="email" 
                                    value={userInformation?.email} 
                                    className="input input-bordered w-full bg-base-200 focus:outline-none" 
                                    readOnly 
                                />
                                <Link to={'/ChangeEmail'} className="btn btn-primary btn-square shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Password Row */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <div className="flex gap-3">
                                <input 
                                    type="password" 
                                    value={userInformation?.password    } 
                                    className="input input-bordered w-full bg-base-200 focus:outline-none" 
                                    readOnly 
                                />
                                <Link to={'/ChangePassword'} className="btn btn-primary btn-square shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* 4. Footer Actions */}
                    <div className="card-actions justify-end gap-3 mt-10">
                        {/* <button className="btn btn-ghost">Cancel</button>
                        <button className="btn btn-primary px-8 shadow-lg">Save Changes</button> */}
                    </div>
                </div>
            </div>
        </div>        
        <Greet show={showGreet} containerGreetMess={containerGreetMess} />
        </>
    );
}

export default Settings;