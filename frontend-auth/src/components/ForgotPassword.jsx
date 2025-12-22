import { useNavigate, Link } from "react-router-dom";
import {useState, useEffect, useContext} from 'react';
import Error from "./notifications/Error";
import Greet from './notifications/Greet';
import { Appcontent } from "./AppContext";
function ForgotPassword(){
    const navigate = useNavigate();
    const {showError, containerFailedError, showGreet, containerGreetMess, forgotPassForm,
    token, accData, setAccData, 
    } = useContext(Appcontent);
    
    useEffect(() => {
        if(token) {navigate('/Dashboard', {replace: true})};
    }, [])
    
    return(
        <>
            <div className="hero bg-base-200 min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Forgot Password</h1>
                  <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <div className="card-body">
                    <form onSubmit={forgotPassForm} className="fieldset">
                      <label className="label">Username</label>
                      <input  type="text" className="input" placeholder="Username" onChange={event => setAccData({...accData, username: event.target.value})} />
                      <label className="label">Email</label>
                      <input  type="email" className="input" placeholder="Email" onChange={event => setAccData({...accData, email: event.target.value})}/>
                      <label className="label">Create New Password</label>
                      <input type="password" className="input" placeholder="Create New Password" onChange={event => setAccData({...accData, password: event.target.value})}/>
                      <label className="label">Retype New Password</label>
                      <input type="password" className="input" placeholder="Retype New Password" onChange={event => setAccData({...accData, retypePassword: event.target.value})}/>
                      <div className="flex justify-between items-center mt-2 px-1" > 
                        <Link to={'/Signup'} className="label-text-alt link link-hover text-primary">Create Account?</Link>
                        <Link to={'/'} className="label-text-alt link link-hover text-primary">already have an Account?</Link>
                      </div>
                      <button className="btn btn-neutral mt-4">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <Error show = {showError} containerFailedError = {containerFailedError}/>
            <Greet show={showGreet} containerGreetMess={containerGreetMess} />
        </>
    )
}

export default ForgotPassword;