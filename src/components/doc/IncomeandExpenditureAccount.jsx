import React from 'react'
import { Link } from "react-router-dom";


function IncomeandExpenditureAccount() {
  return (
    <>
     <section id="mu-page-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-page-breadcrumb-area">
                <h2>Incomeand Expenditure Account</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="">
                      <Link to="/">Home</Link>
                    </a>
                  </li>
                  <li className="active">Incomeand Expenditure Account</li>
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
                  <div className="col-md-12" style={{border:"10px solid"}}>
                    
                    <img
                      src="img/page 3.jpg"
                      alt="img"
                      style={{ width: "100%" }}
                    />
                  </div>
                  {/* <div className="col-md-6" style={{border:"10px solid"}}>
                  <img
                      src="img/FacultyStaffListing1.jpeg"
                      alt="img"
                      style={{ width: "100%" }}
                    />
                  </div> */}
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

export default IncomeandExpenditureAccount