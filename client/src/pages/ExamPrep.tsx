import { ArrowUpRight, Compass } from "lucide-react";
import { Link } from "wouter";
import { ActionBand, Eyebrow, PageHero } from "@/components/SiteShell";
import { exams } from "@/lib/siteContent";

export default function ExamPrep() {
  return <>
    <PageHero kicker="PREPARE FOR YOUR NEXT MILESTONE" title={<>Practice with purpose.<br /><em>Plan your next move.</em></>} description="Explore exam preparation for IELTS, TOEFL and SAT, plus visa-interview practice. Contact My English to confirm course scope, availability and the right next step." tone="teal"><Link className="button button-light" href="/contact">Ask about exam prep <ArrowUpRight size={16} /></Link></PageHero>
    <section className="content-section"><div className="site-container"><div className="section-heading"><div><Eyebrow>EXAM DESTINATIONS</Eyebrow><h2>What are you<br /><em>preparing for?</em></h2><p>Choose a destination to start a conversation. Course dates, format and requirements should be confirmed with the school.</p></div></div><div className="exam-grid">{exams.map((exam) => <article className="exam-card" key={exam.name}><span className="exam-card-number">{exam.short} — MY ENGLISH</span><h2>{exam.name}</h2><span className="lesson-category">{exam.descriptor}</span><p>{exam.note}</p><Link className="text-link" href={`/contact?program=${encodeURIComponent(exam.name)}`}>Ask about {exam.name} <ArrowUpRight size={15} /></Link></article>)}</div></div></section>
    <section className="content-section content-section-alt"><div className="site-container"><div className="exam-prep-note"><div className="exam-note-icon"><Compass size={30} strokeWidth={1.3} /></div><div><Eyebrow>START WITH YOUR GOAL</Eyebrow><h2>Share your target and timeline.</h2><p>Exam preparation can depend on your current English level, intended test date and study needs. Contact Yared to discuss these details and confirm which classes are available.</p><Link className="text-link" href="/level-test">Try the informal level check <ArrowUpRight size={15} /></Link></div></div></div></section>
    <ActionBand title="Your exam goal deserves a clear plan." description="Ask My English about the current preparation options before enrolling." primary="Contact about exam prep" />
  </>;
}
