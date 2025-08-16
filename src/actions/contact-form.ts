// 'use server'

// import nodemailer from 'nodemailer'

// const action = async (_: { success: boolean; message: string } | null, formData: FormData) => {
//   try {
//     // Input validation
//     const name = formData.get('name')
//     if (!name)
//       return {
//         success: false,
//         message: 'Please provide your name.',
//       }

//     const email = formData.get('email')
//     if (!email)
//       return {
//         success: false,
//         message: 'Please provide your email address.',
//       }

//     const subject = formData.get('subject')
//     if (!subject)
//       return {
//         success: false,
//         message: 'Please provide a subject.',
//       }

//     const message = formData.get('message')
//     if (!message)
//       return {
//         success: false,
//         message: 'Please provide a message.',
//       }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(email.toString())) {
//       return {
//         success: false,
//         message: 'Please provide a valid email address.',
//       }
//     }

//     // Create Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_APP_PASSWORD,
//       },
//       debug: true,
//     })

//     try {
//       // Verify connection configuration
//       await transporter.verify()

//       // Send email
//       await transporter.sendMail({
//         from: `"${name}" <${process.env.EMAIL_USER}>`,
//         to: process.env.EMAIL_TO,
//         replyTo: email.toString(),
//         subject: `Portfolio Contact: ${subject}`,
//         text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
//         html: `
//           <h3>New Contact Form Submission</h3>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Subject:</strong> ${subject}</p>
//           <p><strong>Message:</strong></p>
//           <p>${message.toString().replace(/\n/g, '<br>')}</p>
//         `,
//       })

//       return {
//         success: true,
//         message: 'Thanks for your message! I will get back to you soon.',
//       }
//     } catch (err) {
//       console.error('Email sending error:', err)
//       return {
//         success: false,
//         message: 'Failed to send email. Please try again later.',
//       }
//     }
//   } catch (error) {
//     console.error('Contact form submission error:', error)
//     return {
//       success: false,
//       message: 'Oops! There was a problem submitting your form. Please try again later.',
//     }
//   }
// }

// export default action

'use server'

import sgMail from '@sendgrid/mail'

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

const action = async (_: { success: boolean; message: string } | null, formData: FormData) => {
  try {
    // Input validation
    const name = formData.get('name')
    if (!name) {
      return {
        success: false,
        message: 'Please provide your name.',
      }
    }

    const email = formData.get('email')
    if (!email) {
      return {
        success: false,
        message: 'Please provide your email address.',
      }
    }

    const subject = formData.get('subject')
    if (!subject) {
      return {
        success: false,
        message: 'Please provide a subject.',
      }
    }

    const message = formData.get('message')
    if (!message) {
      return {
        success: false,
        message: 'Please provide a message.',
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.toString())) {
      return {
        success: false,
        message: 'Please provide a valid email address.',
      }
    }

    // Prepare email content
    const emailContent = {
      to: process.env.EMAIL_TO!, // Your email where you want to receive messages
      from: process.env.SENDGRID_FROM_EMAIL!, // Must be verified in SendGrid
      replyTo: email.toString(), // This allows you to reply directly to the sender
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #667eea; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #fff; border: 1px solid #e1e1e1; padding: 20px; border-radius: 10px;">
            <h3 style="color: #667eea; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #333; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 5px;">
            <p style="margin: 0; color: #1976d2; font-size: 14px;">
              💡 You can reply directly to this email to respond to ${name}
            </p>
          </div>
        </div>
      `,
    }

    try {
      // Send email using SendGrid
      await sgMail.send(emailContent)

      console.log('Email sent successfully via SendGrid')

      return {
        success: true,
        message: 'Thanks for your message! I will get back to you soon.',
      }
    } catch (error) {
      console.error('SendGrid error:', error)

      // Log more detailed error information
      if (
        typeof error === 'object' &&
        error !== null &&
        'response' in error &&
        typeof (error as any).response === 'object' &&
        (error as any).response !== null &&
        'body' in (error as any).response
      ) {
        console.error('SendGrid error details:', (error as any).response.body)
      }

      return {
        success: false,
        message: 'Failed to send email. Please try again later.',
      }
    }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return {
      success: false,
      message: 'Oops! There was a problem submitting your form. Please try again later.',
    }
  }
}

export default action

/* 
SETUP INSTRUCTIONS:

1. Install SendGrid:
   npm install @sendgrid/mail

2. Sign up for SendGrid:
   - Go to https://sendgrid.com/
   - Free tier: 100 emails/day forever
   - Create an account

3. Get API Key:
   - Go to Settings > API Keys
   - Create API Key with "Full Access" or "Mail Send" permissions
   - Copy the API key (starts with SG.)

4. Verify Sender Identity:
   - Go to Settings > Sender Authentication
   - Verify a Single Sender (add your email address)
   - Check your email and click verification link

5. Environment Variables (.env.local):
   SENDGRID_API_KEY=SG.your-sendgrid-api-key-here
   SENDGRID_FROM_EMAIL=your-verified-email@domain.com
   EMAIL_TO=your-personal-email@domain.com

6. Alternative: Domain Authentication (recommended for production):
   - If you own a domain, verify your entire domain instead
   - This allows you to send from any email@yourdomain.com
   - Go to Settings > Sender Authentication > Authenticate Your Domain

EXAMPLE .env.local:
SENDGRID_API_KEY=SG.1234567890abcdefghijklmnopqrstuvwxyz
SENDGRID_FROM_EMAIL=noreply@yourdomain.com
EMAIL_TO=your-personal@gmail.com
*/
