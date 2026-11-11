"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { useLanguage } from "@/context/language-context";

export function DcaInteractiveSandbox() {
  const { lang, dict } = useLanguage();
  const dSim = dict.simulator;
  const isTh = lang === "th";

  const [monthly, setMonthly] = useState(3000);
  const [annualRate, setAnnualRate] = useState(8.0);
  const [years, setYears] = useState(15);
  const [stepUpPct, setStepUpPct] = useState(5.0);
  const [shockPct, setShockPct] = useState(0);
  const [goalTarget, setGoalTarget] = useState(1500000);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  const metrics = useMemo(() => {
    const months = years * 12;
    const r = annualRate / 100 / 12;
    const factor = Math.pow(1 + r, months);
    const reqPmt = r > 0 ? goalTarget / (((factor - 1) / r) * (1 + r)) : goalTarget / months;

    const labels: string[] = [];
    const plainSeries: number[] = [];
    const geoSaveSeries: number[] = [];
    const dcaSeries: number[] = [];

    let plainTotal = 0;
    let geoSaveTotal = 0;
    let dcaTotal = 0;
    const shockYear = Math.max(1, Math.floor(years / 2));

    for (let y = 1; y <= years; y++) {
      const geoMonthly = monthly * Math.pow(1 + stepUpPct / 100, y - 1);
      for (let m = 1; m <= 12; m++) {
        plainTotal += monthly;
        geoSaveTotal += geoMonthly;
        dcaTotal = (dcaTotal + monthly) * (1 + r);
      }
      if (shockPct > 0 && y === shockYear) {
        dcaTotal *= 1 - shockPct / 100;
      }
      labels.push(isTh ? `ปีที่ ${y}` : `Yr ${y}`);
      plainSeries.push(Math.round(plainTotal));
      geoSaveSeries.push(Math.round(geoSaveTotal));
      dcaSeries.push(Math.round(dcaTotal));
    }

    return {
      months,
      reqPmt: Math.round(reqPmt),
      plainTotal: Math.round(plainTotal),
      geoSaveTotal: Math.round(geoSaveTotal),
      dcaTotal: Math.round(dcaTotal),
      gainPct: plainTotal > 0 ? (((dcaTotal - plainTotal) / plainTotal) * 100).toFixed(1) : "0.0",
      labels,
      plainSeries,
      geoSaveSeries,
      dcaSeries,
    };
  }, [monthly, annualRate, years, stepUpPct, shockPct, goalTarget, isTh]);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    chartInstanceRef.current = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: metrics.labels,
        datasets: [
          {
            label: dSim.curve1,
            data: metrics.plainSeries,
            borderColor: "#A5B0C8",
            borderWidth: 2,
            borderDash: [5, 5],
            tension: 0.25,
            fill: false,
          },
          {
            label: dSim.curve2,
            data: metrics.geoSaveSeries,
            borderColor: "#4D8DFF",
            borderWidth: 2.5,
            tension: 0.3,
            fill: false,
          },
          {
            label: dSim.curve3,
            data: metrics.dcaSeries,
            borderColor: "#35E6A1",
            backgroundColor: "rgba(53, 230, 161, 0.14)",
            borderWidth: 3,
            tension: 0.35,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: { labels: { color: "#F5F7FF" } },
        },
        scales: {
          x: { ticks: { color: "#A5B0C8" }, grid: { color: "rgba(245,247,255,0.05)" } },
          y: { ticks: { color: "#A5B0C8" }, grid: { color: "rgba(245,247,255,0.05)" } },
        },
      },
    });
    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, [metrics, dSim]);

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald/25 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-emerald uppercase tracking-wider">{dSim.badge}</span>
          <h3 className="font-display font-bold text-2xl text-ink mt-1">{dSim.heading}</h3>
          <p className="text-xs sm:text-sm text-ink-secondary mt-1">{dSim.subheading}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setMonthly(3000);
            setAnnualRate(8.0);
            setYears(15);
            setStepUpPct(5.0);
            setShockPct(0);
            setGoalTarget(1500000);
          }}
          className="px-3.5 py-2 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-white/15 text-xs font-mono text-ink-secondary hover:text-ink transition-colors self-start"
        >
          {dSim.resetBtn}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 space-y-4 bg-void/70 p-5 rounded-2xl border border-white/10">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-ink-secondary">{dSim.lblMonthly}</span>
              <span className="font-mono font-bold text-emerald">฿{monthly.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={500}
              max={30000}
              step={500}
              value={monthly}
              onChange={(e) => setMonthly(Number(e.target.value))}
              className="w-full accent-emerald"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-ink-secondary">{dSim.lblRate}</span>
              <span className="font-mono font-bold text-purple">{annualRate.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min={1}
              max={18}
              step={0.5}
              value={annualRate}
              onChange={(e) => setAnnualRate(Number(e.target.value))}
              className="w-full accent-purple"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-ink-secondary">{dSim.lblYears}</span>
              <span className="font-mono font-bold text-techblue">
                {years} {isTh ? "ปี" : "Yrs"} ({metrics.months} mo)
              </span>
            </div>
            <input
              type="range"
              min={3}
              max={35}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full accent-techblue"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-ink-secondary">{dSim.lblStep}</span>
              <span className="font-mono font-bold text-ink">{stepUpPct.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={15}
              step={1}
              value={stepUpPct}
              onChange={(e) => setStepUpPct(Number(e.target.value))}
              className="w-full accent-emerald"
            />
          </div>

          <div className="pt-2 border-t border-white/10">
            <span className="text-xs text-ink-secondary block mb-2">{dSim.lblShock}</span>
            <div className="grid grid-cols-4 gap-2">
              {[0, 15, 25, 35].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setShockPct(s)}
                  className={`px-2 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                    shockPct === s
                      ? "bg-emerald text-void"
                      : "bg-surface-elevated text-ink-secondary hover:text-ink"
                  }`}
                >
                  {s === 0 ? "0%" : `-${s}%`}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-white/10">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-purple font-semibold">{dSim.lblGoal}</span>
              <span className="font-mono font-bold text-purple">
                ฿{goalTarget.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={200000}
              max={5000000}
              step={100000}
              value={goalTarget}
              onChange={(e) => setGoalTarget(Number(e.target.value))}
              className="w-full accent-purple"
            />
            <div className="mt-2 p-2.5 rounded-xl bg-purple/10 border border-purple/25 text-xs flex justify-between">
              <span className="text-ink-secondary">{dSim.reqPmtLbl}</span>
              <span className="font-mono font-bold text-emerald">
                ฿{metrics.reqPmt.toLocaleString()} / mo
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col justify-between gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-void/80 border border-white/10">
              <div className="text-xs text-ink-muted">{dSim.curve1}</div>
              <div className="font-display font-bold text-xl text-ink mt-1">
                ฿{metrics.plainTotal.toLocaleString()}
              </div>
              <div className="text-[11px] font-mono text-ink-muted mt-0.5">{dSim.curve1Sub}</div>
            </div>
            <div className="p-4 rounded-2xl bg-void/80 border border-techblue/25">
              <div className="text-xs text-techblue">{dSim.curve2}</div>
              <div className="font-display font-bold text-xl text-techblue mt-1">
                ฿{metrics.geoSaveTotal.toLocaleString()}
              </div>
              <div className="text-[11px] font-mono text-ink-muted mt-0.5">{dSim.curve2Sub}</div>
            </div>
            <div className="p-4 rounded-2xl bg-void/80 border border-emerald/35">
              <div className="text-xs text-emerald">{dSim.curve3}</div>
              <div className="font-display font-bold text-xl text-emerald mt-1">
                ฿{metrics.dcaTotal.toLocaleString()}
              </div>
              <div className="text-[11px] font-mono text-emerald/80 mt-0.5">
                +{metrics.gainPct}% vs principal
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-void/90 border border-white/10">
            <div className="relative h-72 w-full">
              <canvas ref={canvasRef} />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-muted">
            <span>{dSim.formulaNote}</span>
            <span className="text-emerald">{dSim.verifyNote}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
