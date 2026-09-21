import { site } from "@/data/site";
import { skillGroups, experience, education, services, process as processSteps } from "@/data/content";
import { projects } from "@/data/projects";
import type { Dictionary } from "./types";

/**
 * Arabic translations. Structural/factual fields (URLs, tech names, slugs,
 * images, colors, statuses, dates-as-data) are always spread from the same
 * canonical data in `src/data/*` so they can never drift from the English
 * source of truth — only prose fields are overridden here.
 */

const projectTextAr: Record<
  string,
  Partial<{
    tagline: string;
    description: string;
    problem: string;
    solution: string;
    contribution: string;
    features: string[];
    imageAlt: string;
  }>
> = {
  "ai-fitness-coach": {
    tagline: "منصة لياقة متكاملة مدعومة بالذكاء الاصطناعي",
    description:
      "منصة لياقة بدنية ثنائية اللغة (إنجليزي/عربي) توفّر خطط تمارين مخصصة، وتتبع التغذية، والتعرف على الطعام من الصور بالذكاء الاصطناعي، ومدرّبًا محادثيًا ذكيًا.",
    problem:
      "تطبيقات اللياقة العامة لا تتكيف مع الفرد — يحصل المستخدمون على خطط ثابتة وعليهم تسجيل تغذيتهم يدويًا.",
    solution:
      "منصة متكاملة تولّد خططًا مخصصة وتتعرف على الطعام باستخدام Gemini API، مدعومة ببيانات آمنة لكل مستخدم عبر Supabase.",
    contribution:
      "صممت وبنيت التطبيق بالكامل: الواجهة الأمامية بـ React وTypeScript، والواجهة الخلفية عبر Supabase (المصادقة، وRLS، وقاعدة البيانات، وEdge Functions)، وربطه بـ Gemini وOpenFoodFacts.",
    features: [
      "خطط تمارين وتغذية مخصصة يتم توليدها بواسطة Gemini",
      "التعرف على صور الطعام بالذكاء الاصطناعي مع بيانات غذائية عبر OpenFoodFacts",
      "مدرّب لياقة محادثي مدعوم بالذكاء الاصطناعي",
      "تتبع التقدم عبر لوحات بيانات باستخدام Recharts",
      "بيانات آمنة لكل مستخدم عبر Supabase Auth وRow Level Security",
      "دعم كامل للغتين العربية والإنجليزية مع تخطيط RTL",
    ],
    imageAlt: "تطبيق ويب AI Fitness Coach",
  },
  "nova-admin": {
    tagline: "لوحة تحكم SaaS متكاملة",
    description:
      "لوحة تحكم إدارية جاهزة للإنتاج تضم مصادقة، وعناصر بيانات حية، ونظام تصميم داكن مخصص باسم Nova Violet.",
    problem:
      "تحتاج فرق SaaS إلى لوحة تحكم داخلية سريعة ومتسقة وسهلة التوسيع — دون إعادة بناء أساسيات الواجهة في كل صفحة.",
    features: [
      "مصادقة عبر البريد الإلكتروني أو OAuth مع مسارات محمية",
      "صفحة رئيسية للوحة التحكم ببيانات حية من Supabase",
      "مكونات نظام تصميم قابلة لإعادة الاستخدام (جداول، نماذج، رسوم بيانية)",
      "طبقة بيانات آمنة النوع باستخدام مكونات الخادم",
    ],
  },
  travio: {
    tagline: "منصة SaaS متعددة المستأجرين لوكالات السفر",
    description:
      "لوحة تحكم مؤسسية بتصميم عربي أولاً (RTL) تتيح لوكالات السفر إدارة الحجوزات والعملاء والعمليات عبر عدة مستأجرين.",
    problem:
      "تدير وكالات السفر حجوزاتها عبر جداول بيانات وتطبيقات محادثة متفرقة. يجمع Travio كل العمليات في مساحة عمل آمنة واحدة متعددة المستأجرين.",
    features: [
      "بنية متعددة المستأجرين مع أمان على مستوى الصفوف (RLS)",
      "تنفيذ دقيق التفاصيل انطلاقًا من تصاميم Figma",
      "تخطيط بتصميم عربي أولاً (RTL) وطباعة عربية مدروسة",
      "بنية Monorepo مع حزم واجهة مستخدم مشتركة",
    ],
  },
  "habit-tracker": {
    tagline: "كوّن عادات تدوم فعلًا",
    description:
      "تطبيق نظيف لتتبع العادات يتضمن تسجيلًا يوميًا، وحساب سلاسل الإنجاز، وبيانات دائمة — مبني بمكونات قابلة لإعادة الاستخدام وآمنة النوع.",
    problem:
      "تُعقّد معظم تطبيقات العادات حلقة بسيطة. يركّز هذا التطبيق على تسجيل يومي سلس وحساب دقيق لسلاسل الإنجاز.",
    features: [
      "إنشاء العادات وتعديلها وأرشفتها",
      "تتبع قائم على التاريخ مع حساب سلاسل الإنجاز باستخدام date-fns",
      "بيانات دائمة عبر Supabase وPostgreSQL",
      "واجهة متجاوبة بالكامل وقابلة للاستخدام عبر لوحة المفاتيح",
    ],
  },
  ecommerce: {
    tagline: "متجر إلكتروني بـ React آمن النوع مع Redux Toolkit",
    description:
      "متجر إلكتروني قابل للتوسع يشمل عرض المنتجات وتصفيتها وإدارة سلة المشتريات وعملية دفع كاملة، مبني على بنية آمنة النوع وموجهة نحو الأداء.",
    problem:
      "تحتاج المتاجر الإلكترونية إلى التعامل مع كتالوج متنامٍ وحالة معقدة — الفلاتر والسلة والدفع — دون أن تصبح بطيئة أو صعبة الصيانة.",
    solution:
      "تطبيق React وTypeScript يستخدم Redux Toolkit مع Async Thunks لإدارة الحالة وبيانات الواجهة البرمجية، وReact Router للتنقل، وVite مع التحميل الكسول وتقسيم الكود لتحميل أسرع.",
    contribution:
      "بنيت بنية الواجهة الأمامية بالكامل — إدارة الحالة، والتوجيه، وربط واجهات البرمجة، وعملية الدفع — مع التركيز على أمان الأنواع والأداء.",
    features: [
      "عرض المنتجات وتصفيتها",
      "إدارة سلة المشتريات",
      "عملية دفع كاملة",
      "إدارة الحالة باستخدام Redux Toolkit وAsync Thunks",
      "الربط مع واجهات RESTful API",
      "التحميل الكسول وتقسيم الكود لتحسين الأداء",
    ],
    imageAlt: "تطبيق ويب Scalable E-Commerce Application",
  },
  "link-checker": {
    tagline: "[سطر وصف واحد]",
    description: "[وصف المشروع — جملة أو جملتان عمّا يفعله.]",
    problem: "[المشكلة التي يحلها]",
    features: ["[الميزة ١]", "[الميزة ٢]", "[الميزة ٣]"],
  },
};

