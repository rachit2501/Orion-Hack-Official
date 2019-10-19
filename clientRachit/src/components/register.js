import React, { Component } from 'react';
import axios from 'axios';

class register extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "",
         email : "",
         password: "" 
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

      axios.post('http://localhost:4000/user' , user);
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
                  <h2>Register</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <form onSubmit= {this.onSubmit}>
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Username</label>
        <input type="text" className="form-control" name="name" id="exampleInputEmail1" value={this.state.name} onChange={this.onChange} aria-describedby="emailHelp" placeholder="Enter Username" />
        <small id="emailHelp" className="form-text text-muted">Your username is unique to you</small>
      </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" name="email" id="exampleInputEmail1" value={this.state.email} onChange={this.onChange} aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={this.onChange} placeholder="Password" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
        </form>
        </div>
      </section>
          );
    }
}

export default register;
