# Moirai. — Website Handover & Deployment Guide

> **"Destiny, Tailored."**

---

## 📁 SITE STRUCTURE

| Page | URL | What it is |
|------|-----|-----------|
| Homepage | `/` | Hero, collections, bespoke, school, values, journal |
| Shop | `/shop` | Full product shop with category filters + grid/list view |
| Collections | `/collections` | Products grouped by category |
| Bespoke | `/bespoke` | 4-step process, FAQ, gallery |
| Fashion School | `/fashion-school` | Curriculum, who it's for, enrollment |
| About | `/about` | Brand story, values, slogans |
| Journal | `/blog` | Blog listing |
| Blog Post | `/blog/[slug]` | Individual post |
| Contact | `/contact` | WhatsApp contact form + info |
| **Admin** | `/studio` | Sanity CMS — edit everything |

**Built-in features:**
- WhatsApp floating button (all pages)
- AI chat widget → redirects to WhatsApp after 2 replies
- Fully mobile responsive
- Purple gradient theme throughout
- Photo placeholders ready to swap via admin

---

## 🚀 DEPLOY IN 3 STEPS

### STEP 1 — Create Sanity Account (free)

1. Go to **https://sanity.io** → Sign up free
2. Click **"Create new project"** → Name it `Moirai`
3. Dataset name: `production`
4. After creation you'll see a **Project ID** (looks like: `abc123de`)
5. Copy it — you need it next

---

### STEP 2 — Add Environment Variables

1. In the project folder, find `.env.example`
2. Create a new file called `.env.local` (copy from `.env.example`)
3. Fill it in:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123de
NEXT_PUBLIC_SANITY_DATASET=production
```

---

### STEP 3 — Deploy to Vercel (free)

**Option A — Via GitHub (recommended):**

1. Create account at **https://github.com**
2. Create repo called `moirai` → upload the project folder
3. Go to **https://vercel.com** → Sign up free
4. Click **"Add New Project"** → Import your GitHub repo
5. Under **"Environment Variables"** add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = your ID from Sanity
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
6. Click **Deploy** ✅

Site will be live at `https://moirai.vercel.app` (or similar).

**Option B — Drag & drop (no GitHub):**

1. Run `npm run build` locally first
2. Go to vercel.com → drag the project folder onto the dashboard

---

### After Deploying — Authorize Sanity

1. Go to **https://sanity.io/manage** → your project → **API** tab → **CORS Origins**
2. Click **"Add CORS origin"**
3. Add: `https://your-vercel-url.vercel.app`
4. Tick "Allow credentials" → Save ✅

Now go to `https://your-site.vercel.app/studio` and you're in! 🎉

---

## ✍️ HOW TO EDIT (NO CODE NEEDED)

### Adding a Product

1. Go to `/studio` → click **Product** → **New Product**
2. Fill in: Name, Price, Image (upload), Collection (choose category), Description
3. Tick **Featured** to show on homepage
4. Set **WhatsApp Message** — what opens in WhatsApp when customer clicks enquire
5. Click **Publish** ✅

### Writing a Blog Post

1. Go to `/studio` → **Blog Post** → **New Blog Post**
2. Write title, body, upload cover image
3. Click **Publish** ✅

### Updating WhatsApp Number

1. Go to `/studio` → **Site Settings**
2. Update WhatsApp number (format: `237682710405`)
3. Click **Publish** ✅ — updates across the whole site

### Adding Photos to Shop

When photoshoot is done:
1. Go to `/studio` → open each **Product**
2. Click the **Image** field → upload photo
3. Publish ✅ — replaces placeholder instantly

---

## 🌍 ADDING A CUSTOM DOMAIN

Once domain is purchased (e.g. `moirai.com`):
1. Vercel → your project → **Settings** → **Domains**
2. Add domain → follow DNS instructions
3. Done in ~10 minutes ✅

Also add the new domain to Sanity CORS origins.

---

## 🆘 COMMON ISSUES

| Problem | Fix |
|---------|-----|
| Admin shows CORS error | Add your URL to Sanity → API → CORS Origins |
| Site not updating after edit | Vercel → Deployments → Redeploy |
| Images not loading | Check Sanity Project ID in Vercel environment variables |
| WhatsApp button wrong number | Update in `/studio` → Site Settings |
| Build fails | Make sure `.env.local` has the correct Project ID |

---

## 💰 COST SUMMARY

| Item | Cost |
|------|------|
| Hosting (Vercel) | **Free** |
| CMS (Sanity) | **Free** (up to 10 users) |
| Domain | ~10,000 XAF/year (optional) |
| **Total** | **0 XAF** until domain |

---

*Built for The House of Moirai. Ready to hand over.*
