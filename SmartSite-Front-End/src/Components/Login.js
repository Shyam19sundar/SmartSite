// import React, { Component } from 'react'

// class Login extends Component{
//     constructor(){
//         super()
//         this.state={
//             username: "",
//             password: "",
//         }
//         this.handleClick = this.handleClick.bind(this);
//         this.updateInput = this.updateInput.bind(this);
//         this.updatePassword = this.updatePassword.bind(this);
//     }

//     updateInput(event){
//         this.setState({username : event.target.value})
//     }

//     updatePassword(event){
//         this.setState({password: event.target.value})
//     }

//     render(){
//         return(
//             <div className="Login">
//                 <h1>Login</h1>
//                 <p>Easy access to all premium services with expert guidance....</p>
//                 <input type="text" onChange={this.updateInput} placeholder="Username"/>
//                 <input type="text" onChange={this.updatePassword} placeholder="Password"/>
//                 <br />
//                 <button type="submit" onClick={this.handleClick}>Submit</button>
//             </div>
//         )
//     }

//     handleClick(){
//         fetch('http://localhost:9000/client-login', {
//             method: 'post',
//             headers: {"content-type": "application/json:charset-UTF-8"},
//             body: JSON.stringify(this.username)
//         }).then(function(response) {
//             return response.json();
//         }).then(function(data) {
//            console.log(data);
//         });
//     }


// }

// export default Login

import React, { Component } from 'react';
import axios from 'axios';
import { Route , Redirect } from 'react-router-dom';
import history from './history';
import {withRouter} from 'react-router-dom';
import './Login.css'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Login extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      username: '',
      password : '',
      message: "",
      ifTrue: false,
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

    const { username , password ,message} = this.state;

    const book = {
      username,
      password
    };
    console.log(username);
    console.log(password);

    axios
      .post('http://localhost:9000/client-login', book)
      .then((res) => {
          this.setState({
              message: res.data._id
          })
          if(this.state.message){
                console.log(this.state.message);
                this.setState({
                  ifTrue: true
                })
            }
      })
      .catch(err => {
        console.error(err);
      });

      // if(this.state.message == "Login Success"){
      //     console.log(this.state.message);
      //   return <Redirect to='/' />
      // }

  };

  myFunction(){
    var checkBox = document.getElementById("myCheck1");
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
    const updateClick = this.state.ifTrue
    return (
      <div className="login_full">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Turret+Road:wght@800&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
          </style> 
          <div className="login_content_full">
          <div className="login_header">
            Login:
          </div>
          <form className="login_form" onSubmit={this.handleSubmit}>
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
                <input type="checkbox" id="myCheck1" onClick={this.myFunction} />
                <p>Show Password</p>
              </div>
            </div>
            <br />
            <div className="button_container">
              <button className="btn" type="submit" onClick={this.handleClick}>
                Login
              </button>
            </div>
          </form>
          </div>
          <div className="user_icon">
                    <FontAwesomeIcon icon={faUserCircle} size="10x" />
                    <p className="not_user">
                      Not a User???
                        <Link to="/signup">
                            Sign Up
                        </Link>
                    </p>
                    {
                      updateClick ? <div className="success_message"><a href={`/client-home/${this.state.message}`}>Go to Your Page</a> </div>: ""
                    }
          </div>
      </div>
    );
  }
}

export default withRouter(Login);
