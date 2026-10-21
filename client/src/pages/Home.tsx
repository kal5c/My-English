import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "wouter";
import {
  ActionBand,
  LessonPreview,
  ProgramTicket,
  SectionHeading,
  SocialProof,
} from "@/components/SiteShell";
import { exams, lessons, programs } from "@/lib/siteContent";

export default function Home() {
  return (
    <>
      {/* Hero: headline on the left, Yared's real lesson on the right */}
      <section className="home-hero">
        <div className="site-container home-hero-grid">
          <div className="hero-copy">
            <h1>Speak English with confidence.</h1>
            <p className="hero-description">
              Learn with Yared Alemayehu, online or in person. Take a short
              level check, watch his free lessons, then ask which class fits
              you.
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/level-test">
                Find your level
              </Link>
              <Link className="button button-outline" href="/programs">
                See programs
              </Link>
            </div>
            <p className="hero-contact-hint">
              Not sure where to start?{" "}
              <Link href="/contact">Message Yared</Link>
            </p>
          </div>

          <div className="hero-video-card">
            <div className="hero-video-frame">
              <iframe
                src="https://www.youtube-nocookie.com/embed/nhV3o-R1TWc?rel=0"
                title="Useful expressions, a free lesson from My English"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="hero-video-caption">
              <p>
                <strong>Free lesson:</strong> Useful expressions
              </p>
              <a
                className="text-link"
                href="https://www.youtube.com/watch?v=nhV3o-R1TWc"
                target="_blank"
                rel="noreferrer"
              >
                <Play size={15} fill="currentColor" aria-hidden="true" /> Open
                on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      <SocialProof compact />

      {/* Level check */}
      <section className="section-section level-invite-section">
        <div className="site-container level-invite-grid">
          <div className="level-copy">
            <h2>Not sure which level you are?</h2>
            <p>
              Answer a few short questions to get a starting point. It is an
              informal check, not an official exam, and the school can help you
              read the result.
            </p>
            <Link className="button button-dark" href="/level-test">
              Take the level check
            </Link>
          </div>
          <div className="level-step-card">
            <h3>What to expect</h3>
            <ul className="plain-list">
              <li>It takes about 2 minutes.</li>
              <li>You do not need an account.</li>
              <li>It is not an official placement test.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-section programs-section" id="programs">
        <div className="site-container">
          <SectionHeading
            title="Choose how you want to learn"
            description="Online, group or VIP. Ask Yared about current schedules and fees."
            link={{ label: "See all programs", href: "/programs" }}
          />
          <div className="ticket-grid">
            {programs.map((program, index) => (
              <ProgramTicket
                key={program.name}
                {...program}
                featured={index === 1}
              />
            ))}
          </div>
          <p className="confirm-details-note">
            Schedules and fees are confirmed directly with the school.
          </p>
        </div>
      </section>

      {/* Exams */}
      <section className="exam-preview-section">
        <div className="site-container exam-preview-grid">
          <div className="exam-intro">
            <h2>Preparing for an exam or interview?</h2>
            <p>
              Practice for IELTS, TOEFL, SAT or your visa interview. Ask the
              school which courses are open right now.
            </p>
            <Link href="/exam-prep" className="button button-light">
              Explore exam prep
            </Link>
          </div>
          <div className="exam-destinations">
            {exams.map(exam => (
              <Link key={exam.name} href="/exam-prep" className="exam-row">
                <span className="exam-name">{exam.name}</span>
                <span className="exam-descriptor">{exam.descriptor}</span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Free lessons */}
      <section className="section-section lessons-section">
        <div className="site-container">
          <SectionHeading
            title="Start with a free lesson"
            description="Short, public lessons from the My English YouTube channel."
            link={{ label: "Browse free lessons", href: "/free-lessons" }}
          />
          <div className="lesson-grid">
            {lessons.slice(0, 3).map(lesson => (
              <LessonPreview key={lesson.videoId} {...lesson} />
            ))}
          </div>
          <a
            className="tiktok-banner"
            href="https://www.tiktok.com/@yared_my_english"
            target="_blank"
            rel="noreferrer"
          >
            <span className="tiktok-banner-icon" aria-hidden="true">
              ♪
            </span>
            <span>
              <strong>Short lessons on TikTok</strong>
              <small>Watch Yared's quick English tips</small>
            </span>
            <ArrowUpRight size={22} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Teacher. Add a real photo at client/public/assets/yared.jpg */}
      <section className="about-teaser">
        <div className="site-container about-teaser-inner">
          <img
            className="about-photo"
            src="/assets/yared.jpg"
            alt="Yared Alemayehu, English teacher at My English"
            onError={e => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/assets/my-english-logo.jpg";
            }}
          />
          <div className="about-teaser-copy">
            <h2>Meet Yared Alemayehu</h2>
            <p>
              Yared teaches English to learners from beginner to advanced, in
              online and in-person classes.
            </p>
            <blockquote className="about-quote">
              My English, your bridge to the world.
            </blockquote>
            <Link className="text-link" href="/about">
              Read more about Yared
            </Link>
          </div>
        </div>
      </section>

      {/* Student stories: honest placeholder until real ones are approved */}
      <section className="section-section results-preview">
        <div className="site-container results-preview-grid">
          <div>
            <h2>Student stories are coming soon</h2>
            <p>
              We only share real results with the student's permission. Until
              then, the best way to see how Yared teaches is to watch a free
              lesson.
            </p>
            <Link className="text-link" href="/results">
              About student results
            </Link>
          </div>
          <div className="results-placeholder">
            <p>Have you studied with Yared? Send him your story on Telegram.</p>
          </div>
        </div>
      </section>

      <section className="faq-nudge">
        <div className="site-container faq-nudge-inner">
          <div>
            <h2>Have a question?</h2>
            <p>
              Find answers about levels, online learning and how to contact the
              school.
            </p>
          </div>
          <Link className="button button-outline" href="/faq">
            Read the FAQ
          </Link>
        </div>
      </section>

      <ActionBand
        title="Ready to start? Talk to Yared."
        description="Tell him what you want to use English for, and ask which option fits."
        primary="Contact My English"
      />
    </>
  );
}
