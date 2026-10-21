import { useState } from "react";
import { ArrowLeft, ArrowRight, Compass, RefreshCcw } from "lucide-react";
import { Link } from "wouter";
import { ActionBand, Eyebrow, PageHero } from "@/components/SiteShell";

const questions = [
  { prompt: "Choose the sentence that sounds right.", options: ["I am from Ethiopia.", "I is from Ethiopia.", "I are from Ethiopia."], correct: 0 },
  { prompt: "Complete the sentence: She has lived here ___ 2020.", options: ["for", "since", "during"], correct: 1 },
  { prompt: "Complete the sentence: If I ___ more time, I would have helped.", options: ["have", "had", "would have"], correct: 1 },
  { prompt: "Choose the grammatically correct option.", options: ["The teacher recommended that he arrive early.", "The teacher recommended that he arrives early.", "The teacher recommended that he arrived early."], correct: 0 },
];

export default function LevelTest() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const isDone = started && current >= questions.length;
  const score = answers.reduce((total, answer, index) => total + (answer === questions[index]?.correct ? 1 : 0), 0);
  const level = score <= 1 ? "A place to begin" : score <= 3 ? "A good base to build on" : "Ready for a next challenge";
  const levelCopy = score <= 1 ? "You may want to ask about beginner learning options and the foundations you would like to build." : score <= 3 ? "You may want to ask which intermediate or general English options fit your goals." : "You may want to discuss advanced learning or an exam-preparation goal with Yared.";
  const reset = () => { setStarted(false); setCurrent(0); setAnswers([]); };
  const choose = (choice: number) => setAnswers((existing) => { const updated = [...existing]; updated[current] = choice; return updated; });

  return <>
    <PageHero kicker="A QUICK, INFORMAL CHECK" title={<>Find a starting point.<br /><em>Then make it yours.</em></>} description="Answer four short questions to get a conversation starter. This is not an official placement test and does not save your answers." tone="teal" />
    <section className="content-section content-section-alt"><div className="site-container"><div className="level-test-card">
      {!started ? <div className="level-result"><span className="level-result-badge"><Compass size={36} strokeWidth={1.3} /></span><Eyebrow>ABOUT TWO MINUTES · NO ACCOUNT</Eyebrow><h2>Let’s find your starting point.</h2><p>This short English check is a front-end demo. It can suggest a topic to discuss, but only the school can confirm a course level.</p><button className="button button-dark" type="button" onClick={() => setStarted(true)}>Start the check <ArrowRight size={16} /></button></div>
      : isDone ? <div className="level-result"><span className="level-result-badge"><Compass size={36} strokeWidth={1.3} /></span><Eyebrow>YOUR INFORMAL RESULT · {score}/4</Eyebrow><h2>{level}</h2><p>{levelCopy} This quick result is for guidance only, not a placement decision or official English score.</p><div className="level-result-actions"><Link className="button button-dark" href={`/contact?program=${encodeURIComponent(level)}`}>Ask about my options <ArrowRight size={15} /></Link><button className="button button-outline" type="button" onClick={reset}><RefreshCcw size={15} /> Try again</button></div></div>
      : <div><div className="level-progress-meta"><span>QUESTION {current + 1} OF {questions.length}</span><span>INFORMAL CHECK</span></div><div className="level-progress-track"><span style={{ width: `${((current + 1) / questions.length) * 100}%` }} /></div><Eyebrow>CHOOSE ONE ANSWER</Eyebrow><h2 className="level-question">{questions[current].prompt}</h2><div className="level-answers" role="group" aria-label="Answer options">{questions[current].options.map((option, index) => <button type="button" key={option} className={`level-answer ${answers[current] === index ? "selected" : ""}`} onClick={() => choose(index)} aria-pressed={answers[current] === index}><span className="answer-letter">{String.fromCharCode(65 + index)}</span>{option}</button>)}</div><div className="level-footer">{current > 0 ? <button type="button" className="text-link" onClick={() => setCurrent((step) => step - 1)}><ArrowLeft size={15} /> Previous</button> : <span className="level-disclaimer">Not official placement. Answers are not saved or sent.</span>}<button className="button button-dark" type="button" disabled={answers[current] === undefined} onClick={() => setCurrent((step) => step + 1)}>{current === questions.length - 1 ? "See my suggestion" : "Next question"}<ArrowRight size={15} /></button></div></div>}
    </div></div></section>
    <section className="content-section"><div className="site-container"><div className="level-after-test"><Eyebrow>WHAT HAPPENS NEXT?</Eyebrow><h2>Your answers stay with you.</h2><p>This demo does not store your result. If you want guidance, contact My English with your learning goal and discuss the available course options.</p><Link className="text-link" href="/programs">See learning programs <ArrowRight size={16} /></Link></div></div></section>
    <ActionBand title="A level is just a place to begin." description="Talk with Yared about what you want to learn next." />
  </>;
}
