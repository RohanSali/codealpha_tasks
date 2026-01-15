import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.wrapper}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logoContainer}>
            <div style={styles.logo}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M12 12a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4h0a4 4 0 0 0-4 4Z" />
                <path d="M4 9v3a8 8 0 0 0 16 0V9" />
                <path d="M12 20v2" />
              </svg>
            </div>
            <h1 style={styles.headerTitle}>CharacterAI</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main style={styles.main}>
        <div style={styles.hero}>
          <div style={styles.badge}>
            <span>⚡</span>
            <span>Powered by Machine Learning</span>
          </div>
          
          <h2 style={styles.mainTitle}>
            Handwritten Character<br />
            <span style={styles.gradient}>Recognition System</span>
          </h2>
          
          <p style={styles.subtitle}>
            Advanced machine learning system trained on the EMNIST Balanced dataset 
            to accurately recognize handwritten characters with high precision.
          </p>

          <Link to="/predict" style={styles.linkReset}>
            <button style={styles.ctaButton}>
              <span>📤</span>
              <span>Try Live Prediction</span>
            </button>
          </Link>
        </div>

        {/* Features Grid */}
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <div style={{...styles.iconBox, background: '#DBEAFE'}}>
              <span style={styles.icon}>📊</span>
            </div>
            <h3 style={styles.featureTitle}>EMNIST Balanced</h3>
            <p style={styles.featureText}>
              Trained on a comprehensive dataset of handwritten characters
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={{...styles.iconBox, background: '#E9D5FF'}}>
              <span style={styles.icon}>🧠</span>
            </div>
            <h3 style={styles.featureTitle}>PCA + SVM Model</h3>
            <p style={styles.featureText}>
              Optimized machine learning pipeline for accurate predictions
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={{...styles.iconBox, background: '#D1FAE5'}}>
              <span style={styles.icon}>⚡</span>
            </div>
            <h3 style={styles.featureTitle}>FastAPI Backend</h3>
            <p style={styles.featureText}>
              High-performance API for lightning-fast predictions
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={{...styles.iconBox, background: '#E0E7FF'}}>
              <span style={styles.icon}>💻</span>
            </div>
            <h3 style={styles.featureTitle}>React Frontend</h3>
            <p style={styles.featureText}>
              Modern, responsive interface for seamless interaction
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div style={styles.howItWorks}>
          <h3 style={styles.sectionTitle}>How It Works</h3>
          <div style={styles.stepsGrid}>
            <div style={styles.step}>
              <div style={{...styles.stepNumber, background: '#4F46E5'}}>1</div>
              <h4 style={styles.stepTitle}>Upload Image</h4>
              <p style={styles.stepText}>
                Upload a clear image of a handwritten character you want to recognize
              </p>
            </div>

            <div style={styles.step}>
              <div style={{...styles.stepNumber, background: '#9333EA'}}>2</div>
              <h4 style={styles.stepTitle}>AI Processing</h4>
              <p style={styles.stepText}>
                Our ML model analyzes the image using advanced pattern recognition
              </p>
            </div>

            <div style={styles.step}>
              <div style={{...styles.stepNumber, background: '#10B981'}}>3</div>
              <h4 style={styles.stepTitle}>Get Results</h4>
              <p style={styles.stepText}>
                Receive instant prediction results with confidence scores
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          © 2024 CharacterAI. Powered by Machine Learning & FastAPI
        </p>
      </footer>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #EEF2FF 0%, #FFFFFF 50%, #FAF5FF 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    background: 'white',
    borderBottom: '1px solid #E5E7EB',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  },
  headerContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '16px 24px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logo: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #4F46E5 0%, #9333EA 100%)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #4F46E5 0%, #9333EA 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: 0,
  },
  main: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '64px 24px',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '64px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: '#E0E7FF',
    color: '#4338CA',
    padding: '8px 16px',
    borderRadius: '24px',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '24px',
  },
  mainTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '24px',
    lineHeight: '1.2',
  },
  gradient: {
    background: 'linear-gradient(135deg, #4F46E5 0%, #9333EA 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '20px',
    color: '#6B7280',
    maxWidth: '800px',
    margin: '0 auto 40px',
    lineHeight: '1.6',
  },
  linkReset: {
    textDecoration: 'none',
  },
  ctaButton: {
    background: 'linear-gradient(135deg, #4F46E5 0%, #9333EA 100%)',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '12px',
    fontSize: '18px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 4px 6px rgba(79, 70, 229, 0.3)',
    transition: 'all 0.2s',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '64px',
  },
  featureCard: {
    background: 'white',
    padding: '32px 24px',
    borderRadius: '16px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    border: '1px solid #F3F4F6',
    transition: 'box-shadow 0.2s',
  },
  iconBox: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  icon: {
    fontSize: '24px',
  },
  featureTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '8px',
  },
  featureText: {
    fontSize: '14px',
    color: '#6B7280',
    lineHeight: '1.5',
  },
  howItWorks: {
    background: 'white',
    borderRadius: '24px',
    padding: '48px 40px',
    boxShadow: '0 10px 15px rgba(0,0,0,0.05)',
    border: '1px solid #F3F4F6',
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: '48px',
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '32px',
  },
  step: {
    textAlign: 'center',
  },
  stepNumber: {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 auto 16px',
  },
  stepTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '12px',
  },
  stepText: {
    fontSize: '14px',
    color: '#6B7280',
    lineHeight: '1.6',
  },
  footer: {
    background: '#111827',
    color: 'white',
    padding: '32px 24px',
    marginTop: '80px',
    textAlign: 'center',
  },
  footerText: {
    color: '#9CA3AF',
    margin: 0,
  },
};