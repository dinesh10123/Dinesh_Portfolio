import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { skillsData } from '../data';
import { motion } from 'framer-motion';

const Skills = () => {
    const fadeInAnimationVariants = {
        initial: { opacity: 0, y: 20 },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.05 * index },
        }),
    };

    return (
        <Container className="text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">Technical Skills</h2>
                <p className="text-secondary mb-5 w-75 mx-auto">
                    A comprehensive list of the technologies and tools I've worked with throughout my journey.
                </p>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className="d-flex flex-wrap justify-content-center gap-3">
                            {skillsData.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    custom={index}
                                >
                                    {/* Added 'skill-card' class for hover effect */}
                                    <Card className="skill-card border-0 shadow-sm px-4 py-2 rounded-pill custom-card transition-all cursor-pointer">
                                        <span className="fw-medium text-main">{skill}</span>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </motion.div>
        </Container>
    );
};

export default Skills;
