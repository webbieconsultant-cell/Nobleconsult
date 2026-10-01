:root {
  --bg: #f5f2ee;
  --bg-soft: #f0ece7;
  --card: #ffffff;
  --primary: #0d0d0d;
  --primary-2: #171717;
  --accent: #ff5a1f;
  --accent-deep: #e94d17;
  --text: #111111;
  --text-soft: #4d5054;
  --line: rgba(13, 13, 13, 0.08);
  --shadow: 0 30px 70px rgba(11, 22, 33, 0.12);
  --radius: 30px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  font-weight: 600;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

button,
input,
textarea {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 110px 0;
}

.soft-bg {
  background: var(--bg-soft);
}

.page-hero {
  background: linear-gradient(180deg, #f2efe9 0%, #f7f5f2 100%);
  padding: 120px 0 70px;
}

.narrow {
  max-width: 760px;
}

.eyebrow {
  display: inline-block;
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 800;
  color: var(--accent-deep);
  margin-bottom: 18px;
}

.eyebrow.dark {
  color: var(--accent-deep);
}

.eyebrow.light {
  color: rgba(255, 255, 255, 0.8);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  letter-spacing: -0.05em;
  line-height: 1.08;
  font-weight: 800;
}

h1 {
  font-size: clamp(2.8rem, 5vw, 5rem);
  margin-bottom: 22px;
}

h2 {
  font-size: clamp(2.2rem, 3vw, 3.2rem);
  margin-bottom: 18px;
}

h3 {
  font-size: 1.45rem;
  margin-bottom: 14px;
}

p,
li,
span,
a {
  font-weight: 600;
}

p {
  color: var(--text-soft);
  font-size: 1.04rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 28px;
  border: 1px solid transparent;
  border-radius: 999px;
  font-weight: 800;
  transition: 0.2s ease;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--accent);
  color: white;
  box-shadow: 0 16px 30px rgba(255, 90, 31, 0.23);
}

.btn-primary:hover {
  background: var(--accent-deep);
}

.btn-secondary {
  background: transparent;
  border-color: var(--line);
  color: var(--text);
}

.btn-light {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.18);
  color: white;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(13, 13, 13, 0.88);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.nav {
  min-height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 52px;
  height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 2px solid var(--accent);
  background: #0d0d0d;
  color: #ffffff;
  font-weight: 900;
  letter-spacing: -0.08em;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  color: white;
}

.brand-text strong {
  font-size: 1.1rem;
  font-weight: 900;
}

.brand-text small {
  font-size: 0.72rem;
  opacity: 0.8;
  font-weight: 800;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.main-nav a {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.93rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  transition: opacity 0.2s ease;
}

.main-nav a:hover,
.main-nav a.active {
  opacity: 0.9;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.nav-toggle {
  display: none;
  width: 42px;
  height: 42px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: white;
  border-radius: 2px;
  margin: 7px auto;
}

.hero {
  background:
    radial-gradient(circle at top right, rgba(255, 90, 31, 0.18), transparent 30%),
    linear-gradient(135deg, #090909 0%, #121212 35%, #1b1b1b 100%);
  color: white;
  padding: 100px 0 90px;
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 56px;
  align-items: center;
}

.hero-copy p {
  max-width: 640px;
  margin-bottom: 28px;
  color: rgba(255,255,255,0.74);
  font-size: 1.08rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 34px;
}

.mini-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.mini-stats div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mini-stats strong {
  font-size: clamp(1.8rem, 2vw, 2.3rem);
  color: white;
}

.mini-stats span {
  color: rgba(255,255,255,0.72);
  font-size: 0.8rem;
}

.hero-visual {
  position: relative;
  min-height: 550px;
  display: grid;
  place-items: center;
}

.orb {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 90, 31, 0.24), transparent 62%);
  filter: blur(28px);
}

.dashboard-card {
  position: relative;
  width: min(500px, 100%);
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 28px;
  padding: 20px;
  box-shadow: 0 30px 80px rgba(0,0,0,0.24);
  backdrop-filter: blur(12px);
  z-index: 2;
}

.dashboard-top {
  display: flex;
  gap: 8px;
  margin-bottom: 26px;
}

.dashboard-top span {
  width: 11px;
  height: 11px;
  display: block;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
}

.chart {
  height: 220px;
  display: flex;
  align-items: flex-end;
  gap: 16px;
  padding: 0 14px 10px;
}

.bar {
  display: block;
  width: 100%;
  border-radius: 16px 16px 0 0;
  background: linear-gradient(180deg, #ff9a6d, #ff5a1f);
}

.b1 { height: 40%; }
.b2 { height: 52%; }
.b3 { height: 79%; }
.b4 { height: 66%; }
.b5 { height: 92%; }

.kpis {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 18px;
}

.kpis div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.kpis small {
  color: rgba(255,255,255,0.72);
}

.kpis strong {
  color: white;
  font-size: 1.12rem;
}

.floating-note {
  position: absolute;
  z-index: 3;
  background: rgba(255,255,255,0.96);
  color: var(--primary);
  border-radius: 18px;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 28px 60px rgba(0,0,0,0.18);
}

.note-one {
  top: 26px;
  right: 24px;
}

.note-two {
  bottom: 10px;
  left: 12px;
}

.floating-note span {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-soft);
}

.floating-note strong {
  font-size: 1.34rem;
}

.brands {
  background: white;
  border-bottom: 1px solid var(--line);
}

.brand-strip {
  min-height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand-strip > span {
  color: var(--text-soft);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.76rem;
}

.brand-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  color: rgba(12,29,43,0.58);
  font-weight: 700;
}

.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 54px;
  align-items: center;
}

.image-panel {
  position: relative;
}

.image-box,
.page-image {
  width: min(520px, 100%);
  height: 540px;
  border-radius: 30px;
  background:
    linear-gradient(135deg, rgba(18, 33, 45, 0.55), rgba(18, 33, 45, 0.18)),
    url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
  box-shadow: var(--shadow);
}

.image-1 {
  background:
    linear-gradient(135deg, rgba(18, 33, 45, 0.55), rgba(18, 33, 45, 0.18)),
    url('https://images.unsplash.com/photo-1522202176988-66273c2d5700?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
}

.badge {
  position: absolute;
  left: 20px;
  bottom: 18px;
  background: rgba(255,255,255,0.96);
  color: var(--primary);
  border-radius: 999px;
  font-weight: 800;
  padding: 10px 18px;
}

.check-list {
  list-style: none;
  display: grid;
  gap: 16px;
  margin: 28px 0 36px;
}

.check-list li {
  position: relative;
  padding-left: 32px;
  color: var(--text);
  font-weight: 700;
}

.check-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--accent-deep);
  font-weight: 900;
}

