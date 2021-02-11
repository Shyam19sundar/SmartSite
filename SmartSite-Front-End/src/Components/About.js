import React from "react"
import {Link, withRouter} from "react-router-dom"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from 'react-bootstrap/Card'
import "./AboutComponent.css"

function AboutComponent(){
    return(
       <div className="about-div">
           <Breadcrumb>
          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item active>About Us</Breadcrumb.Item>
        </Breadcrumb>
            <div className="about-divtablecontent">
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
            <div className="about-divcontent">
                <h3>About</h3>
                <h2>Our History</h2>
                <p>Our history traces back to 1992, when the founder of LandSpect, Dr.Shyam Sundar B started LandSpect in the small hamlet of Karaikal.<br />
                It was the brainchild of Dr.Shyam Sundar that gave our company its roots.<br /> Our founder was so motivated to change the lives around him and help his town reach a respectable status, which he has accomplished since<br />
                Though our founder is no more.. his principles are deeply engraved into every corner and stone of our company.
                </p>
           </div>
           </div>
           <div className="quote"
           style={{ backgroundColor : ""}}>
              <Card  className="card-ca">
                <Card.Body >
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        We Shape Our buildings; Thereafter they shape US
                        {' '}
                    </p>
                    <footer className="blockquote-footer">
                    Winston Churchill
                    </footer>
                    </blockquote>
                </Card.Body>
              </Card>
           </div>
           <div className="philosophy">
               <h3>Our Philosophy:</h3>
               <div className="philo_content">
                   <div className="vision">
                       <h3>Our Vision</h3>
                       <p>To create long lasting relationships by continuously exceeding the <br />expectations of our customers.</p>
                   </div>
                   <div className="vision">
                    <h3>Our Purpose</h3>
                    <p>To provide Best-In-Class customer focused construction services.</p>
                   </div>
               </div>
           </div>
           <div className="community">
               <h3>Community Services:</h3>
               <p>"No one can do everything, but everyone can do something..."</p>
               <div className="community_cards">
                   <div className="card_1">
                       <p>Our Company has helped in the development of the community by building a Charitable Trust and also setting up a Fund for the physically challenged</p>
                   </div>
                   <div className="card_1">
                       <p>We have provided 100% scholarship for more than 100 students and is in the process of providing more to the weaker sections of the community</p>
                   </div>
               </div>
           </div>
       </div>

    )
}

export default AboutComponent