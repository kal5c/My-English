import { ArrowUpRight, HeartHandshake } from "lucide-react";
import { Link } from "wouter";
import { ActionBand, Eyebrow, LINKS, PageHero } from "@/components/SiteShell";

export default function Results() {
  return <>
    <PageHero kicker="STUDENT STORIES, SHARED WITH CARE" title={<>Every learner has<br /><em>a different journey.</em></>} description="This page is ready for real learner stories when My English provides approved examples. We do not publish invented scores, identities, reviews or promises." tone="teal"><Link className="button button-light" href="/contact">Ask about a course <ArrowUpRight size={15} /></Link></PageHero>
    <section className="content-section"><div className="site-container"><div className="results-honesty"><div className="results-honesty-stamp">MY ENGLISH<br />STUDENT STORIES<br /><span>SHARED WITH PERMISSION</span></div><div><Eyebrow>CLIENT CONTENT TO ADD</Eyebrow><h2>Real stories deserve a real source.</h2><p>Approved testimonials, student milestones, and a passport-stamp style results wall can be added here after Yared supplies the details and confirms permission to share them. Until then, this demo keeps the space intentionally honest.</p></div></div></div></section>
    <section className="content-section content-section-alt"><div className="site-container"><div className="results-process-grid"><div><span className="results-process-number">01</span><h3>Share a real experience</h3><p>Use a student’s own words or a clearly reviewed summary.</p></div><div><span className="results-process-number">02</span><h3>Get permission</h3><p>Confirm the student is comfortable with the name, photo and details shared.</p></div><div><span className="results-process-number">03</span><h3>Keep expectations clear</h3><p>Make it clear that individual progress varies and no score is guaranteed.</p></div></div></div></section>
    <section className="content-section"><div className="site-container"><div className="results-feedback-card"><HeartHandshake size={28} /><div><Eyebrow>FOR THE SCHOOL</Eyebrow><h2>Have an approved student story?</h2><p>Contact Yared to discuss which results and testimonials should be included on the live school website.</p></div><a className="button button-dark" href={LINKS.telegram} target="_blank" rel="noreferrer">Contact My English <ArrowUpRight size={15} /></a></div></div></section>
    <ActionBand title="Start your own learning conversation." description="Ask about the current classes and decide whether one is right for you." />
  </>;
}