.services-section {
  background: var(--bg-soft);
}

.section-heading {
  margin-bottom: 44px;
  max-width: 760px;
}

.section-heading.center {
  margin: 0 auto 44px;
  text-align: center;
}

.section-heading.left {
  margin-bottom: 0;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.service-card {
  background: white;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 28px 22px;
  box-shadow: 0 12px 26px rgba(0,0,0,0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 36px rgba(0,0,0,0.08);
}

.service-icon {
  width: 54px;
  height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: rgba(255, 90, 31, 0.12);
  color: var(--accent-deep);
  font-weight: 800;
  margin-bottom: 22px;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

.process-card {
  background: white;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 28px 22px;
  box-shadow: 0 12px 28px rgba(0,0,0,0.03);
}

.step-number {
  width: 54px;
  height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: rgba(255, 90, 31, 0.12);
  color: var(--accent-deep);
  font-weight: 800;
  margin-bottom: 18px;
}

.stats-section {
  background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.stat-box {
  padding: 28px 18px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  background: rgba(255,255,255,0.02);
}

.stat-box strong {
  display: block;
  font-size: clamp(2rem, 3vw, 2.8rem);
  margin-bottom: 6px;
}

.pricing-section {
  background: white;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.pricing-card {
  background: var(--bg-soft);
  border: 1px solid var(--line);
  border-radius: 26px;
  padding: 28px 22px;
  box-shadow: 0 12px 26px rgba(0,0,0,0.03);
}

.pricing-card.featured {
  background: linear-gradient(135deg, #0d0d0d, #171717);
  color: white;
  transform: translateY(-8px);
}

.pricing-card.featured ul li,
.pricing-card.featured p,
.pricing-card.featured .plan-head h3,
.pricing-card.featured .plan-head span {
  color: white;
}

.plan-head {
  margin-bottom: 18px;
}

.plan-head span {
  color: var(--text-soft);
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.plan-head h3 {
  font-size: clamp(2rem, 2.5vw, 3rem);
  color: var(--primary);
  margin-top: 10px;
}

.pricing-card ul {
  list-style: none;
  display: grid;
  gap: 10px;
  margin: 24px 0;
  color: var(--text);
}

.pricing-card li {
  position: relative;
  padding-left: 22px;
}

.pricing-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  font-weight: 900;
  color: var(--accent-deep);
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.testimonial {
  background: white;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 28px 22px;
  box-shadow: 0 12px 28px rgba(0,0,0,0.03);
  font-weight: 600;
}

.testimonial footer {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 20px;
}

.testimonial footer strong {
  color: var(--primary);
}

.testimonial footer span {
  color: var(--text-soft);
  font-size: 0.85rem;
}

.faq-wrap {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 30px;
  align-items: start;
}

.faq-list {
  display: grid;
  gap: 14px;
}

.faq-item {
  background: white;
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
}

.faq-question {
  width: 100%;
  border: none;
  background: transparent;
  padding: 20px 22px;
  text-align: left;
  color: var(--text);
  font-weight: 800;
  cursor: pointer;
}

.faq-answer {
  display: none;
  padding: 0 22px 20px;
  color: var(--text-soft);
}

.faq-item.active .faq-answer {
  display: block;
}

.cta-section {
  padding-top: 0;
}

.cta-box {
  background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
  border-radius: 32px;
  color: white;
  padding: 42px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
}

.contact-section {
  padding: 110px 0;
}

.contact-wrap {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 30px;
  align-items: start;
}

.contact-copy {
  padding-top: 12px;
}

.contact-info {
  margin-top: 24px;
  display: grid;
  gap: 12px;
}

.contact-form {
  background: white;
  border: 1px solid var(--line);
  border-radius: 26px;
  padding: 28px 22px;
  box-shadow: 0 12px 28px rgba(0,0,0,0.03);
}

.form-row {
  margin-bottom: 18px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid rgba(13,13,13,0.12);
  border-radius: 14px;
  background: #faf9f6;
  padding: 16px 18px;
  resize: vertical;
  color: var(--text);
}

.contact-form textarea {
  min-height: 150px;
}

.site-footer {
  background: #0d0d0d;
  color: rgba(255,255,255,0.8);
  padding: 28px 0;
}

.footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.socials {
  display: flex;
  align-items: center;
  gap: 18px;
}

.socials a {
  color: rgba(255,255,255,0.8);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.feature-card {
  background: white;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 28px 22px;
  box-shadow: 0 12px 26px rgba(0,0,0,0.03);
}

.service-list {
  display: grid;
  gap: 20px;
}

.service-item {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 18px;
  align-items: start;
  background: white;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 28px 22px;
}

.service-badge {
  width: 54px;
  height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: rgba(255, 90, 31, 0.12);
  color: var(--accent-deep);
  font-weight: 800;
}

.deliverables-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.deliverable {
  background: white;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 28px 22px;
  box-shadow: 0 12px 26px rgba(0,0,0,0.03);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.portfolio-card {
  overflow: hidden;
  background: white;
  border: 1px solid var(--line);
  border-radius: 26px;
  box-shadow: 0 14px 30px rgba(0,0,0,0.03);
}

.portfolio-image {
  height: 260px;
  background-size: cover;
  background-position: center;
}

.image-one {
  background-image: linear-gradient(135deg, rgba(12, 28, 43, 0.3), rgba(12, 28, 43, 0.2)), url('https://images.unsplash.com/photo-1522202176988-66273c2d5700?auto=format&fit=crop&w=1200&q=80');
}

.image-two {
  background-image: linear-gradient(135deg, rgba(12, 28, 43, 0.3), rgba(12, 28, 43, 0.2)), url('https://images.unsplash.com/photo-1556740749-887f6717d8d6?auto=format&fit=crop&w=1200&q=80');
}

.image-three {
  background-image: linear-gradient(135deg, rgba(12, 28, 43, 0.3), rgba(12, 28, 43, 0.2)), url('https://images.unsplash.com/photo-1516321318423-f06f85e304d3?auto=format&fit=crop&w=1200&q=80');
}

.portfolio-content {
  padding: 22px 20px 24px;
}

.portfolio-content span {
  display: inline-block;
  color: var(--text-soft);
  font-size: 0.76rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.result-box {
  background: white;
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 30px 20px;
  text-align: center;
}

.result-box strong {
  display: block;
  font-size: clamp(2rem, 3vw, 2.8rem);
  color: var(--primary);
  margin-bottom: 6px;
}

.result-box span {
  color: var(--text-soft);
  font-size: 0.92rem;
}

@media (max-width: 980px) {
  .hero-grid,
  .split,
  .faq-wrap,
  .contact-wrap,
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .card-grid,
  .pricing-grid,
  .process-grid,
  .testimonial-grid,
  .stats-grid,
  .portfolio-grid,
  .results-grid,
  .deliverables-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .brand-strip,
  .cta-box,
  .footer-row {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 760px) {
  .main-nav {
    position: absolute;
    top: 82px;
    left: 20px;
    right: 20px;
    display: none;
    background: rgba(13,29,43,0.95);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 18px;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .main-nav.open {
    display: flex;
  }

  .nav-toggle {
    display: block;
  }

  .card-grid,
  .pricing-grid,
  .process-grid,
  .testimonial-grid,
  .stats-grid,
  .portfolio-grid,
  .results-grid,
  .deliverables-grid,
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .cta-box {
    padding: 30px 24px;
  }

  .hero {
    padding-top: 80px;
  }

  .service-item {
    grid-template-columns: 1fr;
  }
}
