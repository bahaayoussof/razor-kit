// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RazorKit",
  tagline: "Reusable UI Components for ASP.NET Core MVC",
  favicon: "img/favicon.svg",

  future: {
    v4: true,
  },

  url: "https://razor-kit.example.com",
  baseUrl: "/",
  clientModules: ["./src/clientModules/suppressResizeObserver.js"],

  onBrokenLinks: "ignore",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "docs",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "RazorKit",
        logo: {
          alt: "RazorKit Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            to: "/components",
            label: "Gallery",
            position: "left",
          },
          {
            href: "https://github.com/bahaayoussof/razor-kit",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `© ${new Date().getFullYear()} RazorKit. Crafted by <a style={{textDecoration: none}} href="https://www.linkedin.com/in/bahaayoussof/" target="_blank" rel="noopener noreferrer">Bahaa Youssof</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          "csharp",
          "aspnet",
          "bash",
          "json",
          "markup-templating",
        ],
      },
    }),
};

export default config;
