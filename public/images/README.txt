תיקיית התמונות - הוראות
================================

כאן צריך להוסיף את כל התמונות של האתר.

מבנה מומלץ:
  /images/
    og-image.jpg          (1200x630, תמונת שיתוף ברשתות)
    hero/
      hero-1.jpg          (תמונה ראשית של עמוד הבית, אם תרצו להוסיף)
    gallery/
      work-1.jpg          (תמונת עבודה)
      work-2.jpg
      ... וכו'
    services/
      gizum.jpg
      kritat.jpg
      deklim.jpg
      pinui.jpg
    about/
      gozem-photo.jpg     (תמונה אישית של הגוזם)
      certificate.jpg     (תמונת תעודה)

המלצות:
  - פורמט: JPG או WebP (WebP יותר טוב לביצועים)
  - דחיסה: 80-85% איכות
  - גודל: לא יותר מ-2000px ברוחב
  - שם הקובץ: באנגלית, מילים מופרדות במקפים
  - ALT לכל תמונה: טקסט תיאורי בעברית עם מילות מפתח רלוונטיות

לאחר הוספת תמונות, החליפו את ה-placeholders בקבצי ה-.astro:
  - src/pages/index.astro (סקציית גלריה ו-Hero)
  - src/pages/blog/index.astro (תמונות פוסטים)
