---
cover: ../../.gitbook/assets/header_02_test.png
coverY: 0
layout:
  cover:
    visible: true
    size: hero
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Liquidate your loan

One of the great advantages Alchemix loans bring is that there is always a way to exit your position, even if you don’t have funds in your wallet to make a repayment.

The liquidate function allows you to use your deposited collateral as a source of funds to repay your debt. Alchemix loans are always overcollateralized, meaning there are always enough funds in your account to cover your debt and allow you to exit.

To liquidate the alETH loan on this account we’ll open the liquidate dialog and choose the alETH from the first drop down menu. Since our deposit was made in WETH we’ll accept the default WETH in the second drop down.

<figure>
  <img
    src="../../.gitbook/assets/image%20(15)%20(1).png"
    alt="Select the debt you'd like to pay off"
  />
  <figcaption>Select the debt you'd like to pay off</figcaption>
</figure>

We want to liquidate all of the loan so let’s choose ‘max’ in the input box.

As alETH is pegged to ETH there will be a small discrepancy in their value. To enable users to limit the effect of any slippage you can choose your preferred slippage tolerance here.

<figure>
  <img
    src="../../.gitbook/assets/image%20(16)%20(1).png"
    alt="Slippage options"
  />
  <figcaption>Slippage options</figcaption>
</figure>

Once you’re happy with the liquidation parameters press liquidate.

If you have any support queries, please contact our team on the official [Discord channel](https://alchemix-finance.gitbook.io/user-docs/resources)

Now that we’ve liquidated our loan, our deposit is available to withdraw so let’s look at that in the next video.

<figure>
  <img src="../../.gitbook/assets/header_02_test.png" alt=""></img>
</figure>
