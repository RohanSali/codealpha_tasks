import { useState } from "react";
import api from "../services/api";

// Top 10 features with their typical ranges
const FEATURE_CONFIG = [
  { name: "mean radius", min: 6.0, max: 28.0, unit: "mm", description: "Mean of distances from center to points on perimeter" },
  { name: "mean perimeter", min: 40.0, max: 190.0, unit: "mm", description: "Mean perimeter of the tumor" },
  { name: "mean area", min: 150.0, max: 2500.0, unit: "mm²", description: "Mean area of the tumor" },
  { name: "mean concavity", min: 0.0, max: 0.45, unit: "", description: "Severity of concave portions of contour" },
  { name: "mean concave points", min: 0.0, max: 0.20, unit: "", description: "Number of concave portions of contour" },
  { name: "worst radius", min: 7.0, max: 36.0, unit: "mm", description: "Worst (largest) mean of distances" },
  { name: "worst perimeter", min: 50.0, max: 250.0, unit: "mm", description: "Worst (largest) perimeter" },
  { name: "worst area", min: 200.0, max: 4250.0, unit: "mm²", description: "Worst (largest) area" },
  { name: "worst concavity", min: 0.0, max: 1.25, unit: "", description: "Worst concavity measurement" },
  { name: "worst concave points", min: 0.0, max: 0.30, unit: "", description: "Worst concave points measurement" },
];

