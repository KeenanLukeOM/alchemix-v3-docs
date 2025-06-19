// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Alchemix Docs",
  tagline: "Alchemix V3 Documentation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://keenanlukeom.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/alchemix-v3-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "keenanlukeom", // Usually your GitHub org/user name.
  projectName: "alchemix-v3-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    // — USER docs @ /user
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "user",
        path: "docs/user",
        routeBasePath: "user",
        sidebarPath: require.resolve("./sidebars/sidebarsUser.js"),
        editUrl:
          "https://github.com/keenanlukeom/alchemix-v3-docs/edit/main/docs/user/",
      },
    ],

    // — DEV docs @ /dev
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "dev",
        path: "docs/dev", // your devdocs folder
        routeBasePath: "dev", // served at /dev
        sidebarPath: require.resolve("./sidebars/sidebarsDev.js"),
        editUrl:
          "https://github.com/keenanlukeom/alchemix-v3-docs/edit/main/docs/devdocs/",
      },
    ],

    // — PROJECTS docs @ /projects
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "projects",
        path: "docs/projects",
        routeBasePath: "projects",
        sidebarPath: require.resolve("./sidebars/sidebarsProjects.js"),
        editUrl:
          "https://github.com/keenanlukeom/alchemix-v3-docs/edit/main/docs/contracts/",
      },
    ],

    // Redirect  root `/` → `/user`
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/",
            to: "/user",
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card.png",
      navbar: {
        title: "Alchemix",
        logo: {
          alt: "Alchemix Logo",
          src: "img/Alchemix-ALCX-Logo.webp",
          href: "/alchemix-v3-docs/user/",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar", // from sidebarsUser.js
            docsPluginId: "user", // must match plugin id
            position: "left",
            label: "For Users",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar", // from sidebarsDev.js
            docsPluginId: "dev",
            position: "left",
            label: "For Devs",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar", // from sidebarsProjects.js
            docsPluginId: "projects",
            position: "left",
            label: "For Projects",
          },
          {
            href: "https://github.com/KeenanLukeOM/alchemix-v3-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      // TODO
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/alchemix-v3-docs/user",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "X",
                href: "https://x.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
