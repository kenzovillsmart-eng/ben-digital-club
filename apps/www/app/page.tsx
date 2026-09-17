import { Header } from "@ben-digital-club/ui";

export default function Page() {
  return (
    <main>
      <Header />

      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">BEN DIGITAL CLUB</p>

          <h1>Build sharper ideas with better people.</h1>

          <p className="hero-description">
            A focused digital club for people creating meaningful products,
            brands, and experiences.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#join">
              Join the club
            </a>
            <a className="button button-secondary" href="#about">
              Learn more
            </a>
          </div>
        </div>

        <div className="hero-card" aria-label="BenDigitalClub status">
          <span className="hero-card-dot" />
          <span>Building in public</span>
          <strong>01 / 2026</strong>
        </div>
      </section>

      <section id="about" className="content-section wrap">
        <p className="eyebrow">ABOUT THE CLUB</p>
        <h2>Less noise. More momentum.</h2>
        <p>
          BenDigitalClub brings together thoughtful builders to share useful
          ideas, honest feedback, and practical resources.
        </p>
      </section>

      <section id="join" className="content-section wrap">
        <p className="eyebrow">STAY CONNECTED</p>
        <h2>Something useful is coming.</h2>
        <p>Follow the project as the club takes shape.</p>
      </section>
    </main>
  );
}
