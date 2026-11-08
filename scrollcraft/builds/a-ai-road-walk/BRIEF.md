# BRIEF: /a/ai road walk

Interviewed 2026-11-07. Answers 1, 3, 5, 6, 7 and 8 are Shawn's (lightly
trimmed). Answers 2 and 4 are my suggestions, which Shawn accepted.

## The eight answers

1. **Vibe:** "Plainspoken, credible, professional, obviously technically
   capable." References: customaistudio.io, twain.ai, abatable.com.
2. **Journey (suggested, accepted):** your own busywork, then what it costs
   you, then the operator who has been there, then what gets built, then how we
   work, then the $999 audit.
3. **Energy:** "intense when pointing out the pain of the status quo. Calm when
   showing what it will be like post project with things automated, organized."
4. **Feeling and peak (suggested, accepted):** a messy real workflow turns into
   a clean one under the visitor's own scroll. "You watch the busywork
   disappear."
5. **The one thing no other site does:** "Scroll forward instead of down, as if
   you're walking down a street with new features starting in the distance,
   then getting larger as they get closer and disappear as you walk by."
6. **Range:** "whatever you would call the twain.ai website but with a great
   plains feel." Read as: soft editorial. Light warm canvas, serif display,
   tinted rounded panels, lots of air. Plains comes from abatable-style line
   drawing (horizon, field contours, fence posts, the windmill) and a copper
   route line down the road.
7. **World:** "it will be harder to make the distinct scenes work with the
   forward scroll but we should try it." Distinct scenes along one road: each
   zone has its own weather and ground, and the road keeps going.
8. **Assets:**
   - Shawn's photos: `Shawn Skaggs (1)` (headshot) and `W2015076` (listening
     across a dinner table).
   - Screenshots from the site's assets (`/public/projects`). Only
     `speed-to-lead.png` is safe to show. `folio.png` shows a real meeting
     note, so it stays out.
   - Dealership-floor imagery would have to be generated, so Parallel Ag never
     appears. Not done in v1 because `KIE_AI_API_KEY` is not set. The
     line-drawn world doesn't need it.

## Grammar

**Roadside walk (new).**
- **Mechanism:** one sticky stage with CSS perspective. Scroll moves the
  camera forward along z.
- **Content:** sits on standing panels beside a road. A panel rises from the
  vanishing point and holds at reading distance. It then grows past your
  shoulder and is gone.
- **Scenes:** zones of weather. The road never cuts.
- **Nav:** a mile-marker route rail, clickable.
- **Hero:** standing at the start of the road, inside a storm.
- **Close:** arrival. The road ends at a gate with the audit on it, and the
  camera stops there.
- **Bans:** document-flow sections inside the walk, scrims over photos, video
  scrub, centred copy on every panel, hard cuts.

**Why not the other eight?**
- **Continuous world:** needs video legs and a seam chain, and the brief wants
  distinct scenes.
- **Filmic one-shot:** has no forward axis.
- **Editorial, poster, cutlist:** all scroll down.
- **Gallery:** lateral, not forward.
- **Split stage:** a fit for the before/after story, but it can't walk.
- **Live surface:** the product is consulting, not software.

## Signature move

The walk itself. Features rise from the vanishing point, grow, and pass at your
shoulder. As you walk, the storm behind you clears to open plains.

## Tell-someone sentence

It's the site where you walk down a prairie road out of a storm, and the
busywork scattered on a roadside board snaps into a clean line as you reach it.

## Feeling curve

| # | Zone | Feeling | What causes it |
|---|---|---|---|
| 1 | Storm | Recognition | Charcoal sky, storm photo low on the horizon, the headline standing at the roadside |
| 2 | Storm | Pressure | Four short pain signs coming fast and tight, each a thing they did this week |
| 3 | Storm | Doubt | One slower sign: "A promising experiment is only the beginning." |
| 4 | Edge of storm | Trust | Shawn, listening across a table; 20 years of operations |
| 5 | **The turn (peak)** | **Relief** | A long hold at one board. Scattered sticky notes snap into one pipeline, and the sky clears to cream at the same moment |
| 6 | Clear | Clarity | Three outcomes fanned like twain's cards, calm and spaced |
| 7 | Clear | Confidence | Real tools: the Speed-to-Lead screenshot, then the other four |
| 8 | Clear | Calm | Six mile markers for the approach, even and unhurried, the windmill turning past |
| 9 | Fork | Choice | A three-way road sign: workshop, custom build, concierge |
| 10 | Arrival | Resolve | The gate. $999 audit, one button. The camera stops and holds |

- **Peak:** act 5. It gets the largest scroll span, about 2.4× a normal hold.
  Act 4, just before it, is quiet and slow.
- **Authored silence:** the empty road between act 3 and act 4. The storm
  thins and nothing stands at the roadside for about 0.6 screens. This is
  deliberate, not dead scroll.
- **Pace:** fast and tight in the storm (intense), slow and wide once it is
  clear (calm), per answer 3.

## Score

| Beat | Device | Why |
|---|---|---|
| Recognition | Roadside hero panel, storm grade | Begins inside the world; no separate title screen |
| Pressure | Rapid signs, short holds, alternating sides | Speed is what makes the pain feel intense |
| Doubt / Trust | Photo panel with slow travel | Slowing down tells you to listen |
| Turn (peak) | Board whose state is scrubbed by the camera's z position, plus a regrade of the whole world | The before/after happens under your own hand |
| Clarity | Fanned trio | A different shape from a single panel |
| Confidence | Wide media panel | The real screenshot gets room |
| Calm | Mile markers along the road | Small, regular, rhythmic |
| Choice | Fork sign | "Show the fork honestly" (PRODUCT.md, principle 4) |
| Resolve | Gate with the camera stopped | Arrival, then a clean hand-off to the footer |

## Reduced motion and no-JS

The walk is gated on `prefers-reduced-motion: no-preference` and
`scripting: enabled`. Otherwise every panel renders as a normal stacked page,
in the same order with the same copy.
