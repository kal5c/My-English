import { ArrowUpRight, Globe2, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { ActionBand, Eyebrow, LINKS, PageHero } from "@/components/SiteShell";

export default function About() {
  return <>
    <PageHero
      kicker="THE PERSON BEHIND MY ENGLISH"
      title={<>Meet Yared<br /><em>Alemayehu.</em></>}
      description="My English is an English-learning channel and school led by Yared Alemayehu, sharing lessons for learners from beginner to advanced."
      tone="cream"
    >
      <a className="button button-dark" href={LINKS.youtube} target="_blank" rel="noreferrer">
        Visit the YouTube channel <ArrowUpRight size={16} />
      </a>
    </PageHero>
    <section className="content-section">
      <div className="site-container about-story-grid">
        <div className="about-story-copy">
          <Eyebrow>MY ENGLISH · YOUR BRIDGE TO THE WORLD</Eyebrow>
          <h2>English learning,<br /><em>shared across channels.</em></h2>
          <p>The My English channel describes its purpose as helping people learn English through videos, podcasts and blog posts. Its resources are described as serving beginners through advanced learners.</p>
          <p>The school offers the opportunity to learn online or in person. To ask about the available class formats, current schedules or next steps, contact Yared directly.</p>
          <p>This website uses the information shared in the channel and social profile details. Teaching credentials, biography details and course specifics should be confirmed by the school before publication.</p>
          <Link className="text-link" href="/contact">Ask about learning with My English <ArrowUpRight size={15} /></Link>
        </div>
        <div className="about-story-mark"><img src="/assets/my-english-logo.jpg" alt="My English logo" /></div>
      </div>
    </section>
    <section className="content-section content-section-alt">
      <div className="site-container">
        <Eyebrow>FOLLOW THE LEARNING COMMUNITY</Eyebrow>
        <h2 className="social-stats-title">Lessons reach learners<br /><em>where they are.</em></h2>
        <div className="about-social-grid">
          <article className="about-social-card">
            <strong>143K</strong>
            <span>YouTube subscribers · 637 videos</span>
            <span>22,809,698 views</span>
            <a href={LINKS.youtube} target="_blank" rel="noreferrer">Explore the channel <ArrowUpRight size={13} /></a>
          </article>
          <article className="about-social-card">
            <strong>593.8K</strong>
            <span>TikTok followers · 5.9M likes</span>
            <a href={LINKS.tiktok} target="_blank" rel="noreferrer">Follow on TikTok <ArrowUpRight size={13} /></a>
          </article>
          <article className="about-social-card">
            <strong>69.3K</strong>
            <span>Instagram followers</span>
            <a href={LINKS.instagram} target="_blank" rel="noreferrer">Follow on Instagram <ArrowUpRight size={13} /></a>
          </article>
        </div>
        <p className="credential-note">Social profile figures were supplied with the school information and may change. No teaching qualifications, years of experience or specific student outcomes are claimed here; add those details only after Yared confirms them.</p>
      </div>
    </section>
    <section className="content-section">
      <div className="site-container">
        <div className="about-next-step">
          <div>
            <Eyebrow>LEARN YOUR WAY</Eyebrow>
            <h2>Online or in person,<br /><em>start with a question.</em></h2>
            <p>Tell the school what you hope to learn and ask about current options.</p>
          </div>
          <div className="about-next-actions">
            <Link className="button button-dark" href="/programs">Explore programs <ArrowUpRight size={16} /></Link>
            <a href={LINKS.telegram} className="button button-outline" target="_blank" rel="noreferrer"><MessageCircle size={16} /> Message on Telegram</a>
            <a className="about-contact-phone" href={`tel:${LINKS.phone}`}><Globe2 size={15} /> Call {LINKS.phone}</a>
          </div>
        </div>
      </div>
    </section>
    <ActionBand title="Ready to choose your next step?" description="Explore programs or contact Yared directly with your question." />
  </>;
}
