# My English front-end demo — TODO

## Public navigation and responsive site shell
- [x] Provide responsive public pages/routes for Home, Level Test, Programs, Exam Prep, Free Lessons, About Yared, Results, FAQ, and Contact, with coherent navigation between them. Implemented in `client/src/App.tsx` with shared responsive layout in `client/src/components/SiteShell.tsx` and routes declared in `client/public/manus-routes.json`.
- [x] Keep clear access to the supplied phone, Telegram, and supplied social channels throughout the website, including the contact/footer experience. Implemented in shared header/footer and Contact page.
- [x] Provide an English/Amharic language switch control. English is the natural primary language; do not fabricate Amharic translations, and indicate honestly when Amharic page copy is not available. Implemented as EN/አማ UI; the Amharic control states that translated copy awaits school approval.

## Homepage and student discovery
- [x] Show a clear introduction to My English, in-person and online learning, inquiry-focused calls to action, a level-test invitation, program previews, exam-prep previews, free-lesson highlights, responsible social proof, and a complete contact/social footer. Implemented in `client/src/pages/Home.tsx` and shared site shell.
- [x] Provide a short front-end-only find-your-level experience with sample questions, a step/progress indicator, a non-diagnostic result screen, and guidance to contact the school. Do not save results, claim real tracking, authenticate users, or claim backend submission. Implemented in `client/src/pages/LevelTest.tsx`; results exist only in component state.

## Programs and exam preparation
- [x] Present Online, Group, and VIP programs as distinctive ticket-inspired cards with inquiry actions. Implemented in `client/src/lib/siteContent.ts` and `ProgramTicket` component.
- [x] Clearly identify pricing, schedules, duration, location, and class-size details as needing client confirmation when values are unknown; do not invent these details. Program copy directs the visitor to confirm details with My English.
- [x] Cover IELTS, TOEFL, SAT, and visa-interview preparation with careful non-fabricated copy and contact-based next steps rather than enrollment or payment flows. Implemented in `client/src/pages/ExamPrep.tsx`.

## Free lessons and social channels
- [x] Organize the free-learning library into Grammar, Speaking, Vocabulary, and other topics. Implemented with category filters in `client/src/pages/FreeLessons.tsx`.
- [x] Use only selected public links or embeds from the supplied YouTube and TikTok channels; do not invent individual video titles or imply unrelated content is endorsed. The Free Lessons page embeds six videos whose titles and URLs were taken from the supplied My English public channel; TikTok links to the supplied profile.
- [x] Include YouTube https://www.youtube.com/@MyEnglish-lz9sp, TikTok @yared_my_english, Instagram @my_e_n_g_l_i_s_h, and Telegram https://t.me/myEng_123, plus phone 0968901570. Implemented through shared contact/social links.
- [x] Use the supplied profile descriptions and statistics only as supplied by the client: YouTube 143K subscribers, 637 videos, 22,809,698 views; TikTok 593.8K followers, 5.9M likes; Instagram 69.3K followers. Avoid implying independent verification. Profile statistics are attributed to supplied profile figures; full counts are represented on About page where useful.

## About, results, FAQ, and contact
- [x] Present Yared Alemayehu as the school lead, with supplied profile details and placeholders for biography/credentials that still require confirmation. Implemented in `client/src/pages/About.tsx` with confirmation note.
- [x] Show a Results/testimonial area with client-supplied-content placeholders only. Do not fabricate student outcomes, scores, identities, endorsements, or success claims. Implemented in `client/src/pages/Results.tsx` and homepage preview.
- [x] Cover questions about learning format, level selection, programs, exam preparation, and inquiry expectations. Implemented in `client/src/pages/FAQ.tsx`.
- [x] Provide contact information and polished front-end-only inquiry/registration demo forms. Forms must not claim successful submission or operational enrollment. Implemented in `client/src/pages/Contact.tsx`; the form only creates a local copyable message draft and explicitly discloses that it does not send or store data.

## Clearly scoped front-end-only behavior
- [x] Do not implement backend services, working user accounts, payment processing, enrollment, protected course access, admin dashboard, real progress tracking, or actual form submission. No such services or real storage/submission flows were implemented.
- [x] Make all demo flows and inquiry paths honest about being front-end-only, and keep the design/component structure suitable for future backend, enrollment, payment, course-access, notifications, progress, and admin upgrades. The inquiry form and FAQ disclose their prototype-only status; routes and reusable components leave a clear extension point for future features.
