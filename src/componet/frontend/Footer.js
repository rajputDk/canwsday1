import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        {/* <!----**********FOOTER  PART START***********--> */}
          <footer className="footersection"  id="footerdiv">
              <div className="container">
                <div className="row">
                <div className="col-lg-4 col-md-6 col-12 footIIdiv">
                  <div className="text-center">
                    <h3>About Deepak Techniqual</h3>
                    <p>Deepak techniqual Developer India’s No 1 Web design And Developer In Noida,India established In 2021. At Deepak Techniqual Developer
                       Noida we provide unique and Best quality websites to customers at a very affordable price.</p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 footIIdiv">
                  <div className="text-center">
                    <h3>Navigation Links</h3>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/'}>Service</Link></li>
                    <li><Link to={'/'}>About</Link></li>
                    <li><Link to={'/'}>Contact</Link></li>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 footIIdiv">
                  <div className="text-center">
                    <h3>Subscribe</h3>
                    <div>
                  <p className="text-center pt-3">Thanku for subscrive my channel</p>
                 </div>
                  <div className="row">
                    <div className="col-lg-12  col-12 ">
                      <div className="input-group mb-3">
                        <input type="text" className="form-control  emailinput" placeholder="Your Email"/>
                        <div className="input-group-append verify">
                          <span className="input-group-text"><Link to={'/'}>Subscribe</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="last_p text-center">
                <Link to={'/'}><i className="fa fa-facebook-square "></i></Link>
                <Link to={'/'}><i className="fa fa-whatsapp"></i></Link>
                <Link to={'/'}><i className="fa fa-twitter"></i></Link>
                <Link to={'/'}><i className="fa fa-phone"></i></Link>
                <span>+919973814374</span>
              </div>
              <div>
                <i className="fa fa-arrow-up" onclick="topFunction()" id="myBtn"></i>
              </div>
              <div className="footercopyright text-center ">
                <p> @2023@Created by Deepak Singh Copy Right|| @124..</p>
              </div>
              </div>
          </footer>

{/* <!----**********FOOTER PART  END***********--> */}
    </>
  )
}

export default Footer