const arProjects = projects.map((p) => ({ ...p, ...projectTextAr[p.slug] }));

const experienceTextAr: { role: string; company: string; period: string; bullets: string[] }[] = [
  {
    role: "متدرب تطوير واجهات أمامية",
    company: "JISR HR",
    period: "أبريل 2026 — يوليو 2026",
    bullets: [
      "أكملت تدريبًا في تطوير الواجهات الأمامية ركّز على أفضل الممارسات الحديثة، بما في ذلك React والبنية القائمة على المكونات.",
      "بنيت واجهات مستخدم متجاوبة ومكونات قابلة لإعادة الاستخدام من خلال تمارين تطوير عملية ومنظمة.",
      "تعاونت مع الزملاء والمدربين لتطبيق أفضل ممارسات تطوير الواجهات الأمامية والحصول على ملاحظات حول جودة الكود.",
    ],
  },
  {
    role: "مشاريع شخصية",
    company: "عمل مستقل",
    period: "2025 — حتى الآن",
    bullets: [
      "صممت وبنيت تطبيقات متكاملة (AI Fitness Coach، وNova Admin، وHabit Tracker) باستخدام React وNext.js وSupabase.",
      "طبّقت المصادقة، والأمان على مستوى الصفوف (RLS)، وتكاملات الذكاء الاصطناعي، وواجهات ثنائية اللغة بتخطيط RTL.",
    ],
  },
];

const arExperience = experience.map((item, i) => ({ ...item, ...experienceTextAr[i] }));

const arEducation = education.map((item) => ({
  ...item,
  degree: "بكالوريوس في هندسة الحاسبات",
  location: "بنغالورو، الهند",
}));

// The "tools" group is deliberately absent here: it must stay in English (title,
// description and skill names) in both locales, so it's left untranslated below.
const skillGroupTextAr: Record<string, { title: string; description: string }> = {
  frontend: { title: "الواجهة الأمامية", description: "واجهات سريعة وسهلة الوصول وممتعة الاستخدام." },
  backend: { title: "الواجهة الخلفية", description: "واجهات برمجية ومصادقة وقواعد بيانات تتوسع مع نمو المنتج." },
};

const arSkillGroups = skillGroups.map((g) => ({ ...g, ...skillGroupTextAr[g.id] }));

