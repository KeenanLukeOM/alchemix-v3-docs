---
sidebar_position: 8
---

# Liquidations

Liquidations in Alchemix v3 are a system-wide safety valve, not a per-account punishment. Because loans and collateral are like-kind, with ETH backing alETH and USDC backing alUSD, market price swings do **not** force positions to close. The back-stop only activates if the Meta-Yield Token itself loses backing.

## When liquidation does not occur

| Event                              | Effect on your loan                                               |
| ---------------------------------- | ----------------------------------------------------------------- |
| ETH or USDC price volatility       | None, debt and collateral move together.                          |
| alAsset drifting below peg on DEXs | None, protocol still values alAssets at face value for repayment. |
| Hitting the 90% LTV borrowing cap  | Borrowing stops, the position stays open and keeps earning yield. |

## What can trigger liquidation

TODO

| Event                                                 | Detection Method                               |
| ----------------------------------------------------- | ---------------------------------------------- |
| Strategy loss, exploit, or severe slippage inside MYT | Oracle shows MYT NAV is less than system debt. |
| ANYTHING ELSE??                                       |                                                |

## How the process works

1. **Shortfall calculation**

   1. The oracle reports the percentage deficit. (EG: collateral worth 98% of debt, 2% shortfall)

2. **Account ordering**

   1. Borrowers are ranked by loan-to-value. The highest LTV vaults are liquidated first because removing this collateral cancels more debt than doing so for a low-LTV wallet.

3. **Partial liquidation only**

   1. The protocol liquidates only the amount required to cover the shortfall, and any vaults with a liquidation will have an equivalent portion of their debt burnt in the process.

## Reading the health bar

The colored bar in the vault UI gives an at-a-glance view of three numbers:

- **Current LTV** – your live leverage, updated in real time.

- **Max LTV** – the borrowing ceiling on the vault. You cannot mint alAssets beyond this green marker.

- **Liq LTV** – the red marker shows the liquidation threshold right now. If MYT ever records a loss, the marker slides left to reflect the reduced backing. If your current LTV remains below this marker, you will not be liquidated.

Day-to-day most users will never see a liquidation. If MYT vaults experience a loss, these mechanisms ensure losses are covered in a transparent and proportional way.
