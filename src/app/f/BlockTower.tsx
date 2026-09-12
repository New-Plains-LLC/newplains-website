"use client";

import { useEffect, useRef } from "react";

/* Block Tower v4 — labeled cubes scattered across the ground, then stack
   one at a time into a 2×2 tower. Label lives ON the front face of each
   cube (EMAIL, PRESENTATIONS, …). Multicolor Dayos palette, three-tone
   shading, near-iso rig. Loops: scatter → stack → pause → scatter again. */

const LABELS = [
  "EMAIL",
  "PRESENTATIONS",
  "SPREADSHEETS",
  "RESEARCH",
  "LEAD GEN",
  "FOLLOW UP",
  "BRIEFINGS",
  "ALERTS",
  "DOCUMENTS",
  "FILES",
  "INVOICES",
  "REPORTS",
];

const LAYERS = 3; // 12 cubes = 3 layers × 2 wide × 2 deep

const PALETTE = [
  { front: "#F59A3C", top: "#FFC187", side: "#B06A20", text: "#000000" }, // orange
  { front: "#7ED37E", top: "#A9E4A9", side: "#529B52", text: "#000000" }, // green
  { front: "#7FD4E0", top: "#AFE7EF", side: "#5599A5", text: "#000000" }, // cyan
  { front: "#F27DC9", top: "#F8AADE", side: "#B8548E", text: "#000000" }, // pink
  { front: "#B48BE0", top: "#D0B5EE", side: "#7F5CA8", text: "#000000" }, // violet
  { front: "#EDE8DC", top: "#F8F5EE", side: "#B5AE9C", text: "#000000" }, // cream
  { front: "#C9A87C", top: "#DEC6A4", side: "#93764F", text: "#000000" }, // kraft
  { front: "#F2E33A", top: "#F8EF8C", side: "#B8A922", text: "#000000" }, // yellow
];

function shade(hex: string, f: number): string {
  const n = parseInt(hex.slice(1), 16);
  const ch = (v: number) =>
    Math.max(0, Math.min(255, Math.round(f >= 1 ? v + (255 - v) * (f - 1) : v * f)));
  return `rgb(${ch((n >> 16) & 255)},${ch((n >> 8) & 255)},${ch(n & 255)})`;
}

/* Scatter spots: [x%, y%] of the stage — spread across the ground area */
const SCATTER: Array<[number, number]> = [
  [6, 76], [26, 88], [46, 80], [68, 90], [88, 78],
  [10, 50], [32, 58], [56, 50], [80, 60], [94, 40],
  [20, 36], [64, 30],
];

