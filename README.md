# SalimGPT

**Research-Based English Documentary Media**

SalimGPT is a research-based English documentary media platform that publishes documentaries and research-based content on history, science, mysteries, technology, society, public health, lifestyle, education, and important global issues.

SalimGPT's documentary scripts, editorial direction, and project management are led by **Mohammad Salim**.

---

# 1. Project Overview

The SalimGPT website is a lightweight static website designed for deployment on GitHub Pages.

One of the most important features of this project is the **Automatic Documentary Publishing System**.

You do not need to manually create a new HTML page whenever you publish a new documentary.

You only need to:
 
1. Create a Markdown file.
2. Upload 4 documentary images.
3. Push the files to the GitHub `main` branch.

GitHub Actions will then automatically:

- detect the documentary
- validate metadata
- validate images
- generate the article HTML
- update the homepage
- generate the sitemap
- generate robots.txt
- generate `_site/`
- deploy the website to GitHub Pages

---

# 2. Main Features

The main features of the SalimGPT website include:

- Research-based English documentary platform
- Static website architecture
- GitHub Pages hosting
- GitHub Actions deployment
- Markdown-based documentary publishing
- Automatic documentary discovery
- Automatic documentary page generation
- Automatic homepage documentary listing
- Newest documentary first
- YouTube integration
- Real YouTube thumbnail support
- YouTube thumbnail fallback system
- Local documentary image fallback
- JPG image support
- JPEG image support
- PNG image support
- WebP image support
- Automatic article image distribution
- Manual image placement support
- Automatic reading-time calculation
- Automatic Table of Contents generation
- Related documentary generation
- Automatic sitemap.xml generation
- Automatic robots.txt generation
- JSON-LD structured data
- Article structured data
- VideoObject structured data
- Breadcrumb structured data
- Responsive mobile design
- Responsive desktop design
- Search support
- Side navigation menu
- SEO-friendly documentary URLs
- No fake YouTube URL generation
- No fake thumbnail generation

---

# 3. Project Structure

Current project structure:

