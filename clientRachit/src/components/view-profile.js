import React, { Component } from 'react'

class viewProfile extends Component {
    render() {
        return (
            <section className="breadcrumb breadcrumb_bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="breadcrumb_iner text-center">
                    <div className="breadcrumb_iner_item">
                      <h2>Your Profile</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
            <div className="card justify-content-center" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
            </div>
          </section>
        )
    }
}

export default viewProfile;
