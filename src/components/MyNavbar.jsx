import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { links } from '../data';
import { FaSun, FaMoon } from 'react-icons/fa';

const MyNavbar = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className={`navbar-custom ${scrolled ? 'shadow-sm' : ''}`}
        >
            <Container>
                {/* Wrapped Brand in a div to ensure z-index in flex container on mobile */}
                <div className="d-flex align-items-center">
                    <Navbar.Brand
                        as={ScrollLink}
                        to="home"
                        smooth={true}
                        duration={500}
                        className="fw-bold fs-3 cursor-pointer text-decoration-none"
                        style={{ cursor: 'pointer', zIndex: 1050, color: 'var(--primary-color)' }}
                    >
                        DINESH MALI
                    </Navbar.Brand>
                </div>

                <div className="d-flex align-items-center order-lg-3 ms-lg-3 gap-3">
                    <Button
                        variant="link"
                        onClick={toggleTheme}
                        className="p-2 rounded-circle border-0 d-flex align-items-center justify-content-center"
                        style={{
                            background: 'var(--card-bg)',
                            color: 'var(--text-main)',
                            width: '40px',
                            height: '40px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                        }}
                    >
                        {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
                    </Button>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>


                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center mt-3 mt-lg-0 rounded p-3 p-lg-0 d-lg-flex" style={{ background: 'var(--navbar-bg)', backdropFilter: 'blur(10px)' }}>
                        {links.map((link) => (
                            <Nav.Link
                                key={link.hash}
                                as={ScrollLink}
                                to={link.hash.replace('#', '')}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="mx-2 py-2 py-lg-0"
                                style={{ cursor: 'pointer' }}
                                activeClass="active"
                            >
                                {link.name}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
