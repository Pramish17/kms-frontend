import React, { useState, useEffect } from 'react';

const StaffProjectPage = () => {
  const initialProjects = [
    { id: 1, name: 'Project A', date: '2022-01-01', staffName: 'Pramish Thapa', clientName:'Harrow FC' },
    { id: 2, name: 'Project B', date: '2022-02-01', staffName: 'David Watson', clientName:'UWL' },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [newProject, setNewProject] = useState({ name: '', date: '', staffName: '', clientName: '' });
  const [editingProject, setEditingProject] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (editingProject === null) {
      setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
    } else {
      const updatedProjects = projects.map((project) =>
        project.id === editingProject.id ? { ...project, ...newProject } : project
      );
      setProjects(updatedProjects);
      setEditingProject(null);
    }

    setNewProject({ name: '', date: '', staffName: '', clientName: '' });
  };

  const handleDeleteProject = (projectId) => {
    const updatedProjects = projects.filter((project) => project.id !== projectId);
    setProjects(updatedProjects);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setNewProject(project);
  };

  const handleCancelEdit = () => {
    setEditingProject(null);
    setNewProject({ name: '', date: '', staffName: '', clientName:'' });
  };

  return (
    <div className="container mt-5 mb-5">
      <h1 className="mb-4">Projects</h1>

      {/* Project Form */}
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Project Name:</label>
          <input
            type="text"
            className="form-control"
            value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Project Date:</label>
          <input
            type="date"
            className="form-control"
            value={newProject.date}
            onChange={(e) => setNewProject({ ...newProject, date: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Staff Name:</label>
          <input
            type="text"
            className="form-control"
            value={newProject.staffName}
            onChange={(e) => setNewProject({ ...newProject, staffName: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Client Name:</label>
          <input
            type="text"
            className="form-control"
            value={newProject.clientName}
            onChange={(e) => setNewProject({ ...newProject, clientName: e.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-primary me-2">
          {editingProject ? 'Update Project' : 'Add Project'}
        </button>
        {editingProject && (
          <button type="button" className="btn btn-secondary" onClick={handleCancelEdit}>
            Cancel
          </button>
        )}
      </form>

      {/* Project List */}
      <ul className="list-group mt-4">
        {projects.map((project) => (
          <li key={project.id} className="list-group-item d-flex justify-content-between align-items-center">
            {project.name} - {project.date} - {project.staffName} - {project.clientName}
            <div>
              <button className="btn btn-success me-2" onClick={() => handleEditProject(project)}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => handleDeleteProject(project.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffProjectPage;
