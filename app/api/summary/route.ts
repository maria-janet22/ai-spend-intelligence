import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {

  const body = await req.json();

  const prompt = `
  Company: ${body.company}

  Total Spend: ${body.spend}

  Savings: ${body.savings}

  Tools Used:
  ${body.tools}

  Generate a professional 100-word AI audit summary with cost optimization suggestions.
  `;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return Response.json({
    summary:
      completion.choices[0].message.content,
  });
}