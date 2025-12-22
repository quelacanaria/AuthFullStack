import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import Error from '../components/notifications/Error.jsx';
import Greet from '../components/notifications/Greet.jsx';
import { Appcontent } from "./AppContext.jsx";
function ChangeUsername(){
    const navigate = useNavigate();

    const {token, containerFailedError, showError, showGreet, containerGreetMess,  
        formSubmitChangeUsername, setNewData ,newData
    } = useContext(Appcontent); 

    useEffect(() => {
        if(!token){ navigate('/');}
    }, [navigate])

    return(

        <>
            <div className="min-h-screen p-4 flex justify-center items-start pt-10">
                        <div className="card w-full max-w-2xl bg-base-100 shadow-xl border border-base-300">
                            <form onSubmit = {formSubmitChangeUsername} className="card-body">
                                <h2 className="card-title text-2xl mb-6">Change Username</h2>
                                
                                <div className="space-y-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Old Username</span>
                                        </label>
                                        <div className="flex gap-2 items-center">
                                            <input onChange={event => setNewData({...newData, Old: event.target.value})}
                                                type="text" 
                                                className="input input-bordered w-full bg-base-200" 
                                            />
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">New Username</span>
                                        </label>
                                        <div className="flex gap-2 items-center">
                                            <input onChange={event => setNewData({...newData, New: event.target.value})}
                                                type="text" 
                                                className="input input-bordered w-full bg-base-200" 
                                            />
                                        </div>
                                    </div>
                                </div>
            
                                <div className="card-actions justify-end mt-8">
                                    <Link to={'/Settings'} className="btn btn-ghost">Cancel</Link>
                                    <button className="btn btn-primary">Save Changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Error show = {showError} containerFailedError = {containerFailedError}/>
                    <Greet show={showGreet} containerGreetMess={containerGreetMess} />
        </>
    )
}

export default ChangeUsername;