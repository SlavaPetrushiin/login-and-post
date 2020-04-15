import React, {Component} from 'react';
import Home from "./psges/Home/Home";
import Login from "./psges/Login/Login";
import Posts from "./psges/Posts/Posts";
import Profile from "./psges/Profile/Profile";
import Navbar from "./component/Navbar/Navbar";
import './App.css'
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {autoLogin, btnExitLogout} from "./store/auth/auth";
import {RootState} from "./store/store";

interface IMapStateToProps {
    token: null | string
}

interface IMapDispatchToProps {
    autoLogin: () => void
    btnExitLogout: () => {}
}

class App extends Component <IMapDispatchToProps & IMapStateToProps> {
    componentDidMount(): void {
        this.props.autoLogin()
    }

    render() {
        return (
            <div>
                <div className={'container'}>
                    <Navbar token={this.props.token} btnExitLogout={this.props.btnExitLogout}/>
                </div>
                <div className={'container'}>
                    <Route path={'/'} exact render={() => <Home/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/posts'} render={() => <Posts/>}/>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state: RootState): IMapStateToProps => {
    return {
        token: state.auth.token
    }
}

export default connect<IMapStateToProps, IMapDispatchToProps, {}, RootState>(mapStateToProps, {
    autoLogin,
    btnExitLogout
})(App);
