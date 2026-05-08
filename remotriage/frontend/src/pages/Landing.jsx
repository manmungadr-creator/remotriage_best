// src/pages/Landing.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const HOW_IT_WORKS = [
  { icon: "🩺", title: "Select Symptoms", desc: "Choose from a comprehensive list of symptoms in English or Kiswahili, designed for Kenya's healthcare context." },
  { icon: "⚡", title: "AI-Assisted Analysis", desc: "Our WHO-aligned deterministic triage engine provides immediate, reliable assessment with supplementary AI guidance." },
  { icon: "🏥", title: "Clear Next Steps", desc: "Receive actionable guidance on home care, clinic visits, or emergency care based on your specific situation." },
];

const TRUST_SIGNALS = [
  { icon: "🏥", title: "WHO IMCI Aligned", desc: "Built on World Health Organization Integrated Management of Childhood Illness protocols" },
  { icon: "📱", title: "Universal Access", desc: "Works on smartphones and basic feature phones via USSD - no internet required" },
  { icon: "🇰🇪", title: "Kenya Ministry of Health", desc: "Aligned with Kenya's national healthcare protocols and facility network" },
  { icon: "🔒", title: "Privacy First", desc: "Your health information is secure and confidential, compliant with healthcare standards" },
];

export default function Landing() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleEmergency = () => {
    if (window.confirm("🚨 This will call Kenya Emergency Services (999). Proceed?")) {
      window.location.href = "tel:999";
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="page page--landing">
      <header className="nav">
        <div className="nav__brand">
          <span className="nav__cross">+</span> RemoTriage
        </div>
        <div className="nav__actions">
          <button className="btn btn--outline btn--sm">🇰🇪 EN/SW</button>
          {user ? (
            <>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--gray-700)", display: "flex", alignItems: "center", gap: "4px" }}>
                👤 {user.name || user.email}
              </span>
              <Link to="/assessment" className="btn btn--primary btn--sm">Start Assessment</Link>
              <button className="btn btn--ghost btn--sm" onClick={handleLogout}>Sign Out</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn--ghost">Sign In</Link>
              <Link to="/register" className="btn btn--primary">Get Started</Link>
            </>
          )}
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero__copy">
            <p className="eyebrow">Trusted AI-Assisted Health Triage for Kenya</p>
            <h1 className="hero__title">Know When to Seek Care</h1>
            <p className="hero__desc">
              Get safe, reliable health guidance in under 60 seconds. RemoTriage combines 
              WHO-aligned protocols with AI assistance to help you make informed healthcare decisions.
              Available via web app and USSD for all Kenyans.
            </p>
            <div className="hero__cta">
              <Link to="/assessment" className="btn btn--primary btn--lg">Start Free Assessment</Link>
              <a href="#how-it-works" className="btn btn--outline btn--lg">Learn More</a>
            </div>
            <div className="hero__emergency">
              <button className="btn btn--emergency" onClick={handleEmergency}>
                🚨 Emergency Quick Access — Call 999
              </button>
            </div>
            <p className="disclaimer">
              ⚠️ <strong>AI-assisted guidance, not diagnosis.</strong> Always confirm with a qualified healthcare professional.
            </p>
          </div>
          <div className="hero__badge">
            {TRUST_SIGNALS.map((signal, i) => (
              <div key={i} className="badge-card">
                <div className="badge-card__icon">{signal.icon}</div>
                <div className="badge-card__text">
                  <strong>{signal.title}</strong>
                  <span>{signal.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="emergency-banner">
          <strong>🚨 Life-threatening emergency?</strong> Call{" "}
          <a href="tel:0800723253">0800 723 253</a> (free, 24/7) or dial{" "}
          <a href="tel:999">999</a> immediately
        </section>

        <section id="how-it-works" className="section">
          <h2 className="section__title">How RemoTriage Works</h2>
          <div className="steps">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={i} className="step-card">
                <span className="step-card__icon">{step.icon}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section section--alt">
          <div className="trust-content">
            <h2 className="section__title">Built for Safety and Trust</h2>
            <div className="trust-grid">
              <div className="trust-item">
                <div className="trust-icon">🛡️</div>
                <h3>Safety-First Design</h3>
                <p>Deterministic triage engine ensures consistent, reliable results. AI provides supplementary guidance only.</p>
              </div>
              <div className="trust-item">
                <div className="trust-icon">👥</div>
                <h3>Healthcare Professional</h3>
                <p>Developed with medical experts and aligned with WHO protocols and Kenya Ministry of Health standards.</p>
              </div>
              <div className="trust-item">
                <div className="trust-icon">🌍</div>
                <h3>Kenya-Focused</h3>
                <p>Specifically designed for Kenya's healthcare landscape, facility network, and cultural context.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>RemoTriage © 2025 · Built for Kenya's Healthcare System</p>
          <p><strong>Not a medical device</strong> — AI-assisted triage guidance only</p>
          <p>Dial <strong>*384#</strong> for USSD access on any phone · Available in English &amp; Kiswahili</p>
        </div>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}
