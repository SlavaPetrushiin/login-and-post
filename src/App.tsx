import React from 'react';
import Home from "./psges/Home/Home";
import Login from "./psges/Login/Login";
import Posts from "./psges/Posts/Posts";
import Profile from "./psges/Profile/Profile";
import Navbar from "./component/Navbar/Navbar";
import './App.css'
import { Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <div className={'container'}>
                <Navbar />
            </div>
            <div className={'container'}>
                <Route path={'/'} exact render={() => <Home/>} />
                <Route path={'/login'} render={() => <Login />} />
                <Route path={'/posts'} render={() => <Posts/>} />
                <Route path={'/profile'} render={() => <Profile/>} />
            </div>
        </div>
    );
}

export default App;
