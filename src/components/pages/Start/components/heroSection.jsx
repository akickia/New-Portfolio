import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <motion.article
      initial={{ x: '1500px' }}
      animate={{ x: 0 }}
      transition={{ ease: 'easeOut', duration: 0.25 }}
      className="hero"
    >
      <h1 className="hero__title">Kicki Lindstrand</h1>
      <section className="hero__subtitle">
        <div className="hero__subtitle__line"></div>
        <h3> &lt; Frontendutvecklare /&gt;</h3>
      </section>
    </motion.article>
  );
};
