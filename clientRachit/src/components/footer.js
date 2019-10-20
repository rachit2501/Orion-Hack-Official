import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer className="footer_part">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div className="single_footer_part">
                  <a href="index.html" className="footer_logo_iner"> <img src="img/footer_logo.png" alt="#" /> </a>
                  <h4>About Us</h4>
                  <p>Just a few dreamers of a disease free World
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="single_footer_part">
                  <h4>Contact Info</h4>
                  <p>Address : Patiala , India</p>
                  <p>Phone : +91 4546764523</p>
                  <p>Email : booleanPandits@booleanPandits.com</p>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="single_footer_part">
                  <h4>Newsletter</h4>
                  <p>Lets get this world rid of all the diseases.
                  </p>
                  <div id="mc_embed_signup">
                    <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="subscribe_form relative mail_part">
                      <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address" className="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = ' Email Address '" />
                      <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm"><i className="far fa-paper-plane" /></button>
                      <div className="mt-10 info" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-8">
                <div className="copyright_text">
                  <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer_icon social_icon">
                  <ul className="list-unstyled">
                    <li><a href="#" className="single_social_icon"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#" className="single_social_icon"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#" className="single_social_icon"><i className="fas fa-globe" /></a></li>
                    <li><a href="#" className="single_social_icon"><i className="fab fa-behance" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
    )
  }
}

export default Footer;