# FINAL_FINAL_v27 — Client Feedback Simulator

An original browser game using fictional credits only. No deposits, withdrawals, prizes, or real-money functionality. The deployed site is a static, client-side ES module application.

## Run
Serve `dist/` from any static HTTP server. Run `node tests.mjs` for the game-engine checks. No dependencies or build step are required.

## Architecture
- `dist/config.js`: paytable, weights, lines, bonus descriptions and math constants.
- `dist/engine.js`: random grid generation, wild substitution, payline evaluation, invoice collection, bonus activation.
- `dist/app.js`: session state, integer credit accounting, ordered event presentation, audio and controls.
- `dist/jokes.js`: contextual feedback and celebration copy.
- `dist/style.css`: responsive application workspace and motion.
- `dist/assets/`: original generated editorial artwork.

## Reference verification and prototype boundary
Research date: 2026-10-08. The publisher's https://www.peterandsonsgames.com/games/Big-bounty-bandits page confirms 5×4, 20 left-to-right lines, wild exclusions, cash collection, enhanced collection up to 10×, three middle-reel feature paths, and combined features. Direct browser access to the playable demo was blocked with ERR_BLOCKED_BY_CLIENT. Its live help/paytable was not inspected.

Third-party descriptions suggest guaranteed collection on reel-2 bonus, enhanced collectors on reel-3 bonus, and grid collection multipliers on reel-4 bonus. These are provisional mappings. All specific probabilities, paytable amounts, line patterns, initial spin/retrigger counts, distributions, interaction rules and limits are prototype assumptions retained in the source configuration and this README. Bounty/Big Bounty cash-drop events and jackpots were omitted because demo rules were not verified. No certified mathematics, RTP, or maximum award is claimed.

## Session rules
Start with 1,000.00 cr. Total wagers: 1/2/5/10 cr across 20 fixed paylines. Debit once at the start of a paid spin; free spins deduct nothing. Resolve paylines, invoice subtotal, collector multiplier, effect product, then credit the sum once. All credits are stored as integer hundredths; each line win rounds to one hundredth. Bonuses award 10 spins; successful pin activation during bonuses adds 3 spins once per spin, up to 30 total awarded. Modes persist and combine until the bonus ends. Wagers lock for the entire bonus. Reloading creates a new session.

The developer panel can force each mode, the combined mode, a collection event, or the top celebration. These are review outcomes, clearly recorded in the round ledger. Review mode does not imply natural hit frequencies. A fictional balance reset is available when no round/bonus is unresolved.

## Validation
`node tests.mjs`: verifies unique valid paylines, regular/wild payouts and exclusions, collection arithmetic, multiplicative effects, guaranteed three-pin activation and all five tested mode configurations across 5,000 deterministic generated rounds. JS syntax checks pass. No live browser QA was available; static output has no compatible managed preview server in this environment.

## Accessibility / audio
Semantic buttons, named reels and cells, live status messages, modal dialogs with Escape support, keyboard spin/skip, and reduced-motion preference support. Sound defaults off; optional synthesized keyboard clacks, pings, slurps and restrained electronic ambience. Font loading has local fallbacks. Credit balance is session-only.

## Version 1.1: animated wins, living symbols, music and morale

Wins now trace up to four winning paylines in sequence, bounce matched symbols, stamp collected invoices, highlight credited amounts, and display tiered banners with CMYK-colored paper confetti. Major wins retain the longer skippable celebration. Idle symbols subtly breathe, rock and hover; motion is suppressed with Reduced Motion. These effects are presentation only.

Will to Design starts at 28%. Every nonzero payout restores 6 points (under 5× wager), 14 (5×), 24 (20×), 32 (100×), or 45 (500×). It caps at 100%; nonpaying spins lose 2 points down to a floor of 2%. The round ledger includes the before/after/change. Morale never influences game math.

SOUND ON starts an original synthesized 88 BPM eight-bar electronic loop with warm chord pads, bass, soft drums and a sparse melody, plus the existing game effects. MUSIC changes background volume independently. Audio pauses while the tab is hidden. No third-party music or audio samples are used. Browser audio requires a user gesture.

For GitHub upload, local preview and optional GitHub Pages hosting, follow [GITHUB_UPLOAD.md](GITHUB_UPLOAD.md). Run `npm start` to serve the game locally without installing dependencies.
