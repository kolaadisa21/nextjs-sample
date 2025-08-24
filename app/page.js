'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <h1 className="nav-logo">MySite</h1>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <h1>Welcome to My Beautiful Website</h1>
          <p>A modern, responsive portfolio built with Next.js and custom CSS.</p>
          <motion.a
            href="#projects"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="project-card-content">
                <h3>Project {item}</h3>
                <p>A brief description of an amazing project you built.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 MySite. All rights reserved.</p>
      </footer>
    </div>
  );
}