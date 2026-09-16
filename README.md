# Yousef Basaad — Portfolio

Portfolio احترافي مبني بـ **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Motion (Framer Motion)**.
Dark mode افتراضي مع Light mode، Responsive بالكامل، SEO جاهز (metadata, OpenGraph image, JSON-LD, sitemap, robots).

---

## 1) التشغيل محليًا

```bash
# المتطلبات: Node.js 18.18+ (يفضّل 20+)
npm install
npm run dev
# افتح http://localhost:3000
```

أوامر أخرى:

```bash
npm run build   # بناء نسخة الإنتاج
npm run start   # تشغيل نسخة الإنتاج
npm run lint    # فحص الكود
```

---

## 2) تعديل البيانات (كل المحتوى في مجلد واحد)

| الملف | ماذا يحتوي |
|---|---|
| `src/data/site.ts` | الاسم، المسمى الوظيفي، الإيميل، روابط GitHub / LinkedIn، مسار الـ CV، روابط القائمة، Formspree endpoint |
| `src/data/projects.ts` | **المشاريع** — أضف/احذف/رتّب عناصر المصفوفة فقط |
| `src/data/content.ts` | About، Skills، Experience، Education، Services، خطوات العمل |

كل ما يبدأ بـ `[BRACKETS]` هو placeholder ينتظر بياناتك (مثل `[PROJECT NAME]`، `[LIVE DEMO URL]`).
العناصر التي تبدأ بقوس مربع تُعرض تلقائيًا بشكل باهت/متقطع حتى تستبدلها.

### إضافة مشروع

```ts
// src/data/projects.ts
{
  slug: "my-app",
  title: "My App",
  tagline: "سطر واحد يلخص المشروع",
  description: "وصف مختصر (جملة أو جملتان).",
  problem: "المشكلة التي يحلها.",
  features: ["ميزة 1", "ميزة 2", "ميزة 3"],
  tech: ["Next.js", "TypeScript", "Supabase"],
  demo: "https://...",        // اتركه "" لإخفاء الزر
  github: "https://github.com/...",
  image: "/projects/my-app.png", // ضع الصورة في public/projects (1600×1000 مفضّل)
  color: "#8b5cf6",          // لون التمييز (يُستخدم للغلاف المولّد والتوهج)
  featured: true,            // true = بطاقة كبيرة أعلى القسم
  status: "live",            // "live" | "in-progress" | "concept"
}
```

إذا تركت `image: ""` يُعرض غلاف مولّد تلقائيًا بلون المشروع — لا حاجة لصورة لتبدو البطاقة جيدة.

### الـ CV
ضع ملفك في `public/Yousef-Basaad-CV.pdf` (أو غيّر `links.cv` في `site.ts`). الملف الحالي placeholder.

### نموذج التواصل
- بدون إعداد: يفتح برنامج البريد لدى الزائر برسالة جاهزة (mailto).
- للإرسال الفعلي: أنشئ نموذجًا مجانيًا في [Formspree](https://formspree.io) وضع الرابط في `site.formEndpoint`.

### الألوان والخطوط
`src/app/globals.css` — متغيرات الألوان في `:root` (Light) و `.dark` (Dark). غيّر `--accent` لتغيير لون التمييز في كل الموقع.

---

## 3) بنية المشروع

```
src/
├─ app/
│  ├─ layout.tsx          # Metadata, fonts, theme provider, JSON-LD
│  ├─ page.tsx            # ترتيب الأقسام
│  ├─ globals.css         # Design tokens + utilities
│  ├─ opengraph-image.tsx # صورة المشاركة (تُولّد تلقائيًا)
│  ├─ sitemap.ts / robots.ts
├─ data/                  # ← كل المحتوى هنا
├─ components/
│  ├─ layout/             # Navbar, Footer, ThemeToggle
│  ├─ sections/           # Hero, About, Skills, Projects, Experience, Services, Contact
│  └─ ui/                 # Button, Reveal, SectionHeading, SpotlightCard, Icon…
└─ lib/utils.ts
```

---

## 4) النشر

الأسهل: [Vercel](https://vercel.com) — اربط المستودع وسينشر تلقائيًا.
قبل النشر غيّر `site.url` في `src/data/site.ts` إلى نطاقك الحقيقي (يُستخدم في SEO والـ sitemap).
