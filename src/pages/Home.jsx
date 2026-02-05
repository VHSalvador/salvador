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
import SEO from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO
                title="Salvador Villarroel - Full Stack Fejlesztő & Automatizálási Szakértő"
                description="Salvador Villarroel portfóliója. Full Stack fejlesztő, Automatizálási szakértő, React és modern webes megoldások."
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Salvador Villarroel",
                    "url": "https://vhsalvador.github.io/salvador/",
                    "image": "https://vhsalvador.github.io/salvador/img/hero-profile-new.jpg",
                    "jobTitle": "Full Stack Developer",
                    "knowsAbout": ["React", "JavaScript", "Node.js", "Web Development", "Chess"],
                    "sameAs": [
                        "https://github.com/VHSalvador",
                        "https://linkedin.com/in/salvador-villarroel"
                    ]
                }}
            />
            <Navbar />
            <main>
                <Hero />
                <Stats />
                <About />
                <Experience />
                <TimelineSkills />
                <FunFacts />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default Home;
