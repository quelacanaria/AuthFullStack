import { useNavigate, Link } from "react-router-dom";
import {useState, useEffect, useContext} from 'react';
import axios from 'axios'
import Error from "./notifications/Error";
import Greet from './notifications/Greet';
import { Appcontent } from "./AppContext";
function Login(){
    // const url = 'http://localhost:3000';
    const {showError, containerFailedError, showGreet, containerGreetMess,  loginForms, setAccLog, accLog } = useContext(Appcontent);
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if(token) {navigate('/Dashboard', {replace: true})};
    }, [navigate])

    return(
        <>
            <div className="hero bg-base-200 min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Login now!</h1>
                  <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <div className="card-body">
                    <form onSubmit={loginForms} className="fieldset">
                      <label className="label">Username</label>
                      <input onChange={event => setAccLog({...accLog, username: event.target.value})} type="text" className="input" placeholder="Username" />
                      <label className="label">Password</label>
                      <input onChange={event => setAccLog({...accLog, password: event.target.value})} type="password" className="input" placeholder="Password" />
                      <div className="flex justify-between items-center mt-2 px-1" > 
                        <Link to={'/Signup'} className="label-text-alt link link-hover text-primary">Create Account?</Link>
                        <Link to={'/ForgotPassword'} className="label-text-alt link link-hover text-primary">Forgot password?</Link>
                      </div>
                      <button className="btn btn-neutral mt-4">Login</button>
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

export default Login;