import { useMemo, useState } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { ActionBand, Eyebrow, PageHero } from "@/components/SiteShell";
import { lessons } from "@/lib/siteContent";

const categories = ["All lessons", "Grammar", "Speaking", "Vocabulary", "Pronunciation", "Beginner"];

export default function FreeLessons() {
  const [activeCategory, setActiveCategory] = useState("All lessons");
  const visibleLessons = useMemo(() => activeCategory === "All lessons" ? lessons : lessons.filter((lesson) => lesson.category === activeCategory), [activeCategory]);
  return <>
    <PageHero kicker="LEARN SOMETHING FOR FREE" title={<>A little practice<br /><em>goes a long way.</em></>} description="Explore selected public lessons from the My English YouTube channel. Filter by topic, watch here, or open the original video." tone="cream" />
    <section className="content-section"><div className="site-container"><div className="section-heading"><div><Eyebrow>THE FREE LESSON LIBRARY</Eyebrow><h2>Pick a topic.<br /><em>Press play.</em></h2><p>These videos are embedded from the public My English channel. Titles are shown as they appear on YouTube.</p></div></div><div className="lesson-filters" role="group" aria-label="Filter lessons by topic">{categories.map((category) => <button type="button" key={category} className={`filter-pill ${activeCategory === category ? "active" : ""}`} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}>{category}</button>)}</div><div className="video-library-grid">{visibleLessons.map((lesson) => <article className="video-embed-card" key={lesson.videoId}><div className="video-embed-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${lesson.videoId}?rel=0`} title={`${lesson.title} — My English`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div><div className="video-embed-info"><span>{lesson.category} · FREE YOUTUBE LESSON</span><h3>{lesson.title}</h3><a className="text-link" href={lesson.href} target="_blank" rel="noreferrer">Open on YouTube <ArrowUpRight size={14} /></a></div></article>)}</div></div></section>
    <section className="content-section content-section-alt"><div className="site-container"><div className="tiktok-feature"><span className="tiktok-feature-icon">♪</span><div><Eyebrow light>QUICK LESSONS ON TIKTOK</Eyebrow><h2>Keep English close by.</h2><p>Follow @yared_my_english for short lessons and learning updates from My English.</p></div><a className="button" href="https://www.tiktok.com/@yared_my_english" target="_blank" rel="noreferrer">Visit TikTok <ArrowUpRight size={15} /></a></div></div></section>
    <section className="content-section"><div className="site-container"><div className="free-learning-note"><span><BookOpen size={23} /></span><div><Eyebrow>KEEP YOUR MOMENTUM</Eyebrow><h2>Want a more guided path?</h2><p>Explore the current online, group and VIP options. Course availability and details are confirmed directly with the school.</p><a className="text-link" href="/programs">Explore programs <ArrowUpRight size={15} /></a></div></div></div></section>
    <ActionBand title="Free lessons today. A new goal tomorrow." description="Explore structured learning options when you are ready to take the next step." primary="Explore programs" />
  </>;
}
