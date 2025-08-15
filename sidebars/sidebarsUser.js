/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "index",
      label: "Introduction",
    },
    {
      type: "doc",
      id: "quick-start",
      label: "Quick Start",
    },
    {
      type: "doc",
      id: "links",
      label: "Links & Resources",
    },
    {
      type: "category",
      label: "Key Concepts",
      collapsed: false,
      items: [
        "concepts/myt-and-yield",
        "concepts/borrowing-in-alchemix",
        "concepts/self-repaying-loans",
        "concepts/redemption-rate",
        "concepts/alAssets",
        "concepts/transmuter",
        "concepts/fees",
        "concepts/liquidations",
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      collapsed: false,
      items: [
        "tutorials/use-passive-myt",
        "tutorials/deposit-and-borrow",
        "tutorials/repay-loan",
        "tutorials/redeem-alassets",
      ],
    },
    {
      type: "category",
      label: "Guides",
      collapsed: false,
      items: [
        "newguides/how-peg-is-maintained",
        "newguides/risk-considerations",
      ],
    },
    "faq",
  ],
};
