import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const SEO = ({ title, description, keywords, name, type, schema, image }) => {
    const { language } = useLanguage();
    const location = useLocation();

    // Ensure trailing slash handling consistency if needed, 
    // but typically canonicals are preferred without trailing slash for files, 
    // or with for directories. GitHub pages usually resolves directories.
    // Let's use window.location.origin to match the current deployment domain automatically.
    // However, since we might be on localhost or production, we can also use a fixed base if preferred.
    // Ideally, for sitemap consistency, we use the production URL.
    const siteUrl = 'https://vhsalvador.github.io/salvador';
    // Remove leading slash from pathname to avoid double slashes if siteUrl ends with / (it doesn't here)
    const pathname = location.pathname === '/' ? '' : location.pathname.replace(/^\//, '');
    const canonicalUrl = `${siteUrl}/${pathname}`;

    // Construct absolute image URL
    const imageUrl = image?.startsWith('http') ? image : `${siteUrl}${image}`;

    return (
        <Helmet>
            <html lang={language} />
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <link rel="canonical" href={canonicalUrl} />

            {/* End standard metadata tags */}
            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:url" content={canonicalUrl} />
            {/* End Facebook tags */}
            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
            {/* End Twitter tags */}

            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}

SEO.defaultProps = {
    title: 'Salvador Villarroel - Portfolio',
    description: 'Salvador Villarroel weboldala és portfóliója.',
    keywords: 'web developer, react, portfolio, chess coach, sakk oktatás',
    name: 'Salvador Villarroel',
    type: 'website',
    image: '/img/hero-profile-new.jpg'
};

export default SEO;
