import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';

const ChessFooter = () => {
    const { t } = useLanguage();
    const chess = t('chess') || {};
    const footer = chess.footer || {};

    return (
        <footer style={styles.footer}>
            <div className="container" style={styles.container}>
                <div style={styles.copyright}>{footer.copyright}</div>
                <Link to="/" style={styles.link}>{footer.backToPortfolio}</Link>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: 'var(--color-text-primary)',
        color: '#fff',
        padding: '2rem 0',
        marginTop: '0',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
    },
    copyright: {
        fontSize: '0.9rem',
        opacity: 0.8,
    },
    link: {
        color: '#D97746',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: '500',
    }
};

export default ChessFooter;