const serviceTextAr = [
  { title: "تطوير المواقع الإلكترونية", text: "مواقع تسويقية وصفحات هبوط سريعة التحميل، ومتصدرة في محركات البحث، وفعّالة في التحويل." },
  { title: "تطبيقات الويب", text: "لوحات تحكم ومنتجات SaaS وأدوات داخلية مزودة بمصادقة وبيانات حقيقية." },
  { title: "تطوير الواجهات الأمامية", text: "واجهات React / Next.js دقيقة التفاصيل، انطلاقًا من تصاميم Figma أو من الصفر." },
  { title: "تطوير الواجهة الخلفية", text: "واجهات REST API وتصميم قواعد بيانات ومصادقة آمنة باستخدام Supabase وPostgreSQL." },
  { title: "دمج واجهات البرمجة", text: "ربط أنظمة الدفع والخدمات الخارجية بأنظمتك الخاصة." },
  { title: "مواقع متجاوبة", text: "تصاميم تبدو طبيعية على الهواتف والأجهزة اللوحية وأجهزة الحاسوب — بما في ذلك دعم RTL." },
  { title: "تحسين أداء المواقع", text: "تدقيق وتحسين الأداء ومؤشرات Core Web Vitals وإمكانية الوصول وتحسين محركات البحث." },
  { title: "دمج الذكاء الاصطناعي", text: "ميزات مدعومة بنماذج اللغة الكبيرة — محادثة، وبحث، وتوليد محتوى — مدمجة داخل منتجك." },
];

const arServices = services.map((s, i) => ({ ...s, ...serviceTextAr[i] }));

const processTextAr = [
  { title: "الاكتشاف", text: "فهم الأهداف والمستخدمين والقيود." },
  { title: "التصميم", text: "البنية والمخططات الأولية ونطاق عمل واضح." },
  { title: "البناء", text: "كود نظيف ومُصنّف ومُختبر — يُطلق بشكل تدريجي." },
  { title: "الإطلاق والتطوير", text: "النشر والقياس والتحسين المستمر." },
];

const arProcess = processSteps.map((p, i) => ({ ...p, ...processTextAr[i] }));

