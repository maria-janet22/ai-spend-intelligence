"use client";

import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import { supabase } from "../supabase";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#a855f7",
  "#ec4899",
  "#9333ea",
  "#d946ef",
  "#7e22ce",
];

export default function AnalyticsPage() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data, error } = await supabase
      .from("leads")
      .select("*");

    if (!error && data) {
      setData(data);
    }
  }

  const totalSpend = data.reduce(
    (sum, item) => sum + (item.total_spend || 0),
    0
  );

  const totalSavings = data.reduce(
    (sum, item) => sum + (item.monthly_savings || 0),
    0
  );

  // Professional Monthly Trend Data
  const spendTrendData = [
    { month: "Jan", spend: 3200 },
    { month: "Feb", spend: 4100 },
    { month: "Mar", spend: 4800 },
    { month: "Apr", spend: 5300 },
    { month: "May", spend: 6200 },
  ];

  // Professional Tool Usage Data
  const toolUsageData = [
    { name: "ChatGPT", value: 40 },
    { name: "Notion AI", value: 25 },
    { name: "Claude", value: 15 },
    { name: "Midjourney", value: 10 },
    { name: "Jasper", value: 10 },
  ];

  // ROI Comparison Data
  const roiData = [
    {
      month: "Current",
      spend: totalSpend || 55000,
      savings: totalSavings || 49000,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <Navbar />

      <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-14 mt-10">
        Analytics Dashboard
      </h1>

      {/* KPI CARDS */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-zinc-900 rounded-3xl border border-purple-900 p-6">
          <h2 className="text-gray-400 mb-2">
            Total AI Spend Analyzed
          </h2>

          <p className="text-4xl font-bold text-pink-400">
            {totalSpend}
          </p>
        </div>

        <div className="bg-zinc-900 rounded-3xl border border-purple-900 p-6">
          <h2 className="text-gray-400 mb-2">
            Potential Savings
          </h2>

          <p className="text-4xl font-bold text-green-400">
            {totalSavings}
          </p>
        </div>

        <div className="bg-zinc-900 rounded-3xl border border-purple-900 p-6">
          <h2 className="text-gray-400 mb-2">
            Audits Generated
          </h2>

          <p className="text-4xl font-bold text-purple-400">
            {data.length}
          </p>
        </div>

      </div>

      {/* CHARTS */}

      <div className="grid lg:grid-cols-2 gap-8">

        {/* MONTHLY SPEND TREND */}

        <div className="bg-zinc-900 border border-purple-900 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Monthly AI Spend Trend
          </h2>

          <div className="h-[300px]">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={spendTrendData}>

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="spend"
                  fill="#a855f7"
                  radius={[8, 8, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* TOOL USAGE DISTRIBUTION */}

        <div className="bg-zinc-900 border border-purple-900 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            AI Tool Usage Distribution
          </h2>

          <div className="h-[300px]">

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={toolUsageData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >

                  {toolUsageData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* ROI COMPARISON */}

        <div className="bg-zinc-900 border border-purple-900 rounded-3xl p-6 lg:col-span-2">

          <h2 className="text-2xl font-bold mb-6">
            Spend vs Savings Overview
          </h2>

          <div className="h-[350px]">

            <ResponsiveContainer width="100%" height="100%">

              <LineChart data={roiData}>

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="spend"
                  stroke="#a855f7"
                  strokeWidth={4}
                />

                <Line
                  type="monotone"
                  dataKey="savings"
                  stroke="#ec4899"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </main>
  );
}