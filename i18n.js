/* i18n.js — Crux Agent Language System (EN / 繁中) */
(function (w) {
  'use strict';

  // ── TRANSLATION DICTIONARIES ─────────────────────────────────
  var T = {
    en: {
      /* NAV */
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.solve': 'What We Solve',
      'nav.process': 'How It Works',
      'nav.projects': 'Case Studies',
      'nav.faq': 'FAQ',
      'nav.cta': 'Talk to Us',
      'theme.light': 'Light',
      'theme.dark': 'Dark',

      /* FOOTER */
      'footer.rights': '© 2026 Crux Agent. All rights reserved.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',

      /* INDEX — HERO */
      'hero.badge': 'AI Innovation Leaders · 2026',
      'hero.title.before': 'Your team was built for more than',
      'hero.title.after': 'work',
      'hero.sub': 'Automation, AI systems, and autonomous AI agents —built for how your business actually works. So your team can focus on what actually matters.',
      'hero.btn.audit': 'Get a Free Audit',
      'hero.btn.solve': 'See What We Solve',
      'tools.heading': 'Plugs into the tools your business already runs on',

      /* INDEX — SHOWCASE */
      'showcase.tag': 'See It In Action',
      'showcase.h2.1': 'Automation that',
      'showcase.h2.2': 'runs itself',
      'showcase.sub': 'One system replaces hours of daily manual work — running 24/7 without anyone touching it.',
      'dash.kpi.tasks': 'Tasks Automated',
      'dash.kpi.hours': 'Hours Saved',
      'dash.kpi.leads': 'Leads Processed',
      'dash.kpi.uptime': 'System Uptime',
      'dash.kpi.delta.tasks': '↑ 12% today',
      'dash.kpi.delta.hours': '$3,800 saved',
      'dash.kpi.delta.leads': '100% followed up',
      'dash.kpi.delta.uptime': '● Running 24/7',
      'dash.flow.label': '── Live Automation Pipeline',
      'dash.flow.lead.name': 'Lead In',
      'dash.flow.lead.sub': 'Form / Ad',
      'dash.flow.ai.name': 'AI Score',
      'dash.flow.ai.sub': '&lt; 2s',
      'dash.flow.crm.name': 'CRM Update',
      'dash.flow.crm.sub': 'Auto-assign',
      'dash.flow.followup.name': 'Follow-Up',
      'dash.flow.followup.sub': 'Personalised',
      'dash.flow.booked.name': 'Booked',
      'dash.flow.booked.sub': '0 staff needed',

      /* INDEX — STATS */
      'stats.manual': 'Reduction in<br/>manual work hours',
      'stats.cost': 'Average operational<br/>cost saved',
      'stats.deployed': 'Automation systems<br/>deployed',
      'stats.uptime': 'Systems run without<br/>interruption',

      /* INDEX — WHO THIS IS FOR */
      'for.tag': 'Who This Is For',
      'for.h2.1': 'Some people know AI could help them',
      'for.h2.2': 'Others just haven\'t seen how yet',
      'for.body': 'The gap isn\'t willingness —it\'s implementation. Whether you\'re running a business, a creative operation, or just your own schedule, if you\'re still doing things manually that could already be running on their own, this is where that changes.',
      'for.check1': '<strong>Your team\'s hours are getting eaten by work that shouldn\'t need them</strong> —emails, data entry, follow-ups, scheduling. You know it\'s fixable. You just haven\'t had the right system built for it yet.',
      'for.check2': '<strong>You\'re a local business owner out on jobs all day.</strong> Being unavailable doesn\'t mean you\'re not interested —it means you\'re actually working. An AI that picks up, books, and follows up keeps leads moving while you do.',
      'for.check3': '<strong>You\'re running the whole operation yourself.</strong> The hours that go toward client emails, invoices, and follow-ups could go toward the work that actually moves things forward —none of that admin needs you specifically.',
      'for.check4': '<strong>You\'ve opened ChatGPT or Claude, seen what it can do, and thought</strong> — <em>"this should be doing more for me."</em> The technology is real. What\'s missing is the right setup. That\'s the part we handle.',
      'for.check5': '<strong>You want a working system, not a project.</strong> Not a tool to figure out on your own —something built, handed over, and running from day one.',
      'for.check6': '<strong>Or you just want AI working for you personally</strong> —your schedule, your inbox, your research handled automatically so your time actually goes where you want it.',
      'for.check7': '<strong>Or you\'re not convinced AI applies to what you do</strong> —and that\'s a fair place to start. Walk us through how your day actually runs and we\'ll show you what could already be handling itself.',
      'for.cta': 'Not sure if any of this applies to you? Walk us through what you do →',
      'for.pill1.label': 'Personal AI Assistant',
      'for.pill1.desc': 'An AI assistant built around how you actually work —your calendar, your inbox, your tasks. Not a generic tool you have to figure out. Something set up for you, specifically.',
      'for.pill2.label': 'Solopreneurs',
      'for.pill2.desc': 'The work you started this for deserves your best hours. Admin, follow-up, scheduling —those can run on their own so your time goes toward what actually moves things forward.',
      'for.pill3.label': 'Content Creators',
      'for.pill3.desc': 'One video, one podcast —ten pieces of content. Repurposing, scheduling, email sequences —that whole pipeline can run automatically so you stay focused on creating.',
      'for.pill4.label': 'Operations Leaders',
      'for.pill4.desc': 'Your team is capable of more than their current workload shows. When the low-value tasks run automatically, their time goes toward the work that actually moves things.',
      'for.pill5.label': 'Scale-Up Founders',
      'for.pill5.desc': 'Growth brings more moving parts —not less. The businesses that scale well are the ones with systems that grow with them, not ones built to handle today\'s volume only.',
      'for.pill6.label': 'Local Service Businesses',
      'for.pill6.desc': 'You\'re on a job site when a lead calls. An AI that picks up, books the appointment, and follows up means being out working never costs you the next job.',
      'for.pill7.label': 'Sales-Driven Teams',
      'for.pill7.desc': 'The fastest teams aren\'t the ones with the best closers —they\'re the ones where no lead waits more than five minutes for a response. Automation handles the follow-up so your team handles the close.',
      'for.pill8.label': 'Professional Services',
      'for.pill8.desc': 'Document intake, client onboarding, invoice follow-up —none of that needs your best people. It just needs to get done. Automation does it, every time, without the overhead.',
      'for.pill9.label': 'E-Commerce Brands',
      'for.pill9.desc': 'Customers want quick answers. Automation makes sure they always get one —and keeps your team free for the conversations that actually need a human.',

      /* INDEX — HOME CTA */
      'home.cta.tag': 'Get Started',
      'home.cta.h2': 'Not Sure Where to Start?',
      'home.cta.sub': 'Schedule a free consultation with our AI experts to discuss your specific needs.',
      'home.cta.btn': 'Book a Free Consultation',

      /* ABOUT */
      'about.tag': 'About Crux Agent',
      'about.h2.1': 'AI can do more for your business',
      'about.h2.2': 'than you\'ve been shown',
      'about.body1': 'Crux Agent is an AI automation and agent agency built for small and medium-sized businesses. We exist to bridge the gap between what AI is genuinely capable of and what most SMEs have had a chance to access —without needing a dedicated tech team, a complex rollout, or an enterprise budget.',
      'about.body2': 'Most growing businesses already know AI can help. The challenge isn\'t willingness —it\'s clarity. AI doesn\'t underdeliver because it lacks capability. It underdelivers when it\'s applied without the right structure behind it. When automation is built correctly —matched to your actual processes, your existing tools, and the specific tasks your team is ready to hand off —the results are measurable and fast.',
      'about.body3': 'Our mission is to eliminate repetitive, low-value work from your team\'s day and replace it with systems that run on their own. Because every hour your people spend on manual tasks is an hour that could go toward the work that actually grows your business. We help SMEs redirect that time toward work that actually moves the needle.',
      'about.card1.h4': 'Outcome-First',
      'about.card1.p': 'Every system is designed around a specific, measurable business result —not a technology showcase.',
      'about.card2.h4': 'Function Over Fancy',
      'about.card2.p': 'We don\'t build complexity for complexity\'s sake. If a simple workflow gets the result, that\'s what we use. The best system is the one your team can rely on —not the one that looks most sophisticated.',
      'about.card3.h4': 'Works With Your Stack',
      'about.card3.p': 'No ripping out your existing tools. We build around what you already use —CRM, email, Slack, everything.',
      'about.card4.h4': 'Built for SMEs',
      'about.card4.p': 'We work exclusively with small and medium-sized businesses —so everything we build is designed around your scale, your budget, and your team.',
      'services.tag': 'What We Build',
      'services.h2.1': 'Three types of solutions',
      'services.h2.2': 'one goal',
      'services.sub': 'Whether you need automated workflows, intelligent systems, or autonomous AI agents that act on your behalf —we scope the right solution for what your business actually needs.',
      'services.card1.h4': 'AI Automation',
      'services.card1.p': 'Automated workflows that eliminate repetitive tasks —connecting your existing tools and running without manual input.',
      'services.card2.h4': 'AI Systems',
      'services.card2.p': 'Intelligent systems that process information, make decisions, or generate outputs —built around your specific data and processes.',
      'services.card3.h4': 'AI Agents',
      'services.card3.p': 'Autonomous agents that plan, decide, and act on your behalf —handling multi-step tasks end-to-end without waiting for human input at every step.',

      /* SOLVE */
      'solve.tag': 'Real Work',
      'solve.h2.1': 'Built for real businesses',
      'solve.h2.2': 'delivered for real results',
      'solve.sub': 'More can be automated than most teams expect —these systems are proof',
      'solve.sc1.title': 'News Intelligence',
      'solve.sc1.industry': 'Sales — Taiwan',
      'solve.sc1.badge.lbl': 'Content filtered',
      'solve.sc1.body': '28 sources monitored daily, curated and filtered automatically — a ready-to-use briefing delivered each morning without lifting a finger.',
      'solve.sc1.extra.lbl': 'saved per day',
      'solve.sc2.title': 'Meeting Intelligence',
      'solve.sc2.industry': 'Consulting — Indonesia',
      'solve.sc2.badge.lbl': 'Documented',
      'solve.sc2.body': 'Every recording transcribed, speakers identified, and output filed in the right place —automatically, without anyone reviewing the recording manually.',
      'solve.sc2.extra.lbl': 'faster than manual notes',
      'solve.sc3.title': 'WhatsApp Operations',
      'solve.sc3.industry': 'Catering — Indonesia',
      'solve.sc3.badge.lbl': 'Admin saved',
      'solve.sc3.body': 'Orders, payments, expenses, and deliveries managed entirely through WhatsApp —no separate system, no manual logging, no extra tools.',
      'solve.sc3.extra.lbl': 'orders handled daily',
      'solve.sc4.title': 'Talent Acquisition',
      'solve.sc4.industry': 'Manufacturing — Indonesia',
      'solve.sc4.badge.lbl': 'Screening time',
      'solve.sc4.body': 'CVs screened and scored, AI interviews conducted, top candidates scheduled —HR focuses on final decisions, not repetitive screening steps.',
      'solve.sc4.extra.lbl': 'faster time-to-hire',
      'solve.sc5.title': 'Article Production',
      'solve.sc5.industry': 'Marketing — Taiwan',
      'solve.sc5.badge.lbl': 'To publish',
      'solve.sc5.body': 'Research, writing, and optimisation handled by a pipeline of AI agents —from topic to publication-ready article in under ten minutes.',
      'solve.sc5.extra.lbl': 'articles per year',
      'solve.sc6.title': 'Curriculum Design',
      'solve.sc6.industry': 'Family Office — Taiwan',
      'solve.sc6.badge.lbl': 'Matched fast',
      'solve.sc6.body': 'A personalised training programme built from a client brief —30 modules matched and structured in minutes, not the hours it used to take.',
      'solve.sc6.extra.lbl': 'manual module comparisons',
      'solve.sc7.title': 'Document Intelligence Pipeline',
      'solve.sc7.industry': 'Consulting — Knowledge Base',
      'solve.sc7.badge.lbl': 'OCR benchmark',
      'solve.sc7.body': 'Scanned books, PowerPoints, and image-heavy files parsed locally and routed directly into their knowledge base —no data leaving the building, no rate limits, no manual cleanup.',
      'solve.sc7.extra.lbl': 'sent to external APIs',
      'solve.sc8.title': 'Sales Intake Automation',
      'solve.sc8.industry': 'Sales — Intake Workflow',
      'solve.sc8.badge.lbl': 'saved per call',
      'solve.sc8.body': 'Intake forms sent and followed up via Gmail and LINE automatically —every completed response lands in Notion, structured and ready before the call starts.',
      'solve.sc8.extra.lbl': 'follow-ups sent',
      'solve.sc9.title': 'Video Summarisation',
      'solve.sc9.industry': 'Marketing — Indonesia',
      'solve.sc9.badge.lbl': 'Per video',
      'solve.sc9.body': 'Send any video link to a chatbot, get a clean structured summary in under 30 seconds —no employee time spent watching or taking notes.',
      'solve.sc9.extra.lbl': 'summary delivered',
      'solve.sc10.title': 'Client Reporting Portal',
      'solve.sc10.industry': 'Digital Agency — Indonesia',
      'solve.sc10.badge.lbl': 'Status saved',
      'solve.sc10.body': 'Clients see real-time project progress on demand. The team logs updates in seconds. Manual status emails become a thing of the past.',
      'solve.sc10.extra.lbl': 'faster report generation',
      'solve.sc11.title': 'Customer Support',
      'solve.sc11.industry': 'Retail &amp; E-Commerce',
      'solve.sc11.badge.lbl': 'Auto-resolved',
      'solve.sc11.body': 'Order status, returns, and FAQs resolved automatically using your product and order data. Your team handles what genuinely needs a person.',
      'solve.sc11.extra.lbl': 'instant customer responses',
      'solve.sc12.title': 'Reservations &amp; Guest Comms',
      'solve.sc12.industry': 'Restaurants &amp; Hospitality',
      'solve.sc12.badge.lbl': 'Always on',
      'solve.sc12.body': 'Calls and messages handled around the clock —reservations taken, questions answered, confirmations sent automatically, day or night.',
      'solve.sc12.extra.lbl': 'bookings missed after hours',
      'solve.sc13.title': 'Lead Follow-Up',
      'solve.sc13.industry': 'Sales &amp; CRM',
      'solve.sc13.badge.lbl': 'First response',
      'solve.sc13.body': 'Every lead scored, enriched, and followed up the moment it arrives. Your sales team focuses on conversations that are ready to convert.',
      'solve.sc13.extra.lbl': 'leads followed up',
      'solve.sc14.title': 'Appointment Management',
      'solve.sc14.industry': 'Healthcare &amp; Clinics',
      'solve.sc14.badge.lbl': 'Less admin',
      'solve.sc14.body': 'Booking, confirmations, and reminders handled automatically. Staff stay focused on patients —not on managing the calendar.',
      'solve.sc14.extra.lbl': 'fewer no-shows',

      /* HOW WE WORK (solve.html) */
      'diff.tag': 'How We Work',
      'diff.h2.1': 'Six principles we hold ourselves to',
      'diff.h2.2': 'on every engagement',
      'diff.card1.h4': 'Consulting first —technology second',
      'diff.card1.p': 'We fix the process before we automate it. Automating a broken workflow just makes it break faster. So we start by understanding how your business actually works —then build around it.',
      'diff.card2.h4': 'Productised packages —no scope creep',
      'diff.card2.p': 'Every engagement comes with fixed deliverables, fixed timelines, and clear boundaries. You know exactly what you\'re getting before you pay a cent —no surprises, no moving targets.',
      'diff.card3.h4': 'We document everything. You own it.',
      'diff.card3.p': 'Your system comes with full documentation and a handover walkthrough. You own everything we build —the logic, the workflows, the setup. We build it so you understand it, not so you need us forever.',
      'diff.card4.h4': 'Consistency over complexity',
      'diff.card4.p': 'Some systems are built to look impressive —layers of complexity that could have been a straightforward workflow. We build what works, not what looks sophisticated. If a simple process gets the same result, that\'s what we build. Less to break, easier to understand, and just as effective.',
      'diff.card5.h4': 'We only take clients we can genuinely help',
      'diff.card5.p': 'If your problem can be solved with an off-the-shelf tool, we\'ll tell you that upfront and point you in the right direction. We only take on work where we can deliver real, measurable value.',
      'diff.card6.h4': 'Support retainer —we\'re always in your corner',
      'diff.card6.p': 'We offer ongoing retainers so your system stays monitored, updated, and optimised over time. APIs change, workflows evolve —we handle all of it so you don\'t have to.',

      /* PROCESS */
      'process.tag': 'The Process',
      'process.h2.1': 'You\'ll see it working',
      'process.h2.2': 'before we build the real thing',
      'process.sub': 'Every engagement starts with a working demo —so you can see exactly what you\'re getting before we commit to the full build.',
      'step1.h3': 'Discovery',
      'step1.p': 'We start by understanding your business and mapping where your team\'s time is going. No proposals yet —just a clear picture of what\'s worth building and what the impact would be.',
      'step2.h3': 'Rapid Demo',
      'step2.p': 'Before anything is finalised, we build a working demo of your solution. You\'ll see how it behaves, what it handles, and how it fits into your workflow —usually within days. Something real, not a slide deck.',
      'step3.h3': 'Review &amp; Alignment',
      'step3.p': 'We walk you through the demo together. You\'ll see exactly what\'s included, what the production version will add, and what the full build will look like. Only once you\'re clear and satisfied do we move forward.',
      'step4.h3': 'Production Build',
      'step4.p': 'With scope confirmed, we build the full system. Timeline depends on complexity —some builds are done quickly, others take longer. Either way, you\'ll have visibility throughout and no surprises at the end.',
      'step5.h3': 'Handoff &amp; Support',
      'step5.p': 'Your system comes with full documentation and a walkthrough so your team knows exactly how to use it. After launch, we stay available —monitoring, updating, and refining as your business evolves.',
      'process.quote.h2.1': '"The best system is the',
      'process.quote.h2.2': 'simplest one that works."',
      'process.quote.sub': 'Efficient, effective, and never more complex than it needs to be.',

      /* PROJECTS */
      'proj.tag': 'Success Stories',
      'proj.h2': 'Client Case Studies',
      'proj.sub': 'Every project here started with a specific business problem —and ended with a system that solved it.',
      'proj.stat.delivered': 'Projects Delivered',
      'proj.stat.success': 'Success Rate',
      'proj.stat.demo': 'To First Demo',
      'proj.card1.h3': 'Competitive News Intelligence Platform',
      'proj.card1.p': 'Monitor 28 sources, surface what matters, and deliver ready articles to marketing.',
      'proj.card1.met1.lbl': 'Articles processed<br>daily',
      'proj.card1.met2.lbl': 'Sources monitored<br>daily',
      'proj.card1.met3.lbl': 'Spent on manual<br>monitoring',
      'proj.card1.tag': '🗞️ Sales &amp; Marketing — Taiwan',
      'proj.card2.h3': 'WhatsApp Business Operations Platform',
      'proj.card2.p': 'Orders, payments, and deliveries — fully automated through WhatsApp.',
      'proj.card2.met1.lbl': 'Orders managed<br>daily',
      'proj.card2.met2.lbl': 'Customer support<br>coverage',
      'proj.card2.met3.lbl': 'Workflows automated',
      'proj.card2.tag': '🍱 Catering &amp; Food Services — Indonesia',
      'proj.card3.h3': 'End-to-End Talent Acquisition System',
      'proj.card3.p': 'Screen, interview, and schedule candidates — without HR lifting a finger.',
      'proj.card3.met1.lbl': 'Screening time<br>reduction',
      'proj.card3.met2.lbl': 'CVs screened<br>automatically',
      'proj.card3.met3.lbl': 'From close to<br>shortlist',
      'proj.card3.tag': '🏭 Manufacturing — Indonesia',
      'proj.card4.h3': 'Automated Content Production Engine',
      'proj.card4.p': 'One topic in. Two publication-ready articles out.',
      'proj.card4.met1.lbl': 'Production time<br>reduction',
      'proj.card4.met2.lbl': 'Articles per year',
      'proj.card4.met3.lbl': 'Platforms targeted',
      'proj.card4.tag': '✍️ Marketing — Taiwan',
      'proj.card5.h3': 'Client Onboarding Intelligence Pipeline',
      'proj.card5.p': 'Send intake forms, auto-populate Notion, and flag unresponsive leads — automatically.',
      'proj.card5.met1.lbl': 'Form delivery<br>automated',
      'proj.card5.met2.lbl': 'Manual data<br>entry',
      'proj.card5.met3.lbl': 'Notion database',
      'proj.card5.tag': '📋 Sales — Taiwan',
      'proj.card6.h3': 'Document Intelligence &amp; OCR Extraction Portal',
      'proj.card6.p': 'Extract clean, structured text from scanned books packed with diagrams, flowcharts, and complex layouts.',
      'proj.card6.met1.lbl': 'Benchmark accuracy<br>(OmniDocBench)',
      'proj.card6.met2.lbl': 'Manual re-editing<br>on clean docs',
      'proj.card6.met3.lbl': 'Local — no data<br>leaves the network',
      'proj.card6.tag': '📄 Consulting — Indonesia',
      'proj.read': 'Read Full Case Study',
      'modal.cta': 'Get a Similar System Built →',
      'modal.client.lbl': 'Client',

      /* FAQ */
      'faq.tag': 'FAQ',
      'faq.h2.1': 'Questions worth',
      'faq.h2.2': 'asking before',
      'faq.h2.3': 'you get started',
      'faq.q1': 'Will this affect my employees?',
      'faq.a1': 'The goal is to free your team from repetitive, low-value tasks —not to reduce headcount. When people spend less time on manual work, they can focus on the parts of their job that actually need a human. Most teams find they can take on more meaningful work once the routine tasks are handled automatically.',
      'faq.q2': 'Will it work with the tools we already use?',
      'faq.a2': 'We build around your existing stack —not the other way around. Before we design anything, we map out the tools and platforms your team already uses and make sure the system fits into those workflows. You won\'t be asked to change how you work or adopt new software just to make our solution function.',
      'faq.q3': 'Do I need to understand the technology?',
      'faq.a3': 'Not at all. You describe the problem in your own words —"we spend 10 hours a week on X and it costs us Y." We handle everything else. We\'ll walk you through what we build in clear terms, no technical background needed.',
      'faq.q4': 'How long does it take before I see results?',
      'faq.a4': 'You\'ll see a working demo within days of the discovery call —not weeks. The full build timeline depends on complexity, but most projects are live within 2–4 weeks. Because we start with a clear picture of what you need before we build anything, there\'s less back-and-forth and fewer surprises.',
      'faq.q5': 'What if the system breaks after you\'ve delivered it?',
      'faq.a5': 'Every delivery includes full documentation and a support handover. We also offer ongoing retainer packages where we monitor and maintain your systems proactively. APIs change, tools update —we handle it so you don\'t have to.',

      /* CONTACT */
      'contact.tag': 'Get Started',
      'contact.h2.1': 'Let\'s see what\'s possible',
      'contact.h2.2': 'for your business',
      'contact.intro': 'Tell us what your team is working on — we\'ll show you a working demo before anything is built.',
      'contact.step1.h4': 'Consultation',
      'contact.step1.span': 'Share your vision and challenges',
      'contact.step2.h4': 'Strategy',
      'contact.step2.span': 'We design your AI solution',
      'contact.step3.h4': 'Launch',
      'contact.step3.span': 'Deploy and optimize your system',
      'contact.response': 'Response within 24 hours',
      'form.name.label': 'Your Name',
      'form.email.label': 'Email Address',
      'form.phone.label': 'Phone Number',
      'form.company.label': 'Company Name',
      'form.size.label': 'Company Size',
      'form.size.opt0': 'Select size',
      'form.size.opt1': 'Just me',
      'form.size.opt2': '2–10 employees',
      'form.size.opt3': '11–50 employees',
      'form.size.opt4': '51–200 employees',
      'form.size.opt5': '200+ employees',
      'form.challenge.label': 'What\'s your biggest operational challenge right now?',
      'form.challenge.opt0': 'Select the closest match',
      'form.challenge.opt1': 'Too much manual data entry / admin work',
      'form.challenge.opt2': 'Slow or missed customer follow-ups',
      'form.challenge.opt3': 'Hiring &amp; screening taking too long',
      'form.challenge.opt4': 'Customer support team overwhelmed',
      'form.challenge.opt5': 'Reports &amp; dashboards done manually',
      'form.challenge.opt6': 'Leads going cold before we reach them',
      'form.challenge.opt7': 'Something else — I\'ll explain below',
      'form.cost.label': 'Estimated monthly cost of this challenge (time + salary)',
      'form.cost.opt0': 'Select range',
      'form.cost.opt1': 'Under $1,000/mo',
      'form.cost.opt2': '$1,000 – $5,000/mo',
      'form.cost.opt3': '$5,000 – $15,000/mo',
      'form.cost.opt4': '$15,000 – $50,000/mo',
      'form.cost.opt5': '$50,000+/mo',
      'form.cost.opt6': 'Not sure — help me calculate it',
      'form.desc.label': 'Describe the problem and what you\'d like to achieve',
      'form.submit': 'Send — I want a free consultation →',
      'form.toast': '✅ Message received! Our team will be in touch within 24 hours.',
      'form.ratelimit': 'Limit reached — try again tomorrow',
      'form.sending': 'Sending...',
      'form.name.ph': 'John Smith',
      'form.email.ph': 'john@company.com',
      'form.phone.ph': '+1 555 000 0000',
      'form.company.ph': 'Acme Corp',
      'form.desc.ph': 'E.g. \'We have 3 people manually entering the same customer data into 3 different systems every day — takes about 4 hours total. Ideally, we\'d love this to run automatically so our team can focus on higher-value work.\''
    },

    zh: {
      /* NAV */
      'nav.home': '首頁',
      'nav.about': '關於我們',
      'nav.solve': '解決方案',
      'nav.process': '運作方式',
      'nav.projects': '成功案例',
      'nav.faq': '常見問題',
      'nav.cta': '與我們聯繫',
      'theme.light': '淺色',
      'theme.dark': '深色',

      /* FOOTER */
      'footer.rights': '© 2026 Crux Agent. 版權所有。',
      'footer.privacy': '隱私政策',
      'footer.terms': '服務條款',

      /* INDEX — HERO */
      'hero.badge': 'AI 創新領導者・2026',
      'hero.title.before': '您的團隊，值得做更有意義的事，不只是',
      'hero.title.after': '工作',
      'hero.sub': '自動化流程、AI 系統與自主 AI 代理人——專為您業務的實際運作方式打造。讓您的團隊專注在真正重要的事。',
      'hero.btn.audit': '免費獲取診斷報告',
      'hero.btn.solve': '查看我們的解決方案',
      'tools.heading': '無縫整合您現有的工具',

      /* INDEX — SHOWCASE */
      'showcase.tag': '實際體驗',
      'showcase.h2.1': '自動化系統',
      'showcase.h2.2': '自主運行',
      'showcase.sub': '一套系統取代每日數小時的手動作業——全天候 24/7 運作，無需任何人介入。',
      'dash.kpi.tasks': '已自動化任務',
      'dash.kpi.hours': '節省時數',
      'dash.kpi.leads': '已處理潛客',
      'dash.kpi.uptime': '系統正常運作率',
      'dash.kpi.delta.tasks': '↑ 今日增加 12%',
      'dash.kpi.delta.hours': '節省 $3,800',
      'dash.kpi.delta.leads': '100% 已跟進',
      'dash.kpi.delta.uptime': '● 24/7 運行中',
      'dash.flow.label': '── 即時自動化流程',
      'dash.flow.lead.name': '潛客進入',
      'dash.flow.lead.sub': '表單／廣告',
      'dash.flow.ai.name': 'AI 評分',
      'dash.flow.ai.sub': '&lt; 2 秒',
      'dash.flow.crm.name': 'CRM 更新',
      'dash.flow.crm.sub': '自動指派',
      'dash.flow.followup.name': '後續跟進',
      'dash.flow.followup.sub': '個人化',
      'dash.flow.booked.name': '已預約',
      'dash.flow.booked.sub': '零人力介入',

      /* INDEX — STATS */
      'stats.manual': '手動工時<br/>降低比例',
      'stats.cost': '平均營運<br/>成本節省',
      'stats.deployed': '已部署<br/>自動化系統數',
      'stats.uptime': '系統持續<br/>不中斷運行',

      /* INDEX — WHO THIS IS FOR */
      'for.tag': '適用對象',
      'for.h2.1': '有些人知道 AI 能幫上忙',
      'for.h2.2': '有些人還沒看到具體方法',
      'for.body': '差距不在意願——而在落地執行。無論您是在經營企業、從事創意工作，還是管理自己的行程，只要還有可以自動化的事情卻仍在手動處理，改變就從這裡開始。',
      'for.check1': '<strong>您的團隊時間，被那些本不需要他們處理的工作吃掉了</strong>——回信、資料輸入、客戶跟進、排程。您知道這是可以解決的，只是還沒有建立對的系統。',
      'for.check2': '<strong>您是整天在外工作的在地服務業者。</strong>沒空接電話不代表沒興趣——而是真的在認真工作。有 AI 幫您接聽、預約並跟進，讓您出外工作的同時，下一筆生意也不會流失。',
      'for.check3': '<strong>您一個人扛起整個業務。</strong>花在回客戶信、開發票、跟進的時間，本來可以用來推動真正重要的事——那些行政工作，其實不需要您親自來。',
      'for.check4': '<strong>您用過 ChatGPT 或 Claude，看到它能做什麼，然後心裡想</strong>——<em>「這應該幫我做更多才對。」</em>技術是真實的，缺的是正確的設定，而那正是我們負責的部分。',
      'for.check5': '<strong>您要的是一個能直接用的系統，不是一個需要自己研究的專案。</strong>不是給您一個工具自己摸索——而是幫您建好、交到手上、第一天就能跑。',
      'for.check6': '<strong>或者您只是想讓 AI 為您個人工作</strong>——管您的行程、收件匣、研究，自動化搞定，讓您的時間真正用在您想用的地方。',
      'for.check7': '<strong>或者您還不確定 AI 是否適用於您的工作</strong>——這是一個合理的起點。跟我們說說您一天是怎麼過的，我們來告訴您哪些事情已經可以自動運作。',
      'for.cta': '不確定這對您是否適用？跟我們說說您的工作方式 →',
      'for.pill1.label': '個人 AI 助理',
      'for.pill1.desc': '一個針對您工作方式量身打造的 AI 助理——管您的行事曆、收件匣、待辦事項。不是一個要自己摸索的通用工具，而是專為您設定好的系統。',
      'for.pill2.label': '個人創業者',
      'for.pill2.desc': '您最好的時間，應該用在您為這件事創業的初衷上。行政、跟進、排程——這些都可以自動運作，讓您的精力真正用來推動事業前進。',
      'for.pill3.label': '內容創作者',
      'for.pill3.desc': '一支影片、一集 Podcast——產出十份內容。二次剪輯、排程、郵件序列——整條產出管道可以自動運行，讓您專注在創作本身。',
      'for.pill4.label': '營運負責人',
      'for.pill4.desc': '您的團隊有能力做更多，但現在的工作量沒有體現出來。當低價值的任務自動運作，他們的時間就能用在真正推動業務的事情上。',
      'for.pill5.label': '快速成長的創辦人',
      'for.pill5.desc': '成長帶來更多變數——不是更少。能夠規模化的企業，都有隨之成長的系統，而不是只能應付今天業務量的架構。',
      'for.pill6.label': '在地服務業者',
      'for.pill6.desc': '您在工地時有潛客來電。有 AI 接聽、預約並跟進，讓您出外工作也不會錯過下一筆生意。',
      'for.pill7.label': '業務導向團隊',
      'for.pill7.desc': '最快的團隊不是有最厲害的業務——而是沒有潛客等超過五分鐘還沒人回應的團隊。自動化處理跟進，讓您的業務人員專注在真正準備好成交的對話上。',
      'for.pill8.label': '專業服務業者',
      'for.pill8.desc': '文件收件、客戶入職、發票催收——這些不需要您最好的人力，只需要確實完成。自動化每次都做到，零額外成本。',
      'for.pill9.label': '電商品牌',
      'for.pill9.desc': '客戶希望得到快速回覆。自動化確保他們隨時都能得到回應——同時讓您的團隊空出時間，處理真正需要人介入的對話。',

      /* INDEX — HOME CTA */
      'home.cta.tag': '開始使用',
      'home.cta.h2': '不知道從哪裡開始？',
      'home.cta.sub': '與我們的 AI 專家預約免費諮詢，討論您的具體需求。',
      'home.cta.btn': '預約免費諮詢',

      /* ABOUT */
      'about.tag': '關於 Crux Agent',
      'about.h2.1': 'AI 能為您的業務做的',
      'about.h2.2': '遠比您看到的更多',
      'about.body1': 'Crux Agent 是一家專為中小企業服務的 AI 自動化與代理人公司。我們的使命，是填補 AI 真實能力與大多數中小企業實際接觸機會之間的落差——不需要專屬技術團隊、複雜的導入流程，也不需要大企業的預算。',
      'about.body2': '多數成長中的企業早已知道 AI 能幫上忙。挑戰不在意願——而在方向。AI 成效不佳，不是因為能力不足，而是因為應用缺乏正確的架構支撐。當自動化系統建立得當——對齊您的實際流程、現有工具，以及團隊準備好移交的具體任務——成果就會是看得到、感受得到的。',
      'about.body3': '我們的使命是從您團隊的每一天中消除重複、低價值的工作，以能自主運作的系統取而代之。因為您的員工花在手動作業上的每一個小時，都是本可用來推動業務成長的時間。我們幫助中小企業把這些時間，重新導向真正能產生影響力的工作。',
      'about.card1.h4': '以結果為核心',
      'about.card1.p': '每套系統都圍繞著具體、可衡量的業務成果設計——而非技術展示。',
      'about.card2.h4': '實用優先於花俏',
      'about.card2.p': '我們不為複雜而複雜。如果簡單的工作流程能達成目標，我們就用簡單的。最好的系統是您的團隊能信賴的那個——而不是看起來最高端的那個。',
      'about.card3.h4': '融入您現有的工具',
      'about.card3.p': '無需汰換現有工具。我們在您已使用的系統上建構——CRM、電子郵件、Slack，全部整合。',
      'about.card4.h4': '專為中小企業打造',
      'about.card4.p': '我們只服務中小企業——因此我們建構的一切，都是針對您的規模、預算與團隊量身設計。',
      'services.tag': '我們打造的產品',
      'services.h2.1': '三種解決方案類型',
      'services.h2.2': '一個目標',
      'services.sub': '無論您需要自動化工作流程、智慧系統，還是代替您行動的自主 AI 代理人——我們都會找出最適合您業務需求的解決方案。',
      'services.card1.h4': 'AI 自動化',
      'services.card1.p': '自動化工作流程，消除重複性任務——整合您現有工具，無需手動操作即可持續運行。',
      'services.card2.h4': 'AI 系統',
      'services.card2.p': '能夠處理資訊、做出決策或產生輸出的智慧系統——圍繞您的具體資料與業務流程打造。',
      'services.card3.h4': 'AI 代理人',
      'services.card3.p': '能夠規劃、決策並代替您採取行動的自主代理人——端對端處理多步驟任務，無需在每一步等待人工介入。',

      /* SOLVE */
      'solve.tag': '真實案例',
      'solve.h2.1': '為真實企業打造',
      'solve.h2.2': '交付真實成果',
      'solve.sub': '可以自動化的，比多數團隊預期的更多——這些系統就是最好的證明',
      'solve.sc1.title': '新聞情報系統',
      'solve.sc1.industry': '業務 — 台灣',
      'solve.sc1.badge.lbl': '內容自動篩選',
      'solve.sc1.body': '每日自動監控 28 個來源，自動整理與篩選——每天早上一份開箱即用的情報摘要，不需任何人介入。',
      'solve.sc1.extra.lbl': '每日節省',
      'solve.sc2.title': '會議紀錄智慧化',
      'solve.sc2.industry': '顧問服務 — 印尼',
      'solve.sc2.badge.lbl': '已自動建檔',
      'solve.sc2.body': '每份錄音自動轉錄、辨識發言者、歸檔至正確位置——全程自動，無需任何人手動聽取錄音。',
      'solve.sc2.extra.lbl': '比手動記錄快',
      'solve.sc3.title': 'WhatsApp 營運自動化',
      'solve.sc3.industry': '餐飲外送 — 印尼',
      'solve.sc3.badge.lbl': '節省行政時間',
      'solve.sc3.body': '訂單、付款、支出、外送——全部透過 WhatsApp 管理，無需額外系統、手動記錄或其他工具。',
      'solve.sc3.extra.lbl': '每日處理訂單',
      'solve.sc4.title': '人才招募自動化',
      'solve.sc4.industry': '製造業 — 印尼',
      'solve.sc4.badge.lbl': '篩選時間減少',
      'solve.sc4.body': '履歷自動篩選評分、AI 面試自動進行、優秀候選人自動排程——HR 只需負責最終決策，不再重複篩選。',
      'solve.sc4.extra.lbl': '招募速度提升',
      'solve.sc5.title': '文章產出自動化',
      'solve.sc5.industry': '行銷 — 台灣',
      'solve.sc5.badge.lbl': '到發佈完成',
      'solve.sc5.body': '研究、撰寫、優化——由 AI 代理人流水線全程處理，從主題到可發布文章，不到十分鐘。',
      'solve.sc5.extra.lbl': '每年文章產量',
      'solve.sc6.title': '課程設計自動化',
      'solve.sc6.industry': '家族辦公室 — 台灣',
      'solve.sc6.badge.lbl': '快速匹配模組',
      'solve.sc6.body': '根據客戶需求自動建立個人化培訓方案——30 個模組在幾分鐘內完成匹配與架構，過去這需要好幾個小時。',
      'solve.sc6.extra.lbl': '人工模組比對次數',
      'solve.sc7.title': '文件智慧解析流程',
      'solve.sc7.industry': '顧問服務 — 知識庫',
      'solve.sc7.badge.lbl': 'OCR 基準排名',
      'solve.sc7.body': '掃描書籍、PowerPoint、圖片密集檔案在本地解析並直接匯入知識庫——資料不離開公司網路，無速率限制，無需人工清理。',
      'solve.sc7.extra.lbl': '傳至外部 API 的頁面',
      'solve.sc8.title': '業務入職自動化',
      'solve.sc8.industry': '業務 — 入職流程',
      'solve.sc8.badge.lbl': '每次通話節省',
      'solve.sc8.body': '透過 Gmail 和 LINE 自動傳送並跟進填表連結——每份完成的回覆自動進入 Notion，結構化整理好，通話前就準備完畢。',
      'solve.sc8.extra.lbl': '人工跟進次數',
      'solve.sc9.title': '影片摘要自動化',
      'solve.sc9.industry': '行銷 — 印尼',
      'solve.sc9.badge.lbl': '每支影片節省',
      'solve.sc9.body': '將任何影片連結傳給聊天機器人，30 秒內取得結構清晰的摘要——無需任何員工花時間觀看或做筆記。',
      'solve.sc9.extra.lbl': '摘要交付時間',
      'solve.sc10.title': '客戶報告入口網站',
      'solve.sc10.industry': '數位代理商 — 印尼',
      'solve.sc10.badge.lbl': '節省狀態更新時間',
      'solve.sc10.body': '客戶隨時查看專案即時進度。團隊幾秒內完成更新。手動寄送進度報告成為過去式。',
      'solve.sc10.extra.lbl': '報告產出速度提升',
      'solve.sc11.title': '客戶服務自動化',
      'solve.sc11.industry': '零售 &amp; 電商',
      'solve.sc11.badge.lbl': '自動解決率',
      'solve.sc11.body': '訂單狀態、退換貨、常見問題——利用您的商品與訂單資料自動處理。真正需要人工的問題，才由您的團隊接手。',
      'solve.sc11.extra.lbl': '即時客服回覆',
      'solve.sc12.title': '訂位 &amp; 賓客溝通',
      'solve.sc12.industry': '餐廳 &amp; 餐旅業',
      'solve.sc12.badge.lbl': '全天候服務',
      'solve.sc12.body': '電話與訊息全天候自動處理——自動接受訂位、回答問題、傳送確認，日夜不間斷。',
      'solve.sc12.extra.lbl': '非營業時間漏單數',
      'solve.sc13.title': '潛客跟進自動化',
      'solve.sc13.industry': '業務 &amp; CRM',
      'solve.sc13.badge.lbl': '首次回覆時間',
      'solve.sc13.body': '每一筆潛客進來即自動評分、補充資料並跟進。您的業務團隊只需專注在準備好成交的對話上。',
      'solve.sc13.extra.lbl': '潛客跟進率',
      'solve.sc14.title': '預約管理自動化',
      'solve.sc14.industry': '醫療 &amp; 診所',
      'solve.sc14.badge.lbl': '行政負擔減少',
      'solve.sc14.body': '預約、確認、提醒——全程自動處理。員工只需專注在病患身上，不必分心管行事曆。',
      'solve.sc14.extra.lbl': '減少未到診率',

      /* HOW WE WORK */
      'diff.tag': '我們的工作方式',
      'diff.h2.1': '六項我們在每次合作中',
      'diff.h2.2': '始終堅守的原則',
      'diff.card1.h4': '先優化流程，再導入技術',
      'diff.card1.p': '我們在自動化之前，先修好流程。自動化一個有問題的工作流程，只會讓它壞得更快。所以我們從理解您的業務實際運作方式開始，然後在這個基礎上建構。',
      'diff.card2.h4': '產品化套件——範疇清楚，不會無限擴張',
      'diff.card2.p': '每次合作都有固定的交付物、固定時程和明確邊界。在您付出任何費用之前，就能清楚知道您將獲得什麼——沒有意外，沒有模糊地帶。',
      'diff.card3.h4': '全程記錄文件，一切都是您的。',
      'diff.card3.p': '您的系統附有完整文件和交接說明。我們建構的一切——邏輯、工作流程、設定——全部歸您所有。我們讓您看得懂，而不是讓您永遠依賴我們。',
      'diff.card4.h4': '穩定優於複雜',
      'diff.card4.p': '有些系統是為了看起來厲害而建的——層層疊疊的複雜架構，其實一個簡單工作流程就能搞定。我們建構有效的，而非看起來高端的。如果簡單的方法能達到同樣結果，我們就用簡單的。更少東西可能壞掉，更容易理解，一樣有效。',
      'diff.card5.h4': '只接我們真的能幫到的客戶',
      'diff.card5.p': '如果您的問題可以用現成工具解決，我們會直接告訴您，並指引您正確方向。我們只承接那些我們能帶來真實、可衡量價值的工作。',
      'diff.card6.h4': '維護顧問方案——我們一直在您身邊',
      'diff.card6.p': '我們提供持續維護方案，讓您的系統持續被監控、更新與優化。API 會變動，工作流程會演進——我們幫您搞定，您不用操心。',

      /* PROCESS */
      'process.tag': '流程說明',
      'process.h2.1': '您會先看到它實際運作',
      'process.h2.2': '再進行正式建構',
      'process.sub': '每次合作都從一個可運行的展示版本開始——讓您在確認正式建構之前，就能清楚看到您將獲得什麼。',
      'step1.h3': '需求探索',
      'step1.p': '我們從了解您的業務開始，釐清您的團隊時間花在哪裡。還不做提案——只是建立一個清楚的圖像：哪些值得建，建了之後有什麼影響。',
      'step2.h3': '快速展示版本',
      'step2.p': '在任何事情定案之前，我們先建立您解決方案的可運行展示版本。您會看到它怎麼運作、能處理什麼、怎麼融入您的工作流程——通常在幾天內完成。是真實的東西，不是投影片。',
      'step3.h3': '確認 &amp; 對齊',
      'step3.p': '我們一起走過展示版本。您會清楚看到包含什麼、正式版本會新增什麼、完整建構後會是什麼樣子。只有在您確認且滿意之後，我們才繼續推進。',
      'step4.h3': '正式建構',
      'step4.p': '範疇確認後，我們建構完整系統。時程取決於複雜程度——有些建構很快完成，有些需要更長時間。無論如何，您全程都能看到進度，不會在最後才遇到意外。',
      'step5.h3': '交付 &amp; 後續支援',
      'step5.p': '您的系統附有完整文件和操作說明，讓您的團隊清楚知道怎麼使用。上線後，我們持續提供支援——監控、更新，隨著您業務演進持續優化。',
      'process.quote.h2.1': '「最好的系統，是',
      'process.quote.h2.2': '最簡單且有效的那個。」',
      'process.quote.sub': '高效、實用，絕不比需要的更複雜。',

      /* PROJECTS */
      'proj.tag': '成功故事',
      'proj.h2': '客戶案例研究',
      'proj.sub': '這裡每個專案都從一個具體的業務問題出發——並以解決問題的系統作為結局。',
      'proj.stat.delivered': '已完成專案',
      'proj.stat.success': '成功率',
      'proj.stat.demo': '首次展示時間',
      'proj.card1.h3': '競爭情報新聞監控平台',
      'proj.card1.p': '監控 28 個來源，自動篩選重要資訊並交付給行銷團隊。',
      'proj.card1.met1.lbl': '每日處理<br>文章數',
      'proj.card1.met2.lbl': '每日監控<br>來源數',
      'proj.card1.met3.lbl': '花費在手動<br>監控的時數',
      'proj.card1.tag': '🗞️ 業務 &amp; 行銷 — 台灣',
      'proj.card2.h3': 'WhatsApp 業務營運平台',
      'proj.card2.p': '訂單、付款、外送——全部透過 WhatsApp 自動化管理。',
      'proj.card2.met1.lbl': '每日管理<br>訂單數',
      'proj.card2.met2.lbl': '客服覆蓋<br>時段',
      'proj.card2.met3.lbl': '已自動化<br>工作流程',
      'proj.card2.tag': '🍱 餐飲外送 &amp; 食品服務 — 印尼',
      'proj.card3.h3': '端對端人才招募系統',
      'proj.card3.p': '篩選、面試、安排候選人——HR 完全不需介入。',
      'proj.card3.met1.lbl': '篩選時間<br>縮短比例',
      'proj.card3.met2.lbl': '自動篩選<br>履歷數',
      'proj.card3.met3.lbl': '從截止到<br>候選名單',
      'proj.card3.tag': '🏭 製造業 — 印尼',
      'proj.card4.h3': '自動化內容產出引擎',
      'proj.card4.p': '一個主題進去，兩篇可發布文章出來。',
      'proj.card4.met1.lbl': '生產時間<br>縮短比例',
      'proj.card4.met2.lbl': '每年文章<br>產量',
      'proj.card4.met3.lbl': '目標平台數',
      'proj.card4.tag': '✍️ 行銷 — 台灣',
      'proj.card5.h3': '客戶入職智慧化流程',
      'proj.card5.p': '傳送入職表單、自動填入 Notion、標記未回應潛客——全程自動。',
      'proj.card5.met1.lbl': '表單傳送<br>自動化率',
      'proj.card5.met2.lbl': '人工<br>資料輸入',
      'proj.card5.met3.lbl': 'Notion<br>資料庫',
      'proj.card5.tag': '📋 業務 — 台灣',
      'proj.card6.h3': '文件智慧 &amp; OCR 解析入口',
      'proj.card6.p': '從包含圖表、流程圖與複雜排版的掃描書籍中，萃取乾淨的結構化文字。',
      'proj.card6.met1.lbl': '基準準確率<br>(OmniDocBench)',
      'proj.card6.met2.lbl': '乾淨文件<br>人工校正次數',
      'proj.card6.met3.lbl': '本地運行——資料<br>不離開公司網路',
      'proj.card6.tag': '📄 顧問服務 — 印尼',
      'proj.read': '閱讀完整案例研究',
      'modal.cta': '打造類似的系統 →',
      'modal.client.lbl': '客戶',

      /* FAQ */
      'faq.tag': '常見問題',
      'faq.h2.1': '開始之前，',
      'faq.h2.2': '值得先問的',
      'faq.h2.3': '幾個問題',
      'faq.q1': '這會影響到我的員工嗎？',
      'faq.a1': '目標是讓您的團隊從重複、低價值的工作中解放出來——而不是裁員。當員工花在手動工作上的時間減少，他們就能專注在真正需要人的工作上。多數團隊發現，一旦例行任務自動處理，他們反而能承擔更有意義的工作。',
      'faq.q2': '這能和我們現有的工具整合嗎？',
      'faq.a2': '我們圍繞著您現有的系統建構——而不是反過來。在設計任何東西之前，我們會先盤點您的團隊目前使用的工具與平台，確保系統完全融入現有工作流程。您不需要改變工作方式，也不需要為了讓我們的方案運作而採用新軟體。',
      'faq.q3': '我需要懂技術嗎？',
      'faq.a3': '完全不需要。您用自己的話描述問題就好——「我們每週花 10 小時在 X 上，成本是 Y。」其餘的交給我們。我們會用清楚的語言帶您了解我們建構的內容，不需要任何技術背景。',
      'faq.q4': '要多久才能看到成果？',
      'faq.a4': '探索通話後幾天內，您就會看到可運行的展示版本——不是幾週後。完整建構時程取決於複雜度，但多數專案在 2 到 4 週內就能上線。因為我們在建構之前就對需求有清晰的認識，來回溝通更少，意外也更少。',
      'faq.q5': '如果系統交付後出了問題怎麼辦？',
      'faq.a5': '每次交付都包含完整文件和技術交接。我們也提供持續維護方案，主動監控並維護您的系統。API 會變動，工具會更新——我們幫您處理，您不用擔心。',

      /* CONTACT */
      'contact.tag': '開始使用',
      'contact.h2.1': '讓我們來看看',
      'contact.h2.2': '您的業務有哪些可能性',
      'contact.intro': '告訴我們您的團隊正在做什麼——我們會在正式建構之前，先給您看一個可運行的展示版本。',
      'contact.step1.h4': '諮詢',
      'contact.step1.span': '分享您的願景與挑戰',
      'contact.step2.h4': '策略規劃',
      'contact.step2.span': '我們設計您的 AI 解決方案',
      'contact.step3.h4': '上線',
      'contact.step3.span': '部署並持續優化您的系統',
      'contact.response': '24 小時內回覆',
      'form.name.label': '您的姓名',
      'form.email.label': '電子郵件',
      'form.phone.label': '電話號碼',
      'form.company.label': '公司名稱',
      'form.size.label': '公司規模',
      'form.size.opt0': '請選擇規模',
      'form.size.opt1': '只有我一人',
      'form.size.opt2': '2–10 人',
      'form.size.opt3': '11–50 人',
      'form.size.opt4': '51–200 人',
      'form.size.opt5': '200 人以上',
      'form.challenge.label': '目前最大的營運挑戰是什麼？',
      'form.challenge.opt0': '選擇最接近的情況',
      'form.challenge.opt1': '太多手動資料輸入 / 行政工作',
      'form.challenge.opt2': '客戶跟進太慢或有遺漏',
      'form.challenge.opt3': '招募與篩選耗時太長',
      'form.challenge.opt4': '客服團隊應接不暇',
      'form.challenge.opt5': '報告與儀表板仍需手動製作',
      'form.challenge.opt6': '潛客在聯繫前就已失溫',
      'form.challenge.opt7': '其他——我會在下方說明',
      'form.cost.label': '此挑戰的預估月成本（時間 + 薪資）',
      'form.cost.opt0': '請選擇範圍',
      'form.cost.opt1': '月花費低於 $1,000',
      'form.cost.opt2': '$1,000 – $5,000 / 月',
      'form.cost.opt3': '$5,000 – $15,000 / 月',
      'form.cost.opt4': '$15,000 – $50,000 / 月',
      'form.cost.opt5': '$50,000 以上 / 月',
      'form.cost.opt6': '不確定——請幫我估算',
      'form.desc.label': '描述問題及您希望達成的目標',
      'form.submit': '送出——我想要免費諮詢 →',
      'form.toast': '✅ 訊息已送出！我們的團隊將在 24 小時內與您聯繫。',
      'form.ratelimit': '已達送出上限，請明天再試',
      'form.sending': '傳送中...',
      'form.name.ph': '王小明',
      'form.email.ph': 'name@company.com.tw',
      'form.phone.ph': '+886 912 345 678',
      'form.company.ph': '台灣科技股份有限公司',
      'form.desc.ph': '例如：「我們有 3 個人每天手動將相同的客戶資料輸入 3 個不同的系統，每天大約花 4 個小時。我們希望這個流程能自動執行，讓團隊可以專注在更有價值的工作上。」'
    }
  };

  // ── ZH ROTATING HERO WORDS ───────────────────────────────────
  var HERO_WORDS = {
    en: ['repetitive', 'manual', 'mindless', 'time-consuming', 'low-value'],
    zh: ['重複性', '手動', '無效', '耗時', '低價值']
  };

  // ── ZH PROJECT MODAL DATA ────────────────────────────────────
  var PROJECT_MODAL_ZH = [
    {
      tag: '🗞️ 業務 &amp; 行銷 — 台灣',
      title: '競爭情報新聞監控平台',
      modalTitle: '每日自動監控 28 個來源、篩掉 92% 雜訊、早上送達即用情報摘要的 AI 系統',
      client: '業務部門，顧問公司 — 台灣',
      headerMetrics: [
        { val: '700+', lbl: '每日處理文章數' },
        { val: '28', lbl: '監控來源數' },
        { val: '0 hrs', lbl: '人工監控時數' }
      ],
      sections: [
        { label: '客戶概況', type: 'text', content: '台灣一家顧問公司的業務部門，每日監控 28 個新聞來源，追蹤競爭對手動態、法規變動，以及與客戶相關的市場情報。' },
        { label: '業務背景', type: 'text', content: '團隊每天花 6 到 8 個小時手動瀏覽各來源、把相關文章複製貼到共用文件，再整理摘要給行銷團隊。這個過程不穩定且耗時——來源數量也讓人難以確保沒有遺漏任何重要資訊。' },
        { label: '問題描述', type: 'text', content: '手動監控 28 個來源吃掉了整個早上。<ol><li>每天花 6 到 8 小時人工閱讀與篩選內容</li><li>格式不統一——每份摘要取決於誰來準備</li><li>92% 的文章是不相關的雜訊，卻仍需逐一閱讀才能排除</li><li>高風險遺漏時效性強的競品或法規新聞</li></ol>' },
        { label: '目標', type: 'text', content: '<ul><li>每天早上自動監控全部 28 個來源</li><li>根據預設主題對文章進行篩選與評分</li><li>無需人工介入，自動交付結構化、開箱即用的情報摘要</li><li>對法規和競品相關內容加上優先標記</li></ul>' },
        { label: '工作範疇', type: 'text', content: '<ul><li>每日自動排程抓取 28 個指定來源的 RSS 與網頁內容</li><li>依預設主題類別與關鍵字進行 AI 相關性評分</li><li>文章去重與依主題分群</li><li>每天早上自動產生並以電子郵件寄送結構化情報摘要</li><li>對法規與競品相關內容加上優先標記</li></ul>' },
        { label: '解決方案概述', type: 'text', content: '一條完全自動化的每日情報流水線。每天早上自動抓取並篩選 700 多篇文章。8% 真正有用的內容被結構化為即用摘要，在團隊開始工作前送達——沒有任何人需要閱讀一篇不相關的文章。' },
        { label: '技術架構', type: 'stack', items: ['n8n', 'Python', 'OpenAI API', 'RSS Parser', 'Web Scraper', 'Gmail API', 'Google Sheets'] },
        { label: '實作方式', type: 'text', content: '第一週建立並用歷史文章驗證來源擷取與相關性評分。與團隊迭代調整摘要格式。第二週起完整流水線自動上線運行，客戶無需任何日常維護。' },
        { label: '成果 &amp; 業務影響', type: 'metrics', summary: '每天早上情報摘要自動送達。團隊打開閱讀重要內容，然後繼續工作——每日 6 到 8 小時的手動監控工作被完全消除。', items: [{ val: '700+', lbl: '每日處理文章數' }, { val: '92%', lbl: '內容自動篩選比例' }, { val: '8→2 hrs', lbl: '每日節省時間' }, { val: '0', lbl: '人工閱讀不相關內容' }] }
      ]
    },
    {
      tag: '🍱 餐飲外送 &amp; 食品服務 — 印尼',
      title: 'WhatsApp 業務營運平台',
      modalTitle: '透過 WhatsApp 全自動管理訂單、付款、外送與每日財務報告的完整系統',
      client: '餐飲外送業者 — 印尼',
      headerMetrics: [
        { val: '350+', lbl: '每日管理訂單數' },
        { val: '24/7', lbl: '客服覆蓋時段' },
        { val: '7', lbl: '已自動化工作流程' }
      ],
      sections: [
        { label: '客戶概況', type: 'text', content: '印尼一家餐飲外送業者，每日透過 WhatsApp 管理 300 多筆訂單——涵蓋訂單收取、付款記錄、外送追蹤、客戶溝通與財務報告，全部透過單一通訊管道處理。' },
        { label: '業務背景', type: 'text', content: '老闆和行政團隊透過 WhatsApp 手動管理每一個營運環節。訂單手動接收、付款記錄在 Excel、外送靠打電話確認、每天結束後手動製作財務摘要。隨著業務量增加，手動流程成為瓶頸。' },
        { label: '問題描述', type: 'text', content: '每個營運環節都依賴老闆或行政的人工介入。<ol><li>手動接收訂單——高風險出錯或遺漏訊息</li><li>付款與支出手動記錄在 Excel——無即時可視性</li><li>確認外送需打電話給司機——無自動通知客戶機制</li><li>每天結束後手動製作財務摘要——每晚花 30 到 45 分鐘</li></ol>' },
        { label: '目標', type: 'text', content: '<ul><li>讓行政透過 WhatsApp 記錄付款與支出——不需要手動輸入 Excel</li><li>追蹤每位客戶的訂閱期限，並在到期前自動發送續訂提醒</li><li>讓司機透過 GPS 觸發一鍵外送確認——食物送達的瞬間通知客戶</li><li>讓客戶查詢預計到達時間，並根據司機位置提供真實答案</li><li>訂單建立或取消時自動同步 Sheets 中的客戶記錄</li><li>每天自動向老闆傳送財務摘要，無需任何人準備</li><li>每次外送後收集客戶回饋，並每日彙整摘要</li></ul>' },
        { label: '工作範疇', type: 'text', content: '<ul><li>行政付款 &amp; 支出機器人：行政透過文字、語音或照片傳送付款或支出 → AI 自動記錄至 Google Sheets</li><li>訂閱追蹤器：依客戶追蹤到期日期，自動傳送 3 天前續訂提醒</li><li>GPS 司機介面：網頁應用程式偵測司機抵達外送地址 → 一鍵確認外送 → 即時通知客戶</li><li>預計到達機器人：客戶詢問何時送達 → 聊天機器人詢問姓名 → 查詢司機 GPS 與地址 → 回覆預計到達時間</li><li>客戶記錄自動管理：新訂單新增資料至 Sheets；取消訂單刪除記錄</li><li>財務分析機器人：每日自動彙整訂單與付款摘要並透過 WhatsApp 傳送給老闆</li><li>回饋收集機器人：外送後提示客戶回饋 → 每日彙整摘要給老闆</li></ul>' },
        { label: '解決方案概述', type: 'text', content: '一套完全自動化的 WhatsApp 營運系統。訂單自動流入、行政一則訊息記錄付款、司機一鍵通知客戶、老闆每天早上收到財務摘要——每個環節零人工介入。' },
        { label: '技術架構', type: 'stack', items: ['n8n', 'OpenAI API', 'OpenAI Whisper', 'Twilio', 'WhatsApp Business API', 'Google Sheets', 'Google Sheets API', 'Geolocation API', 'Google Maps API', 'HTML / CSS / JS', 'Vercel'] },
        { label: '實作方式', type: 'text', content: '核心訂單收取與付款記錄在 3 小時內建立並展示。接著加入訂閱追蹤器、到期提醒與 GPS 司機介面。最後完成回饋收集與財務報告。完整正式系統在 8 天內上線——無需任何團隊培訓。' },
        { label: '成果 &amp; 業務影響', type: 'metrics', summary: '將一家手動運作的餐飲外送業者，轉型為完全自動化的 WhatsApp 原生系統——從訂單接收到外送確認與老闆報告，全程自動。', items: [{ val: '350+', lbl: '每日管理訂單數' }, { val: '24/7', lbl: '客服覆蓋時段' }, { val: '7', lbl: '已自動化工作流程' }, { val: '0', lbl: '從訂單到外送通知的人工步驟' }] }
      ]
    },
    {
      tag: '🏭 製造業 — 印尼',
      title: '端對端人才招募系統',
      modalTitle: '取代 3 週人工作業的三階段 AI 招募流水線',
      client: '製造公司 — 印尼',
      headerMetrics: [
        { val: '87%', lbl: '篩選時間縮短比例' },
        { val: '150+', lbl: '自動篩選履歷數' },
        { val: '48 hrs', lbl: '從截止到候選名單' }
      ],
      sections: [
        { label: '客戶概況', type: 'text', content: '印尼一家中型製造公司，定期進行生產、品管、物流與行政等部門的招募，每個招募週期產生 150 多份應徵，由精簡的 HR 團隊負責。' },
        { label: '業務背景', type: 'text', content: '履歷透過電子郵件和 Google 表單傳入。HR 下載每份履歷、閱讀、記錄在試算表，並以電子郵件手動協調面試。沒有 ATS、沒有評分系統——一個人扛起四個部門的整個招募流程。' },
        { label: '問題描述', type: 'text', content: 'HR 主任在每個招募週期花 2 到 3 週什麼都沒做，只是在讀文件，沒有一致的評分標準，也無法保證選出了對的人。<ol><li>第一次面試前要花 2 到 3 週讀履歷</li><li>沒有統一評分框架——不同應徵者被不一致地評估</li><li>只是安排面試就要來回發幾天的電子郵件</li></ol>' },
        { label: '目標', type: 'text', content: '<ul><li>自動收集履歷並進行 AI 評分，附帶書面理由</li><li>無需 HR 介入，進行第一輪面試</li><li>直接將最終面試安排進 HR 的行事曆</li><li>每個部門交付前 3 名已完整簡報的候選人</li></ul>' },
        { label: '工作範疇', type: 'text', content: '<ul><li>第一階段：自動收集履歷、解析，並進行 AI 評分附帶摘要理由</li><li>第二階段：對每個部門前 10 名進行 AI 電話面試並轉錄評分</li><li>第三階段：自動預訂 Google Calendar 並傳送候選人確認信</li></ul>' },
        { label: '解決方案概述', type: 'text', content: '一條三階段自動化流水線——履歷篩選、AI 語音面試、行事曆排程——在最終面試前，HR 完全無需介入，每個部門交付最終 3 名候選人。' },
        { label: '技術架構', type: 'stack', items: ['n8n', 'OpenAI API', 'OpenAI Whisper', 'Twilio', 'Google Calendar API', 'Gmail API', 'Google Sheets', 'HTML / CSS / JS', 'Vercel'] },
        { label: '實作方式', type: 'text', content: '履歷評分階段在 1 天內展示，處理樣本批次並附帶評分摘要與理由。包含 AI 語音面試、轉錄與行事曆整合的完整三階段流水線在 10 天內上線。' },
        { label: '成果 &amp; 業務影響', type: 'metrics', summary: '招募週期從 3 週人工篩選縮短至 48 小時，並向 HR 交付已完整簡報的最終候選人。', items: [{ val: '87%', lbl: '篩選時間縮短比例' }, { val: '150+', lbl: '自動篩選履歷數' }, { val: '48 hrs', lbl: '從截止到候選名單' }, { val: '12', lbl: '4 個部門共 12 名最終候選人' }] }
      ]
    },
    {
      tag: '✍️ 行銷 — 台灣',
      title: '自動化內容產出引擎',
      modalTitle: '將一個主題轉化為可發布文章的 9 代理人 AI 系統',
      client: '家族辦公室部門，顧問公司 — 台灣',
      headerMetrics: [
        { val: '97%', lbl: '生產時間縮短比例' },
        { val: '50+', lbl: '每年文章產量' },
        { val: '3', lbl: '目標平台數' }
      ],
      sections: [
        { label: '客戶概況', type: 'text', content: '台灣一家管理顧問公司新成立的家族辦公室部門，服務高淨值個人與跨境投資人。沒有既有網路聲量、搜尋排名，市場也尚未認識這個品牌。' },
        { label: '業務背景', type: 'text', content: '這個部門剛剛成立。潛在客戶找不到他們，不知道他們提供什麼，也沒有理由選擇他們而非已建立口碑的競爭者。在家族辦公室領域，聲譽與能見度不是行銷加分項——而是先決條件。沒有能見度，就會在機會出現之前就錯失。2026 年的目標很明確：透過內容建立品牌知名度與影響力。當潛在客戶搜尋答案時，這家公司應該是他們找到並信任的顧問。' },
        { label: '問題描述', type: 'text', content: '一個在信任敏感領域新成立的部門，缺乏建立所需能見度的內容引擎。<ol><li>市場不知道這個部門的存在——沒有搜尋聲量、沒有內容、沒有可信度訊號</li><li>手動產出專業級雙語內容每篇需要一整天</li><li>文章沒有針對搜尋或 E-E-A-T 合規進行一致優化</li><li>公司獨特的理念與價值觀沒有傳達出來——內容感覺很通用</li></ol>' },
        { label: '目標', type: 'text', content: '<ul><li>成為潛在客戶搜尋家族辦公室指引時找到的顧問</li><li>以建立權威所需的產量，產出專業級雙語文章</li><li>每篇文章都符合 E-E-A-T 標準，針對傳統搜尋與 AI 搜尋平台雙重優化</li><li>在每篇文章中體現公司獨特理念——有辨識度，不是通用內容</li></ul>' },
        { label: '工作範疇', type: 'text', content: '<ul><li>工作流程 1：主題生成代理人查詢 3 個即時研究工具，輸出 5 個排名主題選項至 Google Sheets</li><li>工作流程 2：從主題到兩篇完整雙語文章的 9 代理人順序流水線</li><li>透過向量資料庫檢索嵌入公司知識與專有理念</li><li>上傳至 Google Drive 為格式化 HTML 文件，完成時傳送電子郵件通知</li></ul>' },
        { label: '解決方案概述', type: 'text', content: '一條 9 代理人流水線，輸入一個主題，產出兩篇可發布文章——繁體中文與英文——全程研究、SEO 優化、E-E-A-T 合規，並以公司的聲音撰寫。過去需要一整天的工作，現在只需 20 分鐘審閱。' },
        { label: '技術架構', type: 'stack', items: ['n8n', 'OpenAI API', 'Anthropic Claude API', 'Pinecone', 'Tavily API', 'Perplexity API', 'Linkup API', 'Firecrawl API', 'Google Drive API', 'Google Docs API', 'Google Sheets', 'Gmail API', 'Railway'] },
        { label: '實作方式', type: 'text', content: '先建立並驗證主題生成工作流程。文章流水線逐個代理人建構——每個階段獨立測試後再連接到序列。在 API 密集階段之間加入速率限制處理與等待節點。完整流水線在 3 週內上線。' },
        { label: '成果 &amp; 業務影響', type: 'metrics', summary: '文章在傳統搜尋排名、出現在 Google AI Overview，並被 AI 助理引用——達成團隊一開始設定的三個能見度目標。', items: [{ val: '97%', lbl: '生產時間縮短比例' }, { val: '50+', lbl: '每年文章產量' }, { val: '3', lbl: '目標平台數' }, { val: '20 min', lbl: '從主題到準備發布' }] }
      ]
    },
    {
      tag: '📋 業務 — 台灣',
      title: '客戶入職智慧化流程',
      modalTitle: '自動傳送入職表單、同步回覆至 Notion、並自動簡報業務團隊的 AI 系統',
      client: '業務團隊 — 台灣',
      headerMetrics: [
        { val: '100%', lbl: '表單傳送自動化率' },
        { val: '0 min', lbl: '人工資料輸入時間' },
        { val: '7 days', lbl: '上線時程' }
      ],
      sections: [
        { label: '客戶概況', type: 'text', content: '台灣一個業務團隊，管理跨多個行業的潛在客戶流水線，每次客戶通話前都需要結構化的入職資訊。' },
        { label: '業務背景', type: 'text', content: '在聯繫任何潛客之前，團隊透過 LINE 或電子郵件傳送 Google 表單收集背景資料——公司概況、痛點、目標與預算。回覆必須手動複製到 Notion、個別整理摘要，並靠記憶追蹤。隨著流水線增長，流程開始崩壞。' },
        { label: '問題描述', type: 'text', content: '從傳送表單到準備好通話之間的每個步驟都靠人工完成。<ol><li>表單一個一個傳送——無法確認每個潛客都收到了</li><li>沒有系統追蹤誰回覆了——跟進完全靠記憶</li><li>把答案複製到 Notion 每位客戶花 10 到 15 分鐘</li><li>客戶簡報撰寫不一致，或在忙碌時完全跳過</li></ol>' },
        { label: '目標', type: 'text', content: '<ul><li>一次觸發，同時傳送入職表單給所有聯絡人</li><li>每份完成的回覆自動同步至 Notion 成為結構化客戶記錄</li><li>每份回覆自動產生 AI 客戶簡報——通話前就準備好</li><li>自動標記並跟進未回應的潛客</li></ul>' },
        { label: '工作範疇', type: 'text', content: '<ul><li>第一階段：上傳單一聯絡人名單，透過 LINE 和電子郵件大量傳送表單</li><li>第二階段：即時輪詢 Google 表單 → 同步至 Notion 並附 AI 生成客戶簡報</li><li>第三階段：自動傳送跟進提醒，並在 Notion 中追蹤每個潛客狀態</li></ul>' },
        { label: '解決方案概述', type: 'text', content: '業務人員上傳聯絡人名單和表單連結——系統處理其餘一切。表單立即發出，回覆自動流入 Notion 並附上 AI 簡報，未回應的潛客自動被跟進，不需要任何人記得。' },
        { label: '技術架構', type: 'stack', items: ['n8n', 'OpenAI API', 'Google Forms API', 'Google Sheets API', 'Notion API', 'LINE Messaging API', 'Gmail API'] },
        { label: '實作方式', type: 'text', content: '先用樣本回覆建立並測試表單輪詢與 Notion 同步。用小型聯絡人群組驗證 LINE 和電子郵件傳送。用真實表單資料調整 AI 簡報代理人。完整流水線在 7 天內上線。' },
        { label: '成果 &amp; 業務影響', type: 'metrics', summary: '消除了手動傳送表單、資料輸入和撰寫簡報——業務團隊打開 Notion，流水線已經準備好了。', items: [{ val: '100%', lbl: '表單傳送自動化率' }, { val: '0 min', lbl: '每份回覆的人工資料輸入時間' }, { val: '10–15 min', lbl: '每個潛客節省的準備時間' }, { val: '7 days', lbl: '從啟動到完整上線' }] }
      ]
    },
    {
      tag: '📄 顧問服務 — 印尼',
      title: '文件智慧 &amp; OCR 解析入口',
      modalTitle: '從掃描書籍中準確萃取乾淨結構化文字的本地 OCR 入口',
      client: '顧問公司 — 印尼',
      headerMetrics: [
        { val: '94.5%', lbl: '基準準確率 (OmniDocBench)' },
        { val: '0', lbl: '乾淨文件人工校正次數' },
        { val: '100%', lbl: '本地運行——資料不離開公司網路' }
      ],
      sections: [
        { label: '客戶概況', type: 'text', content: '印尼一家顧問公司，擁有大量已掃描成 PDF 的實體書籍——涵蓋顧問框架、研究與培訓材料。頁面密集排列著印刷圖表、流程圖與圖形。公司希望將整個書庫轉換成結構化文字，以驅動 AI 知識庫與聊天機器人。' },
        { label: '業務背景', type: 'text', content: '這些書籍混合了純文字與大量視覺內容——說明流程的頁面用流程圖，比較選項的頁面用表格，顯示關係的頁面用圖表。掃描書籍保留了圖像但失去了嵌入其中的所有文字。在任何 AI 系統能使用這些知識之前，每一頁都必須準確萃取——包括視覺元素內的所有內容。' },
        { label: '問題描述', type: 'text', content: '團隊試過 ChatGPT 和 Gemini。輸出的不準確程度讓每個結果都需要人工校正——所花的時間和手動做沒有兩樣。<ol><li>通用 AI 模型完全跳過流程圖標籤和嵌入其中的文字</li><li>掃描書籍產生跨頁圖像——兩頁並排在一個圖框中——工具無法正確分割或處理</li><li>有合併儲存格和多欄版面的表格被壓平成無法使用的列表</li><li>偶爾，模型會產生根本不在原始文件中的內容</li></ol>' },
        { label: '目標', type: 'text', content: '<ul><li>建立一個團隊無需技術知識即可使用的本地入口</li><li>準確萃取密集排列圖表、流程圖與圖形的掃描頁面中的文字</li><li>處理跨頁書籍掃描——偵測並分別處理每一頁</li><li>保留表格結構，讓儲存格之間的關係保持有意義</li><li>以 DOCX 或 PDF 格式下載萃取的純文字</li><li>所有文件保留在公司自己的網路中——不傳送到外部伺服器</li></ul>' },
        { label: '工作範疇', type: 'text', content: '<ul><li>安裝在公司內部電腦的本地網頁入口——瀏覽器操作，處理不需網路連線</li><li>以 PaddleOCR PP-OCRv5 作為核心萃取引擎——專為複雜文件版面設計</li><li>跨頁掃描偵測與自動中線分割邏輯</li><li>保留行、列與合併儲存格結構的表格辨識</li><li>圖形與圖表文字偵測——視覺元素內的標籤、注釋與嵌入文字</li><li>萃取的純文字可直接從入口下載為 DOCX 或 PDF</li></ul>' },
        { label: '解決方案概述', type: 'text', content: '一個本地安裝的入口——上傳任何文件格式，等待，以 DOCX 或 PDF 下載萃取的文字。PaddleOCR PP-OCRv5 在 OmniDocBench 基準測試中達到 94.5% 的準確率——這是文件解析的行業標準——並且專門訓練用來處理通用 AI 模型從未設計來應對的表格、圖形、圖表與複雜版面。' },
        { label: '技術架構', type: 'stack', items: ['PaddleOCR PP-OCRv5', 'PaddleOCR-VL-1.5', 'Python', 'Flask', 'HTML / CSS / JS', 'PDF processing libraries'] },
        { label: '實作方式', type: 'text', content: '針對公司實際掃描書籍進行建構與測試——包括圖表最密集的頁面與跨頁圖框。在單次交接中安裝在他們的本地電腦並移交。從啟動到上線的總時間：2 週。' },
        { label: '成果 &amp; 業務影響', type: 'metrics', summary: '阻塞 AI 知識庫數月的萃取問題在 2 週內解決——從掃描書籍中準確萃取純文字，讓每小時的人工工作縮短為幾分鐘，這是第一次真正做到了。', items: [{ val: '94.5%', lbl: 'OmniDocBench 基準準確率' }, { val: '0', lbl: '乾淨文件人工校正次數' }, { val: '小時→分鐘', lbl: '每批文件處理時間' }, { val: '100%', lbl: '本地運行——資料不離開公司網路' }] }
      ]
    }
  ];

  // ── INTERNAL STATE ───────────────────────────────────────────
  var callbacks = [];

  // ── CORE FUNCTIONS ────────────────────────────────────────────
  function getLang() {
    return localStorage.getItem('crux_lang') || 'en';
  }

  function apply(lang) {
    if (!T[lang]) lang = 'en';
    var d = T[lang];
    localStorage.setItem('crux_lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';

    // innerHTML for all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n')];
      if (v != null) {
        // Use textContent for <option> elements to preserve value attribute
        if (el.tagName === 'OPTION') {
          el.textContent = v;
        } else {
          el.innerHTML = v;
        }
      }
    });

    // Placeholder attributes
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n-ph')];
      if (v != null) el.placeholder = v;
    });

    // Update lang toggle active state
    document.querySelectorAll('.lang-option').forEach(function (o) {
      o.classList.toggle('active', o.getAttribute('data-lang') === lang);
    });

    // Fire page-specific callbacks (e.g. rotating words)
    callbacks.forEach(function (cb) { cb(lang); });
  }

  function initDropdown() {
    var dd = document.getElementById('langDropdown');
    var btn = document.getElementById('langToggle');
    if (!dd || !btn) return;

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = dd.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });

    document.querySelectorAll('.lang-option').forEach(function (opt) {
      opt.addEventListener('click', function () {
        apply(opt.getAttribute('data-lang'));
        dd.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function (e) {
      if (!dd.contains(e.target)) {
        dd.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dd.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function init() {
    initDropdown();
    apply(getLang());
  }

  // Auto-init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ── PUBLIC API ────────────────────────────────────────────────
  w.CruxI18n = {
    apply: apply,
    get: getLang,
    on: function (cb) { callbacks.push(cb); },
    words: HERO_WORDS,
    zhModal: PROJECT_MODAL_ZH
  };
})(window);