export default function Predict() {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
    setError(null);
    
    // Clear validation error for this field
    if (validationErrors[name]) {
      const newErrors = { ...validationErrors };
      delete newErrors[name];
      setValidationErrors(newErrors);
    }
  };

  const validateInputs = () => {
    const errors = {};
    let isValid = true;

    FEATURE_CONFIG.forEach(feature => {
      const value = parseFloat(inputs[feature.name]);
      
      if (!inputs[feature.name] || inputs[feature.name].trim() === "") {
        errors[feature.name] = "Required";
        isValid = false;
      } else if (isNaN(value)) {
        errors[feature.name] = "Must be a number";
        isValid = false;
      } else if (value < feature.min || value > feature.max) {
        errors[feature.name] = `Range: ${feature.min}-${feature.max}`;
        isValid = false;
      }
    });

    setValidationErrors(errors);
    return isValid;
  };

  const handlePredict = async () => {
    if (!validateInputs()) {
      setError("Please correct the highlighted fields before submitting.");
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const res = await api.post("/predict", { features: inputs });
      console.log("API Response:", res.data);
      setResult(res.data);
    } catch (err) {
      console.error("Prediction error:", err);
      setError(err.response?.data?.detail || "Prediction failed. Please try again.");
    }
    
    setLoading(false);
  };

  const handleReset = () => {
    setInputs({});
    setResult(null);
    setError(null);
    setValidationErrors({});
  };

  const getResultColor = () => {
    if (!result) return {};
    const isMalignant = result.prediction.toLowerCase().includes('malignant');
    return {
      background: isMalignant ? '#FEE2E2' : '#D1FAE5',
      color: isMalignant ? '#991B1B' : '#065F46',
      borderColor: isMalignant ? '#DC2626' : '#10B981',
    };
  };

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

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.container}>
          {/* Title Section */}
          <div style={styles.titleSection}>
            <h2 style={styles.mainTitle}>
              <span style={styles.gradient}>Breast Cancer</span>
              <br />
              Prediction Analysis
            </h2>
            <p style={styles.subtitle}>
              Enter the top 10 diagnostic measurements from tumor cell analysis. 
              All values must be within the specified medical ranges.
            </p>
          </div>

          {/* Disclaimer Banner */}
          <div style={styles.disclaimer}>
            <span style={styles.disclaimerIcon}>⚠️</span>
            <div>
              <strong>Medical Disclaimer:</strong> This tool is for educational purposes only. 
              Results should not be used for actual medical diagnosis. Always consult healthcare professionals.
            </div>
          </div>

          <div style={styles.contentGrid}>
            {/* Input Form */}
            <div style={styles.formSection}>
              <div style={styles.formHeader}>
                <h3 style={styles.formTitle}>Diagnostic Features</h3>
                <p style={styles.formSubtitle}>Enter values for all 10 features</p>
              </div>

              <div style={styles.featuresGrid}>
                {FEATURE_CONFIG.map((feature) => (
                  <div key={feature.name} style={styles.inputGroup}>
                    <label style={styles.label}>
                      {feature.name.split(' ').map(word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(' ')}
                      {feature.unit && <span style={styles.unit}> ({feature.unit})</span>}
                    </label>
                    
                    <input
                      type="number"
                      step="0.01"
                      placeholder={`${feature.min} - ${feature.max}`}
                      value={inputs[feature.name] || ""}
                      onChange={(e) => handleChange(feature.name, e.target.value)}
                      style={{
                        ...styles.input,
                        ...(validationErrors[feature.name] ? styles.inputError : {})
                      }}
                    />
                    
                    <div style={styles.inputFooter}>
                      {validationErrors[feature.name] ? (
                        <span style={styles.errorText}>{validationErrors[feature.name]}</span>
                      ) : (
                        <span style={styles.rangeText}>
                          Range: {feature.min} - {feature.max}
                        </span>
                      )}
                    </div>
                    
                    <p style={styles.description}>{feature.description}</p>
                  </div>
                ))}
              </div>

              {error && (
                <div style={styles.errorBanner}>
                  <span>⚠️</span>
                  <span>{error}</span>
                </div>
              )}

              <div style={styles.buttonGroup}>
                <button
                  onClick={handlePredict}
                  disabled={loading}
                  style={{
                    ...styles.predictButton,
                    ...(loading ? styles.buttonDisabled : {})
                  }}
                >
                  {loading ? (
                    <>
                      <span style={styles.spinner}></span>
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <span>🔬</span>
                      <span>Predict Diagnosis</span>
                    </>
                  )}
                </button>
                
                <button onClick={handleReset} style={styles.resetButton}>
                  Clear All
                </button>
              </div>
            </div>

            {/* Results Section */}
            {result && (
              <div style={styles.resultsSection}>
                <div style={styles.resultCard}>
                  <div style={styles.resultHeader}>
                    <h3 style={styles.resultTitle}>Prediction Results</h3>
                  </div>

                  <div style={{...styles.diagnosisBox, ...getResultColor()}}>
                    <div style={styles.diagnosisLabel}>Diagnosis:</div>
                    <div style={styles.diagnosisValue}>{result.prediction}</div>
                  </div>

                  <div style={styles.probabilitySection}>
                    <h4 style={styles.probabilityTitle}>Probability Scores</h4>
                    
                    <div style={styles.probabilityItem}>
                      <div style={styles.probabilityLabel}>
                        <span style={styles.probabilityIcon}>✓</span>
                        <span>Benign (Non-cancerous)</span>
                      </div>
                      <div style={styles.probabilityValue}>
                        {(result.benign_probability * 100).toFixed(1)}%
                      </div>
                      <div style={styles.progressBar}>
                        <div 
                          style={{
                            ...styles.progressFill,
                            width: `${result.benign_probability * 100}%`,
                            background: '#10B981'
                          }}
                        ></div>
                      </div>
                    </div>

                    <div style={styles.probabilityItem}>
                      <div style={styles.probabilityLabel}>
                        <span style={styles.probabilityIcon}>✗</span>
                        <span>Malignant (Cancerous)</span>
                      </div>
                      <div style={styles.probabilityValue}>
                        {((1 - result.benign_probability) * 100).toFixed(1)}%
                      </div>
                      <div style={styles.progressBar}>
                        <div 
                          style={{
                            ...styles.progressFill,
                            width: `${(1 - result.benign_probability) * 100}%`,
                            background: '#DC2626'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div style={styles.interpretation}>
                    <h4 style={styles.interpretationTitle}>Understanding Your Results</h4>
                    <p style={styles.interpretationText}>
                      {result.benign_probability > 0.7 
                        ? "The model indicates a higher probability of benign (non-cancerous) tumor characteristics based on the provided measurements."
                        : "The model indicates concerning features that warrant immediate professional medical evaluation and further diagnostic testing."}
                    </p>
                    <div style={styles.nextSteps}>
                      <strong>Important:</strong> These results are computational predictions only. 
                      Regardless of the outcome, please consult with a qualified oncologist for proper 
                      medical diagnosis, imaging studies, and biopsy confirmation.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Info Section */}
          <div style={styles.infoSection}>
            <h4 style={styles.infoTitle}>📋 Feature Guidelines</h4>
            <div style={styles.infoGrid}>
              <div style={styles.infoCard}>
                <strong>Mean Features:</strong> Average measurements of tumor characteristics including radius, perimeter, and area.
              </div>
              <div style={styles.infoCard}>
                <strong>Worst Features:</strong> The largest (most severe) values observed in the tumor sample analysis.
              </div>
              <div style={styles.infoCard}>
                <strong>Concavity:</strong> Measures the severity of indentations or concave portions in the tumor contour.
              </div>
            </div>
          </div>
        </div>
      </main>
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
    maxWidth: '1400px',
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
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '48px 24px',
  },
  container: {
    width: '100%',
  },
  titleSection: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  mainTitle: {
    fontSize: '42px',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '16px',
    lineHeight: '1.2',
  },
  gradient: {
    background: 'linear-gradient(135deg, #DC2626 0%, #EA580C 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '18px',
    color: '#6B7280',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  disclaimer: {
    background: '#FEF3C7',
    border: '2px solid #F59E0B',
    borderRadius: '12px',
    padding: '16px 20px',
    marginBottom: '32px',
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
    fontSize: '14px',
    color: '#92400E',
  },
  disclaimerIcon: {
    fontSize: '20px',
    flexShrink: 0,
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '32px',
  },
  formSection: {
    background: 'white',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    border: '1px solid #F3F4F6',
  },
  formHeader: {
    marginBottom: '32px',
    borderBottom: '2px solid #F3F4F6',
    paddingBottom: '16px',
  },
  formTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '8px',
  },
  formSubtitle: {
    fontSize: '14px',
    color: '#6B7280',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '24px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '8px',
  },
  unit: {
    fontSize: '12px',
    fontWeight: '400',
    color: '#6B7280',
  },
  input: {
    padding: '12px 16px',
    fontSize: '15px',
    border: '2px solid #E5E7EB',
    borderRadius: '8px',
    outline: 'none',
    transition: 'all 0.2s',
    fontFamily: 'inherit',
  },
  inputError: {
    borderColor: '#DC2626',
    background: '#FEF2F2',
  },
  inputFooter: {
    minHeight: '20px',
    marginTop: '4px',
  },
  rangeText: {
    fontSize: '12px',
    color: '#9CA3AF',
  },
  errorText: {
    fontSize: '12px',
    color: '#DC2626',
    fontWeight: '500',
  },
  description: {
    fontSize: '12px',
    color: '#6B7280',
    marginTop: '4px',
    lineHeight: '1.4',
  },
  errorBanner: {
    background: '#FEE2E2',
    color: '#991B1B',
    padding: '12px 16px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '20px',
    fontSize: '14px',
    fontWeight: '500',
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
  },
  predictButton: {
    flex: 1,
    background: 'linear-gradient(135deg, #DC2626 0%, #EA580C 100%)',
    color: 'white',
    padding: '14px 24px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.2s',
  },
  resetButton: {
    background: '#F3F4F6',
    color: '#374151',
    padding: '14px 24px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  buttonDisabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  spinner: {
    width: '16px',
    height: '16px',
    border: '2px solid rgba(255,255,255,0.3)',
    borderTop: '2px solid white',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
  resultsSection: {
    position: 'sticky',
    top: '24px',
  },
  resultCard: {
    background: 'white',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    border: '1px solid #F3F4F6',
  },
  resultHeader: {
    marginBottom: '24px',
    borderBottom: '2px solid #F3F4F6',
    paddingBottom: '16px',
  },
  resultTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#111827',
    margin: 0,
  },
  diagnosisBox: {
    padding: '24px',
    borderRadius: '12px',
    border: '3px solid',
    marginBottom: '24px',
    textAlign: 'center',
  },
  diagnosisLabel: {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '8px',
    opacity: 0.8,
  },
  diagnosisValue: {
    fontSize: '32px',
    fontWeight: 'bold',
  },
  probabilitySection: {
    marginBottom: '24px',
  },
  probabilityTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '16px',
  },
  probabilityItem: {
    marginBottom: '20px',
  },
  probabilityLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '8px',
  },
  probabilityIcon: {
    fontSize: '16px',
  },
  probabilityValue: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '8px',
  },
  progressBar: {
    height: '8px',
    background: '#F3F4F6',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    transition: 'width 0.5s ease',
    borderRadius: '4px',
  },
  interpretation: {
    background: '#F9FAFB',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #E5E7EB',
  },
  interpretationTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '12px',
  },
  interpretationText: {
    fontSize: '14px',
    color: '#6B7280',
    lineHeight: '1.6',
    marginBottom: '12px',
  },
  nextSteps: {
    fontSize: '13px',
    color: '#DC2626',
    lineHeight: '1.5',
    padding: '12px',
    background: '#FEF2F2',
    borderRadius: '8px',
    borderLeft: '3px solid #DC2626',
  },
  infoSection: {
    background: 'white',
    borderRadius: '16px',
    padding: '24px',
    marginTop: '32px',
  },
  infoTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '16px',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
  },
  infoCard: {
    padding: '16px',
    background: '#F9FAFB',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#374151',
    lineHeight: '1.5',
  },
};