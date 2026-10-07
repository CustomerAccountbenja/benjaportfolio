# Benjamin Khoko: Student Portfolio

Static three-page portfolio for the **Customer Account Takeover Detection** machine learning project.
Built with HTML5, Tailwind CSS (CDN) and vanilla JavaScript. No build step, no backend.

**Design:** white background, dark navy text, one bright-green accent. Large type, rounded cards, fixed top navigation, subtle scroll and hover animations (disabled automatically for visitors who prefer reduced motion).

## Structure

```text
student-portfolio/
├── index.html        About
├── project.html      Project case study
├── results.html      Results & resources
├── images/
│   ├── profile.jpg            (add your photo)
│   ├── confusion_matrix.png   (add after training)
│   └── feature_importance.png (add after training)
├── js/script.js      Interactions + your RESULTS numbers
└── README.md
```

## Enter your results

Open `js/script.js` and fill in the `RESULTS` block at the top with your **test-set** percentages
(for example `accuracy: 93.8`). The big stat cards, the model-comparison bars and the table on
`results.html` all update from that one block. Set `bestModel` to the name of your top model.
Anything left as `null` shows as an em dash.

## Replace the placeholders

Placeholders are highlighted in yellow on the pages. Search the project for `YOUR_` and `[`.

| Placeholder | Where |
|---|---|
| `YOUR_EMAIL`, `YOUR_GITHUB_URL`, `YOUR_LINKEDIN_URL`, `YOUR_LOCATION` | `index.html` contact section |
| `[University Name]`, `[School Name]`, `[Year]` | `index.html` education timeline |
| `YOUR_GITHUB_REPOSITORY_URL` | all three pages (navbar GitHub button, source code and resource links) |
| `YOUR_DATASET_URL` | `project.html`, `results.html` |
| `YOUR_DOCUMENTATION_URL`, `YOUR_REPORT_URL` | `results.html` |
| `[Dataset name]`, `[Dataset source]`, `[Number of records]`, `[Number of features]`, `[Target variable]` | `project.html` dataset section |
| `--%` probability | `results.html` (once the Flask model is connected) |

## Deploy on GitHub Pages

1. Create a new GitHub repository and upload the contents of `student-portfolio/` so that `index.html` is in the repository root.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose the `main` branch and the `/ (root)` folder, then click **Save**.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Test locally

Open `index.html` in a browser. An internet connection is needed for the Tailwind CDN and Google Fonts.
