// Vercel Serverless Function for sending emails with Nodemailer
// CRITICAL: Use async/await, NOT callbacks - callbacks don't work in serverless!

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Enable CORS (optional but recommended)
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({
            message: 'Method not allowed. Only POST requests are supported.',
            success: false
        });
    }

    const { name, email, subject, message } = req.body;

    // ✅ Validate input
    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            message: 'All fields (name, email, subject, message) are required',
            success: false
        });
    }

    // ✅ Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: 'Invalid email address format',
            success: false
        });
    }

    // ✅ Validate message length (prevent spam)
    if (message.length > 5000) {
        return res.status(400).json({
            message: 'Message is too long. Maximum 5000 characters.',
            success: false
        });
    }

    try {
        // ✅ Check environment variables
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error('Missing SMTP environment variables');
            return res.status(500).json({
                message: 'Server configuration error',
                success: false,
            });
        }

        // ✅ Create transporter with SMTP credentials
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_PORT === '465', // true for 465, false for 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            debug: process.env.NODE_ENV === 'development',
            logger: process.env.NODE_ENV === 'development',
        });

        // ✅ Verify transporter (optional but recommended)
        try {
            await transporter.verify();
        } catch (verifyError) {
            console.error('SMTP verification failed:', verifyError);
            return res.status(500).json({
                message: 'Email service configuration error',
                success: false,
            });
        }

        // ✅ Create professional HTML email
        const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; }
          .container { max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .header h2 { margin: 0; font-size: 24px; }
          .content { background: white; padding: 30px 20px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: 600; color: #2563eb; margin-bottom: 5px; }
          .value { color: #374151; }
          .message-box { background: #f3f4f6; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0; border-radius: 4px; }
          .footer { background: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 12px; border-radius: 0 0 8px 8px; }
          a { color: #2563eb; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>✉️ New Contact Form Submission</h2>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">👤 From:</div>
              <div class="value">${name}</div>
            </div>

            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>

            <div class="field">
              <div class="label">📝 Subject:</div>
              <div class="value">${subject}</div>
            </div>

            <div class="field">
              <div class="label">💬 Message:</div>
              <div class="message-box">
                ${message.split('\n').map(line => `<p>${line || '&nbsp;'}</p>`).join('')}
              </div>
            </div>

            <div class="field" style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 20px;">
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                <strong>Sent at:</strong> ${new Date().toLocaleString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        })}
              </p>
            </div>
          </div>

          <div class="footer">
            <p>This is an automated message from your portfolio contact form.</p>
            <p>To reply, simply respond to this email.</p>
          </div>
        </div>
      </body>
      </html>
    `;

        // ✅ Email options
        const mailOptions = {
            from: `"${process.env.SENDER_NAME || 'Portfolio'}" <${process.env.SMTP_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            html: htmlContent,
            text: `New Contact Form Submission\n\nFrom: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        };

        // ⚠️ CRITICAL: Use await, NOT callbacks!
        // Callbacks don't work in serverless functions - they execute after function terminates
        const info = await transporter.sendMail(mailOptions);

        console.log('Email sent successfully. Message ID:', info.messageId);

        // ✅ Send success response
        return res.status(200).json({
            message: 'Email sent successfully! I will get back to you soon.',
            success: true,
            messageId: info.messageId,
        });

    } catch (error) {
        console.error('Error sending email:', error);

        // Send error response
        return res.status(500).json({
            message: process.env.NODE_ENV === 'development'
                ? `Error: ${error.message}`
                : 'Failed to send email. Please try again later.',
            success: false,
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
}
