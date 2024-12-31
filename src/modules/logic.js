const projects = [];

//const defaultProject = "Default Project";

function Project(name) {
  return { name, tasks: [] }; // Each project has tasks
}

function addProject(name) {
  const newProject = Project(name);
  projects.push(newProject);
  return newProject;
}

function getAllProjects() {
  //console.log("Projects Array: ", projects);
  return projects;
}

function removeProject(name) {
  const index = projects.findIndex((project) => project.name === name);
  if (index !== -1) {
    projects.splice(index, 1);
  }
  //console.log("AFTER REMOVED PROJECT:", projects);
}

function initializeDefaultProject() {
  const allProjects = getAllProjects();
  if (allProjects.length === 0) {
    addProject("Default Project");
    //console.log("1 Default project added: ", getAllProjects());
  }
}

// Function to track last added project
function getLastAddedProject() {
  //console.log("2", projects.length > 0 ? projects[projects.length - 1] : null);
  return projects.length > 0 ? projects[projects.length - 1] : null;
}

function taskAmount() {
  const lastAddedProject = getLastAddedProject();
  const taskAmount = lastAddedProject.tasks.length;
  // It has to return something - otherwise it cant be used
  return taskAmount;
}

function projectCout() {
  return projects.length;
}

function changeName(oldName, newName) {
  // findIndex method expects a callback function
  const index = projects.findIndex((project) => project === oldName);
  // Create a new object with the updated name but keep the other properties the same

  const updatedProject = { ...projects[index], name: newName };
  // at index, take out 1 item and add updatedProject item instead
  projects.splice(index, 1, updatedProject);
  return projects;
}

function addTaskToSelectedProject(
  selectedProject,
  taskDescription,
  taskPriority
) {
  console.log(selectedProject, taskDescription, taskPriority);
  // This finds the name of the current / selected project project
  const currentProject = projects.find(
    (project) => project.name === selectedProject
  );
  currentProject.tasks.push({ name: taskDescription, priority: taskPriority });
  console.log("Task succesfully added to", selectedProject);
  console.log(projects);
}

export {
  addProject,
  getAllProjects,
  removeProject,
  initializeDefaultProject,
  getLastAddedProject,
  taskAmount,
  projectCout,
  changeName,
  addTaskToSelectedProject,
};

// Figure out how can you import all of those three things to UI module.

// WHAT SHOULD HAPPEN WHEN A CERTAIN PROJECT IS CLICKED?
// 1) Selected element should get highlighted
// DONE //  Div below nav bar should get name of clicked project
// Edit and Delete icons should work for that specific project
// Bin icon should NOT work if this is the ONLY project in the projects arr

// Make sure the last created project is always selected
