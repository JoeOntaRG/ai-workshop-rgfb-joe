import React from 'react';
import { Stethoscope, ShoppingCart, Banknote, GraduationCap, Factory, Plane } from 'lucide-react';
import { ChapterSlide } from '../components/slides/ChapterSlide';
import QuizSlide from '../components/slides/QuizSlide';

// Cover & Intro
import Day1Cover from '../components/slides/intro/Day1Cover';
import SpeakerProfile from '../components/slides/intro/SpeakerProfile';
import Day1Agenda from '../components/slides/intro/Day1Agenda';

// Sesi 2: AI Demystified
import WhyAILiteracy from '../components/slides/sesi2/WhyAILiteracy';
import AIvsMLvsGenAI from '../components/slides/sesi2/AIvsMLvsGenAI';
import AITimeline from '../components/slides/sesi2/AITimeline';
import TypesOfModels from '../components/slides/sesi2/TypesOfModels';
import IndustrySlide from '../components/slides/sesi2/IndustrySlide';

// Sesi 3: Prompt Engineering
import WhyPromptMatters from '../components/slides/sesi3/WhyPromptMatters';
import AnatomyOfGoodPrompt from '../components/slides/sesi3/AnatomyOfGoodPrompt';
import RICEFramework from '../components/slides/sesi3/RICEFramework';
import RICEExample from '../components/slides/sesi3/RICEExample';
import ChainOfThought from '../components/slides/sesi3/ChainOfThought';
import FewShotPrompting from '../components/slides/sesi3/FewShotPrompting';
import RoleBasedPrompting from '../components/slides/sesi3/RoleBasedPrompting';
import IterationRefinement from '../components/slides/sesi3/IterationRefinement';
import CommonMistakes from '../components/slides/sesi3/CommonMistakes';
import PromptTemplateLibrary from '../components/slides/sesi3/PromptTemplateLibrary';

// Sesi 4: AI at Work Part 1
import HRIntro from '../components/slides/sesi4/HRIntro';
import HRJobDescription from '../components/slides/sesi4/HRJobDescription';
import HRScreening from '../components/slides/sesi4/HRScreening';
import HROnboarding from '../components/slides/sesi4/HROnboarding';
import MarketingIntro from '../components/slides/sesi4/MarketingIntro';
import MarketingCopywriting from '../components/slides/sesi4/MarketingCopywriting';
import MarketingStrategy from '../components/slides/sesi4/MarketingStrategy';
import MarketingAnalytics from '../components/slides/sesi4/MarketingAnalytics';
import MarketingSEO from '../components/slides/sesi4/MarketingSEO';

// Sesi 5: AI at Work Part 2
import FinanceReports from '../components/slides/sesi5/FinanceReports';
import FinanceAnalysis from '../components/slides/sesi5/FinanceAnalysis';
import OperationsSOP from '../components/slides/sesi5/OperationsSOP';
import OperationsEfficiency from '../components/slides/sesi5/OperationsEfficiency';
import DesignVisualAssets from '../components/slides/sesi5/DesignVisualAssets';
import DesignVideoGen from '../components/slides/sesi5/DesignVideoGen';
import AIatWorkSummary from '../components/slides/sesi5/AIatWorkSummary';

// Sesi 6: Wrap-up
import KeyTakeaways from '../components/slides/sesi6/KeyTakeaways';
import Day2Preview from '../components/slides/sesi6/Day2Preview';
import Closing from '../components/slides/sesi6/Closing';

