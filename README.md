# בב"א גיזום — אתר מקצועי ב-Astro

אתר תדמית ושיווק לחברת בב"א גיזום — שירותי גיזום וכריתת עצים בכל הארץ. בנוי ב-Astro 5 + Tailwind CSS, מותאם RTL מלא, מהיר במיוחד וידידותי ל-SEO.

## מה כלול

- עמוד בית מלא עם 9 סקציות (Hero, יתרונות, שירותים, תהליך, גלריה, ביקורות, אזורים, FAQ, CTA)
- 4 עמודי שירות מלאים (גיזום, כריתה, גיזום דקלים, פינוי גזם)
- 12 עמודי עיר דינמיים (תל אביב, רמת גן, גבעתיים, הרצליה, רעננה, כפ"ס, נתניה, פ"ת, ראשל"צ, חולון, ירושלים, חיפה)
- עמודי מחירון, אודות, צרו קשר
- בלוג עם 3 מאמרים מקצועיים (Markdown, ניתן להוסיף עוד בקלות)
- כפתור וואטסאפ צף בכל עמוד
- Schema.org מלא (LocalBusiness, FAQPage, Article)
- Sitemap אוטומטי + robots.txt
- Open Graph לשיתוף ברשתות חברתיות
- נגישות בסיסית (skip link, ARIA labels, ניווט מקלדת)

## דרישות מקדימות

- Node.js גרסה 18 ומעלה ([הורדה](https://nodejs.org/))
- חשבון GitHub חינמי
- חשבון Vercel חינמי (להירשם דרך GitHub)
- חשבון Formspree חינמי (לטופס יצירת קשר)

## הרצה מקומית

```bash
cd baba-gizum-site
npm install
npm run dev
```

ההתקנה הראשונה לוקחת 1-3 דקות. אחר כך האתר יהיה זמין ב-`http://localhost:4321/`.

## בנייה לייצור

```bash
npm run build
npm run preview
```

הקבצים הסטטיים ייווצרו בתיקיית `dist/`.

## פריסה ל-Vercel (מומלץ)

1. צרו ריפו חדש ב-GitHub (פרטי או ציבורי, לא משנה).
2. דחפו לשם את כל התיקייה `baba-gizum-site`:
   ```bash
   cd baba-gizum-site
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/baba-gizum-site.git
   git push -u origin main
   ```
3. גשו ל-[vercel.com](https://vercel.com) והירשמו עם GitHub.
4. לחצו "Add New Project" → בחרו את הריפו → "Deploy". אין צורך לשנות הגדרות, Vercel מזהה Astro אוטומטית.
5. תוך 1-2 דקות תקבלו URL זמני (כמו `baba-gizum-site.vercel.app`).

## חיבור הדומיין babagizum.com

לאחר שהאתר עלה ב-Vercel:

1. ב-Vercel — Project Settings → Domains → Add → הזינו `babagizum.com` ו-`www.babagizum.com`.
2. Vercel ייתן לכם 2 רשומות DNS שצריך להוסיף בספק הדומיין:
   - רשומת A לדומיין הראשי
   - רשומת CNAME ל-www
3. בלוח הבקרה של ספק הדומיין שלכם (GoDaddy / Namecheap / וכו'), עדכנו את ה-DNS לפי ההוראות.
4. ההתעדכנות לוקחת 5 דקות עד שעות. כשזה גמור, האתר יהיה זמין ב-https://www.babagizum.com.

**חשוב:** ברגע שהדומיין עובד, **בטלו את ההפניה הקיימת מ-Google Sites** כדי שגוגל יאנדקס את האתר החדש בלבד.

## הגדרת טופס יצירת קשר (Formspree)

ברירת המחדל היא placeholder. כדי לשגר פניות אמיתיות:

1. הירשמו ב-[formspree.io](https://formspree.io) (חינמי, 50 פניות/חודש).
2. צרו טופס חדש, תקבלו מזהה (לדוגמה `xrbqnplz`).
3. ערכו את `src/components/ContactForm.astro` והחליפו `yourFormID` במזהה שקיבלתם.
4. דחפו ל-GitHub → Vercel יבנה מחדש אוטומטית.

## הוספת תמונות אמיתיות

החליפו את ה-placeholders בתמונות אמיתיות:

1. שמרו את התמונות ב-`public/images/gallery/` (פורמטים מומלצים: WebP, או JPG דחוס).
2. ערכו את `src/pages/index.astro` ובסקציית הגלריה החליפו את ה-`<div>` של placeholder ב-`<img>`:
   ```astro
   <img src="/images/gallery/work-1.jpg" alt="גיזום עץ אורן בהרצליה — לפני ואחרי" loading="lazy" class="aspect-square object-cover rounded-xl shadow-soft" />
   ```
3. רצוי שמות קבצים תיאוריים בעברית/אנגלית עם המילים "גיזום" / "כריתה" / שם העיר — זה גם עוזר לקידום בגוגל תמונות.

## הוספת תמונת Open Graph

צרו תמונה 1200x630 פיקסלים עם הלוגו והשם, שמרו ב-`public/images/og-image.jpg`. זו התמונה שתופיע כשמשתפים את הקישור בוואטסאפ/פייסבוק.

## הגדרות קריטיות לאחר הפריסה

### 1. Google Search Console
זה הצעד החשוב ביותר. אחרי שהאתר באוויר עם הדומיין הקבוע:

1. גשו ל-[search.google.com/search-console](https://search.google.com/search-console).
2. הוסיפו את הדומיין `babagizum.com`.
3. אמתו בעלות (DNS verification מומלץ).
4. הגישו את ה-sitemap: `https://www.babagizum.com/sitemap-index.xml`.
5. בקשו "Request Indexing" לעמוד הבית ולעמודי השירותים העיקריים.

### 2. Google Business Profile
חיוני לתחרות בנישת שירות מקומי:

1. צרו פרופיל ב-[business.google.com](https://business.google.com) אם עוד לא קיים.
2. אמתו את העסק (אימות בכתובת/טלפון).
3. הוסיפו את כל השירותים, אזורי פעילות, שעות, תמונות.
4. אספו ביקורות באופן שיטתי — זה הגורם הכי משמעותי לדירוג מקומי.

### 3. Google Analytics 4 (אופציונלי)
לאחר ההפעלה, מומלץ להוסיף GA4 לעקוב אחרי תנועה. הוסיפו את הקוד ב-`src/layouts/BaseLayout.astro` בתוך ה-`<head>`.

## הוספת עמוד עיר חדש

ערכו את `src/data/site.ts`:

```ts
export const CITIES = [
  // ...existing
  { slug: 'beer-sheva', name: 'באר שבע', region: 'דרום' },
];
```

זהו, האתר ייצור אוטומטית את העמוד `/areas/beer-sheva/`. שכפלו לערים נוספות לפי הצורך.

## הוספת פוסט בלוג חדש

צרו קובץ Markdown חדש ב-`src/content/blog/your-slug.md`:

```markdown
---
title: "הכותרת של הפוסט"
description: "תיאור קצר ל-SEO ולשיתוף"
pubDate: 2026-05-01
tags: ["מדריכים", "טיפים"]
---

תוכן הפוסט בעברית, ב-Markdown רגיל. ניתן להשתמש ב-## לכותרות משנה, **טקסט מודגש**, רשימות, וקישורים.
```

הפוסט יופיע אוטומטית בעמוד הבלוג.

## עדכון פרטי קשר

כל פרטי החברה נמצאים בקובץ אחד: `src/data/site.ts`.
שנו שם את הטלפון, האימייל, או כל פרט אחר — והוא יתעדכן בכל האתר.

## ביצועים ו-SEO

האתר אמור לקבל ציוני Lighthouse 95+ בכל הקטגוריות:
- מבוסס על Astro Static Generation — HTML טהור ללא JS מיותר
- Tailwind CSS עם purge אוטומטי
- גופן Heebo נטען עם preconnect
- כל התמונות צריכות `loading="lazy"` (להוסיף ידנית כשמחליפים את ה-placeholders)

## עץ הקבצים

```
baba-gizum-site/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/        ← תמונות סטטיות (להוסיף)
├── src/
│   ├── components/    ← רכיבים גלובליים
│   ├── content/blog/  ← פוסטי בלוג (Markdown)
│   ├── data/site.ts   ← פרטי החברה ונתונים מרכזיים
│   ├── layouts/       ← תבניות עמוד
│   ├── pages/         ← עמודי האתר
│   │   ├── areas/[slug].astro  ← דינמי, מ-CITIES
│   │   ├── blog/
│   │   ├── services/
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── pricing.astro
│   │   └── index.astro
│   └── styles/global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## שאלות נפוצות לתחזוקה

**איך אני מעדכן את הטלפון בכל האתר?**
ערוך את `src/data/site.ts`, שורה `phone:` ו-`phoneRaw:` ו-`whatsapp:`.

**איך אני מוסיף שירות חדש (לדוגמה כרסום שורשים)?**
ערוך את `src/data/site.ts` והוסף לרשימת `SERVICES`. אז צור עמוד חדש ב-`src/pages/services/your-service.astro` בהשראת אחד הקיימים.

**איך אני משנה צבעי האתר?**
ערוך את `tailwind.config.mjs`, חלק `colors`. הצבעים בכל האתר משתמשים בקבועים `forest-*`, `sand-*`, `accent-*`.

**האתר לא נטען בעברית מימין לשמאל**
זה כבר מוגדר. אם משהו לא נראה נכון, ודא שהדפדפן מציג טקסט עברי, ובדוק שיש את `dir="rtl"` ב-`<html>` של `BaseLayout.astro`.

## רישיון ושימוש

הקוד נכתב במיוחד לבב"א גיזום. ניתן לערוך, לשכפל ולהשתמש בו כראות עיניכם.

---

נבנה ב-Astro על ידי Claude. שאלות על תחזוקה — תמיד אפשר לחזור ולשאול.
