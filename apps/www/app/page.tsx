import { Header } from "@ben-digital-club/ui";
import { FeatureCard, Section } from "./components/site-shell";

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

      <Section id="about" eyebrow="ABOUT THE CLUB" title="Less noise. More momentum.">
        <p>
          BenDigitalClub brings together thoughtful builders to share useful
          ideas, honest feedback, and practical resources.
        </p>
      </Section>

      <Section id="join" eyebrow="STAY CONNECTED" title="A growing circle of builders.">
        <div className="join-layout">
          <div>
            <p>
              Follow the project as the club takes shape. Each release adds more
              structure, sharper thinking, and more room for meaningful
              collaboration.
            </p>
          </div>

          <div className="feature-grid">
            <FeatureCard
              title="Weekly ideas"
              description="Short-form insight drops that help creators move faster and think clearer."
            />
            <FeatureCard
              title="Useful feedback"
              description="A place to test early concepts, gather honest responses, and improve with intention."
            />
            <FeatureCard
              title="Shared momentum"
              description="Build in public, celebrate progress, and keep momentum alive with a small but thoughtful community."
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
