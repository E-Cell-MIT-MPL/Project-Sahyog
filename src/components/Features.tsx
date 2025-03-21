import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: 'Performance',
      description: 'Optimized for speed and efficiency',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Design',
      description: 'Beautiful and intuitive interfaces',
      image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Innovation',
      description: 'Cutting-edge technology solutions',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-purple-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Features</h2>
          <p className="text-xl text-gray-400">Discover what makes us different</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="overflow-hidden rounded-lg">
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;