export const ar: Dictionary = {
  meta: {
    title: `${site.name} — مطوّر واجهات أمامية`,
    description:
      "مطوّر واجهات أمامية متخصص في React وNext.js وTypeScript، يمتلك خبرة في بناء تطبيقات متكاملة من التصميم وحتى الإطلاق باستخدام Tailwind CSS وSupabase.",
  },
  common: {
    location: "السعودية",
    languageSwitcherLabel: "تغيير اللغة",
    englishLabel: "English",
    arabicLabel: "العربية",
    backToTopLabel: "العودة للأعلى",
    switchToLightMode: "التبديل إلى الوضع الفاتح",
    switchToDarkMode: "التبديل إلى الوضع الداكن",
  },
  nav: {
    primaryLabel: "التنقل الرئيسي",
    links: [
      { label: "نبذة عني", href: "#about" },
      { label: "المهارات", href: "#skills" },
      { label: "المشاريع", href: "#projects" },
      { label: "الخبرة", href: "#experience" },
      { label: "الخدمات", href: "#services" },
      { label: "تواصل معي", href: "#contact" },
    ],
    talk: "لنتحدث",
    toggleMenu: "تبديل القائمة",
  },
  hero: {
    availableBadge: "متاح لمشاريع جديدة",
    heroWords: ["قابلة للتوسع", "سريعة", "سهلة الوصول", "حديثة"],
    role: "مطوّر واجهات أمامية",
    descriptionPrefix: "أبني تطبيقات ويب ",
    descriptionSuffix: " بتقنيات React وNext.js وTypeScript، مع تصميم بـ Tailwind CSS ودعم من Supabase.",
    ctaWork: "استعرض أعمالي",
    ctaContact: "تواصل معي",
    ctaDownloadCV: "تحميل السيرة الذاتية",
    stats: [
      { value: "بكالوريوس", label: "هندسة الحاسبات" },
      { value: "React / Next.js", label: "التقنية الأساسية" },
      { value: "واجهات أمامية", label: "التخصص" },
    ],
    scrollLabel: "تمرير",
    scrollAriaLabel: "الانتقال إلى نبذة عني",
  },
  about: {
    eyebrow: "نبذة عني",
    title: "مهندس بحكم التخصص، ومطوّر بحكم الممارسة.",
    intro:
      "أنا مهندس علوم حاسب أبني منتجات ويب من الألف إلى الياء — من الواجهات النظيفة والسهلة الوصول إلى واجهات البرمجة (APIs) ونماذج البيانات خلفها.",
    paragraphs: [
      "منحتني خلفيتي الهندسية أساسًا قويًا في هياكل البيانات والخوارزميات وتصميم الأنظمة، وأوظّف ذلك في بناء تطبيقات ويب سريعة وسهلة الصيانة.",
      "أعمل عبر كامل الحزمة التقنية — React وNext.js في الواجهة الأمامية، وSupabase وPostgreSQL في الواجهة الخلفية — ويسعدني حقًا دمج أدوات الذكاء الاصطناعي الحديثة في منتجات فعلية.",
    ],
    educationBadge: "بكالوريوس هندسة الحاسبات",
    languagesBadge: "العربية · الإنجليزية",
    highlights: [
      { title: "خلفية هندسة حاسب", text: "بكالوريوس هندسة في علوم الحاسب — أساس متين في الخوارزميات وقواعد البيانات والأنظمة.", icon: "GraduationCap" },
      { title: "إتقان الواجهات الأمامية", text: "واجهات دقيقة التفاصيل ومتجاوبة وسهلة الوصول باستخدام React وNext.js وTypeScript وTailwind.", icon: "LayoutTemplate" },
      { title: "الخلفية والبيانات", text: "واجهات REST API والمصادقة والبيانات العلائقية باستخدام Supabase وPostgreSQL.", icon: "Database" },
      { title: "حل المشكلات", text: "أحوّل المتطلبات الغامضة إلى أجزاء واضحة وقابلة للاختبار، وأطلقها بشكل تدريجي.", icon: "Puzzle" },
      { title: "تطبيقات ويب حديثة", text: "تطبيقات جاهزة للإنتاج، مبنية من الأساس على الأداء وتحسين محركات البحث (SEO) وبنية برمجية نظيفة.", icon: "Rocket" },
      { title: "شغوف بالذكاء الاصطناعي", text: "أبني باستخدام واجهات نماذج اللغة الكبيرة (LLM) وسير عمل مدعوم بالذكاء الاصطناعي لإطلاق ميزات أذكى وأسرع.", icon: "Sparkles" },
    ],
  },
  skills: {
    eyebrow: "المهارات",
    title: "مجموعة أدوات حديثة وجاهزة للإنتاج.",
    description: "التقنيات التي أعتمد عليها لإطلاق منتجات حقيقية — مصنّفة حسب موقعها في الحزمة التقنية.",
    groups: arSkillGroups,
  },
  projects: {
    eyebrow: "أعمال مختارة",
    title: "منتجات حقيقية، لا مجرد عروض تجريبية.",
    description: "كل مشروع أدناه يحل مشكلة حقيقية — مع القرارات التقنية والميزات التي جعلته ناجحًا.",
    moreOnGithub: "المزيد على GitHub",
    statusLabel: { live: "مباشر", "in-progress": "قيد التطوير", concept: "قريبًا" },
    liveDemo: "الموقع التجريبي",
    demoSoon: "العرض قريبًا",
    githubLabel: "GitHub",
    githubPrivate: "خاص",
    theProblem: "المشكلة",
    theSolution: "الحل",
    myContribution: "مساهمتي",
    items: arProjects,
  },
  experience: {
    eyebrow: "الخبرة",
    title: "أين بنيت أشياء حقيقية.",
    items: arExperience,
  },
  education: {
    eyebrow: "التعليم",
    title: "الأساس الأكاديمي.",
    items: arEducation,
  },
  services: {
    eyebrow: "الخدمات",
    title: "ما يمكنني بناؤه لك.",
    description: "من موقع تسويقي سريع إلى تطبيق ويب متكامل بميزات الذكاء الاصطناعي — من الألف إلى الياء.",
    items: arServices,
    process: arProcess,
  },
  contact: {
    eyebrow: "تواصل معي",
    heading1: "لديك مشروع في ذهنك؟",
    headingHighlight: "لنصنع شيئًا رائعًا معًا.",
    subtext:
      "أنا منفتح على الوظائف بدوام كامل والمشاريع الحرة والتعاونات. أخبرني بما تعمل عليه وسأرد عليك خلال يوم واحد.",
    channelLabels: {
      email: "البريد الإلكتروني",
      linkedin: "LinkedIn",
      github: "GitHub",
      resume: "السيرة الذاتية",
      resumeValue: "تحميل السيرة الذاتية (PDF)",
    },
    form: {
      nameLabel: "الاسم",
      namePlaceholder: "اسمك",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "you@company.com",
      messageLabel: "الرسالة",
      messagePlaceholder: "أخبرني عن مشروعك والجدول الزمني وأهدافك…",
      submitIdle: "إرسال الرسالة",
      submitSending: "جارٍ الإرسال",
      submitSent: "تم إرسال الرسالة",
      statusIdle: "أرد عادةً خلال 24 ساعة.",
      statusSent: "شكرًا لك! سأرد عليك خلال 24 ساعة.",
      statusError: "حدث خطأ ما — يرجى مراسلتي مباشرة عبر البريد الإلكتروني.",
      mailSubjectPrefix: "استفسار عن مشروع من",
    },
  },
  footer: {
    builtWith: "بُني باستخدام Next.js · TypeScript · Tailwind",
    rightsReserved: "جميع الحقوق محفوظة.",
  },
};