```text
salimgpt-en/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── assets/
│   ├── brand/
│   ├── documentaries/
│   │   └── fentanyl/
│   │       ├── fentanyl-1.jpg
│   │       ├── fentanyl-2.jpg
│   │       ├── fentanyl-3.jpg
│   │       └── fentanyl-4.jpg
│   │
│   ├── social/
│   └── ...
│
├── content/
│   └── fentanyl.md
│
├── css/
│   └── ...
│
├── data/
│   ├── site.js
│   ├── social.js
│   └── ...
│
├── js/
│   ├── documentary-list.js
│   ├── documentary.js
│   ├── home.js
│   ├── menu.js
│   ├── search.js
│   └── ...
│
├── scripts/
│   └── build.js
│
├── templates/
│   └── documentary.html
│
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

---

4. Important Project Files

4.1 "scripts/build.js"

This is SalimGPT's main Automatic Documentary Publishing Engine.

Its responsibilities include:

- scanning the "content/" folder
- detecting Markdown documentaries
- reading Front Matter
- validating documentary metadata
- validating publication dates
- validating slugs
- validating image folders
- validating the 4 documentary images
- supporting JPG/JPEG/PNG/WebP
- extracting YouTube IDs
- generating canonical YouTube URLs
- converting Markdown to HTML
- generating a TOC from headings
- calculating reading time
- inserting images into articles
- determining related documentaries
- generating documentary pages
- generating homepage documentary data
- sorting documentaries newest-first
- generating sitemap.xml
- generating robots.txt
- generating ".nojekyll"
- creating the final "_site/" deployment folder

---

4.2 "templates/documentary.html"

This is the HTML template used for all automatically generated documentary pages.

You do not need to manually create a separate HTML file when publishing a new documentary.

The build system uses this template to generate the final page.

Example:

content/fentanyl.md
        ↓
templates/documentary.html
        ↓
scripts/build.js
        ↓
_site/documentaries/fentanyl/index.html

---

4.3 "content/"

All documentary source Markdown files are stored here.

Current example:

content/fentanyl.md

Future examples:

content/artificial-intelligence.md
content/bermuda-triangle.md
content/black-hole.md

---

4.4 "assets/documentaries/"

Images for each documentary are stored here.

The folder name must match the documentary slug.

Example:

assets/documentaries/fentanyl/

Inside the folder:

fentanyl-1.jpg
fentanyl-2.jpg
fentanyl-3.jpg
fentanyl-4.jpg

---

4.5 "js/documentary-list.js"

This is the automatic documentary listing system for the homepage.

Its responsibilities include:

- reading generated documentary data
- filtering published documentaries
- sorting documentaries newest-first
- creating homepage documentary cards
- displaying documentary counts
- generating article links
- generating YouTube buttons
- managing thumbnail fallbacks

Thumbnail fallback:

YouTube maxresdefault.jpg
        ↓
YouTube hqdefault.jpg
        ↓
Local .jpg
        ↓
Local .jpeg
        ↓
Local .png
        ↓
Local .webp

---

4.6 ".github/workflows/deploy.yml"

This is the GitHub Actions deployment workflow.

When changes are pushed to the main branch:

Push to main
      ↓
npm ci
      ↓
npm run build
      ↓
_site/ generated
      ↓
GitHub Pages artifact upload
      ↓
GitHub Pages deployment

---

5. Automatic Documentary Workflow

Complete workflow:

New Markdown File
        +
4 Documentary Images
        ↓
Push to GitHub
        ↓
GitHub Actions Starts
        ↓
npm ci
        ↓
npm run build
        ↓
scripts/build.js
        ↓
Documentary Discovery
        ↓
Metadata Validation
        ↓
Date Validation
        ↓
Slug Validation
        ↓
Image Validation
        ↓
YouTube ID Extraction
        ↓
Markdown Rendering
        ↓
TOC Generation
        ↓
Reading Time Calculation
        ↓
Image Distribution
        ↓
Related Documentary Generation
        ↓
Documentary Page Generation
        ↓
Homepage Data Generation
        ↓
Newest-First Sorting
        ↓
Sitemap Generation
        ↓
Robots.txt Generation
        ↓
_site/
        ↓
GitHub Pages

---

6. How to Publish a New Documentary

Suppose the slug for a new documentary is:

new-documentary

First create:

content/new-documentary.md

Then create:

assets/documentaries/new-documentary/

Place 4 images inside it:

new-documentary-1.jpg
new-documentary-2.jpg
new-documentary-3.jpg
new-documentary-4.jpg

Then push the files to the GitHub "main" branch.

The build system will automatically handle the rest.

---

7. Supported Documentary Image Formats

Supported documentary image formats:

.jpg
.jpeg
.png
.webp

Recommended:

.jpg

Avoid keeping multiple formats for the same image number.

Good:

documentary-1.jpg

Avoid:

documentary-1.jpg
documentary-1.png
documentary-1.webp

---

8. Image Naming Rule

Image names must follow the documentary slug.

If the slug is:

fentanyl

Then use:

fentanyl-1.jpg
fentanyl-2.jpg
fentanyl-3.jpg
fentanyl-4.jpg

If the slug is:

artificial-intelligence

Then use:

artificial-intelligence-1.jpg
artificial-intelligence-2.jpg
artificial-intelligence-3.jpg
artificial-intelligence-4.jpg

---

9. Documentary Markdown Format

Each documentary Markdown file must begin with YAML Front Matter.

Example:

---
title: "Documentary Title"
slug: "documentary-title"
date: "2026-09-05"
youtube: "https://youtu.be/VIDEO_ID"
description: "A short description of the documentary."
topics:
  - Topic One
  - Topic Two
  - Topic Three
status: "published"
---

The full documentary content should appear below the Front Matter.

Example:

The documentary introduction goes here.

The main research-based documentary content follows.

---

10. Current Fentanyl Documentary

Current source file:

content/fentanyl.md

Current images:

assets/documentaries/fentanyl/
├── fentanyl-1.jpg
├── fentanyl-2.jpg
├── fentanyl-3.jpg
└── fentanyl-4.jpg

Current slug:

fentanyl

Generated route:

/documentaries/fentanyl/

Expected generated file:

_site/documentaries/fentanyl/index.html

---

11. Fentanyl Front Matter Example

---
title: "Fentanyl — The Most Mysterious Painkiller in Human History"
slug: "fentanyl"
date: "2026-09-02"
youtube: "https://youtu.be/ls0oDPKPkIY?si=xhok5xEzy5vdI28z"
description: "SalimGPT's complete documentary on the history of fentanyl, its medical use, the opioid crisis, international trafficking networks, and the Mexico-centered illicit production system."
topics:
  - Fentanyl
  - Opioid
  - Synthetic Opioid
  - Drug Trafficking
  - Public Health
status: "published"
---

---

12. Required Front Matter Fields

Important fields for a published documentary:

title
slug
date
description
status

Optional but recommended:

youtube
topics
imageCaptions
updated
videoDate

---

13. Documentary Status

Published documentary:

status: "published"

Draft documentary:

status: "draft"

Draft documentaries will not appear in the public homepage listing.

---

14. Date Format

The date must use:

YYYY-MM-DD

Valid:

date: "2026-09-05"

Invalid:

05-09-2026
09/05/2026
September 5 2026

---

15. Slug Rules

Slugs may contain:

- lowercase English letters
- numbers
- hyphens

Valid:

fentanyl
opioid-crisis
history-of-ai
documentary-2026

Invalid:

Fentanyl
fentanyl_article
fentanyl article
FENTANYL

Recommended:

lowercase-hyphen-slug

---

16. Automatic Image Distribution

If no image markers are included in the Markdown, the build system automatically distributes the 4 images across different parts of the article.

Approximate distribution:

Image 1 → approximately 20%
Image 2 → approximately 40%
Image 3 → approximately 60%
Image 4 → approximately 80%

---

17. Manual Image Placement

To place an image at a specific location, use the following markers inside the Markdown:

<!-- image:1 -->

<!-- image:2 -->

<!-- image:3 -->

<!-- image:4 -->

Example:

First section of the article.

<!-- image:1 -->

Next section of the article.

<!-- image:2 -->

The same image marker should not be used more than once.

---

18. Image Captions

Optional custom image captions can be added in Front Matter.

Example:

imageCaptions:
  - "Fentanyl research laboratory environment."
  - "Synthetic opioid supply-chain investigation."
  - "Opioid crisis response environment."
  - "Clinical fentanyl administration."

If no caption is provided, the build system uses the documentary title to generate a default caption.

---

19. Table of Contents

A Table of Contents is automatically generated from Markdown:

## Heading

and:

### Subheading

Example:

## History of Fentanyl

Content...

## Opioid Crisis

Content...

### Prescription Opioids

Content...

## Mexico Supply Chain

Content...

The build will not fail if the documentary has no headings.

In that case, the TOC will display a message indicating that no chapters are available.

---

20. Reading Time

The documentary article text is automatically analyzed to calculate estimated reading time.

Default reading speed:

220 words per minute

---

21. YouTube Integration

Front Matter:

youtube: "https://youtu.be/VIDEO_ID"

Supported common formats:

https://youtu.be/VIDEO_ID
https://www.youtube.com/watch?v=VIDEO_ID
https://youtube.com/shorts/VIDEO_ID
https://youtube.com/embed/VIDEO_ID
https://youtube.com/live/VIDEO_ID

A direct 11-character YouTube video ID is also supported.

Fake YouTube IDs are never generated.

---

22. YouTube Thumbnail System

Documentary homepage thumbnail priority:

Generated explicit thumbnail
        ↓
YouTube maxresdefault.jpg
        ↓
YouTube hqdefault.jpg
        ↓
Uploaded local image

Local image fallback:

.jpg
.jpeg
.png
.webp

---

23. Hero Media

If a YouTube video is available, the documentary page hero section uses the real YouTube thumbnail.

If the maximum-resolution thumbnail fails:

maxresdefault.jpg
        ↓
hqdefault.jpg
        ↓
local documentary image

If no YouTube video is available, an uploaded documentary image is used.

---

24. Homepage Automation

The build system automatically generates:

_site/data/documentaries.js

and:

_site/data/documentaries.json

The homepage uses the generated data to render documentary cards.

When a new documentary is added, "index.html" does not need to be edited manually.

---

25. Newest-First Sorting

Documentaries are displayed in newest-first order according to publication date.

Example:

2026-09-05
2026-09-02
2026-08-20
2026-08-10

The newest documentary appears first.

---

26. Related Documentaries

Related documentary selection is primarily based on topic similarity.

Example:

topics:
  - Fentanyl
  - Opioid
  - Public Health

If another documentary contains the same topics, it receives higher priority in the related section.

---

27. SEO System

The build system automatically generates:

sitemap.xml
robots.txt

Documentary pages use structured data.

Possible structured-data types:

Article
VideoObject
BreadcrumbList
Organization
Person
ImageObject

---

28. Sitemap

During the build process, HTML routes inside "_site/" are scanned to generate the sitemap.

Generated file:

_site/sitemap.xml

If a documentary page includes a publication or update date, a "<lastmod>" value is added.

---

29. Robots.txt

Generated file:

_site/robots.txt

Basic structure:

User-agent: *
Allow: /

Sitemap: https://YOUR-SITE/sitemap.xml

---

30. Generated Output

After the build, the final deployment-ready website is stored in:

_site/

Example:

_site/
├── assets/
├── css/
├── data/
├── js/
├── documentaries/
├── index.html
├── sitemap.xml
├── robots.txt
└── .nojekyll

---

31. Important Rule About "_site/"

Do not manually edit "_site/".

It is generated output.

Edit source files instead:

content/
assets/
css/
js/
templates/
scripts/

Then run the build again.

---

32. Local Build

If Node.js and npm are installed, first run:

npm ci

Then run:

npm run build

After a successful build:

_site/

will be generated.

---

33. GitHub Actions Deployment

Workflow file:

.github/workflows/deploy.yml

Deployment starts when changes are pushed to the main branch.

Flow:

Push to main
        ↓
GitHub Actions
        ↓
npm ci
        ↓
npm run build
        ↓
Generate _site/
        ↓
Upload Pages Artifact
        ↓
Deploy GitHub Pages

---

34. GitHub Pages Configuration

In the repository:

Settings
→ Pages
→ Build and deployment
→ Source
→ GitHub Actions

Select:

GitHub Actions

---

35. Repository Root Structure

Project files must be placed directly in the repository root.

Correct:

repository/
├── .github/
├── assets/
├── content/
├── css/
├── data/
├── js/
├── scripts/
├── templates/
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

Incorrect:

repository/
└── salimgpt-en/
    ├── index.html
    ├── package.json
    └── ...

Do not use an unnecessary extra parent folder inside the repository.

---

36. Future Documentary Example

Suppose the new documentary is:

Artificial Intelligence

Slug:

artificial-intelligence

Markdown:

content/artificial-intelligence.md

Images:

assets/documentaries/artificial-intelligence/
├── artificial-intelligence-1.jpg
├── artificial-intelligence-2.jpg
├── artificial-intelligence-3.jpg
└── artificial-intelligence-4.jpg

After pushing, the build system will automatically generate:

/documentaries/artificial-intelligence/

---

37. Example Future Markdown

---
title: "Artificial Intelligence — The Technology of the Future"
slug: "artificial-intelligence"
date: "2026-10-01"
youtube: "https://youtu.be/VIDEO_ID"
description: "A SalimGPT documentary exploring the history, technology, and future of Artificial Intelligence."
topics:
  - Artificial Intelligence
  - Technology
  - Machine Learning
status: "published"
---

Write the documentary content below the Front Matter.

---

38. Build Validation Rules

For published documentaries, the build system checks:

- whether the documentary body exists
- whether a title exists
- whether the slug is valid
- whether the status is valid
- whether the date is valid
- whether a description exists
- whether the YouTube URL is valid
- whether the image directory exists
- whether all required 4 images exist
- whether the image files are valid
- whether a duplicate slug exists

If the source is invalid, the deployment build will fail.

This is an intentional safety system.

---

39. Supported Publication Status

Only the following statuses are allowed:

published
draft

Any other status may cause a build error.

---

40. Duplicate Slug

The same slug cannot be used for two documentaries.

Wrong:

content/fentanyl.md
slug: fentanyl

and:

content/fentanyl-history.md
slug: fentanyl

This will cause the build to fail.

---

41. Search

The homepage documentary card search system uses the title and description as searchable metadata.

When a new documentary is published, no manual search entry is required.

---

42. Responsive Design

The website is responsive on both mobile and desktop devices.

Key interface components:

- Header
- Brand logo
- Menu button
- Side drawer
- Documentary cards
- Search
- Footer
- Documentary article
- Table of Contents
- Related documentary section

---

43. Header and Navigation

The site header is used for SalimGPT branding and navigation.

The sponsor advertisement system is currently not active in the project.

If sponsor integration is required in the future, it can be implemented separately.

---

44. Sponsor Status

Current status:

Sponsor banner: Disabled / Not integrated

No sponsor-related assets or code are required for the current deployment.

---

45. Branding

Brand:

SalimGPT

Primary visual identity:

Red
Black
Blue accent

Website documentation and documentary pages follow SalimGPT's research-based media identity.

---

46. Founder / Director

Founder, director, and editorial lead of SalimGPT:

Mohammad Salim

---

47. Editorial Scope

SalimGPT content categories may include:

- History
- Science
- Mystery
- Technology
- Public Health
- Society
- Education
- Lifestyle
- Global Affairs
- Research-based explanatory documentary

---

48. Research Method

SalimGPT documentaries may use different types of sources, including:

- Public reports
- Research papers
- Government publications
- International organizations
- News reports
- Public databases
- Historical archives
- Reference books
- Online research tools
- AI-assisted research tools

SalimGPT's editorial goal is to verify information as thoroughly as reasonably possible before publication.

---

49. AI Policy

AI tools may be used for:

- Research assistance
- Information organization
- Language improvement
- Technical assistance
- Website development
- Content structure
- Production workflow

Final editorial responsibility remains with SalimGPT.

---

50. Original Scripts

Final editorial ownership and responsibility for SalimGPT documentary scripts:

Mohammad Salim

---

51. Copyright

SalimGPT's original:

- Scripts
- Articles
- Website content
- Branding
- Original visual assets
- Documentary production material

should not be commercially reused without permission.

Third-party material remains subject to the rights of its respective copyright owner.

---

52. External Sources

When external sources are used in documentary research, information from those sources may be presented contextually.

SalimGPT does not claim ownership of any external website or third-party organization.

---

53. Security

Never commit sensitive information to the repository.

Examples:

API keys
Passwords
Private tokens
Secret credentials
Private account information
Recovery codes

---

54. GitHub Secrets

If secrets are required in a future workflow, use:

GitHub Repository
→ Settings
→ Secrets and variables
→ Actions

Do not hardcode secrets inside source code.

---

55. Development Rules

When updating the project:

1. Do not manually edit "_site/".
2. Edit documentary Markdown source files.
3. Place documentary images in the correct folder.
4. Keep slug naming consistent.
5. Use the "YYYY-MM-DD" date format.
6. Do not use duplicate slugs.
7. Do not use broken YouTube URLs.
8. Keep all 4 required documentary images.
9. Do not modify build automation unnecessarily.
10. If GitHub Actions fails, inspect the logs.

---

56. Recommended Documentary Workflow

For each new documentary:

Step 1
Choose slug

Step 2
Create content/<slug>.md

Step 3
Create assets/documentaries/<slug>/

Step 4
Add 4 images

Step 5
Check Front Matter

Step 6
Push to main

Step 7
Check GitHub Actions

Step 8
Open deployed documentary page

---

57. Example Final Documentary Structure

content/
├── fentanyl.md
├── artificial-intelligence.md
└── black-hole.md

assets/documentaries/
├── fentanyl/
│   ├── fentanyl-1.jpg
│   ├── fentanyl-2.jpg
│   ├── fentanyl-3.jpg
│   └── fentanyl-4.jpg
│
├── artificial-intelligence/
│   ├── artificial-intelligence-1.jpg
│   ├── artificial-intelligence-2.jpg
│   ├── artificial-intelligence-3.jpg
│   └── artificial-intelligence-4.jpg
│
└── black-hole/
    ├── black-hole-1.jpg
    ├── black-hole-2.jpg
    ├── black-hole-3.jpg
    └── black-hole-4.jpg

---

58. Generated Routes Example

Source:

content/fentanyl.md

Generated:

/documentaries/fentanyl/

Source:

content/artificial-intelligence.md

Generated:

/documentaries/artificial-intelligence/

---

59. Generated Data Files

The build automatically generates:

_site/data/documentaries.js

and:

_site/data/documentaries.json

These files do not need to be manually maintained.

---

60. Files That Should Not Be Manually Edited

Normally, do not manually edit:

_site/
_site/data/documentaries.js
_site/data/documentaries.json
_site/sitemap.xml
_site/robots.txt

---

61. Source Files That Can Be Edited

The following files and directories can be edited during project development:

content/*.md
assets/
css/
js/
templates/
scripts/build.js
index.html
data/

However, the automation impact should be reviewed before modifying the build system.

---

62. Current Image System

Current Fentanyl documentary images:

fentanyl-1.jpg
fentanyl-2.jpg
fentanyl-3.jpg
fentanyl-4.jpg

The build system currently supports:

.jpg
.jpeg
.png
.webp

The homepage fallback system can also handle the same supported formats.

---

63. Current Deployment Readiness

The current project architecture is designed for GitHub Pages + GitHub Actions deployment.

Before deployment, make sure:

scripts/build.js

contains the updated image-format version.

And:

js/documentary-list.js

contains the updated local-thumbnail fallback version.

---

64. Pre-Deployment Checklist

Before pushing to GitHub:

[ ] README.md exists in the repository root

[ ] .github/workflows/deploy.yml exists

[ ] package.json exists

[ ] package-lock.json exists

[ ] scripts/build.js exists

[ ] templates/documentary.html exists

[ ] content/fentanyl.md exists

[ ] assets/documentaries/fentanyl/fentanyl-1.jpg exists

[ ] assets/documentaries/fentanyl/fentanyl-2.jpg exists

[ ] assets/documentaries/fentanyl/fentanyl-3.jpg exists

[ ] assets/documentaries/fentanyl/fentanyl-4.jpg exists

[ ] js/documentary-list.js is updated

[ ] repository root structure is correct

[ ] GitHub Pages Source = GitHub Actions

---

65. After Uploading to GitHub

After uploading or pushing:

GitHub Repository
→ Actions

Open the workflow run.

A successful workflow will display a green check mark.

Expected build sequence:

Checkout
↓
Setup Node
↓
npm ci
↓
npm run build
↓
Upload Pages Artifact
↓
Deploy GitHub Pages

---

66. If GitHub Actions Fails

If GitHub Actions displays a red error:

1. Open the failed workflow.
2. Open the failed step.
3. Read the error message.
4. Identify the exact file, path, or line.
5. Fix the source and push again.

Build validation is intentionally strict so broken documentaries are not deployed to the production website.

---

67. GitHub Pages

GitHub Pages configuration:

Settings
→ Pages
→ Build and deployment
→ Source
→ GitHub Actions

---

68. ".nojekyll"

The build system automatically generates:

.nojekyll

This helps disable GitHub Pages Jekyll processing.

---

69. SITE_URL

If a production site URL is required, the environment variable:

SITE_URL

can be used.

Example:

SITE_URL=https://example.com

Or:

SITE_URL=https://username.github.io/salimgpt-en

If repository information is available in the GitHub Actions environment, the build system can resolve the GitHub Project Pages URL.

---

70. GitHub Project Pages

If the repository is:

username/salimgpt-en

then the expected Pages URL is:

https://username.github.io/salimgpt-en/

---

71. GitHub User Pages

If the repository is:

username/username.github.io

then the expected URL is:

https://username.github.io/

---

72. Documentary URL Design

Documentary URL:

/documentaries/<slug>/

Example:

/documentaries/fentanyl/

This is a clean and SEO-friendly route structure.

For a GitHub Project Pages deployment under the "salimgpt-en" repository, the public URL will resolve under the repository base path:

/salimgpt-en/documentaries/<slug>/

Example:

/salimgpt-en/documentaries/fentanyl/

---

73. Content Language

Primary language:

English / en-US

Technical terminology may be used where appropriate to the documentary context.

---

74. Documentary Writing Style

SalimGPT documentary content aims to be:

- Research-based
- Narrative
- Informative
- Contextual
- Accessible
- Documentary-style
- Evidence-oriented
- English-audience friendly

---

75. Project Philosophy

SalimGPT aims to present complex topics in an accessible and informative way through documentary storytelling.

Technology and automation are used to simplify website maintenance and eliminate repeated manual HTML coding when publishing new documentaries.

---

76. Automation Philosophy

The core automation principle:

Content First
Code Once
Publish Repeatedly

No new HTML coding is required for every new documentary.

Only:

Markdown
+
Images
+
Git Push

---

77. Current Publishing Model

Current documentary publishing model:

Markdown Source
        ↓
Build Engine
        ↓
HTML Page
        ↓
Homepage Listing
        ↓
SEO Data
        ↓
GitHub Pages

---

78. Current Fentanyl Workflow

content/fentanyl.md
        +
assets/documentaries/fentanyl/
        ↓
scripts/build.js
        ↓
Metadata Validation
        ↓
Image Validation
        ↓
YouTube Integration
        ↓
Article Generation
        ↓
Homepage Data
        ↓
Sitemap
        ↓
_site/documentaries/fentanyl/index.html
        ↓
GitHub Pages

---

79. Maintenance

During routine website maintenance, the main directories that will usually be updated are:

content/
assets/documentaries/

For design updates:

css/
js/
templates/

Avoid changing the build engine unless necessary.

---

80. README Location

This "README.md" file must remain in the project root.

Correct:

repository/
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── .github/
├── assets/
├── content/
├── css/
├── data/
├── js/
├── scripts/
└── templates/

Do not place README inside the ".github/" folder.

---

81. Repository Documentation

When the GitHub repository is opened, the README is automatically rendered below the repository files.

The README helps explain the project's:

- purpose
- structure
- workflow
- deployment process
- documentary publishing process
- maintenance rules

---

82. Production Notes

In production:

- do not use fake data
- do not use fake YouTube IDs
- do not keep broken image paths
- do not commit sensitive credentials
- do not use duplicate slugs
- do not use invalid dates

---

83. Future Improvements

Possible areas for future development:

- Documentary categories
- Tag archive
- Advanced search
- Author archive
- Source/reference section
- Documentary pagination
- RSS feed
- Social sharing improvements
- Analytics
- Sponsor system
- Newsletter integration
- Advanced SEO
- Structured source citations

These can be added as future enhancements outside the current core automation.

---

84. Sponsor System

Sponsor advertisement integration is currently not active.

If a sponsor system is added in the future, advertisements should be clearly labeled.

No sponsor-related code is required for the current deployment.

---

85. Contact and Social

Contact and social network information is managed through the website's existing pages and data files.

It is not recommended to place sensitive private contact information in the README.

---

86. License / Usage

SalimGPT's original website design, scripts, documentary text, branding, and original production content may constitute SalimGPT intellectual property.

Third-party open-source dependencies are used according to their respective licenses.

---

87. Dependencies

Project Node.js build dependencies are managed through "package.json" and "package-lock.json".

Install dependencies:

npm ci

Build:

npm run build

---

88. Do Not Delete

The following files and folders are important for automatic deployment:

.github/workflows/deploy.yml
scripts/build.js
templates/documentary.html
content/
package.json
package-lock.json

Do not delete them unless necessary.

---

89. Basic Troubleshooting

Documentary Does Not Appear on the Homepage

Check:

status: "published"

Check:

slug

Check:

date

Check the generated data.

---

Documentary Build Fails

Check:

- Markdown body
- Front Matter
- date
- slug
- images
- YouTube URL
- duplicate slug

---

Image Does Not Appear

Check:

assets/documentaries/<slug>/

and the naming:

<slug>-1.jpg
<slug>-2.jpg
<slug>-3.jpg
<slug>-4.jpg

---

YouTube Thumbnail Does Not Appear

The system will fall back through:

maxresdefault
↓
hqdefault
↓
local documentary image

---

90. Final Deployment Checklist

Before the final GitHub upload:

1. Project root is correct
2. README.md is in the repository root
3. deploy.yml exists
4. package files exist
5. build.js is updated
6. documentary-list.js is updated
7. fentanyl.md exists
8. 4 JPG images exist
9. GitHub Pages = GitHub Actions
10. Push to the main branch
11. Check Actions status

---

SalimGPT

Research-Based English Documentary Media

Founder / Director / Editorial Lead:

Mohammad Salim

Website architecture:

Static Site + Markdown Automation + Node.js Build + GitHub Actions + GitHub Pages

---

© SalimGPT. All rights reserved.


```text
4. salimgpt-en/index.html
