# Ghost Design Lab — Portfolio Website

**Founder:** Prosper Mutamba Joseph  
**Email:** ghostdesignlab46@gmail.com  
**LinkedIn:** https://www.linkedin.com/in/ghost-design-lab-394501415

---

## 📁 Project Structure

```
ghost-design-lab/
│
├── index.html                  ← Main page (all sections)
│
├── css/
│   ├── main.css                ← All styles (colors, layout, components)
│   └── animations.css          ← Scroll animations, transitions
│
├── js/
│   ├── translations.js         ← All EN/FR text content
│   └── main.js                 ← All interactivity (nav, filter, modal, form…)
│
├── assets/
│   ├── icons/
│   │   ├── favicon.svg         ← Browser tab icon
│   │   ├── ps.svg              ← Photoshop icon
│   │   ├── ai.svg              ← Illustrator icon
│   │   ├── pr.svg              ← Premiere Pro icon
│   │   ├── figma.svg           ← Figma icon
│   │   └── office.svg          ← MS Office icon
│   │
│   └── images/
│       ├── portfolio/
│       │   ├── project-01.jpg  ← Portfolio project 1
│       │   ├── project-02.jpg  ← Portfolio project 2
│       │   ├── project-03.jpg  ← …
│       │   ├── project-04.jpg
│       │   ├── project-05.jpg
│       │   └── project-06.jpg
│       │
│       └── profile/
│           ├── hero-photo.jpg  ← Your main photo (hero section)
│           ├── about-photo.jpg ← Your about section photo
│           ├── client-01.jpg   ← Testimonial client avatar 1
│           ├── client-02.jpg   ← Testimonial client avatar 2
│           ├── client-03.jpg   ← Testimonial client avatar 3
│           └── og-image.jpg    ← Social media share image (1200×630)
│
├── cv-prosper-mutamba.pdf      ← Your CV (downloadable)
└── README.md                   ← This guide
```

---

## 🖼️ Where to Place Your Images

### Profile Photos
Place in `/assets/images/profile/`:
- `hero-photo.jpg` — Your main portrait (ideal: 800×1000px, 4:5 ratio)
- `about-photo.jpg` — Your about page photo (ideal: 600×800px, 3:4 ratio)
- `client-01.jpg`, `client-02.jpg`, `client-03.jpg` — Testimonial avatars (100×100px, square)
- `og-image.jpg` — Social sharing image (1200×630px)

### Portfolio Projects
Place in `/assets/images/portfolio/`:
- `project-01.jpg` through `project-06.jpg` (ideal: 1200×900px, 4:3 ratio)
- For featured projects (wide): 1600×900px (16:9 ratio)

**Recommended formats:** JPG or WebP  
**Max file size:** 300KB per image (optimize at tinypng.com)

---

## ✏️ How to Edit Content

### Edit Text (English or French)
Open `js/translations.js` and find the key you want to change:
```js
en: {
  hero_sub: "Crafting identities that command attention.",
  // Change the text above to whatever you want
}
```

### Change Your Stats (50+ projects, 30+ clients…)
Open `index.html` and find the hero stats section:
```html
<span class="stat-number" data-count="50">0</span>  ← change 50
```

### Add a New Portfolio Project

**Step 1 — Add your image:**
```
assets/images/portfolio/project-07.jpg
```

**Step 2 — Add project data in `js/main.js`:**
```js
const PROJECTS = [
  // ... existing projects ...
  {
    index: 6,
    name:  { en: "My New Project", fr: "Mon Nouveau Projet" },
    cat:   { en: "Logo Design", fr: "Création de Logo" },
    img:   "assets/images/portfolio/project-07.jpg",
    desc:  {
      en: "Description in English.",
      fr: "Description en français."
    },
    tags: ["Logo", "Branding"],
  },
];
```

**Step 3 — Add the HTML card in `index.html` inside `.portfolio-grid`:**
```html
<article class="portfolio-item" data-category="logo" data-index="6">
  <button class="portfolio-card" aria-label="Open project: My New Project">
    <div class="portfolio-img-wrap">
      <img src="assets/images/portfolio/project-07.jpg" alt="My New Project" loading="lazy" />
      <div class="portfolio-overlay">
        <span class="overlay-cta" data-key="portfolio_view">View Project</span>
      </div>
    </div>
    <div class="portfolio-info">
      <span class="portfolio-cat">Logo Design</span>
      <h3 class="portfolio-name">My New Project</h3>
    </div>
  </button>
</article>
```

**Available categories for `data-category`:**
`logo`, `brand`, `ui`, `social`, `print`, `video`
(You can combine: `data-category="logo brand"`)

---

### Add/Edit Translations

To add a new translated string:

**1. Add the key to `js/translations.js`:**
```js
en: {
  // ... existing keys ...
  my_new_text: "Hello world",
},
fr: {
  // ... existing keys ...
  my_new_text: "Bonjour le monde",
},
```

