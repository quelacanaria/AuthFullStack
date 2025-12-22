import { createContext, useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
// Create context
export const Appcontent = createContext();

// Provider component
export const AppContextProvider = ({ children }) => {
    const url = import.meta.env.VITE_BACKEND_URL;
    const location = useLocation();
    const fileInputRef = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [usersCount, setUsersCount] = useState(0);
    const [adminCount, setAdminCount] = useState(0);
    const [userInformation, setUserInformation] = useState(null); // null is better for objects
    const [showGreet, setShowGreet] = useState('hidden');
    const [containerGreetMess, setContainerGreetMess] = useState();
    const [showError, setShowError] = useState('hidden');
    const [containerFailedError, setContainerFailedError] = useState();  
    const [newData, setNewData] = useState({
        Old: '',
        New: ''
    });
    const [accData, setAccData] = useState({
            image: null,
            username: '',
            email: '',
            password: '',
            retypePassword: ''
        });
    const [accLog, setAccLog] = useState({
      username: '',
      password: ''
    });
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    
    const getData = async() => {
        try{
            const response = await axios.get(`${url}/api/Dashboard/welcome`, {headers: {Authorization: `Bearer ${token}`}, withCredentials: true});
            setUserInformation(response.data.user);
            setContainerGreetMess(response.data.message);
            setShowGreet('');
            setTimeout(() => setShowGreet('hidden'), 1000);
        }catch(error){
            // console.log('error -> ', error);
            navigate('/',{replace: true})
        }
    }

    const getDataSettings = async() => {
        try{
            const response = await axios.get(`${url}/api/settings/welcome`, {headers: {Authorization: `Bearer ${token}`}, withCredentials: true});
            setUserInformation(response.data.user);
            setContainerGreetMess(response.data.message);
            setShowGreet('');
            setTimeout(() => setShowGreet('hidden'), 1000);
        }catch(error){
            // console.log('error -> ', error);
            navigate('/',{replace: true})
        }
    }

    const getDataAdmin = async() => {
        try{
            const token = localStorage.getItem('token');
            if(!token){throw new Error('No token Found');}
            const response = await axios.get(`${url}/api/Admin/welcome`, {headers: {Authorization: `Bearer ${token}`}, withCredentials: true});
            setUserInformation(response.data.user);
            setAdminCount(response.data.adminCount);
            setUsersCount(response.data.count);
            setContainerGreetMess(response.data.message);
            setShowGreet('');
            setTimeout(() => setShowGreet('hidden'), 1000);
        }catch(error){
            // console.log('error -> ', error);
            navigate('/', {replace: true});
        }
    }
    
    const formSubmitChangeUsername = async(event) => {
        event.preventDefault();
        try{    
            const response = await axios.post(`${url}/api/auth/changeUsername`, newData, {withCredentials: true});
            setContainerGreetMess(response.data.message);
            setShowGreet('');
            event.target.reset();
            setTimeout(() => {setShowGreet('hidden'); navigate('/Settings', {replace: true});}, 1000);
        }catch(error){
            console.log(error);
            setContainerFailedError(error.response.data.message);
            setShowError('')
            setTimeout(() => setShowError('hidden'), 1000);
        }
    }

    const formSubmitChangePassword = async(event) => {
            event.preventDefault();
            try{
                const response = await axios.post(`${url}/api/auth/changePassword`, newData, {withCredentials: true});
                setContainerGreetMess(response.data.message);
                setShowGreet('');
                event.target.reset();
                setTimeout(() => {setShowGreet('hidden'); navigate('/Settings', {replace: true});}, 1000);
            }catch(error){
                setContainerFailedError(error.response.data.message);
                setShowError('')
                setTimeout(() => setShowError('hidden'), 1000);
            }
        }

    const formSubmitChangeEmail = async(event) => {
        event.preventDefault();
        try{
            const response = await axios.post(`${url}/api/auth/changeEmail`, newData, {withCredentials: true});
            setContainerGreetMess(response.data.message);
            setShowGreet('');
            event.target.reset();
            setTimeout(() => {setShowGreet('hidden'); navigate('/Settings', {replace: true});}, 1000);
        }catch(error){
            setContainerFailedError(error.response.data.message);
            setShowError('')
            setTimeout(() => setShowError('hidden'), 1000);
        }
    }

    const handleAvatarClick = () => {
    fileInputRef.current.click();
    };

    const handleFileChange = async(event) => {
        const img = event.target.files[0];
        const formData = new FormData();
        formData.append('image', img)
        try{
            const response = await axios.post(url + '/api/auth/changeProfile', formData, {withCredentials: true});
            console.log('response -> ', response.data.message);
            setContainerGreetMess(response.data.message);
            setShowGreet('');
            setTimeout(() => {setShowGreet('hidden'); window.location.href = '/Settings';}, 1000);
            
        }catch(error){
            console.log('error -> ', error.response.data.message);
        }
    };

    const signUpForm = async(event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', accData.image);
        formData.append('username', accData.username);
        formData.append('email', accData.email);
        formData.append('password', accData.password);
        formData.append('retypePassword', accData.retypePassword);
        try{ 
            const response = await axios.post(url+'/api/auth/register', formData);
            console.log('response -> ', response.data);
            setContainerGreetMess(response.data.message)
            setShowGreet('');
            event.target.reset();
            setTimeout(() => {
                setShowGreet('hidden');
                navigate('/', {replace: true});
            }, 1000);
        }catch(error){
            // console.log('error -> ', error);
            // console.log(error.response.data.message)
            setContainerFailedError(error.response.data.message);
            setShowError('')
            setTimeout(() => setShowError('hidden'), 3000);
            }
    }

    const loginForms = async(event) => {
        event.preventDefault();
        try{
            const response = await axios.post(url+`/api/auth/login`, accLog, {withCredentials: true});
            localStorage.setItem('token', response.data.user);
            console.log(response.data.user);
            setContainerGreetMess(response.data.message)
            setShowGreet('');
            event.target.reset();
            setTimeout(() => {
                    setShowGreet('hidden');
                    navigate('/Dashboard', {replace: true});
                }, 1000);
        }catch(error){
            const failedError = error.response.data.message;
            setContainerFailedError(failedError);
            setShowError('')
            setTimeout(() => setShowError('hidden'), 3000);
            navigate('/', {replace: true})
        }
    }

    const forgotPassForm = async(event) => {
        event.preventDefault();
        try{ 
            const response = await axios.post(url+'/api/auth/forgotPassword', accData);
            console.log('response -> ', response.data);
            setContainerGreetMess(response.data.message)
            setShowGreet('');
            event.target.reset();
            setTimeout(() => {
                setShowGreet('hidden');
                navigate('/', {replace: true});
            }, 1000);
        }catch(error){
            // console.log('error -> ', error);
            // console.log(error.response.data.message)
            setContainerFailedError(error.response.data.message);
            setShowError('')
            setTimeout(() => setShowError('hidden'), 3000);
            }
    }



    const value = {
        url, isLoggedIn, setIsLoggedIn, userInformation, setUserInformation, getData, getDataSettings,
        containerGreetMess, setContainerGreetMess, token, navigate, showError, setShowError, containerFailedError, 
        setContainerFailedError, showGreet, setShowGreet, formSubmitChangeUsername, newData, setNewData,
        formSubmitChangePassword, formSubmitChangeEmail, loginForms, setAccLog, accLog, signUpForm, accData, setAccData, 
        forgotPassForm, handleAvatarClick, handleFileChange, fileInputRef, getDataAdmin, usersCount, adminCount
    };

    return (
        <Appcontent.Provider value={value}>
            {children}
        </Appcontent.Provider>
    );
};
