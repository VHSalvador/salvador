import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Experience from '../components/Experience';
import TimelineSkills from '../components/TimelineSkills';
import FunFacts from '../components/FunFacts';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const Contact = React.lazy(() => import('../components/Contact'));

const Home = () => {
    const { t } = useLanguage();
    const seoContent = t('seo');

    return (
        <>
            <SEO
                title={seoContent.title}
                description={seoContent.description}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Salvador Villarroel",
                    "url": "https://salvador.hu/",
                    "image": "https://salvador.hu/img/hero-profile-new-medium.webp",
                    "jobTitle": seoContent.jobTitle,
                    "knowsAbout": ["React", "JavaScript", "Node.js", "Web Development", "Chess", "AI Automation", "Community Management"],
                    "alumniOf": {
                        "@type": "CollegeOrUniversity",
                        "name": "Corvinus University of Budapest",
                        "url": "https://www.uni-corvinus.hu"
                    },
                    "knowsLanguage": [
                        { "@type": "Language", "name": "Hungarian" },
                        { "@type": "Language", "name": "English" },
                        { "@type": "Language", "name": "Japanese" }
                    ],
                    "hasOccupation": [
                        {
                            "@type": "Occupation",
                            "name": seoContent.jobTitle,
                            "occupationLocation": { "@type": "City", "name": "Budapest" }
                        },
                        {
                            "@type": "Occupation",
                            "name": seoContent.chessCoach
                        },
                        {
                            "@type": "Occupation",
                            "name": seoContent.aiAutomation
                        }
                    ],
                    "sameAs": [
                        "https://github.com/VHSalvador",
                        "https://linkedin.com/in/salvador-villarroel"
                    ]
                }}
                image="/img/hero-profile-new-medium.webp"
            />
            <header>
                <Navbar />
            </header>
            <main id="main">
                <Hero />
                <Stats />
                <About />
                <Experience />
                <TimelineSkills />
                <FunFacts />
                <React.Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center' }}>Loading contact form...</div>}>
                    <Contact />
                </React.Suspense>
            </main>
            <Footer />
        </>
    );
};

export default Home;
