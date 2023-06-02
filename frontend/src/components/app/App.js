import './App.css';
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../user/SignUpForm'
import StudyGroup from '../studyGroup/StudyGroup'
import React from 'react';
import Sidebar from '../sidebar/Sidebar'

import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
    return (
      <>
        <Sidebar/>
        <div className="app-body">
          <Routes>
            <Route path='/groups/:groupId' element={<StudyGroup navigate={ useNavigate() }/>}/>
            <Route path='/login'  element={<LoginForm  navigate={ useNavigate() }/>}/>
            <Route path='/signup' element={<SignUpForm navigate={ useNavigate() }/>}/>
          </Routes>
        </div>
      </>
    );
}

export default App;
