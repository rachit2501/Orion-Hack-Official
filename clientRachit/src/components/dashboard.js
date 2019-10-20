import React, { Component } from 'react'
import ReactDom from 'react-dom';
import {Route,Link,Redirect , BrowserRouter as Router} from 'react-router-dom';

class dashboard extends Component {

    render() {
            return (
                <section className="breadcrumb breadcrumb_bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="breadcrumb_iner text-center">
                    <div className="breadcrumb_iner_item">
                      <h2>Dashboard</h2>
                      <h4>Welcome Rachit</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
            <Link to="/dashboard/edit-profile"><button type="button" class="btn btn-primary">Edit Profile</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/dashboard/view-profile"><button type="button" class="btn btn-primary">View Profile</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-primary">View Medical History</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <br></br>
            <br></br>
            </div>
          </section>
            )
    }
}

export default dashboard
