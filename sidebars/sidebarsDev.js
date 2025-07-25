/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  tutorialSidebar: [
    { type: "doc", id: "index", label: "Dev Overview" },
    {
      type: "category",
      label: "Architecture",
      collapsed: false,
      items: [
        "architecture/overview",
        "architecture/design-goals",
        "architecture/security-model",
      ],
    },
    {
      type: "category",
      label: "Core Modules",
      collapsed: false,
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
      collapsed: false,
      items: ["contracts/ethereum", "contracts/optimism", "contracts/arbitrum"],
    },
    {
      type: "category",
      label: "Integrating Alchemix",
      collapsed: false,
      items: [
        "integration/using-alassets",
        "integration/integrate-myt",
        "integration/integrate-transmuter",
        "integration/integrate-alchemist",
        "integration/grants-program",
      ],
    },
    "faq",
  ],
};
