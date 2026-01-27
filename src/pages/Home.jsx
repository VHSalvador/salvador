import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Experience from '../components/Experience';
import TimelineSkills from '../components/TimelineSkills';
import FunFacts from '../components/FunFacts';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Stats />
            <About />
            <Experience />
            <TimelineSkills />
            <FunFacts />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
