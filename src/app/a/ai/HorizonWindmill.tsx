import styles from "./windmill.module.css";

// Flat silhouette of the farm windmill from the original 3D home page:
// tapered lattice tower, 18-blade fan wheel, tail vane. Decorative only.
// The fan turns with a CSS transform (compositor-only, no JS) and stops
// under prefers-reduced-motion. The road walk stands it in a field beside
// the road; the caller places and sizes it.
const BLADES = 18;
const blades = Array.from({ length: BLADES }, (_, i) => (i * 360) / BLADES);

// Tower legs taper from 70..130 at ground to 94..106 under the platform.
const leg = (y: number) => {
  const t = (320 - y) / (320 - 112);
  return [70 + 24 * t, 130 - 24 * t] as const;
};
const levels = [320, 262, 210, 166, 132, 112];

// The caller places and sizes it; this file only owns the turning fan.
export default function HorizonWindmill({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 200 320" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <path d="M70 320 L94 112 M130 320 L106 112" strokeWidth="3" />
        {levels.slice(0, -1).map((y, i) => {
          const [l, r] = leg(y);
          const [l2, r2] = leg(levels[i + 1]);
          return <path key={y} d={`M${l} ${y} H${r} M${l} ${y} L${r2} ${levels[i + 1]} M${r} ${y} L${l2} ${levels[i + 1]}`} strokeWidth="1.5" />;
        })}
        {/* Tail boom and vane */}
        <path d="M104 92 L176 82" strokeWidth="2.5" />
      </g>
      <path d="M164 68 L198 62 L198 98 L164 92 Z" fill="currentColor" />
      <rect x="90" y="106" width="20" height="7" fill="currentColor" />
      <g className={styles.fan}>
        <g fill="none" stroke="currentColor">
          <circle cx="100" cy="88" r="62" strokeWidth="2.5" />
          <circle cx="100" cy="88" r="36" strokeWidth="1.5" />
        </g>
        {blades.map((a) => (
          <path key={a} d="M98.5 74 L96 28 L106 30 L101.5 74 Z" fill="currentColor" transform={`rotate(${a} 100 88)`} />
        ))}
        <circle cx="100" cy="88" r="9" fill="currentColor" />
      </g>
    </svg>
  );
}
