import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    const projects = [
      {
        title: 'Weather App',
        description: 'A simple weather app using OpenWeatherMap API.',
        link: 'https://your-weather-app.com'
      },
      {
        title: 'Portfolio Website',
        description: 'This personal portfolio you’re viewing now!',
        link: '#'
      },
      {
        title: 'Task Manager',
        description: 'A task management tool built with React and Firebase.',
        link: 'https://your-task-manager.com'
      }
    ];

    return (
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1>Hello, I'm Jane Doe</h1>
          <p>Web Developer | Designer | Creator</p>
        </header>

        {/* Projects Section */}
        <section>
          <h2>Projects</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1rem' }}>
            {projects.map((project, index) => (
              <div key={index} style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '1rem',
                width: '300px',
              }}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ marginTop: '4rem' }}>
          <h2>Contact Me</h2>
          <p>Email: jane.doe@example.com</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/janedoe" target="_blank" rel="noreferrer">linkedin.com/in/janedoe</a></p>
        </section>
      </div>
    );
  }
}
