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
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h1 style={styles.headerTitle}>MediPredict AI</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main style={styles.main}>
        <div style={styles.hero}>
          <div style={styles.badge}>
            <span>🏥</span>
            <span>Medical AI Classification System</span>
          </div>
          
          <h2 style={styles.mainTitle}>
            Breast Cancer<br />
            <span style={styles.gradient}>Prediction System</span>
          </h2>
          
          <p style={styles.subtitle}>
            Advanced machine learning system trained on the Wisconsin Breast Cancer dataset 
            to predict whether a tumor is malignant or benign based on diagnostic features.
          </p>

          <div style={styles.ctaContainer}>
            <Link to="/predict" style={styles.linkReset}>
              <button style={styles.ctaButton}>
                <span>🔬</span>
                <span>Start Prediction</span>
              </button>
            </Link>
            <div style={styles.disclaimer}>
              <span style={styles.disclaimerIcon}>ℹ️</span>
              <span style={styles.disclaimerText}>
                This tool is for educational purposes. Always consult healthcare professionals.
              </span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>30+</div>
            <div style={styles.statLabel}>Tumor Features</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>3</div>
            <div style={styles.statLabel}>ML Models</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>95%+</div>
            <div style={styles.statLabel}>Accuracy Rate</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>569</div>
            <div style={styles.statLabel}>Training Samples</div>
          </div>
        </div>

        {/* Features Grid */}
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <div style={{...styles.iconBox, background: '#DBEAFE'}}>
              <span style={styles.icon}>📊</span>
            </div>
            <h3 style={styles.featureTitle}>Wisconsin Dataset</h3>
            <p style={styles.featureText}>
              Trained on the renowned Breast Cancer Wisconsin diagnostic dataset with 30 numerical features
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={{...styles.iconBox, background: '#FEE2E2'}}>
              <span style={styles.icon}>🧠</span>
            </div>
            <h3 style={styles.featureTitle}>Multiple ML Models</h3>
            <p style={styles.featureText}>
              Logistic Regression, Random Forest, and SVM models evaluated for optimal performance
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={{...styles.iconBox, background: '#D1FAE5'}}>
              <span style={styles.icon}>⚡</span>
            </div>
            <h3 style={styles.featureTitle}>FastAPI Backend</h3>
            <p style={styles.featureText}>
              High-performance API with real-time feature scaling and instant predictions
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={{...styles.iconBox, background: '#E0E7FF'}}>
              <span style={styles.icon}>💻</span>
            </div>
            <h3 style={styles.featureTitle}>React Frontend</h3>
            <p style={styles.featureText}>
              Intuitive interface with guided input forms and clear result visualization
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div style={styles.howItWorks}>
          <h3 style={styles.sectionTitle}>How It Works</h3>
          <div style={styles.stepsGrid}>
            <div style={styles.step}>
              <div style={{...styles.stepNumber, background: '#DC2626'}}>1</div>
              <h4 style={styles.stepTitle}>Input Features</h4>
              <p style={styles.stepText}>
                Enter top 10 diagnostic measurements from tumor cell analysis
              </p>
            </div>

            <div style={styles.step}>
              <div style={{...styles.stepNumber, background: '#EA580C'}}>2</div>
              <h4 style={styles.stepTitle}>AI Processing</h4>
              <p style={styles.stepText}>
                ML models analyze features using trained classification algorithms
              </p>
            </div>

            <div style={styles.step}>
              <div style={{...styles.stepNumber, background: '#10B981'}}>3</div>
              <h4 style={styles.stepTitle}>Get Diagnosis</h4>
              <p style={styles.stepText}>
                Receive prediction with probability scores for malignant/benign classification
              </p>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div style={styles.infoBanner}>
          <div style={styles.infoIcon}>⚕️</div>
          <div>
            <h4 style={styles.infoTitle}>Important Medical Disclaimer</h4>
            <p style={styles.infoText}>
              This AI system is designed for educational and research purposes only. 
              It should not replace professional medical diagnosis. Early detection saves lives - 
              always consult qualified healthcare professionals for proper medical evaluation and treatment.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          © 2024 MediPredict AI | CodeAlpha Internship Project | For Educational Use Only
        </p>
      </footer>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #FEE2E2 0%, #FFFFFF 50%, #E0E7FF 100%)',
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
    background: 'linear-gradient(135deg, #DC2626 0%, #EA580C 100%)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #DC2626 0%, #EA580C 100%)',
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
    background: '#FEE2E2',
    color: '#991B1B',
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
    background: 'linear-gradient(135deg, #DC2626 0%, #EA580C 100%)',
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
  ctaContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },
  linkReset: {
    textDecoration: 'none',
  },
  ctaButton: {
    background: 'linear-gradient(135deg, #DC2626 0%, #EA580C 100%)',
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
    boxShadow: '0 4px 6px rgba(220, 38, 38, 0.3)',
    transition: 'all 0.2s',
  },
  disclaimer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    background: '#FEF3C7',
    borderRadius: '8px',
    maxWidth: '600px',
  },
  disclaimerIcon: {
    fontSize: '20px',
  },
  disclaimerText: {
    fontSize: '14px',
    color: '#92400E',
    fontWeight: '500',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '24px',
    marginBottom: '64px',
  },
  statCard: {
    background: 'white',
    padding: '32px 24px',
    borderRadius: '16px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    border: '1px solid #F3F4F6',
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#DC2626',
    marginBottom: '8px',
  },
  statLabel: {
    fontSize: '14px',
    color: '#6B7280',
    fontWeight: '500',
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
    marginBottom: '48px',
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
  infoBanner: {
    background: 'linear-gradient(135deg, #FEF3C7 0%, #FEE2E2 100%)',
    border: '2px solid #F59E0B',
    borderRadius: '16px',
    padding: '24px',
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
  },
  infoIcon: {
    fontSize: '32px',
    flexShrink: 0,
  },
  infoTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#92400E',
    marginBottom: '8px',
  },
  infoText: {
    fontSize: '14px',
    color: '#78350F',
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
    fontSize: '14px',
  },
};