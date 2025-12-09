import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="py-4 mt-auto border-top" style={{ backgroundColor: 'var(--navbar-bg)', borderColor: 'var(--navbar-border)' }}>
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                        <small className="fw-medium text-main">&copy; {new Date().getFullYear()} Dinesh Mali. All rights reserved.</small>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <small className="text-muted">Built with <span className="text-primary-custom fw-bold">React</span> & <span className="text-primary-custom fw-bold">Bootstrap</span></small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
