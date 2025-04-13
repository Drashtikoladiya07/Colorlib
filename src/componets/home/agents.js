import './home.css';
import { Container, Row, Col } from 'react-bootstrap';
import team1 from '../../assets/img/team-1.jpg.webp';
import team2 from '../../assets/img/team-2.jpg.webp';
import team3 from '../../assets/img/team-3.jpg.webp';
import team4 from '../../assets/img/team-4.jpg.webp';
import team5 from '../../assets/img/team-5.jpg.webp';
import team6 from '../../assets/img/team-6.jpg.webp';
import team7 from '../../assets/img/team-7.jpg.webp';
import team8 from '../../assets/img/team-8.jpg.webp';

function Agents() {

    const data = {
        team: [
            {
                img: team1,
                Listing: 'Listing',
                pro: '10 Properties',
                name: 'Mike Bochs',
            },
            {
                img: team2,
                Listing: 'Listing',
                pro: '10 Properties',
                name: 'Mike Bochs',
            },
            {
                img: team3,
                Listing: 'Listing',
                pro: '10 Properties',
                name: 'Jessica Moore',
            },
            {
                img: team4,
                Listing: 'Listing',
                pro: '10 Properties',
                name: 'Sarah Geronimo',
            },
            {
                img: team5,
                Listing: 'Listing',
                pro: '10 Properties',
                name: 'Mike Bochs',
            },
            {
                img: team6,
                Listing: 'Listing',
                pro: '10 Properties',
                name: 'Mike Bochs',
            },
            {
                img: team7,
                Listing: 'Listing',
                pro: '10 Properties',
                name: 'Jessica Moore',
            },
            {
                img: team8,
                Listing: 'Listing',
                pro: '10 Properties',
                name: 'Sarah Geronimo',
            },
        ],
    };

    return (
        <div>
            <div className='bg-img text-center text-white img-fluid' style={{ height: '35rem' }}>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className='aa d-flex justify-content-center' style={{ paddingTop: '15rem' }}>
                        <a href={'home'} className='text-decoration-none fw-bold'>HOME <i className="fa-solid fa-chevron-right pe-2 pb-3"></i></a>
                        <h6 className='pt-1 ps-3 fw-bold' style={{ color: '#999999' }}>OUR AGENTS <i className="fa-solid fa-chevron-right pe-2 pb-3"></i></h6>
                    </div>
                    <h1 className='fw-bold' style={{ fontSize: '4rem' }}>Our Agents</h1>
                </div>
            </div>

            <Container className='py-5' data-aos="fade-up" data-aos-duration="2000">
                <Row className='py-5'>
                    {data.team.map((item, index) => (
                        <Col lg={3} md={6} key={item.title + index} className='px-4'>
                            <div>
                                <div className='pb-4 pt-2'><h6 className='fw-light'>{item.pg}</h6></div>
                                <div className='tm text-white'>
                                    <div className='photo'>
                                        <img src={item.img} alt="img" className='img-fluid' />
                                    </div>
                                    <div className='p-4' style={{ backgroundColor: '#5ea51d' }}>
                                        <div className='d-flex text-uppercase'>
                                            <p>{item.Listing}</p>
                                            <p className='ps-4'>{item.pro}</p>
                                        </div>
                                        <h3>{item.name}</h3>
                                        <div className='in py-3'>
                                            <a href='#'><i className="fa-brands fa-twitter me-4 p-2 rounded-circle text-white"></i></a>
                                            <a href='#'><i className="fa-brands fa-facebook-f me-4 p-2 rounded-circle text-white"></i></a>
                                            <a href='#'><i className="fa-brands fa-google me-4 p-2 rounded-circle text-white"></i></a>
                                            <a href='#'><i className="fa-brands fa-instagram p-2 rounded-circle  text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

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

        </div>
    );
};

export default Agents;