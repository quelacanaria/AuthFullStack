import React, { useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Error from './notifications/Error.jsx';
import Greet from './notifications/Greet.jsx';
import { Appcontent } from './AppContext.jsx';

function SignUp() {
    const { token, signUpForm, showError, containerFailedError, showGreet, containerGreetMess,
        accData, setAccData } = useContext(Appcontent);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) { navigate('/Dashboard', { replace: true }); }
    }, [token, navigate]);

    return (
        <>
            <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
                {/* CHANGED: max-w-5xl to max-w-4xl to match Login exactly */}
                <div className="card lg:card-side bg-base-100 shadow-2xl max-w-4xl w-full overflow-hidden">

                    {/* Left Side: Branding/Image */}
                    <div className="lg:w-1/2 relative h-64 lg:h-auto bg-primary hidden md:block">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                            alt="Signup Banner"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12 text-center z-10">
                            <h1 className="text-4xl font-black mb-4">Join Us Today!</h1>
                            <p className="text-white/90 font-medium text-lg leading-relaxed">
                                Create an account to unlock exclusive features and manage your profile.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Signup Form */}
                    <div className="card-body lg:w-1/2 p-8 md:p-12">
                        <div className="text-center mb-6">
                            <h2 className="text-3xl font-bold text-base-content">Create Account</h2>
                        </div>

                        <form onSubmit={signUpForm} className="space-y-3">
                            
                            {/* File Input */}
                            <div className="form-control">
                                <label className="label py-1">
                                    <span className="label-text font-semibold">Profile Picture</span>
                                </label>
                                <input 
                                    onChange={event => setAccData({ ...accData, image: event.target.files[0] })} 
                                    type="file" 
                                    accept='image/*' 
                                    className="file-input file-input-bordered file-input-primary w-full file-input-sm" 
                                />
                            </div>

                            {/* Username Input */}
                            <div className="form-control">
                                <label className="label py-1">
                                    <span className="label-text font-semibold">Username</span>
                                </label>
                                <input 
                                    onChange={event => setAccData({ ...accData, username: event.target.value })} 
                                    type="text" 
                                    className="input input-bordered w-full input-sm focus:input-primary transition-all" 
                                    placeholder="johndoe" 
                                />
                            </div>

                            {/* Email Input */}
                            <div className="form-control">
                                <label className="label py-1">
                                    <span className="label-text font-semibold">Email Address</span>
                                </label>
                                <input 
                                    onChange={event => setAccData({ ...accData, email: event.target.value })} 
                                    type="email" 
                                    className="input input-bordered w-full input-sm focus:input-primary transition-all" 
                                    placeholder="john@example.com" 
                                />
                            </div>

                            {/* Password Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="form-control">
                                    <label className="label py-1">
                                        <span className="label-text font-semibold">Password</span>
                                    </label>
                                    <input 
                                        onChange={event => setAccData({ ...accData, password: event.target.value })} 
                                        type="password" 
                                        className="input input-bordered w-full input-sm focus:input-primary transition-all" 
                                        placeholder="••••••••" 
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label py-1">
                                        <span className="label-text font-semibold">Confirm</span>
                                    </label>
                                    <input 
                                        onChange={event => setAccData({ ...accData, retypePassword: event.target.value })} 
                                        type="password" 
                                        className="input input-bordered w-full input-sm focus:input-primary transition-all" 
                                        placeholder="••••••••" 
                                    />
                                </div>
                            </div>

                            {/* Action Links */}
                            <div className="flex justify-between items-center pt-2 text-xs">
                                <Link to={'/'} className="link link-primary no-underline hover:underline">
                                    Already have an account? Login
                                </Link>
                                <Link to={'/ForgotPassword'} className="link link-hover text-base-content/60 hover:text-primary">
                                    Forgot password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary w-full shadow-lg">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Error show={showError} containerFailedError={containerFailedError} />
            <Greet show={showGreet} containerGreetMess={containerGreetMess} />
        </>
    );
}

export default SignUp;