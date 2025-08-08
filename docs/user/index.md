---
sidebar_position: 1
---

import AlchemixStats from "@site/src/components/AlchemixStats";

# Getting started with Alchemix

![](/img/landing-01.webp)

Alchemix is your unified platform for saving, borrowing, and earning fixed yield, all in one place. Built on years of iteration since launching the original self-repaying loan in 2021, Alchemix v3 brings all three pillars together with a smarter, more flexible design. The protocol allows you to:

- **Save and grow –** deposit ETH or USDC and let our vault invest across diversified strategies.

- **Borrow up to 90% LTV –** access liquidity now while accrued yield and scheduled redemptions steadily reduce your balance.

- **Earn fixed-rate yield –** lock in predictable returns through fixed term redemptions of alETH or alUSD.

## 1. Grow Savings with Vaults

**How it works**

Deposit ETH or USDC into a vault to receive Meta-Yield Tokens (MYT). Each MYT represents a share of a portfolio of yield strategies chosen by Alchemix and is rebalanced over time. Yield accrues continuously and is reflected in the redemption value of MYT.

### Key Points

|             |                                              |
| ----------- | -------------------------------------------- |
| Asset types | ETH, USDC                                    |
| Strategy    | Diversified, tuned for risk-adjusted returns |
| Lock-up     | None, withdraw at any time                   |

Learn more about Vaults and MYT →

## 2. Access Credit with Self-Repaying Loans

Need liquidity but don’t want to sell your assets? Borrow Alchemix’s synthetic counterpart of your deposit and let your future yield repay the balance.

### Key Points

|                  |                                                                                                                                                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Borrowable asset | alETH or alUSD                                                                                                                                                                                                                                               |
| Maximum LTV      | 90% of deposited collateral                                                                                                                                                                                                                                  |
| Liquidations     | Liquidations only apply if the MYT value drops below your loan value. This occurs if a strategy returns a negative yield or, for example, a strategy gets hacked. Your ETH or USD is deposited into the MYT and the MYT becomes your collateral. Learn more. |
| Early Repayment  | Optional at any time                                                                                                                                                                                                                                         |

Typical uses include financing a purchase, leveraging/looping yield, or bridging short-term opportunities without disrupting long-term holdings.

Learn more about Self-Repaying Loans →

## 3. Lock In Fixed Returns with the Transmuter

The Transmuter lets users deposit alAssets and, after a fixed term, redeem an equivalent amount of the underlying asset—via Meta-Yield Tokens (MYT), which act as an intermediary claim.

- **Predictable returns** - redemption price and date are known upfront.

- **Peg stability** - arbitrage incentives help to keep alAssets near parity.

- **Protection for LPs** - stable asset prices and redemption opportunities help offset impermanent loss.

**Example**: If alUSD trades at 0.98 USDC and the current redemption period is three months, purchasing alUSD and redeeming it yields an annualised return of roughly 8%.

Under normal conditions, the interface unwraps that MYT to the underlying token for you. If liquidity is momentarily tight, the contract may return the MYT itself. You can either hold it until unwrapping is available or unwrap manually once the queue clears.

Learn more about the Transmuter and Redemptions →

## Next Steps

1. Visit [https://alchemix.fi/](https://alchemix.fi).

2. Stay informed with our Guides.

3. Follow along with our Tutorials.

4. Learn more with our Key Concepts.

## Alchemix Stats Fetch Test

<AlchemixStats />
