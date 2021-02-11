// import React, {Component} from 'react'
// import {withRouter} from 'react-router-dom';
// import axios from 'axios';


// class SignUp extends Component{
//     constructor(){
//         super();
//         this.state={
//             username: "",
//             password: "",
//         }
//         this.handleClick = this.handleClick.bind(this);
//         this.updateInput = this.updateInput.bind(this);
//         this.updatePassword = this.updatePassword.bind(this);
//     }

//     const book = {
//                username,
//                password
//             };

//     handleClick(){
//         console.log("UserName: " + this.state.username + " Password: " + this.state.password);

//             axios
//             .post('http://localhost:9000/client-register', book)
//             .then((res) => {
//                 console.log(res.data);
//                 var message = res.data;
//                 console.log(message);
//             })
//             .catch(err => {
//               console.error(err);
//             });
//     }

//     updateInput(event){
//         this.setState({username : event.target.value})
//     }

//     updatePassword(event){
//         this.setState({password: event.target.value})
//     }

//     render(){
//         return(
//             <div className="signUp">
//                 <h1>Sign Up:</h1>
//                 <p>Easy access to all premium services with expert guidance....</p>
//                 <input type="text" name="username" onChange={this.updateInput} placeholder="Username"/>
//                 <input type="text" name="password" onChange={this.updatePassword} placeholder="Password"/>
//                 <br />
//                 <button type="submit" onClick={this.handleClick}>Submit</button>
//             </div>
//         )
//         console.log(this);
//     };
    
// }


// export default withRouter(SignUp);

import React, { Component } from 'react';
import axios from 'axios';
import './SignUp.css'
import {faUserCircle} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password : '',
      message: "",
      isClicked: false,
      isSelected: false
    };
    this.myFunction = this.myFunction.bind(this);
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { username , password } = this.state;

    const book = {
      username,
      password
    };
    // console.log(username);
    // console.log(password);

    axios
      .post('http://localhost:9000/client-register', book)
      .then((res) => {
            this.setState({
                message: res.data._id
            })
      })
      .catch(err => {
        console.error(err);
      });

      this.setState({
        isClicked: true
      })

  };

  myFunction(){
   var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
    if (checkBox.checked == true){
      this.setState({
        isSelected : true
      })
    } else {
      this.setState({
        isSelected: false
      })
    }
  }

  render() {
    const updateSelect = this.state.isSelected;
    const updatedClick = this.state.isClicked
    return (
      <div>
        <br />
        <div className="signup_full">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Turret+Road:wght@800&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
          </style> 
          <div className="signup_content_full">
          <div className="signup_header">
            Sign Up:
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="User Name"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div className="form-group">
              {
                updateSelect ? 
                (<input
                type="text"
                className="form-control"
                name="password"
                placeholder="Password"
                onChange={this.handleInputChange}
                id="myInput"
              />) 
              : 
              ( <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                onChange={this.handleInputChange}
                id="myInput"
                />)
  }
              <div className="show_password">
                <input type="checkbox" id="myCheck" onClick={this.myFunction} />
                <p>Show Password</p>
              </div>
            </div>
            <br />
            <div className="button_container">
              <button className="btn btn-success" type="submit" >
                Register
              </button>
            </div>
          </form>
          </div>
          <div className="user_icon">
                    <FontAwesomeIcon icon={faUserCircle} size="10x" />
                    {
                      updatedClick ? <div className="success_message"><a href={`/client-home/${this.state.message}`}>Go to Your Page</a> </div>: ""
                    }
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;

