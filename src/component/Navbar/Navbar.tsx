import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import cls from "./Navbar.module.css";

class Navbar extends Component {
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
            </nav>
        );
    }
}

export default Navbar;