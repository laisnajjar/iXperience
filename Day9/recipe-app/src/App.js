import React, { useState, useEffect } from 'react'
// import Input from './components/Input'
// import Table from './components/Table'
// import dishService from './services/dishServices'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth } from './firebase/firebase';

import { onAuthStateChanged } from 'firebase/auth';
import TablePage from './components/tasks/TablePage'
import LoginPage from './components/auth/LoginPage'
import RegisterPage from './components/auth/RegisterPage'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './components/Navbar'

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  return (
    <BrowserRouter>
    <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<TablePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}
