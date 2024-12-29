// UI.JS Full code

import binIcon from "../icons/bin-icon.png";
import pencilIcon from "../icons/pencil-outline.png";
import plusIcon from "../icons/plus.png";
import projectIcon from "../images/check-icon.png";
import {
  addProject,
  getAllProjects,
  defaultProject,
  getLastAddedProject,
  initializeDefaultProject,
} from "./logic.js";

function createNav() {
  const nav = document.querySelector("nav");

  const navDiv = document.createElement("div");
  navDiv.classList.add("nav-div");

  const icon = document.createElement("img");
  icon.classList.add("icon");
  icon.src = projectIcon;
  icon.alt = "ToDo Icon";

  const title = document.createElement("h1");
  title.classList.add("project-title");
  title.textContent = "TODO List";

  const githubButton = document.createElement("a");
  githubButton.classList.add("github-button");
  githubButton.textContent = "View on Github";
  githubButton.href = "https://github.com/Valex99/todo-list";

  navDiv.appendChild(icon);
  navDiv.appendChild(title);
  navDiv.appendChild(githubButton);

  nav.appendChild(navDiv);

  // When nav is created -> call function to create Project
  initializeDefaultProject();
  getLastAddedProject();
  createProjects();
}
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// Function that creates selected project header
export function createProjects() {
  const content = document.getElementById("content");
  const currentProjectDiv = document.createElement("div");
  currentProjectDiv.classList.add("current-project-div");

  // This will need to be edited
  currentProjectDiv.textContent = defaultProject;

  const currentProjectDivIcons = document.createElement("div");
  currentProjectDivIcons.classList.add("current-project-div-icons");

  const bin = document.createElement("img");
  bin.src = binIcon;
  bin.alt = "Bin Icon";

  const pencil = document.createElement("img");
  pencil.src = pencilIcon;
  pencil.alt = "Pencil Icon";

  currentProjectDivIcons.appendChild(pencil);
  currentProjectDivIcons.appendChild(bin);

  currentProjectDiv.appendChild(currentProjectDivIcons);

  content.appendChild(currentProjectDiv);

  // Create project sidebar
  const projectSidebarParentDiv = document.createElement("div");
  projectSidebarParentDiv.classList.add("project-sidebar-parent-div");

  const projectSidebar = document.createElement("div");
  projectSidebar.classList.add("project-sidebar");
  projectSidebar.textContent = "Projects";

  const plus = document.createElement("img");
  plus.src = plusIcon;
  plus.alt = "Plus Icon";

  projectSidebar.appendChild(plus);
  //content.appendChild(projectSidebar);
  projectSidebarParentDiv.appendChild(projectSidebar);
  content.appendChild(projectSidebarParentDiv);

  plus.addEventListener("click", () => {
    // Call a function to create and display the modal
    displayProjectModal();
  });
}

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// Function to display the project modal
function displayProjectModal() {
  // Modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");

  // Modal content
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // Title
  const modalTitle = document.createElement("h2");
  modalTitle.textContent = "Project";

  // Close button
  const closeButton = document.createElement("button");
  closeButton.classList.add("modal-close");
  closeButton.textContent = "✕";

  // Input field
  const inputContainer = document.createElement("div");
  const inputLabel = document.createElement("label");
  inputLabel.textContent = "Name*";
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.placeholder = "Enter project name";

  inputContainer.appendChild(inputLabel);
  inputContainer.appendChild(inputField);

  // Submit button
  const submitButton = document.createElement("button");
  submitButton.classList.add("modal-submit");
  submitButton.textContent = "SUBMIT";

  // Append children to modal
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(closeButton);
  modalContent.appendChild(inputContainer);
  modalContent.appendChild(submitButton);
  modalOverlay.appendChild(modalContent);

  // Add the modal to the body
  document.body.appendChild(modalOverlay);

  // Close modal logic
  closeButton.addEventListener("click", () => {
    document.body.removeChild(modalOverlay);
  });
  // Close modal when clicking on the overlay (background)
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      document.body.removeChild(modalOverlay);
    }
  });

  // Handle submit button (add your logic here)
  submitButton.addEventListener("click", () => {
    const projectName = inputField.value.trim();
    if (projectName) {
      console.log("New project name:", projectName);
      addProject(projectName);
      //getAllProjects();
      renderProjects();
      // After rendering projects find the last added project
      selectLastAddedProject();

      // THIS FUNCTION HOLDS THE REFERENCE TO LAST ADDED PROJECT
      // Call function to add class selected to it.
      //console.log("Last Added project is: ");
      //getLastAddedProject();

      // Last project in the projects array - AKA. Last added project should have a class of selected - ut should also be displayed.
      document.body.removeChild(modalOverlay);
    } else {
      alert("Project name is required!");
    }
  });
}

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// Rendering new projects
function renderProjects() {
  const projectSidebarParent = document.querySelector(
    ".project-sidebar-parent-div"
  );

  // First remove all appended projects
  removeAllAppendedItems();

  // Get all projects from projects array and for each
  const allProjects = getAllProjects();
  allProjects.forEach((project) => {
    // Create a new div, name it as project is called and add class .project to that div
    const projectDiv = document.createElement("div");
    projectDiv.textContent = project.name;
    projectDiv.classList.add("project");

    // When you switch between elements, remember to use add and remove classes!
    // Add event listener to each project div
    projectDiv.addEventListener("click", () => {
      removeSelectedClass();

      projectDiv.classList.add("selected");
      const selectedProject = project.name;
      console.log("Selected project is: ", selectedProject);
      const currentProjectDiv = document.querySelector(".current-project-div");
      currentProjectDiv.textContent = selectedProject;

      // Add function here to mark that project
    });

    const taskCounter = document.createElement("p");
    taskCounter.classList.add("task-counter");
    // UPDATE THIS WITH FUNCTION CALL LATER
    taskCounter.textContent = "0";
    projectDiv.appendChild(taskCounter);
    projectSidebarParent.appendChild(projectDiv);
  });
}

