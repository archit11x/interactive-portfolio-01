# Interactive Portfolio

A responsive, multi-page personal portfolio website built with **HTML, CSS, and vanilla JavaScript**. It presents a developer profile, skills, services, selected projects, and contact links in one place.

> **Note:** This repository contains a customizable portfolio template. Update the placeholder name, bio, email address, social links, and project details with your own information before publishing.

## Preview

The portfolio includes the following pages:

- **Home** — introduction, social links, about section, skills, services, featured projects, and contact details.
- **About** — additional profile information.
- **Services** — service offerings.
- **Projects** — project showcase.
- **Contact** — contact information and social profiles.

## Features

- Multi-page portfolio layout
- Responsive navigation menu
- Light/dark theme toggle
- Animated loading screen and particle background
- Skills grouped by front-end, back-end, and tools
- Project carousel powered by Swiper
- Social media and contact links
- Scroll-to-top and smooth-scroll interactions
- Font Awesome icons

## Built With

- **HTML5** — page structure
- **CSS3** — styling, layouts, and responsive design
- **JavaScript** — interactive behavior
- **Swiper 8** — project slider
- **Font Awesome 6** — icons

Swiper and Font Awesome are loaded through CDN links in the HTML files.

## Project Structure

```text
interactive-portfolio-01/
└── interactive portfolio/
    └── portfolio/
        ├── index.html
        ├── about.html
        ├── services.html
        ├── projects.html
        ├── contact.html
        ├── css/
        │   ├── style.css
        │   └── pages.css
        ├── js/
        │   └── main.js
        └── assets/
```

## Getting Started

This is a static website, so no package installation or build process is required.

### Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/archit11x/interactive-portfolio-01.git
   ```

2. Open the project folder:

   ```bash
   cd "interactive-portfolio-01/interactive portfolio/portfolio"
   ```

3. Open `index.html` in your browser.

   Alternatively, use the **Live Server** extension in Visual Studio Code and select **Open with Live Server** on `index.html`.

## Customize Your Portfolio

Before publishing, search the HTML files for placeholder values and replace them:

- `[ARCHIT MISHRA]` / `[Your Name]` — your display name
- `[your-username]` — your social media usernames
- `[your-number]` — your WhatsApp number, including country code
- `[your-email]` — your email username
- `[Your City, Country]` — your location
- `[25]` and sample hobbies — update or remove personal details

Also review the sample project cards and replace their titles, descriptions, technologies, source-code links, and demo links with your real projects. Remove any services or skills that do not apply to you.

## Deployment

You can host this static website with **GitHub Pages**:

1. Make sure the website files are committed to your repository.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch containing your site and choose the folder where the website's `index.html` is located.
5. Save and wait for GitHub Pages to publish the site.

Because the website files are currently inside `interactive portfolio/portfolio/`, configure Pages to use a deployment setup that serves that folder, or move the site files to the repository root (or a supported `/docs` folder) before selecting the publishing source.

## Contributing

Suggestions and improvements are welcome. Feel free to fork the repository and submit a pull request.

## License

No license is currently specified. Add a `LICENSE` file if you want to define how others may use, modify, and distribute this project.

---

Made with ❤️ using HTML, CSS, and JavaScript.
