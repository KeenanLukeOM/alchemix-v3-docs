---
sidebar_position: 3
---

# Self-Repaying Loans

A self-repaying loan lets you unlock liquidity without selling your core position.

Deposit ETH or USDC and the vault issues a like-kind synthetic asset, alETH or alUSD, that mirrors the price of what you deposited. You may mint alAssets worth up to **90%** of your collateral’s face value and deploy them however you like. Meanwhile, two built-in cash flows reduce the loan balance:

- **Vault yield** – Your collateral is wrapped in the Meta-Yield Token, which earns yield continuously.

* **Scheduled redemptions** – On fixed dates set by the DAO, the Transmuter converts queued alAssets into vault value and credits that amount against outstanding debt.

Because repayment comes from these predictable flows, the loan never accrues variable interest. The balance only moves in one direction, down, unless you choose to mint additional alAssets.

| Parameter         | Value or behaviour                                                                                         |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| Collateral        | ETH → alETH, USDC → alUSD                                                                                  |
| Maximum LTV       | 90%                                                                                                        |
| Interest rate     | 0% (balance declines, never compounding)                                                                   |
| Repayment sources | MYT yield, fixed-schedule redemptions, manual repayments                                                   |
| Early repayment   | Send alAssets back at any time                                                                             |
| Liquidation       | No liquidations, but high LTV positions could be redeemed early depending on system dynamics. Learn more → |

### User touch-points

For most borrowers, the position is low-maintenance. Deposit, mint, and check back when you need more liquidity. Active users can raise or lower their LTV, loop alAssets back into the vault for leverage, or time repayments around redemptions.

## What can Self-Repaying Loans Be Used For?

Self-repaying loans allow you to think about your liquidity in an entirely different perspective. With Alchemix V3 you can use self-repaying loans for:

- **Large purchases** - access liquidity today without selling your positions.

* **Yield looping** - deposit borrowed alAssets into new positions for amplified yield.

- **Short-term trading opportunities** - quickly move capital and minimize your risk profile.

- **F.I.R.E-style withdrawals** - schedule monthly draws while your principal continues earning.
