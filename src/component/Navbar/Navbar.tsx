import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import cls from "./Navbar.module.css";
import Button from "../ui/Button/Button";

interface IProps {
    token: null | string
    btnExitLogout: () => void
}

class Navbar extends Component<IProps> {
    render() {
        return (
            <nav className={cls.menuNav}>
                <NavLink to={'/'} exact>
                    Home
                </NavLink>
                <NavLink to={'/posts'}>
                    Posts
                </NavLink>
                <NavLink to={'/profile'}>
                    Profile
                </NavLink>
                {
                  this.props.token && <Button text={'Exit'} onClick={this.props.btnExitLogout}/>
                }
            </nav>
        );
    }
}

export default Navbar;