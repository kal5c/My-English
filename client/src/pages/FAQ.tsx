import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { ActionBand, Eyebrow, PageHero } from "@/components/SiteShell";

const faqs = [
  { q: "Can I learn online or in person?", a: "My English shares that learning is available online and in person. Contact Yared to confirm the current class format and in-person location." },
  { q: "Which English levels are available?", a: "The school describes learning resources for beginner through advanced learners. Ask which course levels are currently open and how the school confirms a student's starting level." },
  { q: "Is the level test an official placement test?", a: "No. The quick level check on this website is an informal front-end demo to help you think about a starting point. It is not an official test, it does not save your answers and it cannot confirm course placement." },
  { q: "Which programs can I ask about?", a: "The website introduces Online, Group and VIP options. The exact format, schedule, class size, duration and fees need to be confirmed with My English." },
  { q: "Does My English prepare students for IELTS, TOEFL or SAT?", a: "The website lists IELTS, TOEFL and SAT preparation, plus visa-interview practice, as options to ask about. Contact the school to confirm which courses are available, their scope and timing." },
  { q: "How much do classes cost and when do they start?", a: "Pricing and schedules were not provided for this demo. Ask Yared directly for current fees, start dates and available times." },
  { q: "Can I register or pay on this website?", a: "Not in this front-end demo. The registration inquiry form can prepare a message for you to copy, but it does not submit or store information, process payment, enroll students or create an account." },
  { q: "Where can I find free lessons?", a: "Selected public videos from the My English YouTube channel are embedded in the Free Lessons page. You can also visit the channel and the supplied TikTok profile for more content." },
];

export default function FAQ() {
  return <>
    <PageHero kicker="QUESTIONS, ANSWERED CLEARLY" title={<>A few things you<br /><em>might be wondering.</em></>} description="Find out what is known about learning with My English and which details to confirm directly with the school." tone="cream"><Link className="button button-dark" href="/contact">Still have a question? <ArrowUpRight size={15} /></Link></PageHero>
    <section className="content-section"><div className="site-container"><div className="faq-list">{faqs.map((faq) => <details className="faq-item" key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></div></section>
    <ActionBand title="If it matters to you, ask us directly." description="Contact Yared about your level, study goal, or a detail not covered here." />
  </>;
}
