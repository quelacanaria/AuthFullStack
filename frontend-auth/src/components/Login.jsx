import { useNavigate, Link } from "react-router-dom";
import { useEffect, useContext } from 'react';
import Error from "./notifications/Error";
import Greet from './notifications/Greet';
import { Appcontent } from "./AppContext";

function Login() {
    const { showError, containerFailedError, showGreet, containerGreetMess, loginForms, setAccLog, accLog } = useContext(Appcontent);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) { navigate('/Dashboard', { replace: true }) };
    }, [navigate]);

    return (
        <>
            <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
                {/* Main Card Container - Consistent size (max-w-4xl) */}
                <div className="card lg:card-side bg-base-100 shadow-2xl max-w-4xl w-full overflow-hidden">
                    
                    {/* Left Side: Login-Specific Image Banner */}
                    <div className="lg:w-1/2 relative h-64 lg:h-auto bg-primary hidden md:block">
                        <img 
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000" 
                            alt="Login Workspace" 
                            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-multiply"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center z-10">
                            <h1 className="text-4xl font-black mb-2">Welcome Back!</h1>
                            <p className="text-white/90 font-medium">
                                Access your dashboard and manage your account with ease.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Login Form */}
                    <div className="card-body lg:w-1/2 p-8 md:p-12">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-base-content">Login</h2>
                            <p className="text-base-content/60 mt-2 text-sm">Enter your credentials below</p>
                        </div>

                        <form onSubmit={loginForms} className="flex flex-col gap-4">
                            
                            {/* Username Input */}
                            <div className="form-control">
                                <label className="label py-1">
                                    <span className="label-text font-semibold">Username</span>
                                </label>
                                <input 
                                    onChange={event => setAccLog({ ...accLog, username: event.target.value })} 
                                    type="text" 
                                    className="input input-bordered w-full focus:input-primary transition-all" 
                                    placeholder="johndoe" 
                                />
                            </div>

                            {/* Password Input */}
                            <div className="form-control">
                                <label className="label py-1">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input 
                                    onChange={event => setAccLog({ ...accLog, password: event.target.value })} 
                                    type="password" 
                                    className="input input-bordered w-full focus:input-primary transition-all" 
                                    placeholder="••••••••" 
                                />
                                
                                <div className="flex justify-between items-center mt-3 text-xs">
                                    <Link to={'/Signup'} className="link link-primary no-underline hover:underline">
                                        Create Account?
                                    </Link>
                                    <Link to={'/ForgotPassword'} className="link link-hover text-base-content/60 hover:text-primary">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary w-full shadow-lg text-lg">
                                    Login
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

export default Login;