export const slidesDataDay1 = [
  // ── Cover & Agenda ──────────────────────────────────────────
  { component: <Day1Cover />, isDark: false },
  { component: <SpeakerProfile />, isDark: false },
  { component: <Day1Agenda />, isDark: false },

  // ── Session 1: AI Demystified (09.05 – 09.50) ───────────────
  { component: <ChapterSlide number="1" chapter="AI Demystified" time="09.05 – 09.50"
      title="What AI Actually Is."
      subtitle="Distinguishing AI, Machine Learning, and Generative AI."
    />, isDark: true },
  { component: <WhyAILiteracy />, isDark: false },
  { component: <AIvsMLvsGenAI />, isDark: false },
  { component: <AITimeline />, isDark: false },
  { component: <TypesOfModels />, isDark: false },

  // 6 Industries — one slide each, with hero image + concrete examples
  { component: <IndustrySlide
      index={1} Icon={Stethoscope} industry="Healthcare" color="#f43f5e"
      headline="AI reads scans, accelerates research, and triages patients faster than ever before."
      media={{ type: 'image', src: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1200' }}
      caption="Radiologists using AI detect lung nodules ~5% more accurately and 26% faster (Nature Medicine, 2023)."
      examples={[
        { title: 'Radiology assist',     desc: 'AI highlights suspicious areas on X-rays, CTs, and MRIs for doctor review.' },
        { title: 'Drug discovery',       desc: 'Generative models propose new molecules — cutting years off research timelines.' },
        { title: 'Patient triage',       desc: 'Chatbots screen symptoms and route patients to the right specialist 24/7.' },
      ]}
    />, isDark: false },

  { component: <IndustrySlide
      index={2} Icon={ShoppingCart} industry="Retail" color="#f59e0b"
      headline="Every product you see, every price you’re shown — most of it is decided by AI."
      media={{ type: 'image', src: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200' }}
      caption="35% of Amazon revenue comes from AI-powered recommendations (McKinsey)."
      examples={[
        { title: 'Recommendations',      desc: '“Customers also bought” is generated in real time from your browsing patterns.' },
        { title: 'Demand forecasting',   desc: 'AI predicts which SKUs will sell next week, in which store, at what volume.' },
        { title: 'Dynamic pricing',      desc: 'Prices adjust automatically based on demand, competitors, and inventory.' },
      ]}
    />, isDark: false },

  { component: <IndustrySlide
      index={3} Icon={Banknote} industry="Finance" color="#10b981"
      headline="Banks block fraud, score credit, and answer customers — often without a human involved."
      media={{ type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200' }}
      caption="Mastercard’s AI fraud system blocks ~$3B in fraudulent transactions a year."
      examples={[
        { title: 'Fraud detection',      desc: 'Card swipes are scored in <100 ms — suspicious ones are blocked instantly.' },
        { title: 'Credit scoring',       desc: 'Models evaluate hundreds of signals to approve loans in seconds.' },
        { title: 'AI advisors',          desc: 'Chatbots handle balance checks, transfers, and basic financial planning.' },
      ]}
    />, isDark: false },

  { component: <IndustrySlide
      index={4} Icon={GraduationCap} industry="Education" color="#0ea5e9"
      headline="Lessons adapt to each student, essays get instant feedback, and tutoring happens 24/7."
      media={{ type: 'video', src: '/notebooklm-listen-learn.mp4' }}
      caption="Google NotebookLM turns any document into an interactive audio overview — like a podcast just for you."
      examples={[
        { title: 'Adaptive tutors',      desc: 'Lesson difficulty adjusts to the learner — slower for some, harder for others.' },
        { title: 'Auto-grading',         desc: 'Essays and short answers are scored consistently in minutes, not days.' },
        { title: 'Personalized content', desc: 'Practice questions are generated to target a student’s weak spots.' },
      ]}
    />, isDark: false },

  { component: <IndustrySlide
      index={5} Icon={Factory} industry="Manufacturing" color="#6366f1"
      headline="Machines predict their own failures, vision systems catch defects humans miss."
      media={{ type: 'image', src: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=1200' }}
      caption="GE reports ~30% reduction in equipment downtime via AI-driven predictive maintenance."
      examples={[
        { title: 'Predictive maintenance', desc: 'Sensors + AI predict when a machine will fail — fix it before it stops the line.' },
        { title: 'Computer vision QC',     desc: 'Cameras spot defects on the production line faster than human inspectors.' },
        { title: 'Supply chain optimization', desc: 'AI re-routes shipments around disruptions, manages inventory across plants.' },
      ]}
    />, isDark: false },

  { component: <IndustrySlide
      index={6} Icon={Plane} industry="Logistics" color="#8b5cf6"
      headline="Routes optimize themselves, warehouses run on robots, deliveries arrive on time."
      media={{ type: 'image', src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200' }}
      caption="AI dapat mengoptimalkan rute pengiriman, memperkirakan kebutuhan stok, dan membantu koordinasi gudang."
      examples={[
        { title: 'Route optimization',   desc: 'AI plans the fastest path across thousands of stops, updated minute-by-minute.' },
        { title: 'Demand prediction',    desc: 'Forecasts which warehouses will need which inventory weeks ahead.' },
        { title: 'Warehouse robotics',   desc: 'Robots pick, pack, and move — AI coordinates fleets of them in real time.' },
      ]}
    />, isDark: false },

  // Quick check after Session 1
  { component: <QuizSlide
      kicker="Quick Check · After AI Demystified"
      title="True or False: ChatGPT is an example of Machine Learning, but not all Machine Learning is Generative AI."
      context="A junior teammate says: “Anything that uses AI is just ChatGPT, right? It’s all the same thing.” You want to gently correct them."
      options={[
        { id: 'A', label: 'True — ChatGPT is ML, and not all ML is GenAI.', isCorrect: true,
          explain: 'ChatGPT is built on Machine Learning techniques, and specifically a Generative AI subset. But many ML systems (e.g. fraud detection, weather prediction) are not generative — they predict or classify, not create new content.' },
        { id: 'B', label: 'False — ChatGPT, ML, and GenAI all mean the same thing.', isCorrect: false,
          explain: '' },
        { id: 'C', label: 'False — ChatGPT is not actually Machine Learning.', isCorrect: false,
          explain: '' },
      ]}
    />, isDark: false },

  // ── Session 2: Prompt Engineering (10.00 – 11.05) ───────────
  { component: <ChapterSlide number="2" chapter="Prompt Engineering" time="10.00 – 11.05"
      title="Talking to AI So It Understands."
      subtitle="The single most important skill for getting useful output from any AI model."
    />, isDark: true },
  { component: <WhyPromptMatters />, isDark: false },
  { component: <AnatomyOfGoodPrompt />, isDark: false },
  { component: <RICEFramework />, isDark: false },
  { component: <RICEExample />, isDark: false },
  { component: <ChainOfThought />, isDark: false },
  { component: <FewShotPrompting />, isDark: false },
  { component: <RoleBasedPrompting />, isDark: false },
  { component: <IterationRefinement />, isDark: false },
  { component: <CommonMistakes />, isDark: false },
  { component: <PromptTemplateLibrary />, isDark: false },

  // Quick check after Session 2
  { component: <QuizSlide
      kicker="Quick Check · After Prompt Engineering"
      title="Which prompt is the strongest?"
      context="You need a 200-word LinkedIn post announcing your company’s new AI HR feature, aimed at HR Managers at SMEs in Indonesia."
      options={[
        { id: 'A', label: '“Write a LinkedIn post about our new AI feature.”', isCorrect: false,
          explain: '' },
        { id: 'B', label: '“Write a LinkedIn post — make it good and engaging.”', isCorrect: false,
          explain: '' },
        { id: 'C', label: '“Acting as a B2B SaaS copywriter, write a 200-word LinkedIn post announcing our AI Payslip Generator. Audience: HR Managers at Indonesian SMEs (10–200 staff). Tone: practical, light humor. Hook + 3-bullet body + soft CTA.”', isCorrect: true,
          explain: 'It uses RICE — Role (B2B SaaS copywriter), Instruction (write a 200-word post), Context (audience, product, tone), and an implicit Example structure (hook + 3 bullets + CTA). Specific is fast.' },
      ]}
    />, isDark: false },

  // ── Session 3a: AI for HR ───────────────────────────────────
  { component: <ChapterSlide number="3" chapter="AI at Work · Part 1" time="11.15 – 11.35"
      title="AI for HR."
      subtitle="Job descriptions, candidate screening, and personalized onboarding."
    />, isDark: true },
  { component: <HRIntro />, isDark: false },
  { component: <HRJobDescription />, isDark: false },
  { component: <HRScreening />, isDark: false },
  { component: <HROnboarding />, isDark: false },

  // ── Session 3b: AI for Marketing ────────────────────────────
  { component: <ChapterSlide chapter="AI at Work · Part 1 (cont.)" time="11.35 – 12.00"
      title="AI for Marketing."
      subtitle="Copywriting, strategy, analytics, and SEO — at the speed of execution."
    />, isDark: true },
  { component: <MarketingIntro />, isDark: false },
  { component: <MarketingCopywriting />, isDark: false },
  { component: <MarketingStrategy />, isDark: false },
  { component: <MarketingAnalytics />, isDark: false },
  { component: <MarketingSEO />, isDark: false },

  // Quick check after Session 3
  { component: <QuizSlide
      kicker="Quick Check · After AI at Work Part 1"
      title="Which task should NOT be fully automated by AI without human review?"
      context="Your HR team is excited about AI and wants to automate as much as possible to save time."
      options={[
        { id: 'A', label: 'Drafting a first version of a Job Description.', isCorrect: false,
          explain: '' },
        { id: 'B', label: 'Final hiring decision — accept or reject a candidate.', isCorrect: true,
          explain: 'Decisions that affect people (hiring, firing, promotion, performance reviews) must always have a human in the loop. AI can help shortlist or score, but the final call should always be reviewed by a person to avoid bias and ensure accountability.' },
        { id: 'C', label: 'Generating ideas for an onboarding plan.', isCorrect: false,
          explain: '' },
        { id: 'D', label: 'Writing the first draft of a recruitment email.', isCorrect: false,
          explain: '' },
      ]}
    />, isDark: false },

  // ── Session 4: AI at Work · Part 2 (13.00 – 13.45) ──────────
  { component: <ChapterSlide number="4" chapter="AI at Work · Part 2" time="13.00 – 13.45"
      title="AI for Finance, Operations & Design."
      subtitle="From financial reports to SOPs to visual assets — three backbone functions."
    />, isDark: true },
  { component: <FinanceReports />, isDark: false },
  { component: <FinanceAnalysis />, isDark: false },
  { component: <OperationsSOP />, isDark: false },
  { component: <OperationsEfficiency />, isDark: false },
  { component: <DesignVisualAssets />, isDark: false },
  { component: <DesignVideoGen />, isDark: false },

  // Quick check after Session 4
  { component: <QuizSlide
      kicker="Quick Check · After AI at Work Part 2"
      title="Your AI just generated a financial summary. What’s the FIRST thing you should do?"
      context="You asked an AI assistant to summarize last month’s P&L. The output looks polished and convincing."
      options={[
        { id: 'A', label: 'Send it directly to the leadership team — it looks professional.', isCorrect: false,
          explain: '' },
        { id: 'B', label: 'Cross-check the numbers against the source data.', isCorrect: true,
          explain: 'AI can hallucinate — it sometimes invents numbers that sound right but aren’t. For any output involving figures, dates, names, or factual claims, always validate against the source before sharing.' },
        { id: 'C', label: 'Ask the AI to make it shorter first.', isCorrect: false,
          explain: '' },
        { id: 'D', label: 'Translate it to English before reviewing.', isCorrect: false,
          explain: '' },
      ]}
    />, isDark: false },
  { component: <AIatWorkSummary />, isDark: false },

  // ── Closing ─────────────────────────────────────────────────
  { component: <KeyTakeaways />, isDark: false },
  { component: <Day2Preview />, isDark: false },
  { component: <Closing />, isDark: false },
];
