import '../navbar/navbar.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    const [active, setActive] = useState('Home');

    const selected = (id) => {
        setActive(id);
    };
    const data = {
        nav: [
            {
                icon: 'fa fa-map',
                head1: 'Free Call',
                head2: '+1 234 456 78910',
                description: 'Call Us Now 24/7 Customer Support',
            },
            {
                icon: 'fa fa-paper-plane',
                head2: 'Our Location',
                description: 'Suite 721 New York NY 10016',
            },
            {
                icon: 'fa-brands fa-connectdevelop',
                head1: 'Connect',
                head2: 'with us',
                description: 'Facebook Twitter Dribbble',
            },
        ],
        navItem: [
            { id: 'Home', title: 'Home' },
            { id: 'About', title: 'About' },
            { id: 'Properties', title: 'Properties' },
            { id: 'Agents', title: 'Agents' },
            { id: 'Blog', title: 'Blog' },
            { id: 'Contact', title: 'Contact' },
        ],
    };

    return (
        <div>
            <nav>
                <div style={{ backgroundColor: '#06112a' }}>
                    <div className='d-flex justify-content-around' >
                        {data.nav.map((item, index) => (
                            <div key={item.title + index} className='nav1 d-flex py-4' >
                                <div className="title">
                                    <i className={item.icon + ' text-white p-3 pe-3'}></i>
                                </div>
                                <div className='col'>
                                    <div className='d-flex'>
                                        <h6 style={{ color: '#5ea51d', fontSize: '0.8rem' }} className='pe-1'>{item.head1}</h6>
                                        <h6 className='text-white' style={{ fontSize: '0.8rem' }}>{item.head2}</h6>
                                    </div>
                                    <h6 style={{ color: '#999999', fontSize: '0.7rem' }}>{item.description}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
            <div className='transparent-nav'>
                <nav className="navbar navbar-expand-lg site-navigation justify-content-around py-2">
                    <div className="logo text-white pt-1">
                        <h4>Oakberry<br /><h6 className='text-uppercase' style={{ fontSize: '0.65rem' }}>Real Estate Agency</h6></h4>
                    </div>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon bg-white rounded-1"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mr-auto pe-5">
                                {data.navItem.map((item) => (
                                    <li className="nav-item text-uppercase pe-4" style={{ fontSize: '0.9rem' }} key={item.id}>
                                        <Link
                                            to={item.id === 'Home' ? '/' : `/${item.id.toLowerCase()}`}
                                            className={`nav-link ps-4 ${active === item.id ? 'active' : ''}`}
                                            style={{ color: item.id === active ? "#6ac966" : 'white' }}
                                            onClick={() => selected(item.id)}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <p className="ps-5 text-uppercase pt-2">
                                <a href="#" className="btn rounded text-white mt-1" style={{ backgroundColor: '#5ea51d', fontSize: '0.7rem' }}>Submit A Property</a>
                            </p>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;