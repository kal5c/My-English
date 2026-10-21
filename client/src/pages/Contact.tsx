import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Instagram, MapPin, MessageCircle, Phone, Send, Youtube } from "lucide-react";
import { ActionBand, Eyebrow, LINKS, PageHero } from "@/components/SiteShell";

export default function Contact() {
  const [program, setProgram] = useState(() => typeof window === "undefined" ? "" : new URLSearchParams(window.location.search).get("program") ?? "");
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);
  const prepareMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const fullName = String(form.get("fullName") ?? "").trim();
    const preferredContact = String(form.get("preferredContact") ?? "").trim();
    const level = String(form.get("level") ?? "Not sure yet");
    const mode = String(form.get("mode") ?? "Online");
    const message = String(form.get("message") ?? "").trim();
    setDraft(`Hello My English, my name is ${fullName}.\n\nI'm interested in: ${program || "English classes"}\nMy level: ${level}\nPreferred format: ${mode}\nBest way to reach me: ${preferredContact}${message ? `\n\nMy question: ${message}` : ""}`);
    setCopied(false);
  };
  const copyDraft = async () => {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return <>
    <PageHero kicker="TELL US WHAT YOU'RE WORKING TOWARD" title={<>Start with a<br /><em>simple conversation.</em></>} description="Ask about current classes, online and in-person learning, exam preparation, or how to choose a starting level." tone="cream" />
    <section className="content-section"><div className="site-container contact-grid"><div>
      <Eyebrow>CONTACT MY ENGLISH</Eyebrow>
      <article className="contact-card"><span className="contact-card-label"><Phone size={14} /> CALL THE SCHOOL</span><strong>{LINKS.phone}</strong><p>Call to ask about current classes and how to join.</p><a className="text-link" href={`tel:${LINKS.phone}`}>Call now <ArrowUpRight size={14} /></a></article>
      <article className="contact-card"><span className="contact-card-label"><Send size={14} /> MESSAGE ON TELEGRAM</span><strong>@myEng_123</strong><p>Contact My English directly on Telegram.</p><a className="text-link" href={LINKS.telegram} target="_blank" rel="noreferrer">Open Telegram <ArrowUpRight size={14} /></a></article>
      <article className="contact-card"><span className="contact-card-label"><MapPin size={14} /> LEARNING FORMAT</span><strong>Online & in person</strong><p>Ask Yared about the current online options and the in-person location.</p></article>
      <div className="contact-social-row"><a href={LINKS.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={17} /></a><a href={LINKS.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">♪</a><a href={LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a><a href={LINKS.telegram} target="_blank" rel="noreferrer" aria-label="Telegram"><MessageCircle size={17} /></a></div>
    </div><div>
      <form className="inquiry-form" onSubmit={prepareMessage}>
        <Eyebrow>COURSE INTEREST · FRONT-END DEMO</Eyebrow><h2>Register your interest</h2><p>Share what you are looking for to prepare a message you can copy and send to the school. This demo does not create an enrollment or save your information.</p>
        <div className="form-grid">
          <div className="form-field"><label htmlFor="fullName">Your name *</label><input id="fullName" name="fullName" autoComplete="name" required placeholder="Name" /></div>
          <div className="form-field"><label htmlFor="preferredContact">Phone or email *</label><input id="preferredContact" name="preferredContact" required placeholder="How should the school reach you?" /></div>
          <div className="form-field"><label htmlFor="interest">Interested in</label><select id="interest" name="interest" value={program} onChange={(event) => setProgram(event.target.value)}><option value="">Choose a program</option><option>Online</option><option>Group</option><option>VIP</option><option>IELTS</option><option>TOEFL</option><option>SAT</option><option>Visa interview preparation</option><option>Not sure yet</option></select></div>
          <div className="form-field"><label htmlFor="level">English level</label><select id="level" name="level"><option>Not sure yet</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></div>
          <div className="form-field form-field-full"><label htmlFor="mode">Preferred learning format</label><select id="mode" name="mode"><option>Online</option><option>Group</option><option>VIP</option><option>In person</option><option>Not sure yet</option></select></div>
          <div className="form-field form-field-full"><label htmlFor="message">What would you like to ask?</label><textarea id="message" name="message" placeholder="Share your goal or question (optional)" /></div>
        </div>
        <button type="submit" className="button button-dark form-submit">Prepare my inquiry <ArrowUpRight size={16} /></button>
        <p className="form-privacy-note">Demo only: no account, enrollment, payment, message submission, or data storage is active on this page.</p>
        {draft && <div className="form-draft" role="status"><strong>Your message draft is ready</strong><p>{draft}</p><div className="form-draft-actions"><button type="button" className="copy-button" onClick={copyDraft}>{copied ? <><Check size={13} /> Copied</> : <><Copy size={13} /> Copy message</>}</button><a className="copy-button" href={LINKS.telegram} target="_blank" rel="noreferrer">Open Telegram <ArrowUpRight size={13} /></a></div><p className="form-privacy-note">After copying, paste the message in Telegram or call the school. It has not been sent.</p></div>}
      </form>
    </div></div></section>
    <ActionBand title="Want to skip the form?" description="Call or message My English directly and ask about the current class options." primary="Explore programs" />
  </>;
}
