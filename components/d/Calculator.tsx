"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ReferenceDot,
} from "recharts";
import Section from "./Section";

const AUDIT_FEE = 999;
const RETAINER = 5000;
const WEEKS_PER_MONTH = 4.33;
const HORIZON_MONTHS = 24;

function fmtCurrency(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function fmtMonth(m: number) {
  if (m === 0) return "Now";
  if (m < 12) return `Mo. ${m}`;
  const y = m / 12;
  return y === Math.floor(y) ? `Yr ${y}` : `Yr ${y.toFixed(1)}`;
}

export default function Calculator() {
  const [hours, setHours] = useState(40);
  const [rate, setRate] = useState(20);
  const [includeRetainer, setIncludeRetainer] = useState(true);
  const [includeSolutions, setIncludeSolutions] = useState(false);

  const monthlyManual = hours * rate * WEEKS_PER_MONTH;
  const engagementMonthly = includeRetainer ? RETAINER : 0;

  const data = [];
  for (let m = 0; m <= HORIZON_MONTHS; m++) {
    data.push({
      month: m,
      statusQuo: Math.round(monthlyManual * m),
      engagement: Math.round(AUDIT_FEE + engagementMonthly * m),
    });
  }

  let crossover: { month: number; value: number } | null = null;
  for (let i = 1; i < data.length; i++) {
    if (data[i].engagement < data[i].statusQuo) {
      crossover = { month: data[i].month, value: data[i].engagement };
      break;
    }
  }

  const month12 = data[12];
  const twelveMonthSavings = month12
    ? month12.statusQuo - month12.engagement
    : 0;

  return (
    <Section
      id="calculator"
      numeral="III."
      label="The Crossover Calculator"
      variant="paper"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-12">
        {/* Left: intent + inputs */}
        <div className="col-span-12 lg:col-span-4">
          <h2 className="[font-family:var(--font-fraunces)] text-4xl md:text-5xl leading-[1.05] tracking-[-0.01em] text-[#1A1814] mb-6">
            Calculate the crossover.
          </h2>
          <p className="text-base text-[#1A1814]/70 leading-relaxed mb-10 max-w-md">
            Two trajectories. The status quo compounds; the engagement pays for
            itself. Find the month the lines{" "}
            <span className="italic text-[#B08A3E]">cross</span>.
          </p>

          <div className="space-y-8">
            {/* Manual hours per week */}
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label className="eyebrow text-[#5B6470]">
                  Manual hours per week
                </label>
                <span className="[font-family:var(--font-geist-mono)] text-base text-[#1A1814] tabular">
                  {hours}
                </span>
              </div>
              <input
                type="range"
                className="slider-brass"
                min={0}
                max={80}
                step={1}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
              />
              <div className="flex justify-between [font-family:var(--font-geist-mono)] text-xs text-[#8A929C] mt-2">
                <span>0</span>
                <span>40 (1 FTE)</span>
                <span>80</span>
              </div>
            </div>

            {/* Fully-loaded operator cost */}
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label className="eyebrow text-[#5B6470]">
                  Fully-loaded operator cost
                </label>
                <span className="[font-family:var(--font-geist-mono)] text-base text-[#1A1814] tabular">
                  ${rate}/hr
                </span>
              </div>
              <input
                type="range"
                className="slider-brass"
                min={10}
                max={60}
                step={5}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
              />
              <div className="flex justify-between [font-family:var(--font-geist-mono)] text-xs text-[#8A929C] mt-2">
                <span>$10</span>
                <span>$20</span>
                <span>$60</span>
              </div>
            </div>

            {/* Audit fee — fixed */}
            <div>
              <div className="flex items-baseline justify-between mb-1">
                <label className="eyebrow text-[#5B6470]">Audit fee</label>
                <span className="[font-family:var(--font-geist-mono)] text-xs text-[#5B6470]">
                  fixed
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="[font-family:var(--font-fraunces)] text-3xl text-[#B08A3E] leading-none">
                  $
                </span>
                <span className="[font-family:var(--font-geist-mono)] text-3xl text-[#1A1814] tabular leading-none">
                  999
                </span>
              </div>
            </div>

            {/* Toggles */}
            <div className="space-y-3 rule pt-6">
              <div className="eyebrow text-[#5B6470] mb-3">
                Optional engagement terms
              </div>
              {[
                {
                  label: "Include $5,000/mo managed retainer",
                  amount: "$5,000/mo",
                  checked: includeRetainer,
                  set: setIncludeRetainer,
                },
                {
                  label: "Include individually-priced solutions",
                  amount: "$TBD · scoped per engagement",
                  checked: includeSolutions,
                  set: setIncludeSolutions,
                },
              ].map((t) => (
                <label
                  key={t.label}
                  className="flex items-center justify-between gap-4 py-2 border-b border-[rgba(26,24,20,0.08)] cursor-pointer group"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`relative w-4 h-4 border ${
                        t.checked
                          ? "bg-[#B08A3E] border-[#835B2C]"
                          : "border-[rgba(26,24,20,0.18)] group-hover:border-[#1A1814]"
                      } transition-colors`}
                    >
                      {t.checked && (
                        <svg
                          viewBox="0 0 16 16"
                          className="absolute inset-0 text-[#F6EFE1]"
                        >
                          <path
                            d="M3 8 L7 12 L13 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="square"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm text-[#1A1814]">{t.label}</span>
                  </span>
                  <span className="[font-family:var(--font-geist-mono)] text-xs text-[#5B6470] tabular">
                    {t.amount}
                  </span>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={t.checked}
                    onChange={(e) => t.set(e.target.checked)}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right: chart */}
        <div className="col-span-12 lg:col-span-8 min-w-0 lg:pl-6 lg:border-l border-[rgba(26,24,20,0.18)]">
          {/* Chart header — financial reportage */}
          <div className="flex items-baseline justify-between mb-1">
            <div>
              <div className="eyebrow text-[#B08A3E] mb-2">Figure 01</div>
              <h3 className="[font-family:var(--font-fraunces)] text-2xl md:text-3xl text-[#1A1814] leading-tight">
                Cumulative cost trajectory
              </h3>
            </div>
            <div className="hidden md:flex flex-col items-end gap-1 eyebrow text-[#5B6470]">
              <span>Horizon · 24 months</span>
              <span className="tabular">
                As of{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
          <div className="rule mt-5 mb-6" />

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-6 eyebrow">
            <div className="flex items-center gap-2 text-[#9B2C2C]">
              <span className="w-6 h-px bg-[#9B2C2C]" />
              <span>Status quo (manual)</span>
            </div>
            <div className="flex items-center gap-2 text-[#1A1814]">
              <span
                className="w-6 h-px"
                style={{
                  background:
                    "repeating-linear-gradient(to right, #1A1814 0 4px, transparent 4px 8px)",
                }}
              />
              <span>Engagement</span>
            </div>
            {crossover && (
              <div className="flex items-center gap-2 text-[#B08A3E]">
                <span className="w-2 h-2 rounded-full bg-[#B08A3E]" />
                <span>Crossover · {fmtMonth(crossover.month)}</span>
              </div>
            )}
          </div>

          {/* Chart */}
          <div className="h-[360px] md:h-[420px] -ml-2 w-full">
            <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                <LineChart
                  data={data}
                  margin={{ top: 24, right: 24, left: 8, bottom: 8 }}
                >
                  <CartesianGrid
                    stroke="rgba(26,24,20,0.08)"
                    strokeDasharray="0"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    ticks={[0, 6, 12, 18, 24]}
                    tickFormatter={(m: number) => fmtMonth(Number(m))}
                    stroke="#5B6470"
                    tick={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: 11,
                      fill: "#5B6470",
                    }}
                    axisLine={{ stroke: "rgba(26,24,20,0.2)" }}
                    tickLine={false}
                  />
                  <YAxis
                    tickFormatter={(v: number) =>
                      `$${(Number(v) / 1000).toFixed(0)}k`
                    }
                    stroke="#5B6470"
                    tick={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: 11,
                      fill: "#5B6470",
                    }}
                    axisLine={false}
                    tickLine={false}
                    width={56}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#1A1814",
                      border: "none",
                      borderRadius: 0,
                      color: "#F6EFE1",
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: 12,
                      padding: "12px 14px",
                    }}
                    labelStyle={{
                      color: "#C9A26B",
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                    labelFormatter={(m: number) => fmtMonth(Number(m))}
                    formatter={(v: number, name: string) => [
                      fmtCurrency(v),
                      name === "statusQuo"
                        ? "Status quo (manual)"
                        : "Engagement",
                    ]}
                  />
                  {crossover && (
                    <>
                      <ReferenceLine
                        x={crossover.month}
                        stroke="#B08A3E"
                        strokeDasharray="2 4"
                        label={{
                          value: `Crossover · ${fmtMonth(crossover.month)}`,
                          position: "top",
                          fill: "#B08A3E",
                          fontSize: 11,
                          fontFamily: "var(--font-geist-mono)",
                        }}
                      />
                      <ReferenceDot
                        x={crossover.month}
                        y={crossover.value}
                        r={5}
                        fill="#B08A3E"
                        stroke="#F6EFE1"
                        strokeWidth={2}
                      />
                    </>
                  )}
                  <Line
                    type="monotone"
                    dataKey="statusQuo"
                    stroke="#9B2C2C"
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={true}
                    animationDuration={900}
                  />
                  <Line
                    type="monotone"
                    dataKey="engagement"
                    stroke="#1A1814"
                    strokeWidth={2}
                    strokeDasharray="6 6"
                    dot={false}
                    isAnimationActive={true}
                    animationDuration={900}
                  />
                </LineChart>
              </ResponsiveContainer>
          </div>

          {/* Footnote / methodology */}
          <div className="mt-4 rule pt-4 grid grid-cols-12 gap-4 [font-family:var(--font-geist-mono)] text-sm text-[#5B6470] leading-relaxed">
            <span className="col-span-12 md:col-span-7">
              Calculated at $20/hr fully-loaded operator cost (US mid-tier
              knowledge-worker rate). Adjust the rate to match your operation.
              Rates below $15/hr understate savings; above $50/hr, they’re
              aspirational. Numbers are estimates — production values are
              scoped per engagement.
            </span>
            <span className="col-span-12 md:col-span-5 md:text-right">
              Status quo: hours × rate × 4.33 weeks/month, compounded monthly.
              Engagement: audit fee / monthly retainer as toggled.
            </span>
          </div>

          {/* Result strip */}
          <div className="mt-10 grid grid-cols-3 gap-4 md:gap-6 border-t border-[#1A1814] pt-6">
            <div>
              <div className="eyebrow text-[#5B6470] mb-2">Crossover month</div>
              <div className="[font-family:var(--font-fraunces)] text-3xl md:text-4xl text-[#B08A3E] tabular leading-none">
                {crossover ? fmtMonth(crossover.month) : "—"}
              </div>
              <div className="[font-family:var(--font-geist-mono)] text-xs text-[#5B6470] mt-2">
                When engagement &lt; status quo
              </div>
            </div>
            <div>
              <div className="eyebrow text-[#5B6470] mb-2">12-month savings</div>
              <div className="[font-family:var(--font-fraunces)] text-3xl md:text-4xl text-[#1A1814] tabular leading-none">
                {twelveMonthSavings > 0 ? fmtCurrency(twelveMonthSavings) : "$0"}
              </div>
              <div className="[font-family:var(--font-geist-mono)] text-xs text-[#5B6470] mt-2">
                vs. status quo
              </div>
            </div>
            <div>
              <div className="eyebrow text-[#5B6470] mb-2">
                Hours / week returned
              </div>
              <div className="[font-family:var(--font-fraunces)] text-3xl md:text-4xl text-[#1A1814] tabular leading-none">
                {hours}
              </div>
              <div className="[font-family:var(--font-geist-mono)] text-xs text-[#5B6470] mt-2">
                Back to the business
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
