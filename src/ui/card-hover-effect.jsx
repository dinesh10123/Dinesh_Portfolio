
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, Badge, Button } from "react-bootstrap";

export const HoverEffect = ({ items, className }) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className={`row ${className || ""}`}>
            {items.map((item, idx) => (
                <div
                    key={item?.link || idx}
                    className="col-12 col-md-6 col-lg-4 mb-4 position-relative"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="position-absolute bg-secondary rounded-4"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                                style={{
                                    top: '-10px',
                                    left: '-10px',
                                    right: '-10px',
                                    bottom: '-10px',
                                    zIndex: 0,
                                    backgroundColor: 'rgba(0,0,0,0.05)'
                                }}
                            />
                        )}
                    </AnimatePresence>

                    <motion.div
                        className="h-100 position-relative"
                        style={{ zIndex: 1 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8, y: 50 },
                            visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                        }}
                    >
                        <Card className="custom-card h-100 d-flex flex-column border-0 overflow-hidden text-start">
                            {/* Image Section if available */}
                            {item.imageUrl && (
                                <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                                    <Card.Img
                                        variant="top"
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-100 h-100 object-fit-cover"
                                    />
                                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 opacity-0 hover-opacity-100 transition-opacity" style={{ transition: 'opacity 0.3s' }}>
                                        <Button variant="light" href={item.githubLink} target="_blank" className="rounded-circle p-3 mx-1">
                                            <i className="bi bi-github fs-4"></i>
                                        </Button>
                                        {item.link && (
                                            <Button variant="light" href={item.link} target="_blank" className="rounded-circle p-3 mx-1">
                                                <i className="bi bi-link-45deg fs-4"></i>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            )}

                            <Card.Body className="p-4 d-flex flex-column">
                                <Card.Title className="fw-bold mb-2 text-main">{item.title}</Card.Title>
                                <Card.Text className="text-muted small mb-4 flex-grow-1">
                                    {item.description}
                                </Card.Text>

                                {item.tags && (
                                    <div className="d-flex flex-wrap gap-2 mt-auto">
                                        {item.tags.map((tag, i) => (
                                            <Badge className="border fw-normal" key={i} style={{ backgroundColor: 'var(--glass-border)', color: 'var(--text-main)', fontWeight: '400' }}>
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </Card.Body>
                        </Card>
                    </motion.div>
                </div>
            ))}
        </div>
    );
};
