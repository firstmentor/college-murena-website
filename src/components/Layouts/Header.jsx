import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Toggle navbar collapse state
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed); // Toggle between true and false
  };

  // Close navbar when a nav link is clicked
  const handleNavLinkClick = () => {
    setIsCollapsed(true); // Collapse the navbar after clicking a link
  };

  return (
    <>
      {/* Start menu --> */}
      <section id="mu-menu">
        <nav className="navbar navbar-default" role="navigation">
          <div className="container">
            <div className="navbar-header">
              {/* Mobile View Collapsed Button */}
              <button
                type="button"
                className="navbar-toggle collapsed"
                onClick={toggleNavbar}
                aria-expanded={!isCollapsed}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              {/* Logo */}
              <a className="navbar-brand" href="/">
                <img
                  src="img/logo.jpg"
                  style={{ width: "250px", height: "95px", marginTop: "-25px" }}
                  alt="Logo"
                />
              </a>
            </div>

            {/* Navbar collapse */}
            <div
              id="navbar"
              className={`navbar-collapse ${isCollapsed ? "collapse" : "in"}`}
            >
              <ul
                id="top-menu"
                className="nav navbar-nav navbar-right main-nav"
              >
                <li className="active">
                  <Link to="/" onClick={handleNavLinkClick}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/course" onClick={handleNavLinkClick}>
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/Gallery" onClick={handleNavLinkClick}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus" onClick={handleNavLinkClick}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={handleNavLinkClick}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/document" onClick={handleNavLinkClick}>
                  Document College
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      {/* End menu */}
    </>
  );
}

export default Header;
