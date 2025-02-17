'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-12 text-center text-primary dark:text-primary-light">
            Contact Me
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8"
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <EnvelopeIcon className="h-8 w-8 text-primary dark:text-primary-light" />
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Email</p>
                    <a 
                      href="mailto:mamadouwoury641@gmail.com" 
                      className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light"
                    >
                      mamadouwoury641@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <PhoneIcon className="h-8 w-8 text-primary dark:text-primary-light" />
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Phone</p>
                    <a 
                      href="tel:+32456138195" 
                      className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light"
                    >
                      +32 456 13 81 95
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPinIcon className="h-8 w-8 text-primary dark:text-primary-light" />
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Location</p>
                    <p className="text-gray-800 dark:text-gray-200">
                      Antwerp, Belgium
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6"
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
                  className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/60 text-white transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitSuccess && (
                  <p className="text-green-500 text-center mt-4">
                    Message sent successfully!
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}