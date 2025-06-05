/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  tutorialSidebar: [
    { type: "doc", id: "index", label: "📘 Welcome" },

    {
      type: "category",
      label: "Quickstart",
      collapsed: false,
      items: ["getting-started", "checklist"],
    },

    {
      type: "category",
      label: "Use Cases",
      collapsed: false,
      items: [
        "use-cases/alassets",
        "use-cases/redemptions",
        "use-cases/working-across-chains",
      ],
    },

    {
      type: "category",
      label: "Guides & Examples",
      collapsed: false,
      items: ["examples/ex1", "examples/ex2"],
    },

    {
      type: "category",
      label: "Architecture",
      collapsed: false,
      items: [
        "architecture", // Backlinks to dev here?
      ],
    },

    {
      type: "category",
      label: "Trust & Security",
      collapsed: false,
      items: ["security-and-best-practices"],
    },

    {
      type: "category",
      label: "Governance",
      collapsed: false,
      items: ["governance-overview"],
    },

    "testimonials",
    "faq",
  ],
};
