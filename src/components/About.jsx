import { Link } from "react-router-dom";
function About() {
  return (
    <>
      {/* <!-- Page breadcrumb --> */}
      <section id="mu-page-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-page-breadcrumb-area">
                <h2>About Us</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="">
                      <Link to="/">Home</Link>
                    </a>
                  </li>
                  <li className="active">About Us</li>
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
                  <div className="col-lg-6 col-md-6">
                    <div className="mu-about-us-left">
                      {/* <!-- Start Title --> */}
                      <div className="mu-title">
                        <h2>About- B.ed (bechlor of education)</h2>
                      </div>
                      {/* <!-- End Title --> */}
                      <p style={{ textAlign: "justify", marginBottom: "50px" }}>
                        The Bachelor of Education (B.Ed) is a undergraduate
                        degree program. It prepares students to become effective
                        teachers and educators. The program combines theoretical
                        foundations with practical teaching experiences
                        <br />
                        Elementary Education Secondary Education Special
                        Education Subject-specific specializations (e.g.,
                        Mathematics, Science)
                        <br />
                        Teaching methodologies Classroom management Lesson
                        planning Assessment and evaluation Communication and
                        interpersonal skills
                        <br />
                        Teaching positions in government and private schools
                        Education administration and management Curriculum
                        development and research Education policy and planning
                        <br />
                        Develop teaching and learning skills Enhance subject
                        matter expertise Foster critical thinking and
                        problem-solving Build leadership and management
                        abilities
                      </p>
                    </div>

                    <div className="mu-about-us-left ">
                      {/* <!-- Start Title --> */}
                      <div className="mu-title">
                        <h2>
                          About- D.el.ed. (Diploma in elementary education)
                        </h2>
                      </div>
                      {/* <!-- End Title --> */}
                      <p style={{ textAlign: "justify" }}>
                        The Diploma in Elementary Education (D.El.Ed) is a
                        teacher training program. It prepares students to teach
                        children in elementary schools (Classes 1-8). Duration:
                        2 years (full-time)
                        <br />
                        Theory papers (40-50%): education, psychology,
                        philosophy Practical papers (30-40%): teaching methods,
                        school internship Electives: special education, guidance
                        and counseling
                        <br />
                        Elementary Education Subject-specific specializations
                        (e.g., Mathematics, Science)
                        <br />
                        Teaching methodologies ,Classroom management, Lesson
                        planning Assessment and evaluation Communication and
                        interpersonal skills
                        <br />
                        Teaching positions in government and private elementary
                        schools Education administration and management
                        Curriculum development and research
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mu-about-us-right">
                      <img
                        src="img/logo.jpg"
                        alt="img"
                        style={{ width: "100%", height: "300px" }}
                      />
                    </div>
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

export default About;
