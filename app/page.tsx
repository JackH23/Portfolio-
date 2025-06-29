import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

type Project = {
  title: string;
  description: string;
  link: string;
  image?: string;
};

export default function Home() {
  const projects: Project[] = [
    {
      title: "Weather App",
      description: "A simple weather app using OpenWeatherMap API.",
      link: "https://your-weather-app.com",
      image: "https://via.placeholder.com/600x300?text=Weather+App",
    },
    {
      title: "Portfolio Website",
      description: "This personal portfolio you’re viewing now!",
      link: "#",
      image: "https://via.placeholder.com/600x300?text=Portfolio+Website",
    },
    {
      title: "Task Manager",
      description: "A task management tool built with React and Firebase.",
      link: "https://your-task-manager.com",
      image: "https://via.placeholder.com/600x300?text=Task+Manager",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-5 text-center bg-dark text-light">
        <div className="container">
          <h1 className="display-3 fw-bold">Jane Doe</h1>
          <p className="lead">Web Developer · Designer · Creator</p>
          <a href="#projects" className="btn btn-outline-light btn-lg mt-3">
            View My Work
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fs-2 fw-semibold mb-5">Projects</h2>
          <div className="row g-4">
            {projects.map((project) => (
              <div key={project.title} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  {project.image && (
                    <img
                      src={project.image}
                      className="card-img-top"
                      alt={project.title}
                    />
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{project.title}</h5>
                    <p className="card-text text-muted flex-grow-1">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary mt-3"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5 text-center border-top">
        <div className="container">
          <h2 className="fs-2 fw-semibold mb-4">Get in Touch</h2>
          <p className="mb-2">
            <strong>Email:</strong>{' '}
            <a
              href="mailto:jane.doe@example.com"
              className="text-decoration-none text-primary"
            >
              jane.doe@example.com
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://linkedin.com/in/janedoe"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-primary"
            >
              linkedin.com/in/janedoe
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}