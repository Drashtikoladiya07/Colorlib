import React from 'react';
import './home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";
import property1 from '../../assets/img/work-1.jpg.webp';
import property2 from '../../assets/img/work-2.jpg.webp';
import property3 from '../../assets/img/work-3.jpg.webp';
import property4 from '../../assets/img/work-4.jpg.webp';
import person from '../../assets/img/person_1.jpg.webp';
import person1 from '../../assets/img/person_2.jpg.webp';
import person2 from '../../assets/img/person_3.jpg.webp';
import about1 from '../../assets/img/about-1.jpg.webp';
import about2 from '../../assets/img/about.jpg.webp';
import team1 from '../../assets/img/team-1.jpg.webp';
import team2 from '../../assets/img/team-2.jpg.webp';
import team3 from '../../assets/img/team-3.jpg.webp';
import team4 from '../../assets/img/team-4.jpg.webp';
import land from '../../assets/logo/icn1.png';
import Residential from '../../assets/logo/icn2.png';
import Commercial from '../../assets/logo/icn3.png';
import Industrial from '../../assets/logo/Industrial.png';
import worker1 from '../../assets/img/image_1.jpg.webp';
import worker2 from '../../assets/img/image_2.jpg.webp';
import worker3 from '../../assets/img/image_3.jpg.webp';
import worker4 from '../../assets/img/image_4.jpg.webp';
import gallery1 from '../../assets/img/gallery-1.jpg.webp';
import gallery2 from '../../assets/img/gallery-2.jpg.webp';
import gallery3 from '../../assets/img/gallery-3.jpg.webp';
import gallery4 from '../../assets/img/gallery-4.jpg.webp';
import gallery5 from '../../assets/img/gallery-5.jpg.webp';
import gallery6 from '../../assets/img/gallery-6.jpg.webp';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
    const [activeTab, setActiveTab] = useState('Buy Properties');
    const selectedTab = (id) => {
        setActiveTab(id);
    };

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
        property: [
            { id: 'Buy Properties', title: 'Buy Properties', target: '#Buy Properties' },
            { id: 'Rent Properties', title: 'Rent Properties', target: '#Rent Properties' },
        ],

        place1: [
            {
                img: land,
                title: 'Land',
            },
            {
                img: Residential,
                title: 'Residential',
            },
            {
                img: Commercial,
                title: 'Commercial',
            },
            {
                img: Industrial,
                title: 'Industrial',
            },
        ],

        place: [
            { title: 'New York', head: '200 Properties' },
            { title: 'California', head: '100 Properties' },
            { title: 'Florida', head: '422 Properties' },
            { title: 'London', head: '100 Properties' },
            { title: 'Tennessee', head: '200 Properties' },
            { title: 'Charlotte', head: '200 Properties' },
            { title: 'Chicago', head: '120 Properties' },
            { title: 'Texas', head: '200 Properties' },
            { title: 'Orlando', head: '200 Properties' },
            { title: 'Illinois', head: '300 Properties' },
            { title: 'North Carolina', head: '200 Properties' },
            { title: 'Atlanta', head: '200 Properties' },
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
        ],
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
                name: 'Mike Bochs',
            },
            {
                img: team4,
                Listing: 'Listing',
                pro: '10 Properties',
                name: 'Mike Bochs',
            },
        ],

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
        ],
    }
    return (
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <div className='img1'>
                            <Container className='p-5'>
                                <Row className='px-5'>
                                    <Col lg={12} data-aos="fade-up" data-aos-duration="1000">
                                        <div className="text-white text-center aos-animate pt-5">
                                            <h2 className='pt-5'>Your Property Is <br />Our Priority</h2>
                                            <p className="py-4 px-5">A small river named Duden flows by their place and supplies it with the necessary <br />regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your <br /> mouth.</p>
                                            <a href="#" className="btn px-5 py-3 text-white text-uppercase" style={{ backgroundColor: '#5ea51d' }}>Learn More <span><i className="fa-solid fa-arrow-right ps-3"></i></span></a>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className='img2'>
                            <Container className='p-5'>
                                <Row className='px-5'>
                                    <Col lg={12} data-aos="fade-up" data-aos-duration="1000">
                                        <div className="text-white text-center aos-animate pt-5">
                                            <h2 className='pt-5'>Let Your Home Be <br />Unique & Stylist</h2>
                                            <p className="py-4 px-5">A small river named Duden flows by their place and supplies it with the necessary <br />regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your <br /> mouth.</p>
                                            <a href="#" className="btn px-5 py-3 text-white text-uppercase" style={{ backgroundColor: '#5ea51d' }}>Learn More <span><i className="fa-solid fa-arrow-right ps-3"></i></span></a>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='img3'>
                            <Container className='p-5'>
                                <Row className='px-5'>
                                    <Col lg={12} data-aos="fade-up" data-aos-duration="1000">
                                        <div className="text-white text-center aos-animate pt-5">
                                            <h2 className='pt-5'>Modern House <br />Make Better Life</h2>
                                            <p className="py-4 px-5">A small river named Duden flows by their place and supplies it with the necessary <br />regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your <br /> mouth.</p>
                                            <a href="#" className="btn px-5 py-3 text-white text-uppercase" style={{ backgroundColor: '#5ea51d' }}>Learn More <span><i className="fa-solid fa-arrow-right ps-3"></i></span></a>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
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

            <Container data-aos="fade-up" data-aos-duration="1000">
                <div className='font text-center pb-5'>
                    <h6 style={{ color: '#5ea51d' }} className='text-uppercase fw-bold'>Oakberry Categories</h6>
                    <h1 className='fw-bold'>Explore Our Categories & Places</h1>
                </div>
            </Container>

            <Container className='px-5' data-aos="fade-up" data-aos-duration="2000">
                <Row className='pb-5 px-5'>
                    {data.place1.map((item, index) => (
                        <Col lg={3} md={6} key={item.title + index} className='d-flex py-4 text-center' >
                            <a href='#' className='text-decoration-none'>
                                <div className='texte p-5'>
                                    <img src={item.img} className='img-fluid w-75 px-3' />
                                    <h4 className='pt-3'>{item.title}</h4>
                                </div>
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container className='ps-5 pb-5' data-aos="fade-up" data-aos-duration="2000">
                <Row className='ps-5 pb-5'>
                    {data.place.map((item, index) => (
                        <Col lg={4} md={6} key={item.title + index} className='d-flex py-4 ps-5 text-center' >
                            <div className='text ps-5'>
                                <a href='#' className='text-decoration-none fw-bold text-black pb-2' style={{ backgroundColor: 'white' }}><h6>{item.title}</h6></a>
                                <a href='#' className='text-decoration-none py-1 px-2 rounded-2'><h7>{item.head}</h7></a>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <div style={{ backgroundColor: '#f7f7f7' }} data-aos="fade-up" data-aos-duration="1000">
                <Container className='p-5'>
                    <div className='font text-center p-5'>
                        <h6 style={{ color: '#5ea51d' }} className='text-uppercase fw-bold'>Our Properties</h6>
                        <h1 className='fw-bold'>Featured Properties</h1>
                    </div>
                </Container>

                <Container className='pb-5'>
                    <Row className='pb-5'>
                        {data.new.map((item, index) => (
                            <Col lg={3} md={6} key={item.title + index} className='d-flex py-4 text-center' data-aos="fade-up" data-aos-duration="2000">
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

            <div className='pb-5' >
                <div className='bg-img text-center text-white mb-5 img-fluid'>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h1 style={{ paddingTop: '13rem', fontSize: '3rem' }}>Modern House Video</h1>
                        <h6 className='fs-5 pt-3 fw-light' style={{ color: '#9c9c9c' }}>Far far away, behind the word mountains, far from the countries Vokalia and <br />Consonantia, there live the blind texts.</h6>
                        <a href="https://vimeo.com/115041822" className="video-icon text-decoration-none p-3 text-white rounded-5">
                            <i className="fa-solid fa-play fs-1 py-4 mt-4" style={{ backgroundColor: '#5ea51d', borderRadius: '50%', paddingInline: '2rem' }}></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className='container px-0 py-5'>
                <Row className='px-0'>
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

            <div className='bgimg img-fluid text-white my-5'>
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

            <div className='col-lg-8 col-md-8 bg-dark ps-5' style={{ height: '50rem', position: 'absolute' }}>
                <div className='font p-5'>
                    <h6 style={{ color: '#5ea51d' }} className='text-uppercase fw-bold ps-5' data-aos="fade-up" data-aos-duration="1000">Meets Our Agents</h6>
                    <h1 className='fw-bold text-white ps-5' style={{ fontSize: '3.5rem' }} data-aos="fade-up" data-aos-duration="1000">Our Agents</h1>
                </div>
            </div>

            <Container className='pb-5' data-aos="fade-up" data-aos-duration="2000">
                <Row className='pb-5'>
                    {data.team.map((item, index) => (
                        <Col lg={3} md={6} key={item.title + index} className='px-4 py-5'>
                            <div className='team pb-5 mb-5'>
                                <div className='pb-4 pt-2'><h6 className='fw-light'>{item.pg}</h6></div>
                                <div className='tm text-white'>
                                    <div className='photo'>
                                        <img src={item.img} alt="img" className='img-fluid' />
                                    </div>
                                    <div className='p-3' style={{ backgroundColor: '#5ea51d' }}>
                                        <div className='d-flex text-uppercase'>
                                            <h6>{item.Listing}</h6>
                                            <h6 className='ps-4'>{item.pro}</h6>
                                        </div>
                                        <h3 className='pt-2'>{item.name}</h3>
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

            <Container className='p-5'>
                <div className='font text-center p-5'>
                    <h6 style={{ color: '#5ea51d' }} className='text-uppercase fw-bold'>Our Properties</h6>
                    <h1 className='fw-bold'>Featured Properties</h1>
                </div>
            </Container>

            <Container data-aos="fade-up" data-aos-duration="2000">
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

export default Home;