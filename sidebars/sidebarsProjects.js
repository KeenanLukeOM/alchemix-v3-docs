/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  tutorialSidebar: [
    { type: "doc", id: "index", label: "📘 Welcome" },

    {
      type: "category",
      label: "Quickstart",
      items: ["getting-started", "checklist"],
    },

    {
      type: "category",
      label: "Use Cases",
      items: [
        "use-cases/alassets",
        "use-cases/redemptions",
        "use-cases/working-across-chains",
      ],
    },

    {
      type: "category",
      label: "Guides & Examples",
      items: ["examples/ex1", "examples/ex2"],
    },

    {
      type: "category",
      label: "Architecture",
      items: [
        "architecture", // Backlinks to dev here?
      ],
    },

    {
      type: "category",
      label: "Trust & Security",
      items: ["security-and-best-practices"],
    },

    {
      type: "category",
      label: "Governance",
      items: ["governance-overview"],
    },

    "testimonials",
    "faq",
  ],
};
