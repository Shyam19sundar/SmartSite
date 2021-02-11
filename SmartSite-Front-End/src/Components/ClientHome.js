// import React, {Component} from 'react'
// import {withRouter} from 'react-router-dom';
// import PrevDay from './PrevDay'
// import Today from './Today'


// class ClientHome extends Component{
//     constructor(){
//         super();

//         this.state={
//             isClicked1: false,
//             isClicked2: false
//         }
//     }

//     handleClick1(){
//         this.setState({
//             isClicked1: true
//         })
//     }

//     handleClick2(){
//         this.setState({
//             isClicked2: true
//         })
//     }

//     render(){
//         const updatedButton1 = this.state.isClicked1;
//         const updatedButton2 = this.state.isClicked2;
//         return(
//             <div className="client_home_render">
//                 <form onSubmit={this.handleSubmit1}>
//                 <button type="submit">Previous Day's Work</button>
//                 </form>
//                 <form onSubmit={this.handleSubmit2}>
//                     <button type="submit">Today's Work</button>
//                 </form>               
//             </div>
//         )
//     }
// }

// export default withRouter(ClientHome);

import React, { Component } from 'react';
import axios from "axios"
import Graphs from './Graphs'
import './ClientHome.css'
import { Modal } from 'react-bootstrap';
import { ModalBody } from 'react-bootstrap';
import Payment from './Payment';

var pathFull = window.location.pathname
var id = pathFull.substring(13)
//var fullData = null

class ClientHome extends Component {
  constructor(props) {
    super(props);


    this.state = {
      name: "",
      fullData: "",
      updatedProj: "",
      assigned: false,
      projName: "",
      projDesc: "",
      openModal: false
    }

    //this.fullDataRender = this.fullDataRender.bind(this)
    //this.fullDataRender1 = this.fullDataRender1.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    console.log(this.state.projName);
    console.log(this.state.projDesc);
  };

  handleModal = () => {
    this.setState({
      openModal: !true
    })
    console.log(this.state.openModal);
  }

  handleSubmit(e) {
    e.preventDefault();

    const projectName = this.state.projName;
    const projectDescription = this.state.projDesc;

    // console.log(projectName);
    // console.log(projectDescription);

    const book = {
      clientId: id,
      projectName: projectName,
      projDesc: projectDescription
    }

    //console.log(book);

    axios
      .post('http://localhost:9000/get-project-details', book)
      .then((res) => {
        this.setState({
          updatedProj: res.data
        })
        console.log(res.data);
        console.log(this.state.updatedProj);
      })
      .catch(err => {
        console.error(err);
      })
  }

