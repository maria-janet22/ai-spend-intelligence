"use client";

import { useState, useEffect } from "react";
import { supabase } from "../supabase";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#9333EA", "#EC4899"];

export default function AuditForm() {

  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const [tool, setTool] = useState("ChatGPT");
  const [spend, setSpend] = useState("");
  const [people, setPeople] = useState("");

  const [tool2, setTool2] = useState("Claude");
  const [spend2, setSpend2] = useState("");
  const [people2, setPeople2] = useState("");

  const [result, setResult] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const [totalSpend, setTotalSpend] = useState(0);

  const [monthlySavings, setMonthlySavings] =
    useState(0);

  const [annualSavings, setAnnualSavings] =
    useState(0);

  const [savingsPercent, setSavingsPercent] =
    useState(0);

  const [aiSummary, setAiSummary] = useState("");

  useEffect(() => {
  localStorage.setItem(
    "auditData",
    JSON.stringify({
    company,
    role,
    tool,
    tool2,
    spend,
    spend2,
    people,
    people2,
    })
  );
}, [
  company,
  role,
  tool,
  tool2,
  spend,
  spend2,
  people,
  people2,
]);


  useEffect(() => {

    localStorage.setItem("email", email);
    localStorage.setItem("company", company);
    localStorage.setItem("role", role);

    localStorage.setItem("tool", tool);
    localStorage.setItem("spend", spend);
    localStorage.setItem("people", people);

    localStorage.setItem("tool2", tool2);
    localStorage.setItem("spend2", spend2);
    localStorage.setItem("people2", people2);

  }, [
    
  email,
  company,
  role,
  tool,
  spend,
  people,
  tool2,
  spend2,
  people2,
  ]);

  useEffect(() => {

    const savedTool =
      localStorage.getItem("tool");

    const savedSpend =
      localStorage.getItem("spend");

    const savedPeople =
      localStorage.getItem("people");

    const savedTool2 =
      localStorage.getItem("tool2");

    const savedSpend2 =
      localStorage.getItem("spend2");

    const savedPeople2 =
      localStorage.getItem("people2");

      const savedEmail =
      localStorage.getItem("email");

    const savedCompany =
      localStorage.getItem("company");

    const savedRole =
      localStorage.getItem("role");

    if (savedEmail) setEmail(savedEmail);

    if (savedCompany) setCompany(savedCompany);

    if (savedRole) setRole(savedRole);

    if (savedTool) setTool(savedTool);
    if (savedSpend) setSpend(savedSpend);
    if (savedPeople) setPeople(savedPeople);

    if (savedTool2) setTool2(savedTool2);
    if (savedSpend2) setSpend2(savedSpend2);
    if (savedPeople2) setPeople2(savedPeople2);

  }, []);

  async function generateAudit() {

    const total =
      Number(spend || 0) +
      Number(spend2 || 0);

    setTotalSpend(total);

    let message = "";
    let rec = "";
    let savings = 0;

    if (total > 1000) {

      message =
        "You are heavily overspending across your AI subscriptions.";

      rec =
        "Switch to bundled AI platforms or downgrade unused premium plans.";

      savings = total - 500;

    } else if (total > 500) {

      message =
        "Your AI spending is moderate but can still be optimized.";

      rec =
        "Consider replacing expensive tools with cheaper alternatives.";

      savings = total - 300;

    } else {

      message =
        "Your AI spending looks optimized and healthy.";

      rec =
        "Current subscriptions are well balanced for your usage.";

      savings = 0;
    }

    if (tool === "Perplexity") {

      rec =
        "Perplexity Pro may replace multiple research subscriptions.";
    }

    if (tool2 === "Midjourney") {

      rec =
        "Midjourney can be shared across teams to reduce cost.";
    }

    if (tool === "DeepSeek") {

      rec =
        "DeepSeek provides lower-cost AI reasoning alternatives.";
    }

    if (tool2 === "Replit AI") {

      rec =
        "Replit AI may replace separate coding assistant subscriptions.";
    }

    const yearly =
      savings * 12;

    const percent =
      total > 0
        ? Math.round((savings / total) * 100)
        : 0;

    setResult(message);

    setRecommendation(rec);

    setMonthlySavings(savings);

    setAnnualSavings(yearly);

    setSavingsPercent(percent);

    const response = await fetch("/api/summary", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
    },
    body: JSON.stringify({
      company,
      spend: totalSpend,
      savings: monthlySavings,
      tools: `${tool}, ${tool2}`,
    }),
   });

   if (response.ok) {

  const data = await response.json();

  setAiSummary(data.summary);

} else {

  setAiSummary(
    "AI summary could not be generated right now."
  );
}
  }

  async function saveReport() {

  await supabase.from("leads").insert([
    {
      email,
      company,
      role,
      total_spend: totalSpend,
      monthly_savings: monthlySavings,
    },
  ]);

  alert("Report Saved Successfully!");
}

  const chartData = [
    {
      name: tool,
      value: Number(spend || 0),
    },
    {
      name: tool2,
      value: Number(spend2 || 0),
    },
  ];

  return (

  <>

    {/* BACKGROUND GLOW */}

    <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-700/20 blur-3xl rounded-full -z-10" />

    <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/20 blur-3xl rounded-full -z-10" />

    {/* HERO SECTION */}

    <section className="text-center py-24 px-6">

      <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-8">

        AI Spend Intelligence

      </h1>

      <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">

        Analyze, optimize, and reduce AI software costs across your organization using intelligent audit insights.

      </p>

    </section>

    {/* MAIN CONTAINER */}

    <div className="w-full max-w-6xl mx-auto px-6 pb-24">

      {/* MAIN FORM CARD */}

      <div className="bg-zinc-900/70 backdrop-blur-xl border border-purple-900 rounded-3xl p-10 shadow-2xl">

        <h2 className="text-5xl font-bold text-center mb-4">

          AI Spend Audit

        </h2>

        <p className="text-center text-gray-400 mb-12 text-lg">

          Analyze and optimize your AI subscription costs.

        </p>

        {/* TOOL GRID */}

        <div className="grid md:grid-cols-2 gap-10">

          {/* FIRST TOOL */}

          <div className="space-y-5 bg-black/20 p-6 rounded-2xl">

            <h3 className="text-2xl font-semibold text-purple-400">

              Primary AI Tool

            </h3>

            <select
              value={tool}
              onChange={(e) =>
                setTool(e.target.value)
              }
              className="w-full bg-black border border-purple-800 rounded-xl p-4 text-white"
            >

              <option>ChatGPT</option>
              <option>Claude</option>
              <option>Cursor</option>
              <option>GitHub Copilot</option>
              <option>Gemini</option>
              <option>OpenAI API</option>
              <option>Anthropic API</option>
              <option>Windsurf</option>

            </select>

            <input
              type="number"
              placeholder="Monthly Spend"
              value={spend}
              onChange={(e) =>
                setSpend(e.target.value)
              }
              className="w-full bg-black border border-purple-800 rounded-xl p-4 text-white"
            />

            <input
              type="number"
              placeholder="Users"
              value={people}
              onChange={(e) =>
                setPeople(e.target.value)
              }
              className="w-full bg-black border border-purple-800 rounded-xl p-4 text-white"
            />

          </div>

          {/* SECOND TOOL */}

          <div className="space-y-5 bg-black/20 p-6 rounded-2xl">

            <h3 className="text-2xl font-semibold text-pink-400">

              Secondary AI Tool

            </h3>

            <select
              value={tool2}
              onChange={(e) =>
                setTool2(e.target.value)
              }
              className="w-full bg-black border border-purple-800 rounded-xl p-4 text-white"
            >

              <option>ChatGPT</option>
              <option>Claude</option>
              <option>Cursor</option>
              <option>GitHub Copilot</option>
              <option>Gemini</option>
              <option>OpenAI API</option>
              <option>Anthropic API</option>
              <option>Windsurf</option>

            </select>

            <input
              type="number"
              placeholder="Monthly Spend"
              value={spend2}
              onChange={(e) =>
                setSpend2(e.target.value)
              }
              className="w-full bg-black border border-purple-800 rounded-xl p-4 text-white"
            />

            <input
              type="number"
              placeholder="Users"
              value={people2}
              onChange={(e) =>
                setPeople2(e.target.value)
              }
              className="w-full bg-black border border-purple-800 rounded-xl p-4 text-white"
            />

          </div>

        </div>

              <div className="flex justify-center gap-6 mt-10">

  <button
    type="button"
    onClick={() => generateAudit()}
    className="bg-gradient-to-r from-purple-600 to-pink-500 px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition"
  >

    Generate AI Audit

  </button>

  {result && (

    <a
      href="/sample-report.pdf"
      download
      className="bg-zinc-900 border border-purple-700 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-purple-900/30 transition"
    >

      Download Report

    </a>

  )}

</div>

      </div>

      {/* RESULTS */}


      {result && (

        <div className="mt-14 space-y-10">

          <div className="grid md:grid-cols-2 gap-8">

            {/* SUMMARY */}

            <div className="bg-zinc-900/70 border border-purple-900 rounded-3xl p-8 hover:scale-105 duration-300">

              <h3 className="text-3xl font-bold mb-6 text-purple-400">

                Audit Summary

              </h3>

              <div className="space-y-5 text-lg">

                <p>
                  <span className="font-semibold text-white">
                    Result:
                  </span>{" "}
                  {result}
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Recommendation:
                  </span>{" "}
                  {recommendation}
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Total Spend:
                  </span>{" "}
                  {totalSpend}
                </p>

              </div>

            </div>

            {/* SAVINGS */}

            <div className="bg-zinc-900/70 border border-purple-900 rounded-3xl p-8 hover:scale-105 duration-300">

              <h3 className="text-3xl font-bold mb-6 text-pink-400">

                Savings Analysis

              </h3>

              <div className="space-y-5 text-lg">

                <p>
                  <span className="font-semibold text-white">
                    Monthly Savings:
                  </span>{" "}
                  {monthlySavings}
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Annual Savings:
                  </span>{" "}
                  {annualSavings}
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Savings Percentage:
                  </span>{" "}
                  {savingsPercent}%
                </p>

              </div>

            </div>

          </div>

                    {/* USER INFO */}

        <div className="grid md:grid-cols-3 gap-5 mb-10">

          <div>

            <label className="block mb-2 text-gray-300">
              Email
            </label>

            <input
              type="email"
              placeholder="you@gmail.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full bg-black border border-purple-800 rounded-xl p-4 text-white"
            />

          </div>

          <div>

            <label className="block mb-2 text-gray-300">
              Company
            </label>

            <input
              type="text"
              placeholder="Startup Name"
              value={company}
              onChange={(e) =>
                setCompany(e.target.value)
              }
              className="w-full bg-black border border-purple-800 rounded-xl p-4 text-white"
            />

          </div>

          <div>

            <label className="block mb-2 text-gray-300">
              Role
            </label>

            <input
              type="text"
              placeholder="Founder"
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
              className="w-full bg-black border border-purple-800 rounded-xl p-4 text-white"
            />

          </div>
           </div>

           <button
              onClick={saveReport}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-4 rounded-2xl font-semibold mt-6"
            >

             Save Report

            </button>

            <div className="bg-zinc-900/70 border border-purple-900 rounded-3xl p-8">

             <h3 className="text-3xl font-bold text-purple-400 mb-5">

                AI Generated Audit Summary

              </h3>

              <p className="text-gray-300 leading-8 text-lg">

                 {aiSummary}

             </p>

             </div>

          {/* CHART */}

          <div className="bg-zinc-900/70 border border-purple-900 rounded-3xl p-10">

            <h3 className="text-3xl font-bold text-center mb-10 text-purple-400">

              AI Spend Distribution

            </h3>

            <div className="h-[400px]">

              <ResponsiveContainer width="100%" height="100%">

                <PieChart>

                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={140}
                    label
                  >

                    {chartData.map((entry, index) => (

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

        </div>

      )}

    </div>

  </>

  );
}