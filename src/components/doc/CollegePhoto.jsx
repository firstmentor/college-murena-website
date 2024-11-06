import React from 'react'
import { Link } from "react-router-dom";

function CollegePhoto() {
  return (
   <>
   <section id="mu-page-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-page-breadcrumb-area">
                <h2>College Photo</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="">
                      <Link to="/">Home</Link>
                    </a>
                  </li>
                  <li className="active">College Photo</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End breadcrumb --> */}

      <section id="mu-about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-about-us-area">
                <div className="row">
                  <div className="col-md-12 " style={{border:"10px solid"}}>
                    
                    <img
                      src="img/college.jpg"
                      alt="img"
                      style={{ width: "100%" }}
                    />
                  </div>
                  
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
   
   </>
  )
}

export default CollegePhoto