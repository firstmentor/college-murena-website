import React from "react";
import { Link } from "react-router-dom";

function Document() {
  return (
    <>
      {/* <!-- Page breadcrumb --> */}
      <section id="mu-page-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-page-breadcrumb-area">
                <h2>Document College</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="">
                      <Link to="/">Home</Link>
                    </a>
                  </li>
                  <li className="active">Document</li>
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
                  <div className="col-md-3">
                    <Link to="/nctbed" className="btn btn-danger btn-lg">
                      NCT Permission Letter B.Ed
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link to="/nctdeled" className="btn btn-success btn-lg">
                      NCT Permission Letter D.El.Ed
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link to="/FacultyStaffListing" className="btn btn-danger btn-lg">
                    Faculty Staff Listing College
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link to="/collegephoto" className="btn btn-success btn-lg">
                      College Photo
                    </Link>
                  </div>
                </div>
                <br /><br />
                <div className="row">
                  <div className="col-md-3">
                    <Link to="/studentlist" className="btn btn-danger btn-lg">
                      Student List
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link to="#" className="btn btn-success btn-lg">
                      Laboratory and Linrary
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link to="/balancesheet" className="btn btn-danger btn-lg">
                    Balance Sheet
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link to="/incomeandexpenditure" className="btn btn-success btn-lg">
                      Income and Expenditure Account
                    </Link>
                  </div>

                 
                </div>
                <br /><br />

                <div className="row">
                  <div className="col-md-3">
                  <Link to="/receiptandpayment" className="btn btn-danger btn-lg">
                      Receipt and Payment
                    </Link>
                  </div>
                  <div className="col-md-3">
                  <Link to="/afrcletter" className="btn btn-success btn-lg">
                  Afrc Letter 24-27
                    </Link>
                  </div>
                 
                  

                 
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End about us--> */}
    </>
  );
}

export default Document;
