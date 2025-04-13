import './home.css';
import { Container, Row, Col } from 'react-bootstrap';
import error from '../../assets/logo/icon_error.png';

function Contact() {

    return (
        <div>
            <div className='bg-img text-center text-white img-fluid' style={{ height: '35rem' }}>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className='aa d-flex justify-content-center' style={{ paddingTop: '15rem' }}>
                        <a href={'home'} className='text-decoration-none fw-bold'>HOME <i className="fa-solid fa-chevron-right pe-2 pb-3"></i></a>
                        <h6 className='pt-1 ps-3 fw-bold' style={{ color: '#999999' }}>CONTACT <i className="fa-solid fa-chevron-right pe-2 pb-3"></i></h6>
                    </div>
                    <h1 className='fw-bold' style={{ fontSize: '4rem' }}>Contact Us</h1>
                </div>
            </div>

            <div className='py-5'>
                <Container className='py-5'>
                    <Row className='contact'>
                        <Col lg={6} md={12}>
                            <h2>Contact us</h2>
                            <p style={{ color: '#999999' }}>We're open for any suggestion or just to have a chat</p>
                            <Row className='pb-4 pt-3'>
                                <Col lg={4} md={12}>
                                    <h6 className='text-uppercase' style={{ fontSize: '0.8rem' }}>Address:</h6>
                                    <h5 className='fw-light'>198 West 21th Street, Suite 721 New York NY 10016</h5>
                                </Col>
                                <Col lg={4} md={12}>
                                    <h6 className='text-uppercase' style={{ fontSize: '0.8rem' }}>Email:</h6>
                                    <h6><a href='mailto:info@yoursite.com' className='text-decoration-none text-dark'>info@yoursite.com</a></h6>
                                </Col>
                                <Col lg={4} md={12}>
                                    <h6 className='text-uppercase' style={{ fontSize: '0.8rem' }}>Phone:</h6>
                                    <h6><a href='tel://1234567920/' className='text-decoration-none text-dark'>+ 1235 2355 98</a></h6>
                                </Col>
                            </Row>
                            <form style={{ fontSize: '0.9rem', color: '#999999' }}>
                                <Row>
                                    <Col lg={12} className='border-bottom'>
                                        <input type="text" placeholder="Name" className='py-2' />
                                    </Col>
                                    <Col lg={12} className='border-bottom'>
                                        <input type="email" placeholder="Email" className='py-2' />
                                    </Col>
                                    <Col lg={12} className='border-bottom'>
                                        <input type="text" placeholder="Subject" className='py-2' />
                                    </Col>
                                    <Col lg={12} className='border-bottom'>
                                        <textarea placeholder="Create a message here" className='py-2' style={{ border: 'none', outline: '0', width: '100%', height: '5rem' }} />
                                    </Col>
                                    <Col lg={3}>
                                        <button class="btn text-uppercase text-white rounded-0" style={{ backgroundColor: '#5ea51d', fontSize: '0.9rem' }}>send message</button>
                                    </Col>
                                </Row>
                            </form>
                            <h5 className='pt-5 pb-1'>Follow us here</h5>
                            <div className='pb-5'>
                                <a href='#' className='text-decoration-none pe-3 text-uppercase text-dark' style={{ fontSize: '0.9rem' }}>Facebook</a>
                                <a href='#' className='text-decoration-none pe-3 text-uppercase text-dark' style={{ fontSize: '0.9rem' }}>Twitter</a>
                                <a href='#' className='text-decoration-none pe-3 text-uppercase text-dark' style={{ fontSize: '0.9rem' }}>Instagram</a>
                                <a href='#' className='text-decoration-none pe-3 text-uppercase text-dark' style={{ fontSize: '0.9rem' }}>Dribbble</a>
                            </div>
                        </Col>
                        <Col lg={6} md={12} className='text-center' style={{ backgroundColor: '#f8f9fa', paddingBlock: '10rem' }}>
                            <img src={error} alt="" className='img-fluid pt-5' />
                            <h4 className='py-2 pb-3'>Sorry! Something went wrong.</h4>
                            <h6 style={{ fontSize: '0.7rem' }}>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>

            <footer className='py-5' style={{ backgroundColor: '#06112a' }}>
                <Container className='py-5'>
                    <Row className='pb-5 pt-3'>
                        <Col lg={3} md={6} sm={12}>
                            <a href='#' className='text-decoration-none text-white'><h4>Oakberry<br /><h6 className='text-uppercase' style={{ fontSize: '0.65rem' }}>Real Estate Agency</h6></h4></a>
                            <p className='pt-4' style={{ color: '#999999' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <div>
                                <a href='#' className='text-decoration-none'><i className="fa-brands fa-twitter p-3 me-4 text-white rounded-circle" style={{ backgroundColor: '#5ea51d', fontSize: '0.9rem' }}></i></a>
                                <a href='#' className='text-decoration-none'><i className="fa-brands fa-facebook-f p-3 me-4 text-white rounded-circle" style={{ backgroundColor: '#5ea51d', fontSize: '0.9rem' }}></i></a>
                                <a href='#' className='text-decoration-none'><i className="fa-brands fa-instagram  p-3 me-4 text-white rounded-circle" style={{ backgroundColor: '#5ea51d', fontSize: '0.9rem' }}></i></a>
                            </div>
                        </Col>
                        <Col lg={2} md={6} sm={12} className='aa pb-5'>
                            <h5 className='pb-4 text-white'>Offers</h5>
                            <a href='#' className='text-decoration-none'><i className="fa-solid fa-chevron-right pe-2 pb-3"></i>Properties</a><br />
                            <a href='#' className='text-decoration-none'><i className="fa-solid fa-chevron-right pe-2 pb-3"></i>Agents</a><br />
                            <a href='#' className='text-decoration-none'><i className="fa-solid fa-chevron-right pe-2 pb-3"></i>Locations</a><br />
                            <a href='#' className='text-decoration-none'><i className="fa-solid fa-chevron-right pe-2 pb-3"></i>Clients Support</a>
                        </Col>
                        <Col lg={2} md={6} sm={12} className='aa pb-5'>
                            <h5 className='pb-4 text-white'>Company</h5>
                            <a href='#' className='text-decoration-none'><i className="fa-solid fa-chevron-right pe-2 pb-3"></i>Home</a><br />
                            <a href='#' className='text-decoration-none'><i className="fa-solid fa-chevron-right pe-2 pb-3"></i>About</a><br />
                            <a href='#' className='text-decoration-none'><i className="fa-solid fa-chevron-right pe-2 pb-3"></i>Blog</a><br />
                            <a href='#' className='text-decoration-none'><i className="fa-solid fa-chevron-right pe-2 pb-3"></i>Contact Us</a>
                        </Col>
                        <Col lg={2} md={6} sm={12} className='aa pb-5'>
                            <h5 className='pb-4 text-white'>Quick Links</h5>
                            <a href='#' className='text-decoration-none'><i className="fa-solid fa-chevron-right pe-2 pb-3"></i>Terms & Conditions</a><br />
                            <a href='#' className='text-decoration-none'><i className="fa-solid fa-chevron-right pe-2 pb-3"></i>User's Guide</a><br />
                            <a href='#' className='text-decoration-none'><i className="fa-solid fa-chevron-right pe-2 pb-3"></i>Support Center</a><br />
                            <a href='#' className='text-decoration-none'><i className="fa-solid fa-chevron-right pe-2 pb-3"></i>Press Info</a>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <h5 className='pb-4 text-white'>Have a Questions?</h5>
                            <div className='d-flex'>
                                <i className="fa-solid fa-map" style={{ color: '#5ea51d' }}></i>
                                <h6 className='ps-4' style={{ color: '#999999' }}>203 Fake St. Mountain View, San Francisco, California, USA</h6>
                            </div>
                            <div className='d-flex pt-2'>
                                <a href='#' className='text-decoration-none'><i className="fa-solid fa-phone" style={{ color: '#5ea51d' }}></i></a>
                                <a href='#' className='text-decoration-none'><h6 className='ps-4 pt-1' style={{ color: '#999999' }}>	+2 392 3929 210</h6></a>
                            </div>
                            <div className='d-flex pt-3'>
                                <a href='#' className='text-decoration-none'><i className="fa-solid fa-paper-plane" style={{ color: '#5ea51d' }}></i></a>
                                <a href='#' className='text-decoration-none'><h6 className='ps-4' style={{ color: '#999999' }}>	info@yourdomain.com</h6></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>

            <div className='text-center py-4 pt-5' style={{ backgroundColor: '#050d21' }}>
                <p style={{ color: '#999999', fontSize: '0.8rem' }}>Copyright ©2024 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i> by <a href='https://colorlib.com/' className='text-decoration-none' style={{ color: '#5ea51d' }}>Colorlib</a></p>
            </div>

        </div >
    );
};

export default Contact;