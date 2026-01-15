import { useState } from "react";
import api from "../services/api";

export default function Predict() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState(null);

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;
    
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setResult(null);
    setError(null);
  };

  const handleFileInput = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setError(null);
    
    try {
      const res = await api.post("/predict", formData);
      console.log("API Response:", res.data); // Debug log
      
      // Try different possible response structures
      const predictedChar = res.data.predicted_character || 
                           res.data.prediction || 
                           res.data.character ||
                           res.data.result;
      
      if (predictedChar) {
        setResult(predictedChar);
      } else {
        setError("No prediction returned from server");
        console.error("Unexpected response format:", res.data);
      }
    } catch (err) {
      console.error("Prediction error:", err);
      setError(err.response?.data?.detail || err.message || "Prediction failed. Please try again.");
    }
    setLoading(false);
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setError(null);
  };

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

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.titleSection}>
            <h2 style={styles.mainTitle}>
              <span style={styles.gradient}>Handwritten Character</span>
              <br />
              Recognition
            </h2>
            <p style={styles.subtitle}>
              Upload a clear image of a handwritten character to get instant AI-powered predictions
            </p>
          </div>

          <div style={styles.content}>
            {/* Upload Area */}
            {!preview ? (
              <div
                style={{
                  ...styles.uploadArea,
                  ...(dragActive ? styles.uploadAreaActive : {})
                }}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div style={styles.uploadIcon}>📤</div>
                <h3 style={styles.uploadTitle}>Drop your image here</h3>
                <p style={styles.uploadText}>or click to browse</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileInput}
                  style={styles.fileInput}
                  id="file-upload"
                />
                <label htmlFor="file-upload" style={styles.uploadButton}>
                  Choose File
                </label>
                <p style={styles.uploadHint}>Supports: JPG, PNG, GIF (Max 10MB)</p>
              </div>
            ) : (
              <div style={styles.previewSection}>
                {/* Preview Card */}
                <div style={styles.previewCard}>
                  <div style={styles.previewHeader}>
                    <h3 style={styles.previewTitle}>Uploaded Image</h3>
                    <button onClick={handleReset} style={styles.resetButton}>
                      ✕
                    </button>
                  </div>
                  <div style={styles.imageContainer}>
                    <img src={preview} alt="preview" style={styles.previewImage} />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    style={{
                      ...styles.predictButton,
                      ...(loading ? styles.predictButtonDisabled : {})
                    }}
                  >
                    {loading ? (
                      <>
                        <span style={styles.spinner}></span>
                        <span>Analyzing...</span>
                      </>
                    ) : (
                      <>
                        <span>🔍</span>
                        <span>Predict Character</span>
                      </>
                    )}
                  </button>
                  
                  {/* Error Message */}
                  {error && (
                    <div style={styles.errorMessage}>
                      <span>⚠️</span>
                      <span>{error}</span>
                    </div>
                  )}
                </div>

                {/* Result Card */}
                {result && (
                  <div style={styles.resultCard}>
                    <div style={styles.resultHeader}>
                      <span style={styles.checkmark}>✓</span>
                      <h3 style={styles.resultTitle}>Prediction Complete</h3>
                    </div>
                    <div style={styles.resultContent}>
                      <p style={styles.resultLabel}>Predicted Character:</p>
                      <div style={styles.resultCharacter}>{result}</div>
                    </div>
                    <button onClick={handleReset} style={styles.tryAgainButton}>
                      Try Another Image
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Instructions */}
          <div style={styles.instructions}>
            <h4 style={styles.instructionsTitle}>Tips for Best Results</h4>
            <div style={styles.tipsList}>
              <div style={styles.tip}>
                <span style={styles.tipIcon}>💡</span>
                <span>Use clear, well-lit images</span>
              </div>
              <div style={styles.tip}>
                <span style={styles.tipIcon}>✍️</span>
                <span>Ensure character is centered</span>
              </div>
              <div style={styles.tip}>
                <span style={styles.tipIcon}>📏</span>
                <span>Avoid blurry or cropped images</span>
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
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '48px 24px',
  },
  container: {
    width: '100%',
  },
  titleSection: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  mainTitle: {
    fontSize: '42px',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '16px',
    lineHeight: '1.2',
  },
  gradient: {
    background: 'linear-gradient(135deg, #4F46E5 0%, #9333EA 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '18px',
    color: '#6B7280',
    maxWidth: '600px',
    margin: '0 auto',
  },
  content: {
    marginBottom: '40px',
  },
  uploadArea: {
    background: 'white',
    border: '3px dashed #D1D5DB',
    borderRadius: '24px',
    padding: '64px 32px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s',
    position: 'relative',
  },
  uploadAreaActive: {
    borderColor: '#4F46E5',
    background: '#EEF2FF',
  },
  uploadIcon: {
    fontSize: '64px',
    marginBottom: '16px',
  },
  uploadTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '8px',
  },
  uploadText: {
    fontSize: '16px',
    color: '#6B7280',
    marginBottom: '24px',
  },
  fileInput: {
    display: 'none',
  },
  uploadButton: {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #4F46E5 0%, #9333EA 100%)',
    color: 'white',
    padding: '12px 32px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s',
  },
  uploadHint: {
    fontSize: '14px',
    color: '#9CA3AF',
    marginTop: '16px',
  },
  previewSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  previewCard: {
    background: 'white',
    borderRadius: '24px',
    padding: '32px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    border: '1px solid #F3F4F6',
  },
  previewHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  previewTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#111827',
    margin: 0,
  },
  resetButton: {
    background: '#FEE2E2',
    color: '#DC2626',
    border: 'none',
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'all 0.2s',
  },
  imageContainer: {
    background: '#F9FAFB',
    borderRadius: '16px',
    padding: '24px',
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px',
  },
  previewImage: {
    maxWidth: '100%',
    maxHeight: '250px',
    objectFit: 'contain',
    borderRadius: '8px',
  },
  predictButton: {
    width: '100%',
    background: 'linear-gradient(135deg, #4F46E5 0%, #9333EA 100%)',
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
  predictButtonDisabled: {
    opacity: 0.7,
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
  errorMessage: {
    marginTop: '16px',
    padding: '12px 16px',
    background: '#FEE2E2',
    color: '#DC2626',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
  },
  resultCard: {
    background: 'white',
    borderRadius: '24px',
    padding: '32px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    border: '1px solid #F3F4F6',
  },
  resultHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px',
  },
  checkmark: {
    width: '32px',
    height: '32px',
    background: '#10B981',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  resultTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#111827',
    margin: 0,
  },
  resultContent: {
    textAlign: 'center',
    marginBottom: '24px',
  },
  resultLabel: {
    fontSize: '14px',
    color: '#6B7280',
    marginBottom: '12px',
  },
  resultCharacter: {
    fontSize: '80px',
    fontWeight: 'bold',
    color: '#4F46E5',
    background: '#EEF2FF',
    width: '120px',
    height: '120px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',
    border: '3px solid #4F46E5',
  },
  tryAgainButton: {
    width: '100%',
    background: '#F3F4F6',
    color: '#374151',
    padding: '12px 24px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  instructions: {
    background: 'white',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    border: '1px solid #F3F4F6',
  },
  instructionsTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '20px',
  },
  tipsList: {
    display: 'grid',
    gap: '16px',
  },
  tip: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '15px',
    color: '#374151',
  },
  tipIcon: {
    fontSize: '24px',
  },
};