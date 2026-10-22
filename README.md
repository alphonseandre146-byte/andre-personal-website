# Andre Alphonse — Personal Website Redesign

## Website description
This is the personal website of Andre Alphonse, a student interested in web development, computers, networking, and technology.

## Redesign summary
The redesign keeps the original dark background and blue glow theme while improving the page structure, navigation, spacing, project cards, skills area, and media section. It uses semantic HTML5 elements, an external CSS file, local SVG illustrations, an externally hosted image, a responsive skills table, and an embedded YouTube video.

## Technologies used
- HTML5
- CSS3
- CSS Grid, Flexbox, and media queries
- Git and GitHub
- YouTube embedded video
- Google Fonts are not required; the site uses system Arial fonts

## Directory structure

```text
andre-personal-website/
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── style.css
└── images/
    ├── web-design.svg
    └── smart-parking.svg
```

## How to view the website
Open `index.html` in a web browser. Alternatively, open the folder in Visual Studio Code and use Live Server. Internet access is needed for the externally hosted photograph and YouTube video. The local SVG images are stored in the repository.

## Responsive design approach
The desktop layout uses Flexbox and CSS Grid. At tablet widths, project cards and skill cards change to two columns. At mobile widths, the main sections and cards stack vertically, navigation wraps onto additional lines, and the video uses a responsive 16:9 container. The table can scroll horizontally on small screens to avoid forcing the whole page wider than the device.

## Image and media credits
- `images/web-design.svg` and `images/smart-parking.svg` are original SVG illustrations created for this redesign.
- The external computer-circuit image is hosted by Unsplash: `https://images.unsplash.com/photo-1518770660439-4636190af475`.
- The video is embedded from the YouTube link already used on the original website: `https://www.youtube.com/watch?v=M7LBvsdhCuI`.

## GitHub workflow
Create a separate branch named `feature/personal-website-redesign`. Make changes on that branch, commit them with descriptive messages, push the branch to GitHub, and open a Pull Request with `main` as the base branch. Review the changes and merge only after testing.

Suggested commands (run in your existing repository):

```bash
git switch main
git pull origin main
git switch -c feature/personal-website-redesign
git add index.html css images README.md .gitignore
git commit -m "feat: redesign personal website"
git push -u origin feature/personal-website-redesign
```

If you already created the branch, switch to it instead of trying to create it again. Add further commits if you make additional changes.

## Reflection (150–250 words)
Redesigning my personal website helped me understand how to improve both the structure and appearance of a website. I kept the dark background and blue glow theme from my original design, but organised the content into clearer sections for the home page, about me, portfolio, skills, learning media, and contact information. I used semantic HTML elements such as `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer` to make the structure more meaningful.

One challenge was making the page work on different screen sizes. I used Flexbox, CSS Grid, and media queries so the content can adjust for desktop, tablet, and mobile screens. I also organised the files into separate folders for the stylesheet and images. The website includes local SVG illustrations, an externally hosted image, a skills table, and a YouTube video.

The assignment also shows why version control is important. A separate branch allows me to make changes without working directly on `main`. Meaningful commit messages explain the work completed, while a Pull Request allows the changes to be reviewed before they are merged. I still need to test the website in different viewport sizes and confirm that all media loads correctly after publishing. Overall, this redesign gives me more practice with responsive web design, semantic HTML, file organisation, documentation, and the GitHub workflow.
