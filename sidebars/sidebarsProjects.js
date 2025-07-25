/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  tutorialSidebar: [
    // —————————————————————————————
    // Landing page
    { type: "doc", id: "index", label: "Welcome" },

    //   Why Integrate
    {
      type: "category",
      label: "Why Integrate",
      collapsed: false,
      items: [
        "why-integrate/overview",
        "why-integrate/use-cases",
        "why-integrate/feature-comparison",
      ],
    },

    //  How to Integrate
    {
      type: "category",
      label: "How to Integrate",
      collapsed: false,
      items: ["how-to/getting-started", "how-to/friendly-fork"],
    },

    //   Support
    {
      type: "category",
      label: "Support",
      collapsed: false,
      items: [
        "support/brand-assets",
        "support/co-marketing",
        "support/security",
      ],
    },

    //   Contact & Onboarding
    {
      type: "category",
      label: "Contact & Onboarding",
      collapsed: false,
      items: [
        "contact/apply-to-partner", // Apply to Partner
      ],
    },

    "faq",
  ],
};
