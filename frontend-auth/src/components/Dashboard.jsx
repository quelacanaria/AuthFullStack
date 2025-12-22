import React, { useEffect, useContext } from 'react';
import Greet from './notifications/Greet.jsx';
import { Appcontent } from './AppContext.jsx';
function Dashboard() {
    const { getData, showGreet, containerGreetMess, userInformation } = useContext(Appcontent);
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
        <div className="min-h-screen bg-base-200 p-4 md:p-8 flex flex-col items-center">
            {/* Notifications */}
            <div className="fixed top-5 right-5 z-[100]">
            </div>

            <div className="card w-full max-w-2xl bg-base-100 shadow-2xl overflow-hidden">
                {/* 1. Hero Banner (Same as Settings) */}
                <div className="relative h-40 md:h-48 bg-gradient-to-r from-primary to-secondary">
                    <img 
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000" 
                        alt="banner" 
                        className="w-full h-full object-cover opacity-40"
                    />
                    
                    {/* Floating Avatar */}
                    <div className="absolute -bottom-12 left-8">
                        <div className="avatar">
                            <div className="w-24 md:w-32 rounded-full ring ring-white ring-offset-base-100 ring-offset-2 shadow-xl bg-neutral text-neutral-content">
                                {userInformation?.url ? (
                                    <img src={userInformation.url} alt="Profile" />
                                ) : (
                                    <span className="text-3xl uppercase font-bold flex items-center justify-center h-full">
                                        {userInformation?.username?.charAt(0)}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Content Area */}
                <div className="card-body pt-16">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-black text-base-content">
                                Welcome back, {userInformation?.username || "User"}!
                            </h1>
                            <p className="text-base-content/60 font-medium">{userInformation?.email}</p>
                        </div>
                        <div className="badge badge-primary p-4 font-bold uppercase tracking-widest">
                            {userInformation?.role}
                        </div>
                    </div>

                    <div className="divider my-6">Quick Overview</div>

                    {/* 3. Dashboard Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-base-200 p-4 rounded-2xl flex items-center gap-4 border border-base-300">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs uppercase font-bold text-base-content/50 leading-none">Profile Status</p>
                                <p className="text-lg font-bold">Verified</p>
                            </div>
                        </div>

                        <div className="bg-base-200 p-4 rounded-2xl flex items-center gap-4 border border-base-300">
                            <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs uppercase font-bold text-base-content/50 leading-none">Last Login</p>
                                <p className="text-lg font-bold">Today</p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Action Footer */}
                    <div className="card-actions justify-end mt-8">
                        
                    </div>
                </div>
            </div>
        </div>
        <Greet show={showGreet} containerGreetMess={containerGreetMess} />
        </>
    );
}

export default Dashboard;