"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormData = z.infer<typeof formSchema>

export async function sendContactForm(data: ContactFormData) {
  // Validate form data
  const result = formSchema.safeParse(data)

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors }
  }

  try {
    // In a real implementation, you would send an email here
    // For example, using a service like SendGrid, Mailgun, or AWS SES

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // For demonstration purposes, we'll just return success
    // In a real app, you would send the email and return the result

    console.log("Contact form submission:", data)

    return {
      success: true,
      message: "Your message has been sent successfully! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending contact form:", error)
    return {
      success: false,
      message: "Failed to send your message. Please try again later.",
    }
  }
}

