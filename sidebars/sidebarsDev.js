/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  tutorialSidebar: [
    { type: "doc", id: "index", label: "🧑‍💻 Dev Overview" },
    {
      type: "category",
      label: "Architecture",
      items: [
        "architecture/overview",
        "architecture/design-goals",
        "architecture/security-model",
      ],
    },
    {
      type: "category",
      label: "Core Modules",
      items: [
        "transmuter/overview",
        "transmuter/redemption-mechanics",
        "alchemist/cdp-mechanics",
        "alchemist/earmarking",
        "myt/meta-yield-token",
      ],
    },
    {
      type: "category",
      label: "Smart Contracts",
      items: ["contracts/ethereum", "contracts/optimism", "contracts/arbitrum"],
    },
    {
      type: "category",
      label: "Integrating Alchemix",
      items: [
        "integration/using-alassets",
        "integration/integrate-myt",
        "integration/faq",
      ],
    },
    "faq",
  ],
};
