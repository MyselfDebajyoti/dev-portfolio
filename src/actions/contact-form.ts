'use server'

import nodemailer from 'nodemailer'

const action = async (_: { success: boolean; message: string } | null, formData: FormData) => {
  try {
    // Input validation
    const name = formData.get('name')
    if (!name)
      return {
        success: false,
        message: 'Please provide your name.',
      }

    const email = formData.get('email')
    if (!email)
      return {
        success: false,
        message: 'Please provide your email address.',
      }

    const subject = formData.get('subject')
    if (!subject)
      return {
        success: false,
        message: 'Please provide a subject.',
      }

    const message = formData.get('message')
    if (!message)
      return {
        success: false,
        message: 'Please provide a message.',
      }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.toString())) {
      return {
        success: false,
        message: 'Please provide a valid email address.',
      }
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
      debug: true,
    })

    try {
      // Verify connection configuration
      await transporter.verify()

      // Send email
      await transporter.sendMail({
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        replyTo: email.toString(),
        subject: `Portfolio Contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.toString().replace(/\n/g, '<br>')}</p>
        `,
      })

      return {
        success: true,
        message: 'Thanks for your message! I will get back to you soon.',
      }
    } catch (err) {
      console.error('Email sending error:', err)
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
