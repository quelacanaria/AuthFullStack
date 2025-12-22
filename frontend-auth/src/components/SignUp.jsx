import React, {useState, useEffect, useContext} from 'react'
import { Link, useNavigate } from "react-router-dom";
import Error from './notifications/Error.jsx';
import Greet from './notifications/Greet.jsx';
import { Appcontent } from './AppContext.jsx';
function SignUp(){ 
    const {token, signUpForm, showError, containerFailedError, showGreet, containerGreetMess, 
        accData, setAccData} = useContext(Appcontent);
    const navigate = useNavigate();

    useEffect(() => {
        if(token){ navigate('/Dashboard', {replace: true});}
    }, [])

    return(
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={signUpForm} className="fieldset" >
                            <label className="label">Pick an image</label>
                            <input onChange={event => setAccData({...accData, image: event.target.files[0]})} type="file" accept='image/*' className="file-input" />
                            <label className="label">Username</label>
                            <input onChange={event => setAccData({...accData, username: event.target.value})} type="text" className="input" placeholder="Username" />
                            <label className="label">Email</label>
                            <input onChange={event => setAccData({...accData, email: event.target.value})} type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input onChange={event => setAccData({...accData, password: event.target.value})} type="password" className="input" placeholder="Password" />
                            <label className="label">Retype-password</label>
                            <input onChange={event => setAccData({...accData, retypePassword: event.target.value})} type="password" className="input" placeholder="Retype-password" />
                            <div className="flex justify-between items-center mt-2 px-1" > 
                                <Link to={'/'}  className="label-text-alt link link-hover text-primary">already have an Account?</Link>
                                <Link to={'/ForgotPassword'} className="label-text-alt link link-hover text-primary">Forgot password?</Link>
                            </div>
                            <button className="btn btn-neutral mt-4">SignUp</button>
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

export default SignUp;