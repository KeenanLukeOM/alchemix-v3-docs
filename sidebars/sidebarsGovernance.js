/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebarsGovernance = {
  tutorialSidebar: [
    "intro",

    {
      type: "category",
      label: "Onchain Governance System",
      collapsed: false,
      items: [
        "onchain/why-onchain-governance",
        "onchain/how-to-vote",
        "onchain/vqalcx",
        "onchain/onchain-governance-infrastructure",
        "onchain/governance-process",
        "onchain/financial-reports",
        "onchain/role-gated-contract-functions",
      ],
    },
  ],
};

module.exports = sidebarsGovernance;
