

function Footer() {
  return (
    <>
      {/* <!-- Start footer --> */}
      <footer id="mu-footer">
        <div className="mu-footer-top">
          <div className="container">
            <div className="mu-footer-top-area">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="mu-footer-widget">
                    <h4>Information</h4>
                    <ul>
                      <li>
                        <a href="about.php">About Us</a>
                      </li>
                      <li>
                        <a href="gallery.php">Gallery</a>
                      </li>
                      <li>
                        <a href="courses.php">Courses</a>
                      </li>
                      <li>
                        <a href="contactus.php">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="mu-footer-widget">
                    <h4>Student Help</h4>
                    <ul>
                      <li>
                        <a href="#">Get Started</a>
                      </li>
                      <li>
                        <a href="#">My Questions</a>
                      </li>
                      <li>
                        <a href="#">Download Files</a>
                      </li>
                      <li>
                        <a href="#">Latest Course</a>
                      </li>
                      <li>
                        <a href="#">Academic News</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="mu-footer-widget">
                    <h4>News letter</h4>
                    <p>Get latest update, news & academic offers</p>
                    <form className="mu-subscribe-form">
                      <input type="email" placeholder="Type your Email" />
                      <button className="mu-subscribe-btn" type="submit">
                        Subscribe!
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div className="mu-footer-widget">
                    <h4>Contact</h4>
                    <address>
                      <p>
                        College add- Joura khurd morena
                        <br />
                        Run by- pt. Shyama charan upadhyay shiksha evam samaj
                        kalyan samiti morena
                      </p>
                      <p>Phone: </p>
                      <p>Email: skdec11245@gmail.com </p>
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end footer top --> */}
        {/* <!-- start footer bottom --> */}
        <div className="mu-footer-bottom">
          <div className="container">
            <div className="mu-footer-bottom-area">
              <p>&copy; All Right Reserved. Designed by PNInfosys</p>
            </div>
          </div>
        </div>
        {/* <!-- end footer bottom --> */}
      </footer>
      {/* <!-- End footer --> */}
    </>
  );
}

export default Footer