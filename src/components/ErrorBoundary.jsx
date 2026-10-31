import React from 'react';
import { AlertCircle, ArrowLeft, RefreshCw } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          <AlertCircle size={48} style={{ color: '#ef4444', marginBottom: '1rem' }} />
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--color-text-main, #1e293b)',
              marginBottom: '0.5rem'
            }}
          >
            Something went wrong while rendering this section.
          </h2>
          <p
            style={{
              color: 'var(--color-text-muted, #64748b)',
              maxWidth: '500px',
              marginBottom: '1.5rem',
              fontSize: '0.95rem'
            }}
          >
            An unexpected error occurred. You can return to the portfolio homepage or try refreshing.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="#/"
              onClick={() => {
                this.setState({ hasError: false });
                window.location.hash = '#/';
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--color-primary, #2563eb)',
                color: '#fff',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.9rem'
              }}
            >
              <ArrowLeft size={16} /> Return to Homepage
            </a>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--color-card-bg, #f1f5f9)',
                color: 'var(--color-text-main, #334155)',
                border: '1px solid var(--color-border, #cbd5e1)',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 500,
                fontSize: '0.9rem'
              }}
            >
              <RefreshCw size={16} /> Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
