import { Header } from "@ben-digital-club/ui";

export interface SectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="content-section wrap">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export interface CTABlockProps {
  primaryText: string;
  primaryHref: string;
  secondaryText: string;
  secondaryHref: string;
}

export function CTABlock({
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
}: CTABlockProps) {
  return (
    <div className="cta-block">
      <a className="button button-primary" href={primaryHref}>
        {primaryText}
      </a>
      <a className="button button-secondary" href={secondaryHref}>
        {secondaryText}
      </a>
    </div>
  );
}

export interface HeroProps {
  eyebrow: string;
  title: string;
  description: string;
  statusText: string;
  statusDate: string;
  primaryCTA: string;
  primaryHref: string;
  secondaryCTA: string;
  secondaryHref: string;
}

export function Hero({
  eyebrow,
  title,
  description,
  statusText,
  statusDate,
  primaryCTA,
  primaryHref,
  secondaryCTA,
  secondaryHref,
}: HeroProps) {
  return (
    <section className="hero wrap">
      <div className="hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-description">{description}</p>
        <div className="hero-actions">
          <a className="button button-primary" href={primaryHref}>
            {primaryCTA}
          </a>
          <a className="button button-secondary" href={secondaryHref}>
            {secondaryCTA}
          </a>
        </div>
      </div>

      <div className="hero-card" aria-label="Status indicator">
        <span className="hero-card-dot" />
        <span>{statusText}</span>
        <strong>{statusDate}</strong>
      </div>
    </section>
  );
}
