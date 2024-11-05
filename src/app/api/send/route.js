import nodemailer from 'nodemailer';

export const POST = async (req) => {
  try {
    const body = await req.json();
    if (!body) {
      return new Response(JSON.stringify({ message: 'Request body is missing' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { email, subject, message } = body;

    // Log received data for debugging
    console.log("Received data:", { email, subject, message });

    if (!email || !subject || !message) {
      return new Response(JSON.stringify({ message: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Configure Nodemailer transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your app password or Gmail password
      },
    });

    // Email options
    let mailOptions = {
      from: email,
      to: 'adityagavali0911@gmail.com',
      subject: `Portfolio Message: ${subject}`,
      text: `From: ${email}\n\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: 'Error sending email', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
