'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A web app built with Next.js and Firebase.',
      image: '/placeholder.jpg', // Replace with real image path
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A responsive e-commerce platform.',
      image: '/placeholder.jpg',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A portfolio site with stunning animations.',
      image: '/placeholder.jpg',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <section className="projects">
        <h2>Our Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={200}
                style={{ objectFit: 'cover' }}
              />
              <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}