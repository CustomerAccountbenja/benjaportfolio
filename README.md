# Benjamin Khoko: Student Portfolio

Static portfolio featuring the **Secure File Sharing System**, **Customer Account Takeover Detection**, and **NLP Smart Analyzer** projects.
Built with HTML5, Tailwind CSS (CDN) and vanilla JavaScript. No build step, no backend.

**Design:** white background, dark navy text, one bright-green accent. Large type, rounded cards, fixed top navigation, subtle scroll and hover animations (disabled automatically for visitors who prefer reduced motion).

## Structure

```text
student-portfolio/
├── index.html        About + selected projects
├── project.html      Account-takeover ML case study
├── results.html      Account-takeover ML results & resources
├── secure-file-sharing.html  Secure file-sharing case study & evidence
├── nlp-project.html            NLP Smart Analyzer case study
├── images/
│   ├── profile.jpg
│   ├── confusion_matrix.png
│   ├── feature_importance.png
│   ├── npl/                NLP application screenshots
│   └── secure file sharing/   Project screenshots and redacted public copies
├── js/script.js      Interactions + your RESULTS numbers
└── README.md
```

## Enter your results

Open `js/script.js` and fill in the `RESULTS` block at the top with your **test-set** percentages
(for example `accuracy: 93.8`). The big stat cards, the model-comparison bars and the table on
`results.html` all update from that one block. Set `bestModel` to the name of your top model.
Anything left as `null` shows as an em dash.

Screenshots used on the secure file-sharing case study are included under
`images/secure file sharing/`. Captures containing account details are redacted
for display, and their unredacted source files are excluded from Git.

## Replace the placeholders

Placeholders are highlighted in yellow on the pages. Search the project for `YOUR_` and `[`.

| Placeholder | Where |
|---|---|
| `YOUR_EMAIL`, `YOUR_GITHUB_URL`, `YOUR_LINKEDIN_URL`, `YOUR_LOCATION` | `index.html` contact section |
| `[University Name]`, `[School Name]`, `[Year]` | `index.html` education timeline |
| `YOUR_GITHUB_REPOSITORY_URL` | project pages (navbar GitHub button, source code and resource links) |
| `YOUR_DATASET_URL` | `project.html`, `results.html` |
| `YOUR_DOCUMENTATION_URL`, `YOUR_REPORT_URL` | `results.html` |
| `[Dataset name]`, `[Dataset source]`, `[Number of records]`, `[Number of features]`, `[Target variable]` | `project.html` dataset section |
| `--%` probability | `results.html` (once the Flask model is connected) |

The NLP Smart Analyzer case study links to its source repository:
[benjakhoko/A-working-NLP-application](https://github.com/benjakhoko/A-working-NLP-application).
The case study lists the features and technologies documented in that repository.

## Deploy on GitHub Pages

1. Create a new GitHub repository and upload the contents of `student-portfolio/` so that `index.html` is in the repository root.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose the `main` branch and the `/ (root)` folder, then click **Save**.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Test locally

Open `index.html` in a browser. An internet connection is needed for the Tailwind CDN and Google Fonts.