export default function BlockTower() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const E = window.innerWidth < 640 ? 56 : 68;
    const W = stage.clientWidth || 420;
    const H = LAYERS * E + E * 1.6;
    stage.style.height = `${H}px`;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function makeCube(label: string, i: number): HTMLDivElement {
      const p = PALETTE[i % PALETTE.length];
      const cube = document.createElement("div");
      cube.className = "bt-cube4";
      cube.style.width = `${E}px`;
      cube.style.height = `${E}px`;
      const h = E / 2;
      const face = (t: string, bg: string, content = ""): HTMLDivElement => {
        const f = document.createElement("div");
        f.className = "bt-face4";
        f.style.transform = t;
        f.style.background = bg;
        if (content) f.innerHTML = content;
        return f;
      };
      const labelHtml = `<span style="font-family:var(--font-mono-d),monospace;font-size:10px;font-weight:700;letter-spacing:-0.01em;color:${p.text};text-align:center;padding:0 4px;">${label}</span>`;
      // front / right / top visible; back/left/bottom hidden fillers
      cube.appendChild(face(`rotateX(-28deg) rotateY(45deg) translateZ(${h}px)`, shade(p.front, 1), labelHtml));
      // inner wrapper trick: apply rig on cube, faces only translate
      cube.querySelectorAll(".bt-face4").forEach((f) => {
        (f as HTMLElement).style.transform = (f as HTMLElement).style.transform.replace(
          `rotateX(-28deg) rotateY(45deg) `,
          ""
        );
      });
      // label also on BOTH side faces — at iso yaw one of them always faces the viewer
      cube.appendChild(face(`rotateY(90deg) translateZ(${h}px)`, shade(p.front, 0.72), labelHtml));
      cube.appendChild(face(`rotateX(90deg) translateZ(${h}px)`, shade(p.front, 1.18)));
      cube.appendChild(face(`rotateY(-90deg) translateZ(${h}px)`, shade(p.front, 0.88), labelHtml));
      cube.appendChild(face(`rotateY(180deg) translateZ(${h}px)`, shade(p.front, 0.8)));
      return cube;
    }

    /* Tower slot: layer floor(i/4), then 4 positions per layer.
       Screen-space iso offsets: +dx pushes cube back-right (depth),
       -dy raises it. Depth cube sits higher on screen (further away).
       Brick-weave: rotate the (dx,dy) pattern per layer so labels peek. */
    const DX = E * 0.34; // half-step: gap between left/right columns
    const DY = E * 0.17; // half of the iso rise per depth step
    const SLOT_OFFS: Array<[number, number]> = [
      [-DX, -DY], // back-left
      [+DX, +DY], // front-right
      [+DX, -DY], // back-right
      [-DX, +DY], // front-left
    ];
    function slotXY(i: number): [number, number] {
      const layer = Math.floor(i / 4);
      const pos = i % 4;
      const rot = layer % 2 === 1 ? 2 : 0; // weave: swap front/back pairs
      const [dx, dy] = SLOT_OFFS[(pos + rot) % 4];
      const cx = W / 2 - E / 2;
      const baseY = H - E * 1.35; // top-left y of the base layer front cube
      const x = cx + dx;
      const y = baseY - layer * E + dy;
      return [x, y];
    }

    function scatterXY(i: number): [number, number] {
      const [sx, sy] = SCATTER[i % SCATTER.length];
      return [(sx / 100) * (W - E), H - (sy / 100) * H];
    }

    const cubes: HTMLDivElement[] = [];
    for (let i = 0; i < LABELS.length; i++) {
      const c = makeCube(LABELS[i], i);
      const [x, y] = scatterXY(i);
      c.style.left = `${x}px`;
      c.style.top = `${y}px`;
      stage.appendChild(c);
      cubes.push(c);
    }

    if (reduced) {
      cubes.forEach((c, i) => {
        const [x, y] = slotXY(i);
        c.style.left = `${x}px`;
        c.style.top = `${y}px`;
      });
      return;
    }

    let stopped = false;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    (async function run() {
      await sleep(800);
      while (!stopped) {
        // stack one at a time: hop from scatter to slot
        for (let i = 0; i < cubes.length && !stopped; i++) {
          const c = cubes[i];
          const [x0, y0] = scatterXY(i);
          const [x1, y1] = slotXY(i);
          const kf: Keyframe[] = [
            { left: `${x0}px`, top: `${y0}px`, easing: "cubic-bezier(0.3, 0, 0.7, 1)" },
            { left: `${(x0 + x1) / 2}px`, top: `${Math.min(y0, y1) - E * 1.2}px`, offset: 0.5, easing: "cubic-bezier(0.3, 0, 0.7, 1)" },
            { left: `${x1}px`, top: `${y1}px` },
          ];
          try {
            await c.animate(kf, { duration: 850, fill: "forwards" }).finished;
          } catch {
            break;
          }
          c.style.left = `${x1}px`;
          c.style.top = `${y1}px`;
          await sleep(260);
        }
        if (stopped) break;
        await sleep(2200); // hold the finished tower
        // scatter back, all at once
        await Promise.all(
          cubes.map((c, i) => {
            const [x0, y0] = scatterXY(i);
            const [x1, y1] = slotXY(i);
            return c
              .animate(
                [
                  { left: `${x1}px`, top: `${y1}px` },
                  { left: `${x0}px`, top: `${Math.min(y0, y1) - E * 0.8}px`, offset: 0.5 },
                  { left: `${x0}px`, top: `${y0}px` },
                ],
                { duration: 900, fill: "forwards" }
              )
              .finished.catch(() => undefined);
          })
        );
        cubes.forEach((c, i) => {
          const [x0, y0] = scatterXY(i);
          c.style.left = `${x0}px`;
          c.style.top = `${y0}px`;
        });
        await sleep(900);
      }
    })();

    return () => {
      stopped = true;
      stage.querySelectorAll(".bt-cube4").forEach((n) => n.remove());
    };
  }, []);

  return (
    <div className="bt-stage4" ref={stageRef} aria-label="Labeled blocks scattered on the ground stack themselves into a tower — every task that now runs itself">
      <style jsx>{`
        .bt-stage4 {
          position: relative;
          width: 100%;
          max-width: 440px;
          margin-left: auto;
          margin-right: auto;
          perspective: 1200px;
          overflow: hidden;
        }
        :global(.bt-cube4) {
          position: absolute;
          transform-style: preserve-3d;
          transform: rotateX(-28deg) rotateY(45deg);
          will-change: left, top;
        }
        :global(.bt-face4) {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          border: 1px solid rgba(10, 10, 12, 0.18);
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
