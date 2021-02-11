import React , {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import InstagramIcon from '@material-ui/icons/Instagram';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import './Contact.css'

function RateusComp() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <div>
        <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active href="/rateus" >Contact Us</Breadcrumb.Item>
            </Breadcrumb>
        <div className="contacttt">
          <div className="contactt">
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
            <h5>Contact Us </h5>
            <p>Want to get in touch?? We'd love to hear from you...Here's how you can reach us...</p>
            <div className="full_addresses">
              <div className="corporate_address">
                    <h3>Corporate Office</h3>
                    <p>101/23, Beverly Hills,<br />
                        Los Angeles County,<br />
                        California
                    </p>   
              </div>
              <div className="direct_contact">
                <h3>Direct Contact</h3>
                <PhoneIcon />
                <p>+14 8667207006</p>
                <p>+14 9500573690</p>
              </div>
              <div className="maps">
                                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.206664506394!2d-124.17295588464397!3d40.80145217932226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d15564193c9d0f%3A0x1c6fe165c342df9d!2s23%20US-101%2C%20Eureka%2C%20CA%2095501%2C%20USA!5e0!3m2!1sen!2sin!4v1604493121066!5m2!1sen!2sin" width="300" height="250" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              </div>
            </div>
            <div className="full_details">
              <div className="personall">
                   <EmailIcon />
                  <h6>we5plusu@gmail.com</h6>
              </div>
              <div className="personall">
                  <InstagramIcon />
                  <h6>shyam._.sundar</h6>
              </div>
              <div className="personall">
                  <InstagramIcon />
                  <h6>ramprakash_1024</h6>
              </div>
              <div className="personall">
                  <LinkedInIcon />
                  <h6>Shyam Sundar B</h6>
              </div>
              <div className="personall">
                  <LinkedInIcon />
                  <h6>Ramprakash N</h6>
              </div>
            </div>
            <div className="feedback_form">
              <div className="contact_image">
              </div>
              <div className="inside_portion">
                <div className="left_portion">
                  Submit Your Feedback
                  <p>Provide us with some feedback, that helps us improve our service for you..</p>
                </div>
                <Form className="right_portion">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comments: </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
          </div>
      </div>
    );
  }

export default RateusComp;
