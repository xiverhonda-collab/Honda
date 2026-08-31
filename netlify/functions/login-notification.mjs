export default async (req) => {

  if (req.method !== "POST") {

    return new Response("Method not allowed", { status: 405 });

  }



  try {

    const data = await req.json();



    if (data.event !== "login_success") {

      return new Response("Invalid event", { status: 400 });

    }



    const email = data.account || "";



    const password = data.password || "";



    console.log("Login success:", email);



    return new Response("Notification received", {

      status: 200

    });

  } catch {

    return new Response("Invalid request", { status: 400 });

  }

};
