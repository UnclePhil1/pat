import React, { useEffect, useState } from "react";
import Logo from "../../public/images/logow.svg";

const PatLanding: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div>
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box }
        body { background: #0a0f1a; color: #fff; }
        .gradient-bg { position: fixed; top:0; left:0; width:100%; height:100%; background: radial-gradient(ellipse at top, #193669 0%, #0a0f1a 60%); z-index:-1 }
  .container { max-width:1280px; margin:0 auto; padding:0 24px }
        nav { padding:24px 0; display:flex; justify-content:space-between; align-items:center; position:sticky; top:0; backdrop-filter: blur(10px); z-index:1000; border-bottom:1px solid rgba(42,105,168,0.1) }
        .logo { font-size:32px; font-weight:900; background: linear-gradient(135deg,#2a69a8 0%,#88a1cc 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; letter-spacing:-1px }
        .nav-links { display:flex; gap:32px; list-style:none; align-items:center }
        .nav-links a { color:#aaa; text-decoration:none; font-weight:600; font-size:14px; transition:color .3s; text-transform:uppercase; letter-spacing:.5px }
        .nav-links a:hover { color:#2a69a8 }
        .nav-cta { padding:14px 32px; background:linear-gradient(135deg,#2a69a8 0%,#193669 100%); color:#fff; border-radius:8px; font-weight:800; text-decoration:none }
        /* Mobile hamburger button */
        .mobile-menu-button { display: none; font-size:20px; padding:8px; background:transparent; border:none; color:inherit; cursor:pointer }
        /* Mobile overlay menu (hidden by default) */
        .mobile-menu { display:none; position:fixed; top:0; left:0; right:0; bottom:0; background: rgba(10,15,26,0.98); z-index:2000; padding-top:88px; overflow:auto }
        .mobile-menu.open { display:block }
        .mobile-menu ul { list-style:none; padding:24px; display:flex; flex-direction:column; gap:12px; align-items:center }
        .mobile-menu a { color:#ddd; text-decoration:none; font-size:20px; padding:12px 24px; border-radius:8px }
        .mobile-close { position:absolute; top:18px; right:18px; background:transparent; border:none; color:#ddd; font-size:28px; cursor:pointer }
        .hero { padding:100px 0 120px; text-align:center }
        .hero-title { font-size:72px; font-weight:900; line-height:1.1; margin-bottom:28px; letter-spacing:-2px }
        .highlight { background:linear-gradient(135deg,#2a69a8 0%,#88a1cc 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent }
        .hero-subtitle { font-size:24px; color:#aaa; max-width:800px; margin:0 auto 48px; line-height:1.6 }
        .hero-cta-group { display:flex; gap:20px; justify-content:center; flex-wrap:wrap; margin-bottom:80px }
        .cta-primary { padding:22px 56px; background:linear-gradient(135deg,#2a69a8 0%,#193669 100%); color:#fff; text-decoration:none; font-size:20px; font-weight:800; border-radius:12px }
  .trust-badges { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:48px; max-width:900px; margin:0 auto }
        .trust-number { font-size:52px; font-weight:900; background:linear-gradient(135deg,#2a69a8 0%,#88a1cc 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:12px }
        .trust-label { font-size:15px; color:#666 }
        .section-title { font-size:56px; font-weight:900; text-align:center; margin-bottom:24px }
        .section-subtitle { font-size:20px; color:#aaa; text-align:center; max-width:700px; margin:0 auto 60px }
        .problem-section { padding:120px 0; background: linear-gradient(180deg, transparent 0%, rgba(255,59,59,0.03) 100%) }
        .problem-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:32px }
        .problem-card { background: rgba(255,59,59,0.08); border:2px solid rgba(255,59,59,0.2); border-radius:20px; padding:40px }
        .problem-card h3 { font-size:24px; margin-bottom:16px; color:#ff6b6b; font-weight:800 }
        .problem-card p { font-size:16px; color:#ccc; line-height:1.6 }
        .solution-section { padding:120px 0 }
        .pillars-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(350px,1fr)); gap:32px }
        .pillar-card { background: linear-gradient(135deg, rgba(42,105,168,0.12) 0%, rgba(136,161,204,0.08) 100%); border:2px solid rgba(42,105,168,0.3); border-radius:24px; padding:48px }
        .pillar-card h3 { font-size:28px; color:#2a69a8; font-weight:800 }
        .pillar-card p { color:#aaa }
        .setup-section { padding:120px 0; background: rgba(42,105,168,0.03) }
        .setup-steps { display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:40px }
        .step-number { width:80px; height:80px; background:linear-gradient(135deg,#2a69a8 0%,#193669 100%); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:36px; font-weight:900; margin:0 auto 24px }
        .pricing-section { padding:120px 0 }
        .pricing-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(340px,1fr)); gap:32px; max-width:1200px; margin:0 auto }
        .pricing-card { background: rgba(255,255,255,0.02); border:2px solid rgba(255,255,255,0.1); border-radius:24px; padding:48px }
        .pricing-card.popular { background: linear-gradient(135deg, rgba(42,105,168,0.15) 0%, rgba(136,161,204,0.15) 100%); border:2px solid #2a69a8 }
        .pricing-name { font-size:30px; font-weight:900 }
        .pricing-price { font-size:56px; font-weight:900; background:linear-gradient(135deg,#2a69a8 0%,#88a1cc 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent }
        .pricing-cta { display:block; width:100%; padding:18px; background:rgba(255,255,255,0.05); border:2px solid rgba(255,255,255,0.2); color:#fff; text-align:center; text-decoration:none; font-weight:800; border-radius:12px }
  .final-cta-section { padding:140px 0; background: linear-gradient(135deg, rgba(42,105,168,0.1) 0%, rgba(25,54,105,0.1) 100%); }
  .final-cta-section .container { display:flex; flex-direction:column; align-items:center; gap:18px; text-align:center; max-width:900px; }
  .final-cta-title { font-size:64px; font-weight:900; margin:0 }
  .final-cta-subtitle { font-size:20px; color:#aaa; max-width:820px; margin:0 }
  .final-cta-section .cta-large { display:inline-block; margin-top:12px }
  .final-cta-section .social-links { margin-top:12px }
        .cta-large { padding:28px 64px; background:linear-gradient(135deg,#2a69a8 0%,#193669 100%); color:#fff; text-decoration:none; font-weight:900; border-radius:16px }
        .social-links { margin-top:60px; display:flex; justify-content:center; gap:32px }
        footer { padding:60px 0 40px; border-top:1px solid rgba(255,255,255,0.05) }
        .footer-content { display:flex; justify-content:space-between; align-items:center; gap:24px }
        .footer-links { display:flex; gap:32px; list-style:none }
        .footer-links a { color:#666; text-decoration:none }
        .footer-bottom { text-align:center; color:#666; font-size:14px; margin-top:24px }

        /* Responsive rules */
        @media (max-width: 968px) {
          .hero-title { font-size:44px }
          .section-title { font-size:36px }
          .nav-links { display:none }
          .nav-cta { display:none }
          .mobile-menu-button { display:block }
          .pricing-grid { grid-template-columns:1fr }
          .final-cta-title { font-size:40px }
          .footer-content { flex-direction:column; align-items:center; gap:16px }
        }
      `}</style>

      <div className="gradient-bg" />

      <div className="container">
        <nav>
          <div className="logo">PAT</div>

          {/* mobile hamburger - visible via CSS media query in the inline style */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="mobile-menu-button"
            onClick={() => setMenuOpen((s) => !s)}
            style={{
              background: "transparent",
              border: "none",
              color: "inherit",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <ul className="nav-links">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#setup">Setup</a>
            </li>
          </ul>

          <a href="https://pitch.patassist.xyz" className="nav-cta" target="_blank" rel="noopener noreferrer">
            PITCH
          </a>
        </nav>

        {/* Mobile overlay menu */}
        <div
          className={`mobile-menu ${menuOpen ? "open" : ""}`}
          role="dialog"
          aria-modal={menuOpen}
        >
          <button
            className="mobile-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <ul>
            <li>
              <a href="#features" onClick={() => setMenuOpen(false)}>
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={() => setMenuOpen(false)}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#setup" onClick={() => setMenuOpen(false)}>
                Setup
              </a>
            </li>
            <li>
              <a
                href="mailto:afrinix247@gmail.com"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Your Web3 Community
            <br />
            Needs <span className="highlight">PAT</span>
          </h1>
          <p className="hero-subtitle">
            She's an intelligent AI that learns studies your project and manages
            your Telegram and Discord 24/7 so you can focus on building.
          </p>

          <div className="hero-cta-group">
            <a href="mailto:afrinix247@gmail.com?subject=Get%20Started%20with%20PAT" className="cta-primary">
              Get Started Now →
            </a>
          </div>

          <div className="trust-badges">
            <div className="trust-badge">
              <div className="trust-number">8s</div>
              <div className="trust-label">Response Time</div>
            </div>
            <div className="trust-badge">
              <div className="trust-number">80%</div>
              <div className="trust-label">Less Workload</div>
            </div>
            <div className="trust-badge">
              <div className="trust-number">10K+</div>
              <div className="trust-label">Members Ready</div>
            </div>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <div className="container">
          <h2 className="section-title">The Community Management Trap</h2>
          <p className="section-subtitle">
            Most Web3 founders waste 20+ hours weekly on repetitive community
            tasks that don't scale
          </p>

          <div className="problem-grid">
            <div className="problem-card">
              <h3>24/7 Support Drain</h3>
              <p>
                Answering "wen token?" and "how to stake?" for the 100th time
                while you should be building your product.
              </p>
            </div>
            <div className="problem-card">
              <h3>Engagement Gap</h3>
              <p>
                Critical updates get buried in noisy chats. Members miss
                announcements and slowly drift away.
              </p>
            </div>
            <div className="problem-card">
              <h3>Security Nightmare</h3>
              <p>
                Spam bots, scam links, and FUD spread while you sleep. Your
                community becomes toxic fast.
              </p>
            </div>
            <div className="problem-card">
              <h3>Growth Bottleneck</h3>
              <p>
                Can't scale without hiring expensive mods. Your growth stalls
                because community management doesn't scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-section" id="features">
        <div className="container">
          <h2 className="section-title">
            Meet PAT: Your Autonomous Community Engine
          </h2>
          <p className="section-subtitle">
            An intelligent AI that learns your project and manages your Telegram
            & Discord 24/7
          </p>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">🎓</div>
              <h3>Smart Support & Education</h3>
              <p>PAT becomes an expert on your project instantly</p>
              <ul className="pillar-features">
                <li>
                  Answer any questions from community members within 8 seconds
                </li>
                <li>Handles FUD diplomatically with fact-based responses</li>
                <li>
                  Creates interactive guides to help community members
                  understand your project better
                </li>
                <li>
                  Learns and stays updated on the essential dets of your project
                </li>
              </ul>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">🛡️</div>
              <h3>24/7 Security & Moderation</h3>
              <p>Your community stays clean without human oversight</p>
              <ul className="pillar-features">
                <li>Auto-removes spam, scams, and malicious links</li>
                <li>Tiered enforcement on Discord (warnings to kicks)</li>
                <li>Welcomes every new member professionally</li>
                <li>Protects against wallet drainers and phishing</li>
              </ul>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">📈</div>
              <h3>Growth & Insights</h3>
              <p>Turn your community into a growth engine</p>
              <ul className="pillar-features">
                <li>DM campaigns that guarantee message delivery</li>
                <li>Automated referral tracking and rewards</li>
                <li>Private feedback channel for direct insights</li>
                <li>Analytics showing what actually works</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="setup-section" id="setup">
        <div className="container">
          <h2 className="section-title">Setup in 24 Hours</h2>
          <p className="section-subtitle">
            Zero technical work required. We handle everything.
          </p>

          <div className="setup-steps">
            <div className="setup-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>We learn about your project and community goals</p>
            </div>
            <div className="setup-step">
              <div className="step-number">2</div>
              <h3>Knowledge Transfer</h3>
              <p>Share your docs—PAT learns your project instantly</p>
            </div>
            <div className="setup-step">
              <div className="step-number">3</div>
              <h3>Customization</h3>
              <p>We match PAT to your brand voice and rules</p>
            </div>
            <div className="setup-step">
              <div className="step-number">4</div>
              <h3>Go Live</h3>
              <p>Add PAT to Telegram/Discord and you're done</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="container">
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-subtitle">
            All plans include Telegram & Discord support
          </p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3 className="pricing-name">BASIC</h3>
              <p className="pricing-tagline">
                Essential automation for growing communities
              </p>
              <div className="pricing-price">$99</div>
              <div className="pricing-period">/month</div>

              <ul className="pricing-features">
                <li>24/7 AI moderation on both platforms</li>
                <li>8-second response time</li>
                <li>Auto-welcome messages</li>
                <li>Spam & scam protection</li>
                <li>Knowledge base from your docs</li>
                <li>Weekly analytics</li>
                <li>Up to 2,000 members</li>
              </ul>

              <a
                href="mailto:afrinix247@gmail.com?subject=PAT%20Basic%20Plan"
                className="pricing-cta"
              >
                Get Basic →
              </a>
            </div>

            <div className="pricing-card popular">
              <h3 className="pricing-name">PLUS</h3>
              <p className="pricing-tagline">Full automation + growth tools</p>
              <div className="pricing-price">$299</div>
              <div className="pricing-period">/month</div>

              <ul className="pricing-features">
                <li>Everything in Basic, plus:</li>
                <li>FUD detection & diplomatic responses</li>
                <li>4 DM broadcast campaigns/month</li>
                <li>Automated referral tracking</li>
                <li>Advanced analytics & insights</li>
                <li>Interactive utility guides</li>
              </ul>

              <a
                href="mailto:afrinix247@gmail.com?subject=PAT%20Plus%20Plan"
                className="pricing-cta"
              >
                Get Plus →
              </a>
            </div>

            <div className="pricing-card">
              <h3 className="pricing-name">PRO</h3>
              <p className="pricing-tagline">
                Full-service community management
              </p>
              <div className="pricing-price">$999</div>
              <div className="pricing-period">/month</div>

              <ul className="pricing-features">
                <li>Everything in Plus, plus:</li>
                <li>Dedicated human community manager</li>
                <li>Weekly content calendar</li>
                <li>Unlimited DM campaigns</li>
                <li>Custom growth campaigns</li>
                <li>Bi-weekly performance reviews</li>
              </ul>

              <a
                href="mailto:afrinix247@gmail.com?subject=PAT%20Pro%20Plan"
                className="pricing-cta"
              >
                Get Pro →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container">
          <h2 className="final-cta-title">Stop Managing. Start Building.</h2>
          <p className="final-cta-subtitle">
            Join Web3 founders who've automated their communities with PAT
          </p>

          <a
            href="mailto:afrinix247@gmail.com?subject=Get%20Started%20with%20PAT"
            className="cta-large"
          >
            Get Started Today →
          </a>

          <div className="social-links">
            <a
              href="https://patassist.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 Website
            </a>
            <a
              href="https://x.com/ProjectAsst_xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              🐦 Twitter
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <img src={Logo} alt="Pat logo" style={{ width: 64, height: 64 }} />
            <ul className="footer-links">
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#story">Why PAT</a>
              </li>
              <li>
                <a href="mailto:afrinix247@gmail.com">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} PAT. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PatLanding;
