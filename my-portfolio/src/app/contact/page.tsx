'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type ContactFormInputs = {
  name: string
  email: string
  company: string
  message: string
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<ContactFormInputs>()

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setIsSubmitting(true)
    try {
      // Replace with your actual form submission logic (e.g., API call)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setSubmitSuccess(true)
        reset()
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-lg">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Me</h1>
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
      >
        <div>
          <label 
            htmlFor="name" 
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
          >
            Name
          </label>
          <input
            {...register('name', { 
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' }
            })}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label 
            htmlFor="email" 
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label 
            htmlFor="email" 
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
          >
            Company
          </label>
          <input
            type="text"
            {...register('company', { 
              required: 'company is required',
            })}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            placeholder="Your Company's Name "
          />
          {errors.company && (
            <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
          )}
        </div>

        <div>
          <label 
            htmlFor="message" 
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            {...register('message', { 
              required: 'Message is required',
              minLength: { value: 10, message: 'Message must be at least 10 characters' }
            })}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            rows={4}
            placeholder="Your message..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitSuccess && (
          <p className="text-green-500 text-center mt-4">
            Message sent successfully!
          </p>
        )}
      </form>
    </div>
  )
}