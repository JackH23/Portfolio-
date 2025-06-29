type Project = {
  title: string;
  description: string;
  link: string;
};

export default function Home() {
  const projects: Project[] = [
    {
      title: "Weather App",
      description: "A simple weather app using OpenWeatherMap API.",
      link: "https://your-weather-app.com",
    },
    {
      title: "Portfolio Website",
      description: "This personal portfolio you’re viewing now!",
      link: "#",
    },
    {
      title: "Task Manager",
      description: "A task management tool built with React and Firebase.",
      link: "https://your-task-manager.com",
    },
  ];

  return (
    <div className="p-8 font-sans">
      {/* Header */}
      <header className="text-center mb-12">
        <h1>Hello, I'm Jane Doe</h1>
        <p>Web Developer | Designer | Creator</p>
      </header>

      {/* Projects Section */}
      <section>
        <h2 className="text-lg font-semibold">Projects</h2>
        <div className="flex flex-wrap gap-6 mt-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-300 rounded-lg p-4 w-72"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold">Contact Me</h2>
        <p>Email: jane.doe@example.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/janedoe"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/janedoe
          </a>
        </p>
      </section>
    </div>
  );
}
