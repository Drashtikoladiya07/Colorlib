import './home.css';
import home from '../../componets/home/home'
import { Container, Row, Col } from 'react-bootstrap';
import about1 from '../../assets/img/about-1.jpg.webp';
import about2 from '../../assets/img/about.jpg.webp';
import person from '../../assets/img/person_1.jpg.webp';
import person1 from '../../assets/img/person_2.jpg.webp';
import person2 from '../../assets/img/person_3.jpg.webp';
import gallery1 from '../../assets/img/gallery-1.jpg.webp';
import gallery2 from '../../assets/img/gallery-2.jpg.webp';
import gallery3 from '../../assets/img/gallery-3.jpg.webp';
import gallery4 from '../../assets/img/gallery-4.jpg.webp';
import gallery5 from '../../assets/img/gallery-5.jpg.webp';
import gallery6 from '../../assets/img/gallery-6.jpg.webp';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function About() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const data = {
        about: [
            {
                num: '50',
                title: 'Years of Experienced',
            },
            {
                num: '210k+',
                title: 'Total Properties',
            },
            {
                num: '450',
                title: 'Qualified Realtors',
            },
            {
                num: '100',
                title: 'Total Branches',
            },
        ],
        client: [
            {
                pg: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
                img: person,
                name: 'Roger Scott',
                work: 'Marketing Manager'
            },
            {
                pg: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
                img: person1,
                name: 'Roger Scott',
                work: 'Marketing Manager'
            },
            {
                pg: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
                img: person2,
                name: 'Roger Scott',
                work: 'Marketing Manager'
            },
        ],
    };
    return (
        <div>
            <div className='bg-img text-center text-white img-fluid' style={{ height: '35rem' }}>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className='aa d-flex justify-content-center' style={{ paddingTop: '15rem' }}>
                        <a href={'home'} className='text-decoration-none fw-bold'>HOME <i className="fa-solid fa-chevron-right pe-2 pb-3"></i></a>
                        <h6 className='pt-1 ps-3 fw-bold' style={{ color: '#999999' }}>ABOUT US <i className="fa-solid fa-chevron-right pe-2 pb-3"></i></h6>
                    </div>
                    <h1 className='fw-bold' style={{ fontSize: '4rem' }}>About Us</h1>
                </div>
            </div>

            <div className='container px-0 py-5'>
                <Row className='px-0 py-5'>
                    <Col lg={4} data-aos="fade-up" data-aos-duration="1000">
                        <img src={about2} alt="img" className='img-fluid' style={{ height: '50rem' }} />
                    </Col>
                    <Col lg={8} className='ps-4' data-aos="fade-up" data-aos-duration="2000">
                        <div className='font'>
                            <h6 style={{ color: '#5ea51d' }} className='text-uppercase fw-bold'>About Us</h6>
                            <h6 className='fw-bold pt-2' style={{ fontSize: '3.5rem' }}>Oakberry A Real Estate Company</h6>
                            <h6 className='py-4 fs-5' style={{ color: '#9c9c9c' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h6>
                        </div>
                        <Container data-aos="fade-up" data-aos-duration="1000">
                            <Row>
                                {data.about.map((item, index) => (
                                    <Col lg={3} md={6} key={item.title + index} className='d-flex py-4' >
                                        <div className='text'>
                                            <h1 className='pb-2'>{item.num}</h1>
                                            <h6 className='text-uppercase' style={{ color: '#5ea51d' }}>{item.title}</h6>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                        <img src={about1} alt="img" className='img-fluid' style={{ height: '26.5rem', width: '100%' }} data-aos="fade-up" data-aos-duration="1000" />
                    </Col>
                </Row>
            </div>

            <div className='bg-img text-center text-white img-fluid'>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h1 style={{ paddingTop: '13rem', fontSize: '3rem' }}>Modern House Video</h1>
                    <h6 className='fs-5 pt-3 fw-light' style={{ color: '#9c9c9c' }}>Far far away, behind the word mountains, far from the countries Vokalia and <br />Consonantia, there live the blind texts.</h6>
                    <a href="https://vimeo.com/115041822" className="video-icon text-decoration-none p-3 text-white rounded-5">
                        <i className="fa-solid fa-play fs-1 py-4 mt-4" style={{ backgroundColor: '#5ea51d', borderRadius: '50%', paddingInline: '2rem' }}></i>
                    </a>
                </div>
            </div>

            <div className='bgimg img-fluid text-white'>
                <div className="py-5">
                    <div className="justify-content-center d-flex" data-aos="fade-up" data-aos-duration="1000">
                        <div className="d-flex align-items-center">
                            <div>
                                <h1 className="pb-2">Find Best Place For Leaving</h1>
                                <p>Find Best Place For Leaving</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center ps-5">
                            <a href="#" className="btn py-3 px-4 text-uppercase bg-dark text-white rounded-0">Get in touch</a>
                        </div>
                    </div>
                </div>
            </div>

            <Container data-aos="fade-up" data-aos-duration="1000">
                <div className='font text-center p-5'>
                    <h6 style={{ color: '#5ea51d' }} className='text-uppercase fw-bold'>Testimonial</h6>
                    <h1 className='fw-bold' style={{ fontSize: '3.5rem' }}>Clients We Help</h1>
                </div>
            </Container>

            <Container className='pb-5'>
                <Slider {...settings}>
                    {data.client.map((item, index) => (
                        <div key={item.title + index} className='d-flex px-4 py-5' data-aos="fade-up" data-aos-duration="2000">
                            <div className='boxes p-4 bg-white'>
                                <div className='pb-4 pt-2'><h6 className='fw-light'>{item.pg}</h6></div>
                                <div className='image d-flex pb-3'>
                                    <img src={item.img} alt="img" className='img-fluid rounded-circle' />
                                    <div className='ps-4 pt-2'>
                                        <h4>{item.name}</h4>
                                        <h6 className='text-uppercase' style={{ color: '#5ea51d', fontSize: '0.8rem' }}>{item.work}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Container>

            <Row className='g-0 pt-5'>
                <Col lg={2} className='aa' md={4} sm={6}><a href={gallery1}><div className='room1 img-fluid'></div></a></Col>
                <Col lg={2} className='aa' md={4} sm={6}><a href={gallery2}><div className='room2 img-fluid'></div></a></Col>
                <Col lg={2} className='aa' md={4} sm={6}><a href={gallery3}><div className='room3 img-fluid'></div></a></Col>
                <Col lg={2} className='aa' md={4} sm={6}><a href={gallery4}><div className='room4 img-fluid'></div></a></Col>
                <Col lg={2} className='aa' md={4} sm={6}><a href={gallery5}><div className='room5 img-fluid'></div></a></Col>
                <Col lg={2} className='aa' md={4} sm={6}><a href={gallery6}><div className='room6 img-fluid'></div></a></Col>
            </Row>

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

export default About;