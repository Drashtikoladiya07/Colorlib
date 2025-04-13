import './home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";
import property1 from '../../assets/img/work-1.jpg.webp';
import property2 from '../../assets/img/work-2.jpg.webp';
import property3 from '../../assets/img/work-3.jpg.webp';
import property4 from '../../assets/img/work-4.jpg.webp';
import property5 from '../../assets/img/work-5.jpg.webp';
import property6 from '../../assets/img/work-6.jpg.webp';
import property7 from '../../assets/img/work-7.jpg.webp';
import property8 from '../../assets/img/work-8.jpg.webp';
import person from '../../assets/img/person_1.jpg.webp';

function Properties() {

    const [activeTab, setActiveTab] = useState('Buy Properties');
    const selectedTab = (id) => {
        setActiveTab(id);
    };

    const data = {
        property: [
            { id: 'Buy Properties', title: 'Buy Properties', target: '#Buy Properties' },
            { id: 'Rent Properties', title: 'Rent Properties', target: '#Rent Properties' },
        ],
        new: [
            {
                img1: property1,
                price: '$300,000',
                img2: person,
                name: 'John Dorf',
                time: '2 weeks ago',
                title: 'Sunny Loft Property',
                city: 'New York',
                sell: 'Sale',
                room: '3',
                bathroom: '2',
                space: '1,878 sqft',
            },
            {
                img1: property2,
                price: '$3,050/mo',
                img2: person,
                name: 'John Dorf',
                time: '2 weeks ago',
                title: 'Sunny Loft Property',
                city: 'New York',
                seller: 'Rent',
                room: '3',
                bathroom: '2',
                space: '1,878 sqft',
            },
            {
                img1: property3,
                price: '$300',
                img2: person,
                name: 'John Dorf',
                time: '2 weeks ago',
                title: 'Sunny Loft Property',
                city: 'New York',
                sell: 'Sale',
                room: '3',
                bathroom: '2',
                space: '1,878 sqft',
            },
            {
                img1: property4,
                price: '$300/mo',
                img2: person,
                name: 'John Dorf',
                time: '2 weeks ago',
                title: 'Sunny Loft Property',
                city: 'New York',
                seller: 'Rent',
                room: '3',
                bathroom: '2',
                space: '1,878 sqft',
            },
            {
                img1: property5,
                price: '$300,000',
                img2: person,
                name: 'John Dorf',
                time: '2 weeks ago',
                title: 'Sunny Loft Property',
                city: 'New York',
                sell: 'Sale',
                room: '3',
                bathroom: '2',
                space: '1,878 sqft',
            },
            {
                img1: property6,
                price: '$3,050/mo',
                img2: person,
                name: 'John Dorf',
                time: '2 weeks ago',
                title: 'Sunny Loft Property',
                city: 'New York',
                seller: 'Rent',
                room: '3',
                bathroom: '2',
                space: '1,878 sqft',
            },
            {
                img1: property7,
                price: '$300',
                img2: person,
                name: 'John Dorf',
                time: '2 weeks ago',
                title: 'Sunny Loft Property',
                city: 'New York',
                sell: 'Sale',
                room: '3',
                bathroom: '2',
                space: '1,878 sqft',
            },
            {
                img1: property8,
                price: '$300/mo',
                img2: person,
                name: 'John Dorf',
                time: '2 weeks ago',
                title: 'Sunny Loft Property',
                city: 'New York',
                seller: 'Rent',
                room: '3',
                bathroom: '2',
                space: '1,878 sqft',
            },
        ],
    };

    return (
        <div>
            <div className='bg-img text-center text-white img-fluid' style={{ height: '35rem' }}>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className='aa d-flex justify-content-center' style={{ paddingTop: '15rem' }}>
                        <a href={'home'} className='text-decoration-none fw-bold'>HOME <i className="fa-solid fa-chevron-right pe-2 pb-3"></i></a>
                        <h6 className='pt-1 ps-3 fw-bold' style={{ color: '#999999' }}>PROPERTIES <i className="fa-solid fa-chevron-right pe-2 pb-3"></i></h6>
                    </div>
                    <h1 className='fw-bold' style={{ fontSize: '4rem' }}>Properties</h1>
                </div>
            </div>

            <div className="pro pt-5" data-aos="fade-up" data-aos-duration="2000">
                <div className="nav-wrapper">
                    <div className='d-flex justify-content-center'>
                        <ul className="nav">
                            {data.property.map((item, index) => (
                                <li key={index} className="nav-item">
                                    <button className={`nav-link px-4 fw-bold mx-1 ${item.id === activeTab ? 'active' : ''}`}
                                        style={{ backgroundColor: item.id === activeTab ? "white" : '#5ea51d', color: item.id === activeTab ? "#9e9e9e" : 'white' }}
                                        onClick={() => selectedTab(item.id)}
                                        data-bs-toggle="tab"
                                        data-bs-target={item.target}>{item.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Container>
                        <Row className='bg-white'>
                            <Col className='border-end py-4'>
                                <h6 className='text-uppercase px-2'>Enter Keyword</h6>
                                <div className='d-flex'>
                                    <i className="fa-solid fa-magnifying-glass px-2 pt-1" style={{ color: '#9e9e9e' }}></i>
                                    <input type="text" placeholder='Enter Keyword' style={{ color: '#9e9e9e' }} />
                                </div>
                            </Col>
                            <Col className='border-end py-4'>
                                <h6 className='text-uppercase px-2'>Property Type</h6>
                                <div className='d-flex'>
                                    <i className="fa-solid fa-chevron-down px-2 pt-2" style={{ color: '#9e9e9e' }}></i>
                                    <select className="form-control" style={{ color: '#9e9e9e' }}>
                                        <option>Residential</option>
                                        <option>Commercial</option>
                                        <option>Land</option>
                                        <option>Industrial</option>
                                    </select>
                                </div>
                            </Col>
                            <Col className='border-end py-4'>
                                <h6 className='text-uppercase px-2'>Location</h6>
                                <div className='d-flex'>
                                    <i className="fa-solid fa-location-dot px-2 pt-1" style={{ color: '#9e9e9e' }}></i>
                                    <input type="text" placeholder='Search Location' style={{ color: '#9e9e9e' }} />
                                </div>
                            </Col>
                            <Col className='border-end py-4'>
                                <h6 className='text-uppercase px-2'>Price Limit</h6>
                                <div className='d-flex'>
                                    <i className="fa-solid fa-chevron-down px-2 pt-2" style={{ color: '#9e9e9e' }}></i>
                                    <select className="form-control" style={{ color: '#9e9e9e' }}>
                                        <option>$100</option>
                                        <option>$10,000</option>
                                        <option>$50,000</option>
                                        <option>$100,000</option>
                                        <option>$200,000</option>
                                        <option>$300,000</option>
                                        <option>$400,000</option>
                                        <option>$500,000</option>
                                        <option>$600,000</option>
                                        <option>$700,000</option>
                                        <option>$800,000</option>
                                        <option>$900,000</option>
                                        <option>$1,000,000</option>
                                        <option>$2,000,000</option>
                                    </select>
                                </div>
                            </Col>
                            <Col className='border-end pt-5' style={{ backgroundColor: '#5ea51d' }}>
                                <a href="#" className="text-decoration-none p-5 text-white text-uppercase">SEARCH</a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000">
                <Container className='pb-5'>
                    <Row className='pb-5'>
                        {data.new.map((item, index) => (
                            <Col lg={3} md={6} key={item.title + index} className='d-flex pb-4 text-center' data-aos="fade-up" data-aos-duration="2000">
                                <div className='box text-start bg-white'>
                                    <div className='text'>
                                        <a href='#'><img src={item.img1} alt="img" className='img-fluid' /></a>
                                        <a href='#' className='po text-decoration-none fw-bold text-white p-1 rounded-1' style={{ backgroundColor: '#5ea51d' }}>{item.price}</a>
                                    </div>
                                    <div className='bg ps-3 p-2'>
                                        <div className='time d-flex' style={{ color: '#9c9c9c' }}>
                                            <img src={item.img2} alt="img" className='img-fluid rounded-5' />
                                            <h6 className='px-2 pe-4 pt-1'>{item.name}</h6>
                                            <h6 className='ps-4 pt-1'>{item.time}</h6>
                                        </div>
                                        <h5 className='pt-3'>{item.title}</h5>
                                        <div className='d-flex'>
                                            <i className="fa-solid fa-location-dot pe-2 pt-1" style={{ fontSize: '0.8rem', color: '#5ea51d' }}></i>
                                            <h6 className='pe-4 pt-1' style={{ fontSize: '0.8rem', color: '#9c9c9c' }}>{item.city}</h6>
                                            <h6 className='text-white' style={{ backgroundColor: '#5ea51d' }}>{item.sell}</h6>
                                            <h6 className='text-white' style={{ backgroundColor: '#fd5c64' }}>{item.seller}</h6>
                                        </div>
                                        <div className='d-flex pt-1 pb-2' style={{ color: '#9c9c9c' }}>
                                            <h6 className='pe-2'>room: {item.room}</h6>
                                            <h6 className='pe-2'>bath: {item.bathroom}</h6>
                                            <h6 className='pe-2'>area: {item.space}</h6>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            <div className='bx d-flex justify-content-center pb-5'>
                <a href='#' className='text-decoration-none'><h5 className='px-3 py-2 rounded-1 fw-light mx-1'><i class="fa-solid fa-chevron-left"></i></h5></a>
                <a href='#' className='text-decoration-none'><h5 className='px-3 py-2 rounded-1 fw-light mx-1 text-white' style={{ backgroundColor: '#5ea51d'}}>1</h5></a>
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

export default Properties;