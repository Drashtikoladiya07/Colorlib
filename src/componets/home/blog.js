import './home.css';
import { Container, Row, Col } from 'react-bootstrap';
import worker1 from '../../assets/img/image_1.jpg.webp';
import worker2 from '../../assets/img/image_2.jpg.webp';
import worker3 from '../../assets/img/image_3.jpg.webp';
import worker4 from '../../assets/img/image_4.jpg.webp';
import worker5 from '../../assets/img/image_5.jpg.webp';
import worker6 from '../../assets/img/image_6.jpg.webp';
import worker7 from '../../assets/img/image_7.jpg.webp';
import worker8 from '../../assets/img/image_8.jpg.webp';

function Blog() {

    const data = {
        worker: [
            {
                img: worker1,
                head1: 'Admin   Dec. 01, 2020',
                head2: '3 Comments',
                title: 'New Home Sales Picked Up in December',
                p: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
            },
            {
                img: worker2,
                head1: 'Admin   Dec. 01, 2020',
                head2: '3 Comments',
                title: 'New Home Sales Picked Up in December',
                p: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
            },
            {
                img: worker3,
                head1: 'Admin   Dec. 01, 2020',
                head2: '3 Comments',
                title: 'New Home Sales Picked Up in December',
                p: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
            },
            {
                img: worker4,
                head1: 'Admin   Dec. 01, 2020',
                head2: '3 Comments',
                title: 'New Home Sales Picked Up in December',
                p: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
            },
            {
                img: worker5,
                head1: 'Admin   Dec. 01, 2020',
                head2: '3 Comments',
                title: 'New Home Sales Picked Up in December',
                p: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
            },
            {
                img: worker6,
                head1: 'Admin   Dec. 01, 2020',
                head2: '3 Comments',
                title: 'New Home Sales Picked Up in December',
                p: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
            },
            {
                img: worker7,
                head1: 'Admin   Dec. 01, 2020',
                head2: '3 Comments',
                title: 'New Home Sales Picked Up in December',
                p: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
            },
            {
                img: worker8,
                head1: 'Admin   Dec. 01, 2020',
                head2: '3 Comments',
                title: 'New Home Sales Picked Up in December',
                p: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
            },
        ],
    };

    return (
        <div>
            <div className='bg-img text-center text-white img-fluid' style={{ height: '35rem' }}>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className='aa d-flex justify-content-center' style={{ paddingTop: '15rem' }}>
                        <a href={'home'} className='text-decoration-none fw-bold'>HOME <i className="fa-solid fa-chevron-right pe-2 pb-3"></i></a>
                        <h6 className='pt-1 ps-3 fw-bold' style={{ color: '#999999' }}>BLOG <i className="fa-solid fa-chevron-right pe-2 pb-3"></i></h6>
                    </div>
                    <h1 className='fw-bold' style={{ fontSize: '4rem' }}>Our Blog</h1>
                </div>
            </div>

            <Container className='py-5' data-aos="fade-up" data-aos-duration="2000">
                <Row className='pb-5'>
                    {data.worker.map((item, index) => (
                        <Col lg={3} md={6} key={item.title + index} className='py-4 text-center' >
                            <div>
                                <a href='#' className='text-decoration-none'><img src={item.img} alt="img" className='img-fluid' style={{ width: '40rem', height: '18rem' }} /></a>
                            </div>
                            <div className='blog p-4 text-start bg-white'>
                                <div className='d-flex text-uppercase'>
                                    <h6 style={{ color: '#999999', fontSize: '0.8rem' }}>{item.head1}</h6>
                                    <a href='#' className='text-decoration-none'><h6 className='ps-3' style={{ color: '#5ea51d', fontSize: '0.8rem' }}>{item.head2}</h6></a>
                                </div>
                                <a href='#' className='text-decoration-none'><h5 className='py-2'>{item.title}</h5></a>
                                <h6 style={{ color: '#999999' }}>{item.p}</h6>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <div className='bx d-flex justify-content-center pb-5'>
                <a href='#' className='text-decoration-none'><h5 className='px-3 py-2 rounded-1 fw-light mx-1'><i class="fa-solid fa-chevron-left"></i></h5></a>
                <a href='#' className='text-decoration-none'><h5 className='px-3 py-2 rounded-1 fw-light mx-1 text-white' style={{ backgroundColor: '#5ea51d' }}>1</h5></a>
                <a href='#' className='text-decoration-none'><h5 className='px-3 py-2 rounded-1 fw-light mx-1'>2</h5></a>
                <a href='#' className='text-decoration-none'><h5 className='px-3 py-2 rounded-1 fw-light mx-1'>3</h5></a>
                <a href='#' className='text-decoration-none'><h5 className='px-3 py-2 rounded-1 fw-light mx-1'>4</h5></a>
                <a href='#' className='text-decoration-none'><h5 className='px-3 py-2 rounded-1 fw-light mx-1'>5</h5></a>
                <a href='#' className='text-decoration-none'><h5 className='px-3 py-2 rounded-1 fw-light mx-1'><i class="fa-solid fa-chevron-right"></i></h5></a>
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

        </div>
    );
};

export default Blog;