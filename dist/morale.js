// Presentation-only state: never influences reel odds or payouts.
export function resolveMorale(current, payout, wager) {
  const ratio = payout > 0 ? payout / wager : 0;
  const change = payout <= 0 ? -2 : ratio >= 500 ? 45 : ratio >= 100 ? 32 : ratio >= 20 ? 24 : ratio >= 5 ? 14 : 6;
  const value = Math.max(2, Math.min(100, current + change));
  return { value, change: value - current };
}