function removeAllAppendedItems() {
  const projectSidebarParent = document.querySelector(
    ".project-sidebar-parent-div"
  );
  const displayedProject = document.querySelectorAll(".project");
  displayedProject.forEach((item) => {
    projectSidebarParent.removeChild(item);
  });
}

// Select element with class .selected, if there is any remove it!
function removeSelectedClass() {
  const selected = document.querySelector(".selected");
  if (selected) {
    selected.classList.remove("selected");
  }
}

function selectLastAddedProject() {
  const projectDiv = document.querySelectorAll("project");
  // Get the last added project name
  const lastProject = getLastAddedProject().name;
  console.log("LAST ADDED PROJECT NAME: ", lastProject);

  projectDiv.forEach((project) => {
    if (projectDiv.textContent === lastProject) {
      // Maybe add function to clear all selected classes
      projectDiv.classList.add(".selected");
    }
  });
}

export { createNav, renderProjects };
// SOlution, add a new div and place preoject-sidebar in it (parent div to project sidebar)
// Let parent div have display flex direction column and keep direction row to sidebar div

// getLastAddedProject HOLDS THE REFERENCE TO THE LAST ADDED PROJECT, CHECK CONSOLE
// FIGURE OUT HOW TO HIGHLIGHT IT EACH TIME A PROJECT IS ADDED!

// EXPLAIN CODE TO YOURSELF - WHAT CALLS WHAT!

// It should work like this...
// Last project in the projects array is always selected (index - 1)
// If user clicks on any of of the projects, call function to override selected project
// first it clears all projects and then it selects that project

// LOGIC.JS FULL CODE

const projects = [];

const defaultProject = "Default Project";

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

// function removeProject(name) {
//   const index = projects.findIndex((project) => project.name === name);
//   if (index !== -1) {
//     projects.splice(index, 1);
//   }
// }

function initializeDefaultProject() {
  const allProjects = getAllProjects();
  if (allProjects.length === 0) {
    addProject("Default Project");
    console.log("1 Default project added: ", getAllProjects());
  }
}

// Function to track last added project
function getLastAddedProject() {
  console.log("2", projects.length > 0 ? projects[projects.length - 1] : null);
  return projects.length > 0 ? projects[projects.length - 1] : null;
}

export {
  addProject,
  getAllProjects,
  //removeProject,
  initializeDefaultProject,
  defaultProject,
  getLastAddedProject,
};

// Figure out how can you import all of those three things to UI module.

// WHAT SHOULD HAPPEN WHEN A CERTAIN PROJECT IS CLICKED?
// 1) Selected element should get highlighted
// DONE //  Div below nav bar should get name of clicked project
// Edit and Delete icons should work for that specific project
// Bin icon should NOT work if this is the ONLY project in the projects arr

// Make sure the last created project is always selected

// INDEX.JS FULL CODE

import "./styles.css";

//import createNav from "./modules/UI";
import { createProjects } from "./modules/UI";
import { initializeDefaultProject } from "./modules/logic";
import { createNav, renderProjects } from "./modules/UI";
//import { renderProjects } from "./modules/UI";

/* HOW AN ARRAY OF OBJECT SHOULD LOOK LIKE

let TODO = [
    {
        name: "Default Project",
        tasks: [
            { name: "Do homework", priority: "first" },
            { name: "Do the laundry", priority: "second" }
            ]
            },
            {
                name: "First Project",
                tasks: [
                    { name: "Pay the bills", priority: "first" },
                    { name: "Call a mechanic", priority: "second" }
                    ]
                    }
                    ];
                    */
createNav();
//createProjects();
initializeDefaultProject();
renderProjects();
//getLastAddedProject();
//renderProjects();
