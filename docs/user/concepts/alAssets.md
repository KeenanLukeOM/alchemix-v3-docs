---
sidebar_position: 5
---

# alAssets & Redemptions

alAssets (alUSD, alETH) are synthetic tokens that mirror the value of their underlying asset. They play two roles:

1. **Borrowing unit** - When you open a loan, new alAssets are minted to you.

2. **Redemption instrument** - Anyone can deposit alAssets into the Transmuter to redeem 1:1 for the underlying after a fixed term.

Because the protocol always values 1 alAsset at 1 unit of its underlying, but the market price can drift below parity, borrowing and redemption create a predictable risk-to-reward profile.

## Borrowing, Selling, and the Market Discount

When you borrow, the protocol mints alAssets at face value. 1 alAsset offsets exactly 1 unit of debt inside Alchemix. If you sell those tokens on an exchange, you may receive less than 1.00 because alAssets can trade at a market discount (the gap between their external price and their internal 1:1 accounting value). For borrowers this discount is an upfront cost; for traders its a source of fixed return.

| Action        | Inside Alchemix            | On the open market                 |
| ------------- | -------------------------- | ---------------------------------- |
| Mint alAssets | 1 alAsset = 1 unit of debt | –                                  |
| Sell alAssets | –                          | Price < 1.00 → **market discount** |
| Deleveraging  | alAssets repay debt at 1:1 | Creates transmuter opportunities   |

### Example

Deposit 1,000 USDC, mint 900 alUSD (90% LTV). If alUSD trades at 0.97 USDC, selling yields 873 USDC (a 27 USDC market discount) while your recorded debt inside the vault remains 900 USD.

## Defined Outcomes

A borrowing position in Alchemix always produces three numbers you can estimate in advance, the maximum cost you accept up-front, a conservative minimum profit you can expect under current assumptions, and the upside that appears if yield or redemption speed out-performs those assumptions. Knowing this range lets you size positions without any guess-work.

### Maximum Cost

Maximum Cost = Market Discount + (Alchemist Fee % × Debt Repaid)

- **Market Discount** – what you give up when you sell newly-minted alAssets below face value.

- **Alchemist Fee %** – the fixed protocol fee, visible in the UI.

Both inputs appear on the borrow screen, so the figure is locked in before you sign a transaction.

### Estimated Minimum Profit

To establish a floor, assume:

1. **Yield APR** – the current vault rate shown in the dashboard.

2. **Maximum Redemption Lag** – the slowest possible pay-down, equal to 1 year ÷ Transmutation time.

3. **Linear Debt Decay** – leverage moves from its starting value down to zero at a steady pace.

Under those conditions, the average leverage you enjoy is one-half of your opening LTV. For a 50% LTV start and a three-month term (lag = 0.25 years).

Average leverage multiple ≈ 1 + 0.5 × 50 %  →  1.25 ×

Minimum Profit ≈ Yield APR × 0.25 years × 1.25 ×  –  Market Discount

You can explore your specific situation with our in-house calculator →

### Upside

Profit improves if either of these move in your favour:

- **Faster redemptions** – redemptions often settle before the maximum lag, because the queue refreshes continually.

- **Higher yield** – vault yields can vary, and any extra yield compared to your initial calculation is additional profit.

Because at least some yield accrues while leverage exists, the position is designed so that cost is capped and return has room to expand.

## Why alAssets trade below par

- Loan demand - Borrowers mint and sell alAssets for working capital.

- Liquidity - Low liquidity can result in more dramatic price swings.

- Market sentiment - Traders may discount synthetic assets during volatility.

A small predictable discount is healthy; large discrepencies invite arbitrage.

## Mechanisms that close the discount

| Mechanism              | How it helps                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- |
| Transmuter             | Fixed-duration redemptions let traders lock in the spread as a bond-like yield, burning alAssets at maturity. |
| Repayment arbitrage    | Borrowers can buy alAssets cheaply to repay debt below face value.                                            |
| Liquidity provisioning | Farming rewards encourage holding alAssets, soaking up sell pressure.                                         |

Together these forces pull market price toward 1.00 and keep borrowing capital-efficient.

## LTV Sensitivity

A higher LTV does not, by itself, change the percentage discount an alAsset trades at. That spread is driven mainly by market liquidity and demand. What changes with LTV is your exposure to that discount and the pace at which the system deleverages you.

Large borrows mint more alAssets and can move thin liquidity, so a higher LTV can imply a larger absolute cost when selling. You can mitigate this with standard DCA.

High LTV positions are earmarked more aggressively and get paid down faster when redemptions hit. If you intend to keep leverage constant, you will need to re-borrow more often, making you more sensitive to short-term price moves and transaction costs.

Low LTV positions see smaller earmarks each cycle and deleverage slowly. You can be more selective about when (or whether) to re-leverage, since the position is less reactive to each redemption window.

## Key Takeaways

- **Discount upfront, benefit over time** - You potentially sacrifice a small % today for predictable upside as leverage decays.

- **Transmuter arbitrage keeps the system tight** - Traders earn yield, borrowers deleverage, peg stabilises.
