import Login from "./components/Login";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./components/AdminDashboard";
import Settings from './components/Settings.jsx';
import ChangeUsername from "./components/ChangeUsername.jsx";
import ChangeEmail from "./components/ChangeEmail.jsx";
import ChangePassword from "./components/ChangePassword.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import ProtectedRoute from "./components/Routes/ProtectedRoute.jsx";
import AdminOnly from "./components/Routes/AdminOnly.jsx";
function App() {
  const location = useLocation();
  const headerClass = ((location.pathname === '/Dashboard') ||  (location.pathname === '/AdminDashboard') || (location.pathname === '/Settings')) ? 'flex-none' : 'hidden';

  return (
    <>
      <Header show={headerClass} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Dashboard" element={ <ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='/AdminDashboard' element={<> <ProtectedRoute><AdminOnly><AdminDashboard/></AdminOnly></ProtectedRoute> </>}/>
        <Route path='/Settings' element={<ProtectedRoute><Settings/></ProtectedRoute>}/>
        <Route path='/ChangeUsername' element={<ProtectedRoute><ChangeUsername/></ProtectedRoute>} />
        <Route path='/ChangeEmail' element={<ProtectedRoute><ChangeEmail/></ProtectedRoute>} />
        <Route path='/ChangePassword' element={<ProtectedRoute><ChangePassword/></ProtectedRoute>} />
        <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
      </Routes> 
    </>
  );
}

export default App;
  