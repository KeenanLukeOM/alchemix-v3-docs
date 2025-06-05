/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "index",
      label: "📜 Introduction",
    },
    {
      type: "category",
      label: "Key Concepts",
      collapsed: false,
      items: [
        "concepts/self-repaying-loans",
        "concepts/alassets-and-redemptions",
        "concepts/myt-and-yield",
        "concepts/temporal-advantage",
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      collapsed: false,
      items: [
        "tutorials/deposit-and-borrow",
        "tutorials/repay-loan",
        "tutorials/migrate-from-v2",
        "tutorials/redeem-alassets",
        "tutorials/use-passive-myt",
      ],
    },
    {
      type: "category",
      label: "Guides",
      collapsed: false,
      items: [
        "newguides/choosing-a-strategy",
        "newguides/understanding-redemptions",
        "newguides/how-peg-is-maintained",
        "newguides/risk-considerations",
      ],
    },
    "faq",
    {
      type: "category",
      label: "OLD -- Alchemix Ecosystem",
      items: [
        "guides/README",
        "guides/bridging-assets-to-other-chains",
        "guides/risk-and-counterparties",
        "guides/the-amo-the-elixir",
        "guides/the-transmuter-elaborated",
        "guides/vault-losses-and-collateral-de-pegging",
      ],
    },

    {
      type: "category",
      label: "OLD -- How-to",
      items: [
        "how-to/README",
        "how-to/deposit-funds",
        "how-to/liquidate-your-loan",
        "how-to/migrate-between-vaults",
        "how-to/repay-your-loan",
        "how-to/take-a-self-repaying-loan",
        "how-to/withdraw-funds",
      ],
    },

    {
      type: "category",
      label: "OLD -- Audits",
      items: [
        "audits-and-reports/README",
        "audits-and-reports/financial-reports",
      ],
    },

    {
      type: "category",
      label: "OLD -- Marketing Material",
      items: [
        "marketing-material/README",
        "marketing-material/alassets",
        "marketing-material/alcx-logo-black",
        "marketing-material/alcx-logo-bronze",
        "marketing-material/alcx-logo-white",
      ],
    },

    "site-overview",
  ],
};
