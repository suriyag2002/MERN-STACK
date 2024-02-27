
import './App.css';
import Login from './Container/Login.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Container/SignUp.jsx';
import Dashboard from './Container/Dashboard.jsx';
import EmployeeList from './Container/EmployeeList';
import Update from './Container/Update';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<SignUp />}/>
      <Route path='/dashboard' element={<Dashboard/> } />
      <Route path='/employeelist' element={<EmployeeList/>}/>
      <Route path='/update' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
