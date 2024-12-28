const projects = [];

function Project(name) {
  return { name, tasks: [] }; // Each project has tasks
}

function addProject(name) {
  const newProject = Project(name);
  projects.push(newProject);
  return newProject;
}

function getAllProjects() {
  console.log("Projects Array: ",projects);
  return projects;
}

function removeProject(name) {
  const index = projects.findIndex((project) => project.name === name);
  if (index !== -1) {
    projects.splice(index, 1);
  }
}

export { addProject, getAllProjects, removeProject };

// Figure out how can you import all of those three things to UI module.
