import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ChessHero from '../components/chess/ChessHero';
import ChessMethodology from '../components/chess/ChessMethodology';
import ChessStats from '../components/chess/ChessStats';
import ChessPricing from '../components/chess/ChessPricing';
import ChessContact from '../components/chess/ChessContact';
import ChessFooter from '../components/chess/ChessFooter';
import SEO from '../components/SEO';

const ChessCoaching = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="chess-page">
            <SEO
                title="Sakk Oktatás - Salvador Villarroel"
                description="Sakk oktatás kezdőknek és haladóknak. Fejleszd a stratégiai gondolkodásodat egy tapasztalt sakkedzővel."
                keywords="sakk, sakk oktatás, sakk edző, online sakk, chess coaching"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Sakk oktatás gyerekeknek és kezdőknek",
                    "provider": {
                        "@type": "Person",
                        "name": "Salvador Villarroel"
                    },
                    "areaServed": "Budapest",
                    "description": "Játékos sakkoktatás óvodás kortól, megértés alapú módszertannal. Egyéni és csoportos órák.",
                    "offers": {
                        "@type": "Offer",
                        "description": "Próbaóra ingyenes"
                    },
                    "review": [
                        {
                            "@type": "Review",
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5",
                                "bestRating": "5"
                            },
                            "author": {
                                "@type": "Person",
                                "name": "Bogi szülei"
                            },
                            "reviewBody": "Bogi felvételi pontszámát 9 pontról 27 pontra húztuk fel 2 hét alatt."
                        },
                        {
                            "@type": "Review",
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5",
                                "bestRating": "5"
                            },
                            "author": {
                                "@type": "Person",
                                "name": "Marci szülei"
                            },
                            "reviewBody": "Marcinak segítettem jobban fókuszálni, és átlátni a matekot."
                        },
                        {
                            "@type": "Review",
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5",
                                "bestRating": "5"
                            },
                            "author": {
                                "@type": "Person",
                                "name": "Egy szülő"
                            },
                            "reviewBody": "A gyermekem megszerette a sakkot, és ha valamiért nincs sakk, azt a világ végének éli meg."
                        }
                    ]
                }}
            />
            <Navbar />
            <main>
                <ChessHero />
                <ChessMethodology />
                <ChessStats />
                <ChessPricing />
                <ChessContact />
            </main>
            <ChessFooter />
        </div>
    );
};

export default ChessCoaching;
