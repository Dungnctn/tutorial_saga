import React, { Fragment, useEffect } from 'react';
import './App.css';
import productApi from './api/productApi';
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './features/auth/pages/LoginPage';
import NotFound from './components/Common/NotFound';
import PrivateRoute from './components/Common/PrivateRoute';
import Admin from './components/Layout/Admin';
import StudentManager from './features/studentManager/StudentManager';
import AddStudent from './features/studentManager/AddStudent';
import EditStudent from './features/studentManager/EditStudent';

function App() {

  useEffect(() => {
    // productApi.getAll().then((res) => console.log(res));
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<h2>Home Page</h2>} />
        <Route path='login' element={<LoginPage />} />
        <Route path='admin' element={<PrivateRoute > <Admin /> </PrivateRoute>}>
          <Route index element={<Navigate to={'dashboard'} />} />
          <Route path='dashboard' element={<h2>dashboard</h2>} />
          <Route path='student' >
            <Route index element={<StudentManager />} />
            <Route path='add' element={<AddStudent />} />
            <Route path=':id/edit' element={<EditStudent />} />
          </Route>
        </Route>
        <Route element={<NotFound />}  />
      </Routes>
    </div>
  );
}

export default App;
