import React from 'react';
import { Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

function Main() {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage/>}></Route>
      <Route exact path='/projects' element={<ProjectsPage/>}></Route>
      <Route exact path='/about' element={<AboutPage/>}></Route>
    </Routes>
  );
}

export default Main;