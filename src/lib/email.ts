import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendTicketEmail(
  to: string,
  details: {
    movieTitle: string;
    showtime: string;
    seats: string[];
    amount: number;
    orderId: string;
    name: string;
  }
) {
  const { movieTitle, showtime, seats, amount, orderId, name } = details;

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 10px;">
      <div style="background: #000; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: #fff; margin: 0;">Booking Confirmed!</h1>
      </div>
      
      <div style="background: #fff; padding: 20px; border-radius: 0 0 10px 10px; border: 1px solid #ddd;">
        <p>Hi ${name},</p>
        <p>Your tickets for <strong>${movieTitle}</strong> are confirmed.</p>
        
        <div style="background: #f0f0f0; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>Date & Time:</strong> ${showtime}</p>
          <p style="margin: 5px 0;"><strong>Seats:</strong> ${seats.join(', ')}</p>
          <p style="margin: 5px 0;"><strong>Venue:</strong> College Theatre</p>
          <p style="margin: 5px 0;"><strong>Order ID:</strong> ${orderId}</p>
          <p style="margin: 5px 0;"><strong>Amount Paid:</strong> ₹${amount}</p>
        </div>

        <p style="font-size: 12px; color: #666;">Please show this email at the entrance. Enjoy the movie!</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"College Tech Fest" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Ticket Confirmed: ${movieTitle}`,
    html,
  });
}
