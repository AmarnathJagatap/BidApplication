import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from '../Containers/Login'
import CustomizedDialogs from '../Containers/popupform';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand navlogo" to="/">BidApp</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <CustomizedDialogs title="Login Here" buttontitle="Login" btnStyle="loginnav">
                                                <Login />
                                            </CustomizedDialogs>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="acitve" className="nav-link" to='/about'>About Us</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="active" className="nav-link" to='/contact'>Contact Us</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Navbar;