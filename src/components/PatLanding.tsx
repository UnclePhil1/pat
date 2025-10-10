import React from "react";
import Logo from "../../public/images/logow.svg";

const PatLanding: React.FC = () => {
  return (
    <div>
      <div className="gradient-bg" />

      <div className="container">
        <nav>
          <img src={Logo} alt="Pat logo" className="w-20 h-20" />

          <ul className="nav-links">
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#story">Why PAT</a>
            </li>
            <li>
              <a href="#contact" className="nav-cta">
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            🚀 Your 24/7 Telegram Project Assistant
          </div>
          <h1>
            Transform Your Telegram
            <br />
            Community Into a 24/7
            <br />
            Growth Engine
          </h1>
          <p className="hero-subheadline">
            PAT automates moderation, runs DM campaigns, and manages your
            community — so you can focus on building the future.
          </p>
          <a href="#pricing" className="cta-primary">
            Choose Your Plan →
          </a>
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="container">
          <h2 className="story-headline">
            You're losing members every hour
            <br />
            you ignore your Telegram community.
          </h2>
          <p className="story-subheadline">
            The biggest reason Web3 projects fail isn't the tech — it's
            community fatigue.
          </p>

          <div className="story-content">
            <p>
              Every founder starts with hype — then burnout hits. 24/7
              questions. Spam bots. Silent channels. Missed updates. Before
              long, the community you worked so hard to build turns into a ghost
              town.
            </p>

            <p>
              That's why we built{" "}
              <strong>PAT — your Telegram Project Assistant</strong>. She never
              sleeps. She never misses a question. She moderates, messages,
              educates, and even runs your campaigns — all while keeping your
              brand voice intact.
            </p>

            <p>
              And when you choose the PRO plan, you get our human team on top —
              crafting engagement, running events, and growing your community
              like a full-time Web3 manager (without the $3k/month salary).
            </p>
          </div>

          <div className="imagine-section">
            <h3>Imagine This</h3>
            <p
              style={{
                textAlign: "center",
                color: "#999",
                marginBottom: 40,
                fontSize: 18,
              }}
            >
              You wake up to:
            </p>
            <div className="imagine-list">
              <div className="imagine-item">Zero spam in your group</div>
              <div className="imagine-item">
                Members discussing your latest update automatically
              </div>
              <div className="imagine-item">
                New users greeted, educated, and already participating
              </div>
              <div className="imagine-item">
                DM campaigns bringing users back daily
              </div>
              <div className="imagine-item">
                A full report showing your top contributors and growth metrics
              </div>
            </div>
            <p
              style={{
                textAlign: "center",
                marginTop: 40,
                fontSize: 22,
                color: "#FFD700",
                fontWeight: 700,
              }}
            >
              That's PAT — your all-in-one automation and management engine.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">Save 80% of your moderation time</div>
            <div className="benefit-card">
              Boost community retention by 40%+
            </div>
            <div className="benefit-card">
              Keep members active even when you're offline
            </div>
            <div className="benefit-card">
              Run referral & engagement campaigns automatically
            </div>
            <div className="benefit-card">
              Get clear data on what's working (and what's not)
            </div>
          </div>
        </div>
      </section>

      <div className="pricing-intro">
        <div className="container">
          <h2>
            Whether you're just starting your community or scaling to thousands
            of members
          </h2>
          <p>There's a PAT plan that fits you perfectly.</p>
        </div>
      </div>

      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-icon">🧠</div>
              <h3 className="pricing-name">PAT BASIC</h3>
              <p className="pricing-tagline">
                Let PAT handle the chaos — your community, always protected.
              </p>
              <div className="pricing-price">$99</div>
              <div className="pricing-period">/month</div>
              <div className="pricing-save">$950/yr (Save 20%)</div>

              <ul className="pricing-features">
                <li>24/7 moderation (spam, links, language)</li>
                <li>&lt;8s response time to member questions</li>
                <li>Auto-welcome & onboarding messages</li>
                <li>Weekly analytics report</li>
                <li>1 DM campaign per month</li>
                <li>Up to 2,000 community members</li>
              </ul>

              <a href="#contact" className="pricing-cta">
                Start for $99 →
              </a>
              <div className="pricing-subtext">Try risk-free for 14 days</div>
            </div>

            <div className="pricing-card popular">
              <div className="popular-badge">🔥 Most Popular</div>
              <div className="pricing-icon">🚀</div>
              <h3 className="pricing-name">PAT PLUS</h3>
              <p className="pricing-tagline">
                Automation meets growth — campaigns, data, and engagement on
                autopilot.
              </p>
              <div className="pricing-price">$299</div>
              <div className="pricing-period">/month</div>
              <div className="pricing-save">$2,870/yr (Save 20%)</div>

              <ul className="pricing-features">
                <li>Everything in Basic, plus:</li>
                <li>4 DM campaigns/month</li>
                <li>Advanced analytics (referrals, retention, engagement)</li>
                <li>Monthly growth check-in with PAT team</li>
                <li>Engagement templates & content calendar</li>
                <li>Priority onboarding (24h response)</li>
                <li>Up to 10,000 members</li>
              </ul>

              <a href="#contact" className="pricing-cta">
                Get PAT PLUS →
              </a>
              <div className="pricing-subtext">
                Most founders start here — proven ROI in 30 days
              </div>
            </div>

            <div className="pricing-card pro">
              <div className="pricing-icon">👑</div>
              <h3 className="pricing-name">PAT PRO</h3>
              <p className="pricing-tagline">
                We don't just automate — we run your community.
              </p>
              <div className="pricing-price">$999</div>
              <div className="pricing-period">/month</div>
              <div className="pricing-save">$9,590/yr (Save 20%)</div>

              <ul className="pricing-features">
                <li>Everything in PLUS, plus:</li>
                <li>Dedicated community manager (daily engagement)</li>
                <li>Weekly activity calendar + content planning</li>
                <li>Unlimited DM campaigns</li>
                <li>Bi-weekly analytics & performance review</li>
                <li>Custom growth campaigns (airdrops, referrals)</li>
                <li>24/7 human + AI moderation</li>
                <li>Crisis management support</li>
              </ul>

              <a href="#contact" className="pricing-cta">
                Apply for PAT PRO →
              </a>
              <div className="pricing-subtext">
                Limited to 10 projects/month
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="social-proof">
        <div className="container">
          <h3>Trusted by ambitious Web3 founders and communities worldwide</h3>
          <div className="testimonials">
            <div className="testimonial">
              <p className="testimonial-quote">
                "PAT cut our moderation workload by 80%."
              </p>
              <p className="testimonial-author">— Mia, DAO Founder</p>
            </div>
            <div className="testimonial">
              <p className="testimonial-quote">
                "Our retention jumped 40% after adding PAT DM flows."
              </p>
              <p className="testimonial-author">— Julian, NFT Project Lead</p>
            </div>
            <div className="testimonial">
              <p className="testimonial-quote">
                "Best investment we made for our community growth."
              </p>
              <p className="testimonial-author">— Sarah, Web3 Builder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="container">
          <h2>
            Your community deserves
            <br />
            better than chaos.
          </h2>
          <p>Let PAT automate the noise so you can focus on building.</p>
          <div className="urgency-text">
            ⚡ Only 10 PRO management slots available this month
          </div>
          <div>
            <a
              href="mailto:hello@pat.community?subject=PAT%20PLUS%20Inquiry"
              className="cta-large"
            >
              Get PAT PLUS
            </a>
            <a
              href="mailto:hello@pat.community?subject=PAT%20PRO%20Application"
              className="cta-secondary"
            >
              Apply for PRO
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <img src={Logo} alt="Pat logo" className="w-20 h-20" />

            <ul className="footer-links">
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#story">Why PAT</a>
              </li>
              <li>
                <a href="mailto:hello@pat.community">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p style={{ marginBottom: 16, color: "#888" }}>
              PAT is designed to grow
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: #0a0f1a;
            color: #ffffff;
            overflow-x: hidden;
        }

        .gradient-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(ellipse at top, #193669 0%, #0a0f1a 60%);
            z-index: -1;
        }

        .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 24px;
        }

        nav {
            padding: 32px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .logo {
            font-size: 32px;
            font-weight: 900;
            background: linear-gradient(135deg, #2a69a8 0%, #88a1cc 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            letter-spacing: -1px;
        }

        .nav-links {
            display: flex;
            gap: 40px;
            list-style: none;
            align-items: center;
        }

        .nav-links a {
            color: #999;
            text-decoration: none;
            font-weight: 600;
            font-size: 15px;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: #2a69a8;
        }

        .nav-cta {
            padding: 12px 28px;
            background: linear-gradient(135deg, #2a69a8 0%, #193669 100%);
            color: #ffffff;
            border-radius: 8px;
            font-weight: 700;
            transition: all 0.3s;
        }

        .nav-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(42, 105, 168, 0.4);
        }

        .hero {
            padding: 100px 0 140px;
            text-align: center;
        }

        .hero-badge {
            display: inline-block;
            padding: 10px 24px;
            background: rgba(42, 105, 168, 0.15);
            border: 1px solid rgba(42, 105, 168, 0.4);
            border-radius: 50px;
            color: #88a1cc;
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 32px;
            animation: fadeInDown 0.8s ease-out;
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        h1 {
            font-size: 72px;
            font-weight: 900;
            line-height: 1.05;
            margin-bottom: 28px;
            background: linear-gradient(135deg, #ffffff 0%, #88a1cc 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: fadeInUp 0.8s ease-out 0.2s both;
            letter-spacing: -2px;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .hero-subheadline {
            font-size: 24px;
            color: #aaa;
            max-width: 800px;
            margin: 0 auto 48px;
            line-height: 1.6;
            animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .cta-primary {
            display: inline-block;
            padding: 20px 56px;
            background: linear-gradient(135deg, #2a69a8 0%, #193669 100%);
            color: #ffffff;
            text-decoration: none;
            font-size: 20px;
            font-weight: 800;
            border-radius: 12px;
            transition: all 0.3s;
            box-shadow: 0 15px 50px rgba(42, 105, 168, 0.4);
            animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .cta-primary:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 60px rgba(42, 105, 168, 0.6);
        }

        .story-section {
            padding: 120px 0;
            background: linear-gradient(180deg, transparent 0%, rgba(255, 59, 59, 0.03) 100%);
        }

        .story-headline {
            font-size: 56px;
            font-weight: 900;
            text-align: center;
            margin-bottom: 24px;
            line-height: 1.1;
            letter-spacing: -1px;
        }

        .story-subheadline {
            font-size: 28px;
            color: #ff6b6b;
            text-align: center;
            margin-bottom: 48px;
            font-weight: 700;
        }

        .story-content {
            max-width: 800px;
            margin: 0 auto;
            font-size: 20px;
            line-height: 1.8;
            color: #bbb;
        }

        .story-content p {
            margin-bottom: 28px;
        }

        .story-content strong {
            color: #2a69a8;
            font-weight: 700;
        }

        .imagine-section {
            margin-top: 80px;
            padding: 60px;
            background: linear-gradient(135deg, rgba(42, 105, 168, 0.1) 0%, rgba(25, 54, 105, 0.1) 100%);
            border: 1px solid rgba(42, 105, 168, 0.3);
            border-radius: 24px;
        }

        .imagine-section h3 {
            font-size: 36px;
            margin-bottom: 32px;
            text-align: center;
            background: linear-gradient(135deg, #2a69a8 0%, #88a1cc 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .imagine-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .imagine-item {
            font-size: 22px;
            color: #ddd;
            padding-left: 40px;
            position: relative;
        }

        .imagine-item::before {
            content: "✨";
            position: absolute;
            left: 0;
            font-size: 24px;
        }

        .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 28px;
            margin-top: 80px;
        }

        .benefit-card {
            padding: 32px;
            background: rgba(42, 105, 168, 0.1);
            border: 1px solid rgba(42, 105, 168, 0.2);
            border-radius: 16px;
            font-size: 18px;
            color: #ccc;
            transition: all 0.3s;
        }

        .benefit-card:hover {
            background: rgba(42, 105, 168, 0.15);
            border-color: rgba(42, 105, 168, 0.4);
            transform: translateY(-4px);
        }

        .benefit-card::before {
            content: "⚡";
            display: block;
            font-size: 32px;
            margin-bottom: 12px;
        }

        .pricing-intro {
            padding: 80px 0 60px;
            text-align: center;
        }

        .pricing-intro h2 {
            font-size: 48px;
            font-weight: 900;
            margin-bottom: 20px;
            letter-spacing: -1px;
        }

        .pricing-intro p {
            font-size: 20px;
            color: #aaa;
            max-width: 700px;
            margin: 0 auto;
        }

        .pricing-section {
            padding: 60px 0 120px;
        }

        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 32px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .pricing-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            padding: 48px;
            transition: all 0.4s;
            position: relative;
        }

        .pricing-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
        }

        .pricing-card.popular {
            background: linear-gradient(135deg, rgba(42, 105, 168, 0.15) 0%, rgba(136, 161, 204, 0.15) 100%);
            border: 2px solid #2a69a8;
            transform: scale(1.05);
        }

        .pricing-card.popular:hover {
            transform: scale(1.05) translateY(-8px);
        }

        .popular-badge {
            position: absolute;
            top: -16px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #2a69a8 0%, #193669 100%);
            color: #ffffff;
            padding: 8px 24px;
            border-radius: 50px;
            font-size: 14px;
            font-weight: 800;
            box-shadow: 0 10px 30px rgba(42, 105, 168, 0.4);
        }

        .pricing-icon {
            font-size: 48px;
            margin-bottom: 20px;
        }

        .pricing-name {
            font-size: 28px;
            font-weight: 800;
            margin-bottom: 12px;
            letter-spacing: -0.5px;
        }

        .pricing-tagline {
            font-size: 16px;
            color: #999;
            margin-bottom: 28px;
            line-height: 1.5;
        }

        .pricing-price {
            font-size: 52px;
            font-weight: 900;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #2a69a8 0%, #88a1cc 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .pricing-period {
            font-size: 16px;
            color: #666;
            margin-bottom: 8px;
        }

        .pricing-save {
            font-size: 14px;
            color: #88a1cc;
            font-weight: 700;
            margin-bottom: 32px;
        }

        .pricing-features {
            list-style: none;
            margin-bottom: 40px;
        }

        .pricing-features li {
            padding: 12px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            font-size: 15px;
            color: #bbb;
            display: flex;
            align-items: flex-start;
            gap: 12px;
        }

        .pricing-features li::before {
            content: "✓";
            color: #2a69a8;
            font-weight: 900;
            font-size: 18px;
            flex-shrink: 0;
        }

        .pricing-cta {
            display: block;
            width: 100%;
            padding: 18px;
            background: rgba(255, 255, 255, 0.05);
            border: 2px solid rgba(255, 255, 255, 0.2);
            color: #fff;
            text-align: center;
            text-decoration: none;
            font-size: 18px;
            font-weight: 800;
            border-radius: 12px;
            transition: all 0.3s;
        }

        .pricing-cta:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.4);
        }

        .pricing-card.popular .pricing-cta {
            background: linear-gradient(135deg, #2a69a8 0%, #193669 100%);
            color: #ffffff;
            border: none;
        }

        .pricing-card.popular .pricing-cta:hover {
            box-shadow: 0 10px 40px rgba(42, 105, 168, 0.5);
            transform: translateY(-2px);
        }

        .pricing-card.pro .pricing-cta {
            background: linear-gradient(135deg, #0a0f1a 0%, #193669 100%);
            border: 2px solid #2a69a8;
            color: #88a1cc;
        }

        .pricing-card.pro .pricing-cta:hover {
            background: linear-gradient(135deg, #2a69a8 0%, #193669 100%);
            color: #ffffff;
            border-color: #2a69a8;
        }

        .pricing-subtext {
            text-align: center;
            margin-top: 12px;
            font-size: 13px;
            color: #666;
        }

        .social-proof {
            padding: 100px 0;
            background: rgba(42, 105, 168, 0.05);
            text-align: center;
        }

        .social-proof h3 {
            font-size: 32px;
            margin-bottom: 60px;
            color: #888;
        }

        .testimonials {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 32px;
            max-width: 1000px;
            margin: 0 auto;
        }

        .testimonial {
            background: rgba(255, 255, 255, 0.02);
            padding: 36px;
            border-radius: 16px;
            border: 1px solid rgba(42, 105, 168, 0.2);
        }

        .testimonial-quote {
            font-size: 18px;
            color: #ccc;
            margin-bottom: 20px;
            line-height: 1.6;
            font-style: italic;
        }

        .testimonial-author {
            font-size: 15px;
            color: #2a69a8;
            font-weight: 700;
        }

        .final-cta {
            padding: 140px 0;
            text-align: center;
            background: linear-gradient(135deg, rgba(42, 105, 168, 0.1) 0%, rgba(25, 54, 105, 0.1) 100%);
        }

        .final-cta h2 {
            font-size: 64px;
            font-weight: 900;
            margin-bottom: 24px;
            line-height: 1.1;
            letter-spacing: -2px;
        }

        .final-cta p {
            font-size: 24px;
            color: #aaa;
            margin-bottom: 20px;
        }

        .urgency-text {
            display: inline-block;
            padding: 12px 32px;
            background: rgba(255, 59, 59, 0.2);
            border: 1px solid rgba(255, 59, 59, 0.4);
            border-radius: 50px;
            color: #ff6b6b;
            font-size: 16px;
            font-weight: 700;
            margin: 24px 0 48px;
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }

        .cta-large {
            display: inline-block;
            padding: 28px 72px;
            background: linear-gradient(135deg, #2a69a8 0%, #193669 100%);
            color: #ffffff;
            text-decoration: none;
            font-size: 24px;
            font-weight: 900;
            border-radius: 16px;
            transition: all 0.3s;
            box-shadow: 0 20px 60px rgba(42, 105, 168, 0.4);
            margin: 0 12px;
        }

        .cta-large:hover {
            transform: translateY(-5px);
            box-shadow: 0 25px 70px rgba(42, 105, 168, 0.6);
        }

        .cta-secondary {
            display: inline-block;
            padding: 28px 72px;
            background: transparent;
            border: 2px solid #2a69a8;
            color: #88a1cc;
            text-decoration: none;
            font-size: 24px;
            font-weight: 900;
            border-radius: 16px;
            transition: all 0.3s;
            margin: 0 12px;
        }

        .cta-secondary:hover {
            background: rgba(42, 105, 168, 0.15);
            transform: translateY(-5px);
        }

        .cta-secondary:hover {
            background: rgba(255, 215, 0, 0.1);
            transform: translateY(-5px);
        }

        footer {
            padding: 80px 0 40px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 24px;
            margin-bottom: 40px;
        }

        .footer-links {
            display: flex;
            gap: 32px;
            list-style: none;
        }

        .footer-links a {
            color: #666;
            text-decoration: none;
            transition: color 0.3s;
            font-size: 15px;
        }

        .footer-links a:hover {
            color: #FFD700;
        }

        .footer-bottom {
            text-align: center;
            color: #666;
            font-size: 14px;
            padding-top: 40px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 968px) {
            h1 {
                font-size: 48px;
            }

            .hero-subheadline {
                font-size: 20px;
            }

            .story-headline {
                font-size: 40px;
            }

            .story-subheadline {
                font-size: 22px;
            }

            .nav-links {
                display: none;
            }

            .pricing-grid {
                grid-template-columns: 1fr;
            }

            .pricing-card.popular {
                transform: scale(1);
            }

            .imagine-section {
                padding: 40px 24px;
            }

            .cta-large, .cta-secondary {
                display: block;
                margin: 12px 0;
            }

            .final-cta h2 {
                font-size: 40px;
            }
        }
      `}</style>
    </div>
  );
};

export default PatLanding;
