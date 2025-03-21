import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-400">Let's create something amazing together</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -2 }}
              className="group"
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              className="group"
            >
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              />
            </motion.div>
          </div>
          <motion.div
            whileHover={{ y: -2 }}
            className="group"
          >
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
            />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto px-8 py-3 bg-purple-500 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-purple-600 transition-colors"
          >
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;