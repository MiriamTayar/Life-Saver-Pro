import React, { useEffect } from 'react';
import Login from './components/Login';
// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import EmptyComponent from './components/EmpyComponent'
import FileUploader from './components/ImageUploader';
import UserArea from './components/UserArea'
import Header from './components/Header';

function App() {


  const [user, setUser] = useState(sessionStorage.getItem('user'))
  const navigate = useNavigate()
  useEffect(() => {
    if (user == undefined) {
      sessionStorage.setItem('user', undefined)
      navigate('login')
    }

  }, [])


  return (
    <div className="App">

      <Routes>
        {/* <Route path='' element={<EmptyComponent />} /> */}
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Login />} />
        {/* <Route path='poolRegistration' element={<PoolRegistration/>} /> */}
        <Route path='userArea' element={<UserArea />}>
          <Route path='uploadImage' element={<FileUploader type={"image"} />} />
          <Route path='uploadVideo' element={<FileUploader type={"video"} />} />
          <Route path='ree' element={<FileUploader type={"video"} />} />
        </Route>
      </Routes>
    </div>
  );

}
export default App;
