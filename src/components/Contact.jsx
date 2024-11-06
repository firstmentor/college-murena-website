import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      {/* <!-- Page breadcrumb --> */}
      <section id="mu-page-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-page-breadcrumb-area">
                <h2>Contact Us</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="">
                      <Link to="/">Home</Link>
                    </a>
                  </li>
                  <li className="active">Contact Us</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End breadcrumb --> */}

      {/* <!-- Start contact  --> */}
      <section id="mu-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-contact-area">
                {/* <!-- start title --> */}
                <div className="mu-title">
                  <h2>Get in Touch</h2>
                  <p></p>
                </div>
                {/* <!-- end title --> */}
                {/* <!-- start contact content --> */}
                <div className="mu-contact-content">
                  <div className="row">
                    <div
                      className="col-md-6"
                      style={{
                        boxShadow: "1px 1px 12px #020001",
                        borderRadius: "10px",
                      }}
                    >
                      <div className="mu-contact-left">
                        <form className="contactform">
                          <p
                            className="comment-form-author"
                            style={{ marginTop: "50px" }}
                          >
                            <label>
                              Name <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              required="required"
                              size="30"
                              value=""
                              name="author"
                            />
                          </p>
                          <p className="comment-form-email">
                            <label>
                              Email <span className="required">*</span>
                            </label>
                            <input
                              type="email"
                              required="required"
                              aria-required="true"
                              value=""
                              name="email"
                            />
                          </p>
                          <p className="comment-form-url">
                            <label>Subject</label>
                            <input type="text" name="subject" />
                          </p>
                          <p className="comment-form-comment">
                            <label>Message</label>
                            <textarea
                              required="required"
                              aria-required="true"
                              rows="8"
                              cols="45"
                              name="comment"
                            ></textarea>
                          </p>
                          <p
                            className="form-submit"
                            style={{ marginBottom: "50px" }}
                          >
                            <input
                              type="submit"
                              value="Send Message"
                              className="mu-post-btn"
                              name="submit"
                            />
                          </p>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mu-contact-right">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28603.155411358108!2d77.78546117256121!3d26.346101777291448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3971491511ce4e4d%3A0x1a6fd4316ab802db!2sJoura%2C%20Madhya%20Pradesh%20476221!5e0!3m2!1sen!2sin!4v1728545050468!5m2!1sen!2sin"
                          width="465"
                          height="400"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Google Map Embed"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end contact content --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End contact  --> */}
    </>
  );
}

export default Contact;
