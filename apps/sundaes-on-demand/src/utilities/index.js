/**
 * @function formatCurrency
 *  format number as currency (USD)
 * @param {number} amount
 * @returns {string} number formatted (US Dollars)
 *
 * @example
 *  formatCurrency(0)
 *  => $0.00
 *
 * @example
 *   formatCurrency(1.5)
 *  => $1.50
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount)
}
