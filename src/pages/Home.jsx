import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Home = () => {
    return (
        <section className="min-vh-100 d-flex align-items-center position-relative w-100 py-5 pt-5 mt-5 mt-lg-0">
            <Container>
                <Row className="align-items-center justify-content-between">
                    {/* Text Column (Left) - Kept first in DOM for mobile priority */}
                    <Col lg={6} className="mb-5 mb-lg-0">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="display-3 fw-bolder mb-2 text-main tracking-tight">
                                Dinesh Mali
                            </h1>

                            <h3 className="h4 text-muted mb-4 fw-normal d-flex align-items-center gap-2">
                                I am a
                                <span className="fw-bold" style={{ color: 'var(--accent-blue)' }}>
                                    <Typewriter
                                        words={['Full Stack Developer|', 'Java Expert|', 'React Developer|']}
                                        loop={0}
                                        cursor
                                        cursorStyle=''
                                        typeSpeed={80}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h3>

                            <p className="lead text-secondary mb-4 lh-lg" style={{ fontSize: '1.1rem' }}>
                                Hello! I'm Dinesh Mali, a passionate developer building scalable web applications.
                                I specialize in Java Spring Boot and React JS, creating seamless digital experiences.
                                Ready to solve complex problems and bring innovative ideas to life.
                            </p>

                            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                                <a href="https://drive.google.com/file/d/17RTDWEpy4LV9vB_AnJJJNiKsQtVklnDn/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-primary-custom cursor-pointer text-decoration-none">
                                    Check Resume
                                </a>
                                <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className="btn btn-outline-custom cursor-pointer text-decoration-none">
                                    Contact Me
                                </ScrollLink>

                                {/* Social Icons - Now beside buttons */}
                                <div className="d-flex gap-3 ms-2">
                                    <a href="https://www.linkedin.com/in/dinesh-mali-6755a7236/" target="_blank" rel="noreferrer" className="social-icon-circle shadow-sm">
                                        <FaLinkedin size={20} />
                                    </a>
                                    <a href="https://github.com/dinesh10123" target="_blank" rel="noreferrer" className="social-icon-circle shadow-sm">
                                        <FaGithub size={20} />
                                    </a>
                                    <a href="https://leetcode.com/u/Dinesh_Mali/" target="_blank" rel="noreferrer" className="social-icon-circle shadow-sm">
                                        <SiLeetcode size={20} />
                                    </a>
                                </div>
                            </div>

                        </motion.div>
                    </Col>

                    {/* Image Column (Right) */}
                    <Col lg={6} className="text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="d-flex justify-content-center"
                        >
                            <img
                                src="/hero.gif"
                                alt="Coding Animation"
                                className="img-fluid hero-image"
                                style={{
                                    maxHeight: '500px',
                                    width: 'auto',
                                    objectFit: 'contain'
                                }}
                            />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Home;
