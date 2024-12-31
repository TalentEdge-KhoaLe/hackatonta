import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_TOKEN, // This is the default and can be omitted
});

async function callQwenModel(data: any): Promise<string> {
  try {
    const messages = [
      {
        role: "user",
        content: `Given the following tasks with their priorities, what should I do first? ${
          data.map(
            (task: any) =>
              `{Title: ${task.title}, Description: ${task.description}, Priority: ${task.priority}} `
          ) +
          'Return all the tasks with struction how to do it ,in priority order that you think I should do first. and in JSON format like this ["title": "task title", "instruction": "instruction"]. No Yapping'
        }`,
      },
    ];

    const chatCompletion = await client.chat.completions.create({
      model: "gpt-4",
      messages: messages as any,
      max_tokens: 1000,
    });

    return chatCompletion.choices[0].message.content || "";
  } catch (error) {
    console.error("Error calling OpenAI model:", error);
    throw new Error("Failed to call OpenAI model");
  }
}

export { callQwenModel };
