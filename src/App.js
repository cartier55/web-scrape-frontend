import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
// import './App.css';
import SideBar from './componets/Sidebar';
import './styles/app.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './componets/Layout';
import Home from './pages/Home';
import Scrape from './pages/Scrape';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home/></Layout>}/>
          <Route path="/scrape" element={<Layout><Scrape/></Layout>}/>
          {/* <Route path="/logIn" element={<Login/>}/> */}
          <Route path="/signUp" element={<SignUp/>}/>
          {/* <Route path="/" element={}/>  */}
        </Routes>
      {/* <SideBar>
      </SideBar>
      <Header></Header>
      <Layout>
      <Home/>
      </Layout> */}
      </Router>
    </div>
  );
}

export default App;
