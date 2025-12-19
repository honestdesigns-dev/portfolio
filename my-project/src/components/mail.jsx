import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

export default function HireMeForm({ onClose }) {
  const [state, handleSubmit] = useForm("xlgrdjvg");

  // Auto-close on success after a delay (optional, but good UX)
  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        if (onClose) onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
    >
      <div
        className="absolute inset-0"
        onClick={onClose}
      ></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 border border-zinc-200 dark:border-zinc-800"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-red-500 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {state.succeeded ? (
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold text-green-500 mb-2">Message Sent!</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Thanks! I'll get back to you soon.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">Let's work together!</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-[#FF4D00] hover:bg-black text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
