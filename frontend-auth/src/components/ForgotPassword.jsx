import { useNavigate, Link } from "react-router-dom";
import { useEffect, useContext } from 'react';
import Error from "./notifications/Error";
import Greet from './notifications/Greet';
import { Appcontent } from "./AppContext";

function ForgotPassword() {
    const navigate = useNavigate();
    const { showError, containerFailedError, showGreet, containerGreetMess, forgotPassForm,
        token, accData, setAccData,
    } = useContext(Appcontent);

    useEffect(() => {
        if (token) { navigate('/Dashboard', { replace: true }) };
    }, [token, navigate]);

    return (
        <>
            <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
                {/* Main Card Container - Matches Login/SignUp perfectly */}
                <div className="card lg:card-side bg-base-100 shadow-2xl max-w-4xl w-full overflow-hidden">

                    {/* Left Side: Branding/Image (Same blue overlay as others) */}
                    <div className="lg:w-1/2 relative h-64 lg:h-auto bg-primary hidden md:block">
                        <img
                            src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1000"
                            alt="Security Banner"
                            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-multiply"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12 text-center z-10">
                            <h1 className="text-4xl font-black mb-4">Reset Security</h1>
                            <p className="text-white/90 font-medium">
                                Follow the steps to verify your identity and recover your account access securely.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Forgot Password Form */}
                    <div className="card-body lg:w-1/2 p-8 md:p-12">
                        <div className="text-center mb-6">
                            <h2 className="text-3xl font-bold text-base-content">Reset Password</h2>
                            <p className="text-base-content/60 mt-1 text-sm">Update your credentials</p>
                        </div>

                        <form onSubmit={forgotPassForm} className="space-y-3">
                            {/* Username Input */}
                            <div className="form-control">
                                <label className="label py-1">
                                    <span className="label-text font-semibold">Username</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full input-sm focus:input-primary transition-all"
                                    placeholder="Username"
                                    onChange={event => setAccData({ ...accData, username: event.target.value })}
                                />
                            </div>

                            {/* Email Input */}
                            <div className="form-control">
                                <label className="label py-1">
                                    <span className="label-text font-semibold">Registered Email</span>
                                </label>
                                <input
                                    type="email"
                                    className="input input-bordered w-full input-sm focus:input-primary transition-all"
                                    placeholder="Email"
                                    onChange={event => setAccData({ ...accData, email: event.target.value })}
                                />
                            </div>

                            {/* Password Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="form-control">
                                    <label className="label py-1">
                                        <span className="label-text font-semibold text-xs">New Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        className="input input-bordered w-full input-sm focus:input-primary transition-all"
                                        placeholder="••••••••"
                                        onChange={event => setAccData({ ...accData, password: event.target.value })}
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label py-1">
                                        <span className="label-text font-semibold text-xs">Retype</span>
                                    </label>
                                    <input
                                        type="password"
                                        className="input input-bordered w-full input-sm focus:input-primary transition-all"
                                        placeholder="••••••••"
                                        onChange={event => setAccData({ ...accData, retypePassword: event.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Action Links */}
                            <div className="flex justify-between items-center pt-2 text-xs">
                                <Link to={'/'} className="link link-primary no-underline hover:underline">
                                    Back to Login?
                                </Link>
                                <Link to={'/Signup'} className="link link-hover text-base-content/60 hover:text-primary">
                                    Create account?
                                </Link>
                            </div>

                            {/* Submit Button (Back to Primary Blue) */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary w-full shadow-lg">
                                    Update Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Error show={showError} containerFailedError={containerFailedError} />
            <Greet show={showGreet} containerGreetMess={containerGreetMess} />
        </>
    )
}

export default ForgotPassword;