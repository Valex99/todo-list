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
  console.log("Projects Array: ", projects);
  return projects;
}

function removeProject(name) {
  const index = projects.findIndex((project) => project.name === name);
  if (index !== -1) {
    projects.splice(index, 1);
  }
}

function initializeDefaultProject() {
  const allProjects = getAllProjects();
  if (allProjects.length === 0) {
    addProject("Default Project");
    console.log("Default project added: ", getAllProjects());
  } 
}

export { addProject, getAllProjects, removeProject, initializeDefaultProject };

// Figure out how can you import all of those three things to UI module.

// WHAT SHOULD HAPPEN WHEN A CERTAIN PROJECT IS CLICKED?
// 1) Selected element should get highlighted
// Div below nav bar should get name of clicked project
// Edit and Delete icons should work for that specific project
// Bin icon should NOT work if this is the ONLY project in the projects arr
