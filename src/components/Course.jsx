import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      {/* <!-- Page breadcrumb --> */}
      <section id="mu-page-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-page-breadcrumb-area">
                <h2>Course</h2>
                <ol className="breadcrumb">
                  <li>
                    <a>
                      {" "}
                      <Link to="/">Home</Link>
                    </a>
                  </li>
                  <li className="active">Course</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End breadcrumb --> */}

      <section id="mu-course-content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-course-content-area">
                <div className="row">
                  <div className="col-md-9">
                    {/* <!-- start course content container --> */}
                    <div
                      className="mu-course-container"
                    >
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="mu-latest-course-single">
                            <figure className="mu-latest-course-img">
                              <a>
                                <img src="img/img3.jpg" />
                              </a>
                              <figcaption className="mu-latest-course-imgcaption">
                                <a href="#"> B.ed (bechlor of education)</a>
                              </figcaption>
                            </figure>
                            <div className="mu-latest-course-single-content">
                              <h4>
                                <a>
                                  <b>B.ed (bechlor of education)</b>
                                </a>
                              </h4>
                              <p>
                                A Bachelor of Education (B.Ed) is an
                                undergraduate degree designed to prepare
                                students for a career in teaching. The program
                                typically covers various aspects of education,
                                including teaching methods, curriculum
                                development, educational psychology, and
                                classroom management.Course duration two years.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="mu-latest-course-single">
                            <figure className="mu-latest-course-img">
                              <a href="#">
                                <img src="img/img2.jpg" />
                              </a>
                              <figcaption className="mu-latest-course-imgcaption">
                                <a href="#">
                                  D.el.ed. (Diploma in elementary education){" "}
                                </a>
                              </figcaption>
                            </figure>
                            <div className="mu-latest-course-single-content">
                              <h4>
                                <a href="#">
                                  <b>
                                    {" "}
                                    D.el.ed. (Diploma in elementary education)
                                  </b>
                                </a>
                              </h4>
                              <p>
                                A Diploma in Elementary Education (D.El.Ed) is a
                                professional course designed to prepare
                                individuals for teaching in elementary schools,
                                typically covering grades from pre-primary to
                                upper primary levels. The program focuses on
                                equipping future educators with the necessary
                                skills and knowledge to effectively teach young
                                learners.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end course content container --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Course;
