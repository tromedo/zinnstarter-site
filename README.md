# ZinnStarter Website

Static website for the ZinnStarter student startup accelerator at San Jose State University's Silicon Valley Center for Entrepreneurship (SVCE).

---

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `program.html` | Program details |
| `mentors.html` | Mentor profiles |
| `cohort.html` | Current cohort + past teams + alumni |
| `gallery.html` | Event photos + video testimonials |

---

## Deploying to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **Add new site → Deploy manually**
3. Drag and drop this entire folder onto the Netlify dashboard
4. Your site is live — Netlify gives you a URL like `random-name.netlify.app`
5. To set a custom domain: go to **Site settings → Domain management**

To redeploy after making changes, drag and drop the folder again, or connect a GitHub repo for automatic deploys.

---

## How to Update Content

You do not need any coding knowledge to update the text or images. All content is in the HTML files. Open them in any text editor (TextEdit on Mac, Notepad on Windows, or VS Code if you have it).

### Finding placeholders

All placeholder content looks like this: `[ALL CAPS IN BRACKETS]`

For example:
- `[MENTOR NAME]` → replace with the mentor's actual name
- `[TEAM DESCRIPTION]` → replace with the team's description
- `[YEAR]` → replace with the cohort year, e.g. `2025`

Search for `[` in any file to find all placeholders on that page.

---

## How to Update Each Page

### Home (index.html)
- **Ray Zinn photo**: Replace the `<div class="placeholder-img">` block with `<img src="images/ray-zinn.jpg" alt="Ray Zinn">`. See `images/placeholder-note.txt` for sizing guidelines.
- **Ray Zinn quote**: Find `[RAY ZINN QUOTE — ...]` and replace with a real quote.
- **Ray Zinn bio**: Find `[RAY ZINN BIO — ...]` and replace with 2–3 sentences.
- **Alumni descriptions**: Find each company name (Parkstash, Edvisor, etc.) and update the `[... DESCRIPTION]` placeholder below it.

### Program (program.html)
- **Program Director**: Find `[DR. BASU — Full name and title here]` and replace with Dr. Basu's full name and title.
- No other content changes needed unless program details change. All factual content is already populated from the brief.

### Mentors (mentors.html)
- Each mentor has a card with `[MENTOR NAME]`, `[TITLE]`, `[COMPANY]`, and `[MENTOR BIO]`
- Replace each placeholder with the mentor's real info
- To add a photo: save it to `images/mentor-name.jpg`, then replace the `<div class="placeholder-img ...">` block with `<img src="images/mentor-name.jpg" alt="Mentor Name" class="mentor-card__photo">`
- To add a new mentor: copy one of the complete `<div class="mentor-card">` blocks and paste it before the `<!-- Add more mentor cards here -->` comment

### Cohort (cohort.html)
- **Current cohort year**: Find `[YEAR] Cohort` near the top and change it to e.g. `2025 Cohort`
- **Team cards**: Each team has `[TEAM NAME]`, `[ONE-LINE TAGLINE]`, `[TEAM DESCRIPTION]`, `[INDUSTRY]`, and `[STAGE]`
- **Team logos**: Replace `<div class="placeholder-img team-card__logo">` with `<img src="images/team-name-logo.png" alt="Team Name" class="team-card__logo">`
- **Past cohorts**: Find the accordion section. Change `[YEAR] Cohort — e.g. 2024` to the actual year. Add team items inside the `.past-team-list` div
- **Alumni**: The four featured alumni cards already have names. Fill in the `[... DESCRIPTION]` placeholders and the `[TRANSCRYPTS FOUNDER NAME]`

### Gallery (gallery.html)
- **Adding a real photo**:
  1. Save the photo to the `images/` folder
  2. Find the gallery item you want to replace (e.g. `images/gallery-1.jpg`)
  3. Replace `<div class="placeholder-img ...">` with `<img src="images/gallery-1.jpg" alt="Caption" class="gallery-item__img">`
  4. Update the `data-caption` attribute on the `<div class="gallery-item">` to match your photo description
- **Adding a YouTube video**:
  1. Go to the YouTube video and copy the video ID from the URL (the part after `?v=`)
  2. Find a `<div class="video-card">` block
  3. Replace the placeholder `<div>` inside `.video-card__embed` with:
     ```html
     <iframe
       src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
       title="Video description"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       allowfullscreen>
     </iframe>
     ```
  4. Update the `.video-card__caption` text below it

---

## File Structure

```
ZinnStarter/
├── index.html          Home page
├── program.html        Program details
├── mentors.html        Mentor profiles
├── cohort.html         Cohort teams + alumni
├── gallery.html        Photos + video testimonials
├── css/
│   └── styles.css      All styles (colors, layout, fonts)
├── js/
│   ├── nav.js          Mobile hamburger menu
│   ├── accordion.js    Past cohorts accordion (cohort page)
│   └── gallery.js      Photo lightbox (gallery page)
├── images/
│   └── placeholder-note.txt   Image naming guide
└── README.md           This file
```

---

## Adding the AI Chatbot (Future)

The chatbot feature has been intentionally left out of this version. When you are ready to add it:

1. The button and panel UI will go in `js/chatbot.js` and `css/styles.css` (a reserved section is already in the stylesheet)
2. A `netlify/functions/chat.js` serverless proxy function will handle the Anthropic API call securely
3. The API key (`ANTHROPIC_API_KEY`) will be set in Netlify's environment variables — never in client-side code
4. A `netlify.toml` configuration file will tell Netlify where to find the functions folder

---

## Changing Colors or Fonts

All colors and fonts are set using CSS variables at the top of `css/styles.css`. Open the file and find the `:root { }` block near the top:

```css
:root {
  --blue:       #0055A2;   /* SJSU blue */
  --gold:       #E5A823;   /* SJSU gold */
  --blue-dark:  #002D62;   /* Dark navy (headers, hero) */
  ...
}
```

Change any color value there and it updates everywhere on the site.

To change the font, find the Google Fonts `<link>` in any HTML file's `<head>` and swap out `Inter` for another font, then update `font-family` in `styles.css`.

---

## Questions

Contact Sriram Sridhar at sriram.sridhar@sjsu.edu (include "ZinnStarter" in the subject line).
