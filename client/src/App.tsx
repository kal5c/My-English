import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";

import ErrorBoundary from "./components/ErrorBoundary";
import { SiteShell } from "./components/SiteShell";
import { ThemeProvider } from "./contexts/ThemeContext";

import About from "./pages/About";
import Contact from "./pages/Contact";
import ExamPrep from "./pages/ExamPrep";
import FAQ from "./pages/FAQ";
import FreeLessons from "./pages/FreeLessons";
import Home from "./pages/Home";
import LevelTest from "./pages/LevelTest";
import NotFound from "./pages/NotFound";
import Programs from "./pages/Programs";
import Results from "./pages/Results";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "My English — Your bridge to the world",
    description:
      "Find your next step with My English. Explore online and in-person English programs, exam preparation and free lessons from Yared Alemayehu.",
  },
  "/level-test": {
    title: "Find Your Level | My English",
    description:
      "Take a short, informal English level check and get a starting point to discuss with My English.",
  },
  "/programs": {
    title: "English Programs | My English",
    description:
      "Explore Online, Group and VIP learning options from My English. Ask about current formats, schedules and fees.",
  },
  "/exam-prep": {
    title: "IELTS, TOEFL & SAT Prep | My English",
    description:
      "Ask My English about IELTS, TOEFL, SAT and visa-interview preparation options.",
  },
  "/free-lessons": {
    title: "Free English Lessons | My English",
    description:
      "Browse selected public English lessons from the My English YouTube channel by topic.",
  },
  "/about": {
    title: "About Yared Alemayehu | My English",
    description:
      "Learn about Yared Alemayehu and the My English learning community.",
  },
  "/results": {
    title: "Student Stories | My English",
    description:
      "See how My English shares learner stories responsibly, with permission and client-approved details.",
  },
  "/faq": {
    title: "Frequently Asked Questions | My English",
    description:
      "Find answers about My English classes, levels, exam preparation, schedules and contact.",
  },
  "/contact": {
    title: "Contact My English",
    description:
      "Contact My English by phone or Telegram, or prepare a front-end demo inquiry message.",
  },
};

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    const path = location.split("?")[0];

    const metadata = pageMetadata[path] ?? {
      title: "My English",
      description: "English learning with My English.",
    };

    document.title = metadata.title;

    let description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content = metadata.description;
  }, [location]);

  return (
    <SiteShell>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/level-test" component={LevelTest} />
        <Route path="/programs" component={Programs} />
        <Route path="/exam-prep" component={ExamPrep} />
        <Route path="/free-lessons" component={FreeLessons} />
        <Route path="/about" component={About} />
        <Route path="/results" component={Results} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </SiteShell>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable={true}>
        <Router />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