  componentDidMount() {
    console.log(id);

    const book = {
      clientId: id
    };

    axios
      .post('http://localhost:9000/show-details-present', book)
      .then((res) => {
        this.setState({
          fullData: res.data,
        })
        console.log(this.state.fullData);
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    console.log(this.state.fullData);

    if (this.state.fullData.assigned) {
      if (this.state.fullData != null) {
        return (

          <div className="full_client_home">
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
              @import url('https://fonts.googleapis.com/css2?family=Turret+Road:wght@800&display=swap');
            </style>

            {/* <button type="button" onClick={this.handleSubmit}>Get Details</button> */}
            <h3 className="welcome_client">Welcome, {this.state.fullData.username}</h3>
            <h4 className="details">DashBoard</h4>
            {
              this.state.fullData.assigned ? <h6>Your Project has been approved...</h6> : ""
            }
            <div className="full_graph_render">
              <h3 className="details">Work Progress: </h3>
              <Graphs
                foundation={this.state.fullData.foundationWork}
                excavation={this.state.fullData.excavationWork}
                interior={this.state.fullData.interiorDesignWork}
                construction={this.state.fullData.constructionWork}
                prevFoundation={this.state.fullData.foundationWorkPrev}
                prevExcavation={this.state.fullData.excavationWorkPrev}
                prevConstruction={this.state.fullData.constructionWorkPrev}
                prevInterior={this.state.fullData.interiorDesignWorkPrev}
              />
              {
                console.log(this.state.fullData)
              }
            </div>
            <div className="full_batches">
              <div className="batch1">
                <p>{this.state.fullData.batch1_department}</p>
                <p>Timings : {this.state.fullData.batch1_from_timing} to {this.state.fullData.batch1_to_timing}</p>
                <p>Per Worker Wage: {this.state.fullData.batch1_wage}</p>
              </div>
              <div className="batch2">
                <p>{this.state.fullData.batch2_department}</p>
                <p>Timings : {this.state.fullData.batch2_from_timing} to {this.state.fullData.batch2_to_timing}</p>
                <p>Per Worker Wage: {this.state.fullData.batch2_wage}</p>
              </div>
              <div className="batch3">
                <p>{this.state.fullData.batch3_department}</p>
                <p>Timings : {this.state.fullData.batch3_from_timing} to {this.state.fullData.batch3_to_timing}</p>
                <p>Per Worker Wage: {this.state.fullData.batch3_wage}</p>
              </div>
              <div className="batch4">
                <p>{this.state.fullData.batch4_department}</p>
                <p>Timings : {this.state.fullData.batch4_from_timing} to {this.state.fullData.batch4_to_timing}</p>
                <p>Per Worker Wage: {this.state.fullData.batch4_wage}</p>
              </div>
            </div>
            <div onClick={() => {
              this.setState({ openModal: true })
            }} className="materials-and-cost">
              {
                console.log(this.state.openModal)
              }
              <p>Materials Procured and Cost</p>
              {
                this.state.openModal ? (
                  <Modal show={this.state.openModal} onHide={this.handleModal}>
                    <Modal.Header closeButton>
                      <h2>Materials and Cost</h2>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="material-IndividualModal">
                        <h5>{this.state.fullData.material1}</h5>
                        <p>Cost: {this.state.fullData.material1_price}</p>
                      </div>
                      <div className="material-IndividualModal">
                        <h5>{this.state.fullData.material2}</h5>
                        <p>Cost: {this.state.fullData.material2_price}</p>
                      </div>
                      <div className="material-IndividualModal">
                        <h5>{this.state.fullData.material3}</h5>
                        <p>Cost: {this.state.fullData.material3_price}</p>
                      </div>
                      <div className="material-IndividualModal">
                        <h5>{this.state.fullData.material4}</h5>
                        <p>Cost: {this.state.fullData.material4_price}</p>
                      </div>
                      <div className="material-IndividualModal">
                        <h5>{this.state.fullData.material5}</h5>
                        <p>Cost: {this.state.fullData.material5_price}</p>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <h5>Total Amount: {this.state.fullData.materials_cost} INR</h5>
                      <Payment />
                    </Modal.Footer>
                  </Modal>
                ) :
                  <p></p>
              }
            </div>
            <div className="client_images">
              <img src={this.state.fullData.designPhoto} alt="No Design Photo Uploaded" width="500px" height="500px" />
              <img src={this.state.fullData.workPhoto} alt="No Construction Photo Uploaded" width="500px" height="500px" />
              <img src={this.state.fullData.planPhoto} alt="No Plan Uploaded" width="500px" height="500px" />
            </div>
            <button className="logout_client">
              <a href="/">Logout</a>
            </button>
          </div >

        )
      }
    } else {
      return (
        <div className="full_client_home">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Turret+Road:wght@800&display=swap');
            </style>
          <h3 className="welcome_client">Welcome, {this.state.fullData.username}</h3>
          <h4 className="details">DashBoard</h4>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleInputChange} name="projName" type="text" placeholder="Project Name" />
            <textarea onChange={this.handleInputChange} name="projDesc" placeholder="Project Description" />
            <button type="submit">Submit Project</button>
          </form>
          {
            (this.state.updatedProj) ? <p>Project Name and Description submitted</p> : <p>Nothing to Submit</p>
          }
        </div>
      )
    }


  }
}

export default ClientHome;
