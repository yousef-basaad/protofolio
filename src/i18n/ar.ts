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
      "منصة لياقة بدنية ثنائية اللغة (عربي/إنجليزي) فيها خطط تمارين مخصصة، تتبع للتغذية، تعرّف على الطعام من الصور بالذكاء الاصطناعي، ومدرّب ذكي تقدر تحاوره.",
    problem:
      "أغلب تطبيقات اللياقة ما تتكيف مع الشخص نفسه — تعطيك خطة ثابتة، وتحتاج تسجّل تغذيتك يدويًا.",
    solution:
      "منصة متكاملة تولّد خططًا مخصصة وتتعرف على الطعام بالذكاء الاصطناعي، مدعومة ببيانات آمنة لكل مستخدم عبر Supabase.",
    contribution:
      "صممت وبنيت التطبيق بالكامل: الواجهة الأمامية بـ React وTypeScript، والواجهة الخلفية عبر Supabase (المصادقة، وRLS، وقاعدة البيانات، وEdge Functions)، بالإضافة إلى دمج ميزات الذكاء الاصطناعي في التطبيق.",
    features: [
      "خطط تمارين وتغذية مخصصة تُولَّد بالذكاء الاصطناعي",
      "التعرف على صور الطعام بالذكاء الاصطناعي",
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
      "طبقة بيانات type-safe باستخدام مكونات الخادم",
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
      "تنفيذ مطابق تمامًا لتصاميم Figma",
      "تخطيط بتصميم عربي أولاً (RTL) وطباعة عربية مدروسة",
      "بنية Monorepo مع حزم واجهة مستخدم مشتركة",
    ],
  },
  "habit-tracker": {
    tagline: "كوّن عادات تدوم فعلًا",
    description:
      "تطبيق نظيف لتتبع العادات يتضمن تسجيلًا يوميًا، وحساب سلاسل الإنجاز، وبيانات دائمة — مبني بمكونات قابلة لإعادة الاستخدام وtype-safe.",
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
    tagline: "متجر إلكتروني بـ React وRedux Toolkit، مبني بالكامل بـ TypeScript",
    description:
      "متجر إلكتروني قابل للتوسع فيه عرض للمنتجات وتصفية، سلة مشتريات، وعملية دفع كاملة — بنيته بـ TypeScript مع تركيز على الأداء.",
    problem:
      "تحتاج المتاجر الإلكترونية للتعامل مع كتالوج كبير وحالة معقدة (فلاتر، سلة، دفع) من غير ما تصير بطيئة أو صعبة الصيانة.",
    solution:
      "تطبيق React وTypeScript يعتمد على Redux Toolkit وAsync Thunks لإدارة الحالة وبيانات الـ API، وReact Router للتنقل، وVite مع التحميل الكسول وتقسيم الكود لتحميل أسرع.",
    contribution:
      "بنيت بنية الواجهة الأمامية بالكامل: إدارة الحالة، التوجيه، الربط مع الـ API، وعملية الدفع — مع تركيز على الأداء وجودة الكود.",
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
};

const arProjects = projects.map((p) => ({ ...p, ...projectTextAr[p.slug] }));

const experienceTextAr: { role: string; company?: string; period: string; bullets: string[] }[] = [
  {
    role: "متدرب تطوير واجهات أمامية",
    company: "JISR HR",
    period: "أبريل 2026 — يوليو 2026",
    bullets: [
      "تدربت في JISR HR على تطوير الواجهات باستخدام React، مع التركيز على البنية القائمة على المكونات وأفضل الممارسات الحديثة.",
      "بنيت واجهات مستخدم متجاوبة ومكونات قابلة لإعادة الاستخدام من خلال تمارين عملية ومنظمة.",
      "تعاونت مع الزملاء والمدربين لتطبيق أفضل ممارسات تطوير الواجهات الأمامية، واستفدت من ملاحظاتهم على جودة الكود.",
    ],
  },
  {
    role: "مشاريع شخصية",
    period: "2025 — حتى الآن",
    bullets: [
      "صممت وبنيت تطبيقات ويب متكاملة باستخدام React وNext.js وSupabase، مع التركيز على بناء واجهات عملية وقابلة للتوسع.",
      "طبّقت المصادقة، وأمان مستوى الصفوف (RLS)، وتكاملات الذكاء الاصطناعي، وواجهات ثنائية اللغة بتخطيط RTL.",
    ],
  },
];

