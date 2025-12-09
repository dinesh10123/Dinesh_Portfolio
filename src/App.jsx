import React, { useState, useEffect } from 'react';
import MyNavbar from './components/MyNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <div className="d-flex flex-column min-vh-100 overflow-hidden">
            <MyNavbar theme={theme} toggleTheme={toggleTheme} />
            <main className="flex-grow-1">
                <div id="home" className="w-100">
                    <Home />
                </div>

                {/* Removed bg-white/bg-light classes to allow global gradient to show */}
                <section id="about" className="section-padding">
                    <About />
                </section>

                <section id="education" className="section-padding">
                    <Education />
                </section>

                <section id="projects" className="section-padding">
                    <Projects />
                </section>

                <section id="skills" className="section-padding">
                    <Skills />
                </section>

                <section id="experience" className="section-padding">
                    <Experience />
                </section>

                <section id="contact" className="section-padding">
                    <Contact />
                </section>
            </main>
            <Footer />
            <Toaster position="top-right" />
        </div>
    );
}

export default App;
