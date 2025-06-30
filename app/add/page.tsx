'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
  image?: string;
}

export default function AddProjectPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState('');
  const [addedProject, setAddedProject] = useState<Project | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject: Project = { title, description, link, image };
    setAddedProject(newProject);
    setTitle('');
    setDescription('');
    setLink('');
    setImage('');
  };

  return (
    <main className="container py-5" style={{ maxWidth: '600px' }}>
      <h1 className="fw-bold mb-4">Add New Project</h1>
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Link</label>
          <input
            type="url"
            className="form-control"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="url"
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Project</button>
      </form>

      {addedProject && (
        <div>
          <h2 className="fw-semibold mb-3">Preview</h2>
          <div className="card">
            {addedProject.image && (
              <img
                src={addedProject.image}
                className="card-img-top"
                alt={addedProject.title}
              />
            )}
            <div className="card-body">
              <h5 className="card-title">{addedProject.title}</h5>
              <p className="card-text">{addedProject.description}</p>
              <a
                href={addedProject.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
