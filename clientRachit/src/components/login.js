import React, { Component } from 'react';
import axios from 'axios';
class register extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       email : "" ,
       password: ""
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = async (e)=>{
    e.preventDefault();
    console.log("asdas");
    const user = {
      email : this.state.email,
      password : this.state.password
    };
    const a = await axios.post('http://localhost:4000/user/login' , user);
    const data = a.data;
    console.log(data);
    if( data == "correct"){
      window.location = "/dashboard";
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
                  <h2>Login</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1"><h2><font color="white">Email Address</font></h2></label>
            <input type="email" className="form-control" name= "email" value={this.state.email} onChange={this.onChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted"><h6>We'll never share your email with anyone else.</h6></small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1"><h2><font color="white">Password</font></h2></label>
            <input type="password" className="form-control"name="password" value={this.state.password} onChange={this.onChange} id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input"  id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Keep Me Logged In</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <br/>
          <br/>
        </form>
        </div>
      </section>
          );
    }
}

export default register;
