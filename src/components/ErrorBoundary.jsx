import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // In production, show a generic user-friendly message only.
            // Stack traces are only shown in development to aid debugging.
            const isDev = import.meta.env.DEV;

            return (
                <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
                    <h1 style={{ color: '#333', marginBottom: '1rem' }}>Something went wrong.</h1>
                    <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                        Please try refreshing the page. If the problem persists, contact us.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            padding: '0.6rem 1.5rem',
                            backgroundColor: '#5A7D8F',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '1rem',
                        }}
                    >
                        Refresh Page
                    </button>
                    {isDev && (
                        <details style={{ whiteSpace: 'pre-wrap', marginTop: '2rem', textAlign: 'left', color: '#c0392b' }}>
                            <summary>Developer Details</summary>
                            {this.state.error && this.state.error.toString()}
                            <br />
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </details>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
