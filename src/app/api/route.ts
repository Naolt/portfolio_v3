import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response("Please fill in all fields", { status: 400 });
  }

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `Portfolio:  <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `Portfolio: New message from ${name}`,
      text: message,
      html: `
      <!DOCTYPE html>
      <html>
      <body>
        <div style="font-family: Arial, sans-serif; margin: 20px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #4CAF50;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      </body>
      </html>
    `,
    });

    return new Response(JSON.stringify({ message: "Email sent" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
