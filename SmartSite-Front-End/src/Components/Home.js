import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from "react-router-dom";
import './Home.css'
import { faFacebookSquare, faTwitterSquare, faLinkedin, faInstagramSquare, faGooglePlusSquare , faYoutubeSquare} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Home extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="home">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
                </style> 
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Turret+Road:wght@800&display=swap');
                </style> 
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,500&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
                </style> 
                <div className="top_content">
                <div className="container">
                    <div className="text">
                        <h1 className="big_text">See the world our way</h1>
                        <p>Providing better solutions for your needs</p>
                    </div>
                    <div className="goin_buttons1">
                        <Link to="/signup">
                            <div className="signup">
                                SignUp
                            </div>    
                        </Link> 
                        <Link to="/login">
                            <div className="login">
                                Login
                            </div>    
                        </Link> 
                    </div>
                </div>
                    <div className="container1">
                        <div className="trespassing">
                            
                        </div>
                        <div className="admin_content">
                            <div className="text">
                                <h1 className="big_text">Admin Login</h1>
                                <p>OOps....No tresspassing Allowed</p>
                            </div>
                            <div className="goin_buttons2">
                                <Link to="/admin-login">
                                    <div className="login">
                                        Login
                                    </div>    
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="works">
                    <p className="workmanship">Workmanship.</p>
                    <p className="reliability">Reliability.</p>
                    <p className="efficiency">Efficiency.</p>
                </div>
                <div className="content_2">
                    <div className="at">
                        <Carousel className="we_offer">
                        <p className="offer_header">What We Offer  <h3 className="forward_arrows">➡➡</h3></p>
                        <div className="carousel_content1">
                        "LandSpect specializes in customizing its approach to the needs and challenges of each project, no matter the size and scope."<br /><br />
                        </div>
                        <div className="carousel_content2">
                            <p>"LandSpect's Construction Management process exceeds project and Owner objectives through structured and consistent systems and procedures as applied by a highly-talented Project Team especially selected for each project based on their relevant experience and capabilities."<br /><br /></p>
                        </div>
                        <div className="carousel_content3">
                            <p>"LandSpect Construction Company has adopted Virtual Design & Construction (VDC) as a process and technology that further enhances our services as  your construction manager.  On projects that VDC can be utilized, our team can better review design documents, develop project schedules and logistics plans more accurately, validate project estimates, and become more proactive with issues that may occur within the field."<br /><br /></p>
                        </div>
                        <div className="carousel_content4">
                            <p>
                            "Our past project experience and current managed work reflects a diverse client base and showcases our dynamic capabilities." <br />
                            </p>
                        </div>
                        </Carousel>
                        <div className="image_1">
                            <img src="/gallery_2.jpg" alt="second one" width="300px" height="300px" />
                            <img src="/gallery_3.jpg" alt="third one" width="300px" height="300px" />
                            <div className="maps">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.206664506394!2d-124.17295588464397!3d40.80145217932226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d15564193c9d0f%3A0x1c6fe165c342df9d!2s23%20US-101%2C%20Eureka%2C%20CA%2095501%2C%20USA!5e0!3m2!1sen!2sin!4v1604493121066!5m2!1sen!2sin" width="300" height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="placard_1">
                        Get Your Free Estimate Today
                </div>
                <div className="placard_2">
                    Sign Up to our NewsLetter
                </div>
                <div className="placard_3">
                    100+ Contractors
                </div>
                <div className="placard_4">
                    20+ Completed Projects
                </div>
                <div className="bottom_content">
                    
                </div>
                <div className="icons">
                    <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
                    <FontAwesomeIcon icon={faTwitterSquare} size="2x"/>
                    <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                    <FontAwesomeIcon icon={faInstagramSquare} size="2x"/>
                    <FontAwesomeIcon icon={faGooglePlusSquare} size="2x"/>
                    <FontAwesomeIcon icon={faYoutubeSquare} size="2x"/>
                </div>
            </div>
        )
    }
}

export default Home;
