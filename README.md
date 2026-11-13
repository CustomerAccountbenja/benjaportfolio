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
├── 404.html          Custom "page not found" page for GitHub Pages
├── robots.txt        Crawler rules + sitemap location
├── sitemap.xml       Indexable page list
├── images/
│   ├── favicon.svg         Site icon
│   ├── profile.jpg         Portrait shown on the home page
│   ├── cc/                 Account-takeover charts and model comparison data
│   ├── npl/                NLP application screenshots
│   └── secure file sharing/   Project screenshots and redacted public copies
├── js/script.js      Interactions + your RESULTS numbers
└── README.md
```

Every page also carries a canonical URL, Open Graph / Twitter preview tags and the SVG favicon.
`results.html` offers `images/cc/model_comparison.csv` as a direct download alongside the
GitHub, dataset, documentation and report resources.

## Enter your results

Open `js/script.js` and fill in the `RESULTS` block at the top with your **test-set** percentages
(for example `accuracy: 93.8`). The big stat cards, the model-comparison bars and the table on
`results.html` all update from that one block. Set `bestModel` to the name of your top model.
Anything left as `null` shows as an em dash. The raw figures live in
`images/cc/model_comparison.csv`, which the results page offers as a download.

Screenshots used on the secure file-sharing case study are included under
`images/secure file sharing/`. The page only links to the redacted copies
(`Login-redacted.png`, `Activity-logs-redacted.png`,
`Encryption-evidence-redacted.png`). The unredacted originals are listed in
`.gitignore`, but any copy that was committed before the rule was added is
still present in the repository history, so clear it from history before
publishing if those captures contain private details.

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

The canonical, Open Graph and Twitter URLs plus `robots.txt` and `sitemap.xml` currently assume
`https://customeraccountbenja.github.io/benjaportfolio/`. If the repository name or account
changes, update those URLs in all five pages, `robots.txt` and `sitemap.xml`.

## Test locally

Open `index.html` in a browser. An internet connection is needed for the Tailwind CDN and Google Fonts.
