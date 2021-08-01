import React from 'react';
import sport from '../assets/sports.png'
import Signup from './Signup';
import CustomizedDialogs from './popupform';

const Home = () => {
    return (
        <>
            <section id='header' className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-10 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>India's First E-Auction in Sports. Signup Now at <strong className="brand-name">BidApp</strong></h1>
                                    <h2 className="mt-3">Take a part in Auction Process. Play or Own your team.</h2>
                                    <div className="mt-3">
                                        <CustomizedDialogs title="Register Here" buttontitle="Sign Up" btnstyle="btn-get-started">
                                            <Signup />
                                        </CustomizedDialogs>
                                    </div>

                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={sport} class="img-fluid animated" alt='home img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;