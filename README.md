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
│   ├── cc/                 Account-takeover charts and model comparison data
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

## Personal details

The contact and education sections are filled in:

- **Email:** benjaminkhoko@gmail.com
- **GitHub:** <https://github.com/benjakhoko/>
- **LinkedIn:** <https://www.linkedin.com/in/benjamin-khoko-856179406>
- **Location:** Malawi
- **Education:** Computer Science, DMI St John the Baptist University, 2023&ndash;2026

The account-takeover case study is filled in with the real dataset details:
Login Data Set for Risk-Based Authentication (Zenodo record 6782156), 50,141
sampled login attempts, 12 model features, target `Is Account Takeover`, and a
link to <https://zenodo.org/records/6782156>. The project report is listed as
available on request until a public link exists.

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
