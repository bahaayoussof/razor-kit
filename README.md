# RazorKit

Reusable UI Components for ASP.NET Core MVC.

This repository contains the RazorKit documentation website, built with [Docusaurus](https://docusaurus.io/). Each component is documented as a Razor partial view, with usage examples, a parameter reference, and its source code (Razor, CSS, and JavaScript).

> **Status:** early and actively developed. Some component names still use legacy `Momah` identifiers (for example `MomahSelect` and `MomahTable`); these will be migrated in a later stage.

---

## Features

- 📚 Documentation for 21 components, grouped into Form Controls, Data Display, Overlays & Feedback, and Navigation
- 📋 Parameter reference and copy-ready usage examples for each component
- 💻 Component source code (`.cshtml`, CSS, JavaScript) on each component page
- 🔍 Components Gallery (`/components`) with search and category filters
- 🌗 Light and dark mode

---

## Project Structure

```text
razor-kit/
├── docs/
│   ├── intro.mdx             # Documentation overview
│   └── components/           # One folder per component (index.mdx + screenshots)
├── src/
│   ├── clientModules/        # Docusaurus client modules
│   ├── components/Playground/ # Playground engine and component configs (work in progress)
│   ├── css/                  # Global site styles
│   ├── pages/                # Homepage and Components Gallery
│   └── theme/                # Swizzled Docusaurus theme components
├── static/                   # Static assets (logos, favicon, images)
├── blog/                     # Blog content (blog is disabled in the site config)
├── docusaurus.config.js
├── sidebars.js
└── package.json
```

---

## Getting Started

Requires Node.js 20 or later.

```bash
npm install
npm start          # start the local development server
npm run build      # build the static site into build/
npm run serve      # serve the production build locally
```

---

## Adding or Updating Component Documentation

1. Edit or create `docs/components/<ComponentName>/index.mdx`.
2. Add the page to the sidebar in `sidebars.js` (the sidebar is defined manually).
3. Add or update the entry in the Components Gallery list in `src/pages/components/index.js`.

---

## Tech Stack

- **Documented components:** ASP.NET Core MVC Razor partial views, CSS, JavaScript. Some components use third-party libraries such as Bootstrap, jQuery, CKEditor 5, or jTable; see each component page.
- **Documentation site:** Docusaurus 3, React, MDX, Prism.

---

## Roadmap

- [ ] Interactive Playground
- [ ] Migrate legacy `Momah` component identifiers to RazorKit naming
- [ ] Additional UI components
- [ ] Theme customization
- [ ] Accessibility improvements
- [ ] Versioned documentation

---

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a Pull Request.

---

## License

MIT License
