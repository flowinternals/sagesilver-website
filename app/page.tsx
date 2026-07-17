import PhoneField from "./PhoneField";

const services = [
  { title: "Quality Engineering", text: "Practical test strategy, governance and delivery leadership that improves confidence without slowing your teams.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85" },
  { title: "AI & Workflow Automation", text: "Useful AI agents and n8n automations designed around your processes, controls and measurable business outcomes.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85" },
  { title: "Digital Product Delivery", text: "From discovery and architecture through implementation, testing and release—one accountable delivery partner.", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85" },
  { title: "Technology Advisory", text: "Independent guidance for modernisation, platform selection, delivery recovery and technology risk.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85" },
  { title: "Team Capability", text: "Coaching, playbooks and hands-on enablement that leave your people stronger after the engagement ends.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85" },
];

const testimonials = [
  ["SageSilver brought structure to a complex program quickly. The advice was direct, practical and immediately useful.", "Program Director", "Financial Services"],
  ["We moved from experimenting with AI to a working, governed automation that our team could actually maintain.", "Operations Manager", "Professional Services"],
  ["A rare mix of strategic thinking and hands-on delivery. Risks were surfaced early and the team always knew what came next.", "Head of Technology", "Melbourne"],
];

const faqs = [
  ["What types of organisations do you work with?", "We support Australian businesses, government programs and technology teams ranging from growing SMEs to large enterprises."],
  ["Can you work with our existing delivery team?", "Yes. Engagements can be advisory, embedded, outcome-based or a combination, depending on what will move the work forward."],
  ["Do you deliver remotely?", "Yes. SageSilver is Melbourne-based and works with clients across Australia through a mix of remote and on-site delivery."],
  ["Can we start with a short discovery engagement?", "Yes. A focused discovery is often the fastest way to define the problem, priorities, risks and a practical delivery roadmap."],
];

function Arrow() { return <span aria-hidden="true">→</span>; }

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#top"><span className="brand-mark">S</span><span>SAGE<span>SILVER</span></span></a>
          <nav aria-label="Main navigation">
            <a href="#services">Services</a><a href="#reviews">Reviews</a><a href="#about">About Us</a><a href="#areas">Service Areas</a><a href="#contact">Contact</a>
          </nav>
          <div className="nav-actions"><a className="phone" href="tel:+61300000000">03 0000 0000</a><a className="button small" href="#contact">Enquire Now</a></div>
          <a className="menu" href="#contact" aria-label="Open contact section">☰</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <video className="hero-video" autoPlay loop muted playsInline poster="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=90">
            <source src="https://videos.pexels.com/video-files/3255275/3255275-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" />
          <a href="#contact" className="offer"><small>START A CONVERSATION</small><strong>Free Discovery Call</strong><span>Melbourne & Australia-wide</span></a>
          <div className="hero-inner">
            <div className="rating">
              <div className="avatars">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&q=85" alt="Client" />
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=85" alt="Client" />
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=100&h=100&q=85" alt="Client" />
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=85" alt="Client" />
                <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100&q=85" alt="Client" />
              </div>
              <div className="rating-score"><b>★★★★★</b><span>4.9/5 (47+ reviews)</span></div>
            </div>
            <h1>IT Consulting Built Around Your Business</h1>
            <p>Independent technology consulting, quality engineering and AI automation for Australian organisations—delivered with clarity, care and commercial focus.</p>
            <div className="hero-actions"><a className="button" href="#contact"><Arrow /> Start a Conversation</a><a className="button outline" href="tel:+61300000000">☎ 03 0000 0000</a></div>
            <div className="proof"><span>✓ Melbourne-based</span><span>✓ Senior consultant-led</span><span>✓ Flexible engagements</span></div>
          </div>
        </section>

        <section className="section alt" id="services">
          <div className="section-head"><span>SERVICES</span><h2>Technology Services That Deliver</h2><p>We bring experienced, independent technology capability directly into your organisation—helping you solve difficult delivery problems and turn good ideas into reliable outcomes.</p></div>
          <div className="cards">{services.map((s) => <article className="service-card" key={s.title}><div className="card-image" style={{backgroundImage:`url(${s.image})`}}/><div className="card-body"><h3>{s.title}</h3><p>{s.text}</p><a href="#contact">Discuss your needs <Arrow /></a></div></article>)}</div>
        </section>

        <section className="section process">
          <div className="section-head"><span>OUR PROCESS</span><h2>A Clear Path From Problem to Progress</h2><p>No theatre, no black box. You always know what we are doing, why it matters and what happens next.</p></div>
          <div className="steps"><article><b>01</b><h3>Discover</h3><p>Understand the business context, constraints and outcomes that matter.</p></article><article><b>02</b><h3>Design</h3><p>Shape a pragmatic approach, delivery plan and measurable definition of success.</p></article><article><b>03</b><h3>Deliver</h3><p>Work alongside your team to implement, validate and embed the solution.</p></article></div>
        </section>

        <section className="section alt" id="reviews">
          <div className="section-head"><span>CLIENT FEEDBACK</span><h2>Trusted for Complex Technology Work</h2><p>Mock testimonials for layout purposes—ready to replace with verified client feedback.</p></div>
          <div className="review-grid">{testimonials.map((t) => <blockquote key={t[1]}><div className="stars">★★★★★</div><p>“{t[0]}”</p><footer><strong>{t[1]}</strong><span>{t[2]}</span></footer></blockquote>)}</div>
        </section>

        <section className="split" id="about">
          <div className="about-image" role="img" aria-label="Technology consultants collaborating in a modern office" />
          <div className="about-copy"><span>ABOUT SAGESILVER</span><h2>Experienced Advice. Practical Delivery.</h2><p>SageSilver Pty Ltd is an Australian technology consultancy based in Melbourne. We help organisations improve how they design, build, test and operate digital products and services.</p><p>Our approach combines senior-level judgement with hands-on delivery. We focus on useful outcomes, transparent communication and capability that stays with your team.</p><ul><li>Independent, vendor-neutral advice</li><li>Deep quality and delivery expertise</li><li>Modern AI and automation capability</li><li>Australian-owned and operated</li></ul><a className="button" href="#contact">Work With Us <Arrow /></a></div>
        </section>

        <section className="section areas" id="areas">
          <div className="section-head"><span>WHERE WE WORK</span><h2>Melbourne Based. Australia Wide.</h2><p>On-site support across metropolitan Melbourne, with remote consulting and delivery available throughout Australia.</p></div>
          <div className="area-grid"><article><b>Melbourne CBD</b><span>On-site & hybrid</span></article><article><b>Greater Melbourne</b><span>On-site & hybrid</span></article><article><b>Victoria</b><span>Remote & on-site</span></article><article><b>Australia Wide</b><span>Remote delivery</span></article></div>
        </section>

        <section className="section alt" id="faq">
          <div className="section-head"><span>COMMON QUESTIONS</span><h2>Frequently Asked Questions</h2></div>
          <div className="faq-list">{faqs.map((f, i) => <details key={f[0]} open={i===0}><summary>{f[0]}<span>+</span></summary><p>{f[1]}</p></details>)}</div>
        </section>

        <section className="booking" id="contact">
          <div className="booking-copy"><span>LET’S TALK</span><h2>Ready to Move Your Technology Work Forward?</h2><p>Tell us what you are trying to achieve. We will come back to you to arrange an initial, no-obligation conversation.</p><div><b>Based in Melbourne, Victoria</b><small>Supporting clients across Australia</small></div></div>
          <form className="contact-card">
            <label>Name<input type="text" placeholder="Your name" /></label>
            <label>Work email<input type="email" placeholder="you@company.com.au" /></label>
            <label>Phone
              <PhoneField />
            </label>
            <label>How can we help?<select defaultValue=""><option value="" disabled>Select a service</option><option>Quality Engineering</option><option>AI & Workflow Automation</option><option>Digital Product Delivery</option><option>Technology Advisory</option></select></label>
            <label>Message<textarea placeholder="Tell us a little about your needs" rows={4}/></label>
            <button className="button" type="button">Send Enquiry <Arrow /></button>
            <small>Demonstration form only. Submission will be connected during customisation.</small>
          </form>
        </section>
      </main>

      <footer className="footer"><div><a className="brand" href="#top"><span className="brand-mark">S</span><span>SAGE<span>SILVER</span></span></a><p>Practical technology consulting for Australian organisations.</p></div><div><h3>Services</h3><a href="#services">Quality Engineering</a><a href="#services">AI & Automation</a><a href="#services">Digital Delivery</a><a href="#services">Technology Advisory</a></div><div><h3>Company</h3><a href="#about">About Us</a><a href="#areas">Service Areas</a><a href="#faq">FAQs</a><a href="#contact">Contact</a></div><div><h3>Contact</h3><a href="mailto:hello@sagesilver.au">hello@sagesilver.au</a><span>Melbourne, Victoria</span><span>Australia</span></div><div className="copyright">© 2026 SageSilver Pty Ltd. All rights reserved.<span>Privacy Policy · Terms of Service</span></div></footer>
      <div className="mobile-bar"><a href="tel:+61300000000">☎ Call</a><a href="#contact">Enquire Now</a></div>
    </>
  );
}
