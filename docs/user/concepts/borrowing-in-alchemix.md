---
sidebar_position: 2
---

# Borrowing in Alchemix

After converting ETH or USDC into the Meta-Yield Token, the next step is borrowing. The vault keeps your collateral and lets you mint synthetic assets, alETH or alUSD respectively, worth up to ninety percent of the collaterals face value.

## How borrowing works

![](/img/borrowing-in-alchemix-01.png)

1. Navigate to the Borrow panel in your vault.

2. Choose an amount of alAsset to mint. The “max” function will give the maximum value allowable within the bound of 90% LTV.

3. Sign the transaction, Alchemix will mint the requested alAsset directly to your wallet.

4. Use the alAsset in any way you like. Swap it for stablecoins, provide liquidity, or loop it back into the vault for further leverage.

## What repays the debt

Your collateral continues to earn yield in your vault. On a fixed schedule set by the DAO, the Transmuter redeems a slice of alAssets held in the system for MYT and applies that value against outstanding debt. When yield plus redemptions equal the amount you borrowed, the loan is cleared without further action on your part.

Learn more about redemptions →

## Key Information

| Parameter               | Value or behavior                                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| Maximum LTV             | 90% of collateral value.                                                                                   |
| Interest Rate           | Zero. Debt balance only declines, it never accrues new interest.                                           |
| Repayment sources       | Vault yield, scheduled transmuter redemptions, manual repayments.                                          |
| Early repayment options | Send alAssets back at any time to reduce or close the loan.                                                |
| Liquidation             | No liquidations, but high LTV positions could be redeemed early depending on system dynamics. Learn more → |

### Why borrow instead of selling?

- **Exposure** – Maintain long-term asset exposure while meeting short-term cash needs.

- **Stable** – Avoid variable interest rates and rollover risk common in other lending markets.

- **IL Protection** – Combine borrowing with like-for-like liquidity pools to generate fees without impermanent loss.

- **Leverage** – Loop alAssets back into the vault to amplify yield while the repayment mechanism remains self-managed.

Borrowing in Alchemix turns yield-bearing collateral into an immediate source of flexible liquidity, without sacrificing future upside or introducing unpredictable financing costs.
