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
  favicon: "img/favicon.png",

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
          "https://github.com/keenanlukeom/alchemix-v3-docs/edit/main/docs/dev/",
      },
    ],

    // — Governance docs @ /governance
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "governance",
        path: "docs/governance",
        routeBasePath: "governance",
        sidebarPath: require.resolve("./sidebars/sidebarsGovernance.js"),
        editUrl:
          "https://github.com/keenanlukeom/alchemix-v3-docs/edit/main/docs/governance/",
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
          "https://github.com/keenanlukeom/alchemix-v3-docs/edit/main/docs/projects/",
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
      announcementBar: {
        id: "beta-2025-audit",
        content:
          "🚧 <strong>Public BETA:</strong> These docs are in active development. Expect gaps and changes. " +
          '<a href="https://discord.gg/E9eGjttFCB">Get support</a> · ' +
          '<a href="https://github.com/KeenanLukeOM/alchemix-v3-docs/issues/new">Report an issue</a>',
        backgroundColor: "#FFF4E5",
        textColor: "#3D2C00",
        isCloseable: false,
      },
      image: "img/social-card.png",
      colorMode: {
        defaultMode: "dark", // start in dark
        disableSwitch: true, // hide the light/dark toggle
        respectPrefersColorScheme: false, // ignore OS preference
      },
      navbar: {
        // title: "Alchemix",
        logo: {
          alt: "Alchemix Logo",
          src: "img/alchemix-full.svg",
          href: "/alchemix-v3-docs/user/",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            docsPluginId: "user",
            position: "left",
            label: "Users",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            docsPluginId: "dev",
            position: "left",
            label: "Developers",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            docsPluginId: "governance",
            position: "left",
            label: "Governance",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            docsPluginId: "projects",
            position: "left",
            label: "Integrations",
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
            title: "Documentation",
            items: [
              {
                label: "User",
                to: "/alchemix-v3-docs/user",
              },
              {
                label: "Developer",
                to: "/alchemix-v3-docs/dev",
              },
              {
                label: "Governance",
                to: "/alchemix-v3-docs/governance/intro",
              },
              {
                label: "Integrations",
                to: "/alchemix-v3-docs/projects",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Live dAPP",
                href: "https://alchemix.fi/",
              },
              {
                label: "Discord",
                href: "https://discord.gg/E9eGjttFCB",
              },
              {
                label: "X (Prev. Twitter)",
                href: "https://x.com/AlchemixFi",
              },
              {
                label: "Newsletter",
                href: "https://alchemixfi.substack.com/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/alchemix-finance",
              },
              {
                label: "Forum",
                href: "https://forum.alchemix.fi/public/",
              },
              {
                label: "DefiLlama",
                href: "https://defillama.com/",
              },
              {
                label: "Snapshot",
                href: "https://snapshot.org/",
              },
            ],
          },
        ],
        logo: {
          alt: "Alchemix Logo",
          src: "img/footer_logo.svg",
          href: "https://alchemix.fi/",
          width: 160,
        },
        copyright: `Copyright © 2020 - ${new Date().getFullYear()} Alchemix Labs.
        <br>
        <span style="font-size: 0.6em; opacity: 0.8;">
        All rights reserved, no guarantees given. DeFi tools are not toys. Use at your own risk.
      </span>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
