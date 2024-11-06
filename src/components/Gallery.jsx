import { Link } from "react-router-dom";
function Gallery() {
  return (
    <>
      {/* <!-- Page breadcrumb --> */}
      <section id="mu-page-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-page-breadcrumb-area">
                <h2>Gallery</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="">
                      {" "}
                      <Link to="/">Home</Link>
                    </a>
                  </li>
                  <li className="active">Gallery</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End breadcrumb --> */}

      {/* <!-- Start gallery  --> */}
      <section id="mu-gallery">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-gallery-area">
                {/* <!-- start title --> */}
                <div className="mu-title">
                  <h2>Some Moments</h2>
                </div>
                {/* <!-- end title --> */}
                {/* <!-- start gallery content --> */}
                <div className="mu-gallery-content">
                  {/* <!-- Start gallery menu --> */}
                  <div className="mu-gallery-top">
                    <ul>
                      <li className="filter active" data-filter="all">
                        All
                      </li>
                      <li className="filter" data-filter=".lab">
                        Computer Lab
                      </li>
                      <li className="filter" data-filter=".c">
                        className Room
                      </li>
                      <li className="filter" data-filter=".s">
                        Seminar Hall
                      </li>
                      <li className="filter" data-filter=".abc">
                        Library
                      </li>
                      <li className="filter" data-filter=".o">
                        Office
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End gallery menu --> */}
                  <div className="mu-gallery-body">
                    <ul id="mixit-container" className="row">
                      {/* <!-- start single gallery image --> */}
                      <li className="col-md-4 col-sm-6 col-xs-12 mix lab">
                        <div className="mu-single-gallery">
                          <div className="mu-single-gallery-item">
                            <div className="mu-single-gallery-img">
                              <a href="#">
                                <img src="img/img3.jpg" />
                              </a>
                            </div>
                            <div className="mu-single-gallery-info">
                              <div className="mu-single-gallery-info-inner">
                                <h4>Image Title</h4>
                                <p>Computer Lab</p>
                                <a
                                  href="http://vikasedugwl.com/assets/image/gallery/big/1.jpeg"
                                  data-fancybox-group="gallery"
                                  className="fancybox"
                                >
                                  <span className="fa fa-eye"></span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* <!-- start single gallery image --> */}
                      <li className="col-md-4 col-sm-6 col-xs-12 mix c">
                        <div className="mu-single-gallery">
                          <div className="mu-single-gallery-item">
                            <div className="mu-single-gallery-img">
                              <a href="#">
                                <img
                                  alt="img"
                                  src="http://vikasedugwl.com/assets/image/gallery/big/3.jpeg"
                                />
                              </a>
                            </div>
                            <div className="mu-single-gallery-info">
                              <div className="mu-single-gallery-info-inner">
                                <h4>Image Title</h4>
                                <p>className Room</p>
                                <a
                                  href="http://vikasedugwl.com/assets/image/gallery/big/3.jpeg"
                                  data-fancybox-group="gallery"
                                  className="fancybox"
                                >
                                  <span className="fa fa-eye"></span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* <!-- start single gallery image --> */}
                      <li className="col-md-4 col-sm-6 col-xs-12 mix lab">
                        <div className="mu-single-gallery">
                          <div className="mu-single-gallery-item">
                            <div className="mu-single-gallery-img">
                              <a href="#">
                                <img
                                  alt="img"
                                  src="http://vikasedugwl.com/assets/image/gallery/big/2.jpeg"
                                />
                              </a>
                            </div>
                            <div className="mu-single-gallery-info">
                              <div className="mu-single-gallery-info-inner">
                                <h4>Image Title</h4>
                                <p>Computer Lab</p>
                                <a
                                  href="http://vikasedugwl.com/assets/image/gallery/big/2.jpeg"
                                  data-fancybox-group="gallery"
                                  className="fancybox"
                                >
                                  <span className="fa fa-eye"></span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* <!-- start single gallery image --> */}
                      <li className="col-md-4 col-sm-6 col-xs-12 mix c">
                        <div className="mu-single-gallery">
                          <div className="mu-single-gallery-item">
                            <div className="mu-single-gallery-img">
                              <a href="#">
                                <img
                                  alt="img"
                                  src="http://vikasedugwl.com/assets/image/gallery/big/4.jpeg"
                                />
                              </a>
                            </div>
                            <div className="mu-single-gallery-info">
                              <div className="mu-single-gallery-info-inner">
                                <h4>Image Title</h4>
                                <p>className Room</p>
                                <a
                                  href="http://vikasedugwl.com/assets/image/gallery/big/4.jpeg"
                                  data-fancybox-group="gallery"
                                  className="fancybox"
                                >
                                  <span className="fa fa-eye"></span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* <!-- start single gallery image --> */}
                      <li className="col-md-4 col-sm-6 col-xs-12 mix others">
                        <div className="mu-single-gallery">
                          <div className="mu-single-gallery-item">
                            <div className="mu-single-gallery-img">
                              <a href="#">
                                <img
                                  alt="img"
                                  src="http://vikasedugwl.com/assets/image/gallery/big/5.jpeg"
                                />
                              </a>
                            </div>
                            <div className="mu-single-gallery-info">
                              <div className="mu-single-gallery-info-inner">
                                <h4>Image Title</h4>
                                <p>Computer Lab</p>
                                <a
                                  href="http://vikasedugwl.com/assets/image/gallery/big/5.jpeg"
                                  data-fancybox-group="gallery"
                                  className="fancybox"
                                >
                                  <span className="fa fa-eye"></span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* <!-- start single gallery image --> */}
                      <li className="col-md-4 col-sm-6 col-xs-12 mix c">
                        <div className="mu-single-gallery">
                          <div className="mu-single-gallery-item">
                            <div className="mu-single-gallery-img">
                              <a href="#">
                                <img
                                  alt="img"
                                  src="http://vikasedugwl.com/assets/image/gallery/big/12345.JPG"
                                />
                              </a>
                            </div>
                            <div className="mu-single-gallery-info">
                              <div className="mu-single-gallery-info-inner">
                                <h4>Image Title</h4>
                                <p>className Room</p>
                                <a
                                  href="http://vikasedugwl.com/assets/image/gallery/big/12345.JPG"
                                  data-fancybox-group="gallery"
                                  className="fancybox"
                                >
                                  <span className="fa fa-eye"></span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* <!-- start single gallery image --> */}
                      <li className="col-md-4 col-sm-6 col-xs-12 mix s">
                        <div className="mu-single-gallery">
                          <div className="mu-single-gallery-item">
                            <div className="mu-single-gallery-img">
                              <a href="#">
                                <img
                                  alt="img"
                                  src="http://vikasedugwl.com/assets/image/gallery/big/1234.JPG"
                                />
                              </a>
                            </div>
                            <div className="mu-single-gallery-info">
                              <div className="mu-single-gallery-info-inner">
                                <h4>Image Title</h4>
                                <p>Seminar Hall</p>
                                <a
                                  href="http://vikasedugwl.com/assets/image/gallery/big/1234.JPG"
                                  data-fancybox-group="gallery"
                                  className="fancybox"
                                >
                                  <span className="fa fa-eye"></span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* <!-- start single gallery image --> */}
                      <li className="col-md-4 col-sm-6 col-xs-12 mix s">
                        <div className="mu-single-gallery">
                          <div className="mu-single-gallery-item">
                            <div className="mu-single-gallery-img">
                              <a href="#">
                                <img
                                  alt="img"
                                  src="http://vikasedugwl.com/assets/image/gallery/big/8.jpeg"
                                />
                              </a>
                            </div>
                            <div className="mu-single-gallery-info">
                              <div className="mu-single-gallery-info-inner">
                                <h4>Image Title</h4>
                                <p>Seminar Hall</p>
                                <a
                                  href="http://vikasedugwl.com/assets/image/gallery/big/8.jpeg"
                                  data-fancybox-group="gallery"
                                  className="fancybox"
                                >
                                  <span className="fa fa-eye"></span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* <!-- start single gallery image --> */}
                      <li className="col-md-4 col-sm-6 col-xs-12 mix lab">
                        <div className="mu-single-gallery">
                          <div className="mu-single-gallery-item">
                            <div className="mu-single-gallery-img">
                              <a href="#">
                                <img
                                  alt="img"
                                  src="http://vikasedugwl.com/assets/image/gallery/big/5.jpeg"
                                />
                              </a>
                            </div>
                            <div className="mu-single-gallery-info">
                              <div className="mu-single-gallery-info-inner">
                                <h4>Image Title</h4>
                                <p>Computer Lab</p>
                                <a
                                  href="http://vikasedugwl.com/assets/image/gallery/big/5.jpeg"
                                  data-fancybox-group="gallery"
                                  className="fancybox"
                                >
                                  <span className="fa fa-eye"></span>
                                </a>
                                <a href="#" className="aa-link">
                                  <span className="fa fa-link"></span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="col-md-4 col-sm-6 col-xs-12 mix abc">
                        <div className="mu-single-gallery">
                          <div className="mu-single-gallery-item">
                            <div className="mu-single-gallery-img">
                              <a href="#">
                                <img
                                  alt="img"
                                  src="http://vikasedugwl.com/assets/image/gallery/big/12345678.JPG"
                                />
                              </a>
                            </div>
                            <div className="mu-single-gallery-info">
                              <div className="mu-single-gallery-info-inner">
                                <h4>Image Title</h4>
                                <p>Computer Lab</p>
                                <a
                                  href="http://vikasedugwl.com/assets/image/gallery/big/12345678.JPG"
                                  data-fancybox-group="gallery"
                                  className="fancybox"
                                >
                                  <span className="fa fa-eye"></span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="col-md-4 col-sm-6 col-xs-12 mix o">
                        <div className="mu-single-gallery">
                          <div className="mu-single-gallery-item">
                            <div className="mu-single-gallery-img">
                              <a href="#">
                                <img
                                  alt="img"
                                  src="http://vikasedugwl.com/assets/image/gallery/big/o.JPG"
                                />
                              </a>
                            </div>
                            <div className="mu-single-gallery-info">
                              <div className="mu-single-gallery-info-inner">
                                <h4>Image Title</h4>
                                <p>Computer Lab</p>
                                <a
                                  href="assets/img/gallery/big/9.jpg"
                                  data-fancybox-group="gallery"
                                  className="fancybox"
                                >
                                  <span className="fa fa-eye"></span>
                                </a>
                                <a href="#" className="aa-link">
                                  <span className="fa fa-link"></span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 mix o">
                        <div className="mu-single-gallery">
                          <div className="mu-single-gallery-item">
                            <div className="mu-single-gallery-img">
                              <a href="#">
                                <img
                                  alt="img"
                                  src="http://vikasedugwl.com/assets/image/gallery/big/p.JPG"
                                />
                              </a>
                            </div>
                            <div className="mu-single-gallery-info">
                              <div className="mu-single-gallery-info-inner">
                                <h4>Image Title</h4>
                                <p>Computer Lab</p>
                                <a
                                  href="http://vikasedugwl.com/assets/image/gallery/big/p.JPG"
                                  data-fancybox-group="gallery"
                                  className="fancybox"
                                >
                                  <span className="fa fa-eye"></span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- end gallery content --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End gallery  --> */}
    </>
  );
}

export default Gallery;