**2. Use it in `index.html`:**
```html
<p data-key="my_new_text">Hello world</p>
```

The language switcher handles the rest automatically.

---

## 📬 Setting Up the Contact Form

The form currently uses Formspree (free). To activate it:

1. Go to https://formspree.io and create a free account
2. Create a new form — copy your endpoint URL (e.g. `https://formspree.io/f/xabcdef`)
3. Open `js/main.js` and replace:
```js
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```
with your actual endpoint.

**Alternative (Netlify Forms):** If hosting on Netlify, add `netlify` to the form tag:
```html
<form class="contact-form" id="contact-form" netlify>
```
No JS changes needed — Netlify handles submissions.

---

## 🚀 Publishing Your Site

### Option 1 — GitHub Pages (Free)

```bash
# Step 1: Initialize Git repository
git init
git add .
git commit -m "Initial commit — Ghost Design Lab portfolio"

# Step 2: Create a repo on GitHub.com named: yourusername.github.io
# OR any name (e.g. portfolio)

# Step 3: Push
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main

# Step 4: Go to repo Settings → Pages → Source: main branch
# Your site is live at: https://yourusername.github.io
```

---

### Option 2 — Netlify (Free, Recommended)

**Method A — Drag & Drop (Fastest):**
1. Go to https://netlify.com → Log in
2. Drag your entire project folder onto the deploy zone
3. Done! You get a URL like `https://random-name.netlify.app`

**Method B — Git (Auto-deploy on every push):**
1. Push your project to GitHub (see above)
2. On Netlify: New site → Import from GitHub → Select your repo
3. Build command: *(leave empty)*  
   Publish directory: `.` (or root)
4. Click Deploy

---

### Option 3 — Vercel (Free)

```bash
# Install Vercel CLI
npm install -g vercel

# In your project folder:
vercel

# Follow prompts — no build config needed for static sites
# Your site deploys instantly with a URL like: https://ghost-design-lab.vercel.app
```

Or via dashboard:
1. Go to https://vercel.com → New Project
2. Import from GitHub
3. Framework: **Other** (static)
4. Deploy!

---

## 🌐 Connecting a Custom Domain

### On Netlify:
1. Site Settings → Domain Management → Add Custom Domain
2. Enter your domain (e.g. `ghostdesignlab.com`)
3. Update your domain's DNS records (provided by Netlify)
4. SSL is automatic (free)

### On Vercel:
1. Project Settings → Domains → Add
2. Enter your domain
3. Copy the CNAME/A record values and add them to your domain registrar
4. SSL is automatic

### DNS Records (typical setup):
```
Type    Name    Value
A       @       76.76.21.21       (Vercel IP or your host's IP)
CNAME   www     cname.vercel-dns.com
```

---

## 🔍 SEO Best Practices

### Already Built In:
- ✅ Meta title & description
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card
- ✅ Semantic HTML5 (header, main, section, article, nav, footer)
- ✅ Alt text on all images
- ✅ Canonical URL
- ✅ robots meta tag
- ✅ Bilingual meta description (switches with language)
- ✅ Mobile-responsive (Google mobile-first indexing)
- ✅ Fast loading (no heavy frameworks)

### To Improve Further:

**1. Update your canonical URL in `index.html`:**
```html
<link rel="canonical" href="https://YOURDOMAINHERE.com/" />
<meta property="og:url" content="https://YOURDOMAINHERE.com/" />
```

**2. Create a `sitemap.xml` in your root:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ghostdesignlab.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

**3. Create a `robots.txt`:**
```
User-agent: *
Allow: /
Sitemap: https://ghostdesignlab.com/sitemap.xml
```

**4. Submit to Google Search Console:**
- Go to https://search.google.com/search-console
- Add your property
- Verify ownership (HTML file or DNS)
- Submit your sitemap

**5. Optimize images:**
- Compress at https://tinypng.com or https://squoosh.app
- Use descriptive filenames: `logo-design-volta-energy.jpg` not `image1.jpg`

**6. Speed optimization:**
- Convert images to WebP format
- Enable Gzip/Brotli on your hosting (Netlify/Vercel do this automatically)

---

## 🎨 Customizing Colors

Open `css/main.css` and find the `:root` block at the top:
```css
:root {
  --c-obsidian: #0A0A0A;   /* Background */
  --c-black:    #0B0B0B;   /* Main black */
  --c-white:    #FFFFFF;   /* Text */
  --c-muted:    #888888;   /* Secondary text */
  --c-gold:     #C9A84C;   /* Accent color — change this to your preferred accent */
}
```

---

## 📧 Contact

**Prosper Mutamba Joseph**  
ghostdesignlab46@gmail.com  
https://www.linkedin.com/in/ghost-design-lab-394501415
