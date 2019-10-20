import React, { Component } from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';
import {Route,Link,Redirect , BrowserRouter as Router} from 'react-router-dom';

class editProfile extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Rachit",
         height : "",
         weight: "" 
      }
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit = (e)=>{
      e.preventDefault();
      const user = {
        name: this.state.name , 
        email : this.state.email,
        password : this.state.password
      }

      if(axios.post('http://localhost:4000/user' , user)){
        window.location = "/login";
      }

    }

    onChange(e)
    { 
      this.setState({[e.target.name] : e.target.value});
    }
    render() {
        return (
          <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2>Edit Profile</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <form onSubmit= {this.onSubmit}>
        <div className="form-group">
        <label htmlFor="exampleInputEmail1"><h2><font color="white">Username</font></h2></label>
        <input type="text" className="form-control" name="name" id="exampleInputEmail1" value={this.state.name} onChange={this.onChange} aria-describedby="emailHelp" placeholder="Enter Username" />
        <small id="emailHelp" className="form-text text-muted"><h6>Your username is unique to you</h6></small>
      </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1"><h2><font color="white">Height</font></h2></label>
            <input type="number" className="form-control" name="email" id="exampleInputEmail1" value={this.state.email} onChange={this.onChange} aria-describedby="emailHelp" placeholder="Enter Height" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1"><h2><font color="white">Weight</font></h2></label>
            <input type="number" name="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={this.onChange} placeholder="Enter Weight" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1"><h2><font color="white">Age</font></h2></label>
            <input type="number" name="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={this.onChange} placeholder="Enter Age" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1"><h2><font color="white">Blood Group</font></h2></label>
            <input type="text" name="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={this.onChange} placeholder="Enter Blood Group" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1"><h2><font color="white">Identification Marks</font></h2></label>
            <input type="text" name="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={this.onChange} placeholder="Enter Identification Marks" />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit Profile</button>
        </form>
        </div>
      </section>
          );
    }
}

export default editProfile;
