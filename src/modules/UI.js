import binIcon from "../icons/bin-icon.png";
import pencilIcon from "../icons/pencil-outline.png";
import plusIcon from "../icons/plus.png";
import projectIcon from "../images/check-icon.png";

// Import functions from logic.js
import { addProject, getAllProjects } from "./logic.js";

// EXTEND THIS FUNCTION, IT SHOULDNT ONLY CREATE NAV
// IT SHOUOL HANDLE ALL DOM INTERRACTIONS

// Function to create navigator bar (static - always the same)
export default function createNav() {
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

  const githubButton = document.createElement("button");
  githubButton.classList.add("github-button");
  githubButton.textContent = "View on Github";

  navDiv.appendChild(icon);
  navDiv.appendChild(title);
  navDiv.appendChild(githubButton);

  nav.appendChild(navDiv);
}

// Function that creates selected project header
export function createProjects() {
  const content = document.getElementById("content");

  const currentProjectDiv = document.createElement("div");
  currentProjectDiv.classList.add("current-project-div");
  currentProjectDiv.textContent = "Default Project (Placeholder)";

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

// Function to display the project modal
export function displayProjectModal() {
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
      getAllProjects();
      //console.log("Projects array", projects);
      renderProjects();

      document.body.removeChild(modalOverlay);
    } else {
      alert("Project name is required!");
    }
  });
}

// Rendering new projects
function renderProjects() {
  const projectSidebarParent = document.querySelector(
    ".project-sidebar-parent-div"
  );
  //projectSidebarParent.innerHTML = "";
  const displayedProject = document.querySelectorAll(".project");
  displayedProject.forEach((item) => {
    projectSidebarParent.removeChild(item)
  });

  const allProjects = getAllProjects();
  console.log("Function: renderProjects Activated", allProjects);
  allProjects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.textContent = project.name;
    projectDiv.classList.add("project");
    projectSidebarParent.appendChild(projectDiv);
  });
}

//export { renderProjects };
// SOlution, add a new div and place preoject-sidebar in it (parent div to project sidebar)
// Let parent div have display flex direction column and keep direction row to sidebar div