const arExperience = experience.map((item, i) => ({ ...item, ...experienceTextAr[i] }));

const arEducation = education.map((item) => ({
  ...item,
  degree: "بكالوريوس في هندسة علوم الحاسب",
  location: "بنغالورو، الهند",
}));

// The "tools" group is deliberately absent here: it must stay in English (title,
// description and skill names) in both locales, so it's left untranslated below.
const skillGroupTextAr: Record<string, { title: string; description: string }> = {
  frontend: { title: "الواجهة الأمامية", description: "واجهات سريعة وسهلة الوصول وممتعة الاستخدام." },
  backend: { title: "الواجهة الخلفية", description: "واجهات برمجية ومصادقة وبيانات تنمو مع المنتج." },
};

const arSkillGroups = skillGroups.map((g) => ({ ...g, ...skillGroupTextAr[g.id] }));

const serviceTextAr = [
  { title: "تطوير المواقع الإلكترونية", text: "أبني مواقع تسويقية وصفحات هبوط سريعة التحميل ومتوافقة مع SEO." },
  { title: "تطبيقات الويب", text: "أبني واجهات لوحات تحكم ومنتجات SaaS وأدوات داخلية، وأربطها بمصادقة وبيانات حقيقية." },
  { title: "تطوير الواجهات الأمامية", text: "أبني واجهات React / Next.js مطابقة للتصميم تمامًا، من Figma أو من الصفر." },
  { title: "تطوير الواجهة الخلفية", text: "أربط تطبيقاتي بواجهات REST API وقواعد بيانات وأنظمة مصادقة باستخدام Supabase وPostgreSQL." },
  { title: "دمج واجهات البرمجة", text: "أربط أنظمة الدفع والخدمات الخارجية بنظامك الحالي." },
  { title: "مواقع متجاوبة", text: "أطوّر مواقع تشتغل بشكل طبيعي على الجوال والتابلت والكمبيوتر، بدعم كامل لـ RTL." },
  { title: "تحسين أداء المواقع", text: "أراجع وأحسّن الأداء ومؤشرات Core Web Vitals وإمكانية الوصول وSEO." },
  { title: "دمج الذكاء الاصطناعي", text: "أضيف ميزات بسيطة مدعومة بالذكاء الاصطناعي — مثل المحادثة أو توليد المحتوى — إلى واجهتك عند الحاجة." },
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
      "مطوّر واجهات أمامية متخصص في React وNext.js وTypeScript، بنيت تطبيقات متكاملة من التصميم إلى الإطلاق باستخدام Tailwind CSS وSupabase.",
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
      { label: "الخبرة", href: "#experience" },
      { label: "المهارات", href: "#skills" },
      { label: "المشاريع", href: "#projects" },
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
    descriptionSuffix: "، مع اهتمام بالتفاصيل والأداء وتجربة المستخدم.",
    ctaWork: "استعرض أعمالي",
    ctaContact: "تواصل معي",
    ctaDownloadCV: "تحميل السيرة الذاتية",
    stats: [
      { value: "بكالوريوس", label: "هندسة علوم الحاسب" },
      { value: "React / Next.js", label: "التقنية الأساسية" },
      { value: "واجهات أمامية", label: "التخصص" },
    ],
    scrollLabel: "تمرير",
    scrollAriaLabel: "الانتقال إلى نبذة عني",
  },
  about: {
    eyebrow: "نبذة عني",
    title: "مطوّر واجهات أمامية",
    intro:
      "أنا Front-End Developer، أبني واجهات ويب نظيفة وسريعة وسهلة الاستخدام باستخدام React وNext.js وTypeScript، وأربطها بواجهات برمجية وقواعد بيانات عند الحاجة.",
    paragraphs: [
      "خلفيتي في الهندسة أعطتني أساسًا قويًا في هياكل البيانات والخوارزميات وتصميم الأنظمة، وأستخدم هذا الأساس في بناء واجهات سريعة وسهلة الصيانة.",
      "تخصصي الأساسي هو الواجهة الأمامية، وأربط مشاريعي بـ Supabase وPostgreSQL عند الحاجة لتطبيق متكامل. كذلك أستمتع بدمج أدوات الذكاء الاصطناعي في منتجاتي.",
    ],
    educationBadge: "بكالوريوس هندسة علوم الحاسب",
    languagesBadge: "العربية · الإنجليزية",
    highlights: [
      { title: "خلفية هندسة علوم الحاسب", text: "بكالوريوس هندسة علوم الحاسب — أساس قوي في الخوارزميات وقواعد البيانات والأنظمة.", icon: "GraduationCap" },
      { title: "واجهات دقيقة ومتجاوبة", text: "أبني واجهات متجاوبة وسهلة الوصول ومطابقة للتصميم، باستخدام React وNext.js وTypeScript وTailwind.", icon: "LayoutTemplate" },
      { title: "التكامل مع الباك إند", text: "أربط واجهاتي بـ REST APIs وأنظمة مصادقة وقواعد بيانات علائقية باستخدام Supabase وPostgreSQL.", icon: "Database" },
      { title: "حل المشكلات", text: "أحوّل المتطلبات الغامضة إلى أجزاء واضحة وقابلة للاختبار، وأطلقها تدريجيًا.", icon: "Puzzle" },
      { title: "تطبيقات ويب حديثة", text: "أبني تطبيقات جاهزة للإنتاج، مهتم بالأداء وتحسين محركات البحث من أول يوم.", icon: "Rocket" },
      { title: "أدوات الذكاء الاصطناعي", text: "أستخدم أدوات الذكاء الاصطناعي كجزء من عملي لتطوير حلول وميزات مفيدة.", icon: "Sparkles" },
    ],
  },
  skills: {
    eyebrow: "المهارات",
    title: "المهارات والتقنيات",
    description: "تقنيات وأدوات أستخدمها في بناء وتطوير مشاريعي.",
    groups: arSkillGroups,
  },
  projects: {
    eyebrow: "أعمال مختارة",
    title: "أبرز المشاريع اللي اشتغلت عليها.",
    description: "كل مشروع منها يحل مشكلة حقيقية، وفيه تفاصيل عن القرارات التقنية والميزات اللي بنيتها.",
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
    title: "خبرتي العملية.",
    items: arExperience,
  },
  education: {
    eyebrow: "التعليم",
    title: "الأساس الأكاديمي.",
    items: arEducation,
  },
  services: {
    eyebrow: "الخدمات",
    title: "الخدمات اللي أقدر أقدمها.",
    description: "من موقع تسويقي بسيط إلى واجهة تطبيق ويب متكاملة، بالتقنيات المناسبة لكل مشروع.",
    items: arServices,
    process: arProcess,
  },
  contact: {
    eyebrow: "تواصل معي",
    heading1: "عندك مشروع أو فكرة؟",
    headingHighlight: "خلنا نتكلم.",
    subtext:
      "أنا مهتم بالوظائف الدائمة والمشاريع الحرة والتعاون. أخبرني عن مشروعك وراح أرد عليك خلال يوم.",
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
      statusError: "صار خطأ ما — راسلني مباشرة عبر البريد الإلكتروني.",
      mailSubjectPrefix: "استفسار عن مشروع من",
    },
  },
  footer: {
    builtWith: "© 2026 Yousef Mubarak · جميع الحقوق محفوظة.",
    rightsReserved: "جميع الحقوق محفوظة.",
  },
};
