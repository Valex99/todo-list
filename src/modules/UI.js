import binIcon from "../icons/bin-icon.png";
import pencilIcon from "../icons/pencil-outline.png";
import plusIcon from "../icons/plus.png";
import projectIcon from "../images/check-icon.png";
import {
  addProject,
  getAllProjects,
  getLastAddedProject,
  removeProject,
  initializeDefaultProject,
  taskAmount,
  projectCout,
  changeName,
} from "./logic.js";

let selected = null;

export function createNav() {
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

  // FUNCTION CALLS:
  // When nav is created add default project to projects array
  initializeDefaultProject();
  // Update selected ->
  selected = getLastAddedProject().name;

  // Create header element
  createProjectHeader();
}

// Function that creates selected project header
function createProjectHeader() {
  const content = document.getElementById("content");

  const currentProjectDiv = document.createElement("div");
  currentProjectDiv.classList.add("current-project-div");

  //   currentProjectDiv.appendChild(currentProjectDivIcons);
  content.appendChild(currentProjectDiv);

  // First this needs to be called
  updateProjectHeader();
  // Once header is created, append sidebar to it
  projectSidebar();
}

// Update project header -> last added project
function updateProjectHeader() {
  const projectHeader = document.querySelector(".current-project-div");
  const lastAddedProject = getLastAddedProject().name;
  //console.log(lastAddedProject);
  projectHeader.textContent = lastAddedProject;

  appendHeaderIcons();
}

function appendHeaderIcons() {
  const currentProjectDivIcons = document.createElement("div");
  currentProjectDivIcons.classList.add("current-project-div-icons");

  const currentProjectDiv = document.querySelector(".current-project-div");

  const bin = document.createElement("img");
  bin.src = binIcon;
  bin.alt = "Bin Icon";

  const pencil = document.createElement("img");
  pencil.src = pencilIcon;
  pencil.alt = "Pencil Icon";

  currentProjectDivIcons.appendChild(pencil);
  currentProjectDivIcons.appendChild(bin);

  currentProjectDiv.appendChild(currentProjectDivIcons);

  pencil.addEventListener("click", () => {
    editProjectName();
    // Open modal that allows you to change name of the project
    // It should also change name of project header
    // And project sidebar
  });

  bin.addEventListener("click", () => {
    // Check if there is more than one project present
    if (projectCout() <= 1) {
      alert("App requires a minimum of one project!");
    } else {
      removeProject(selected); // THIS THING WORKS
      // Now project needs to be removed from the dom!
      const selectedProject = document.querySelector(".selected");
      const projectSidebarParent = document.querySelector(
        ".project-sidebar-parent-div"
      );

      // Remove project
      projectSidebarParent.removeChild(selectedProject);

      // set selected to last project in the projects array
      selected = getLastAddedProject().name;
      console.log("Selected after removing:", selected);

      // Select last project in the array -> Highlight it and set header text content
      updateProjectHeader();

      const remainingProjects = document.querySelectorAll(".project");
      remainingProjects.forEach((project) => {
        const projectName = project.querySelector("p").textContent;
        if (projectName === selected) {
          project.classList.add("selected");
        }
      });
    }
  });
}

function projectSidebar() {
  const projectSidebarParentDiv = document.createElement("div");
  projectSidebarParentDiv.classList.add("project-sidebar-parent-div");

  const projectSidebar = document.createElement("div");
  projectSidebar.classList.add("project-sidebar");
  projectSidebar.textContent = "Projects";

  const plus = document.createElement("img");
  plus.src = plusIcon;
  plus.alt = "Plus Icon";

  projectSidebar.appendChild(plus);
  content.appendChild(projectSidebar);
  projectSidebarParentDiv.appendChild(projectSidebar);
  content.appendChild(projectSidebarParentDiv);

  plus.addEventListener("click", () => {
    displayProjectModal();
  });

  // Render ALL projects
  renderNewProject();
}

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
  modalTitle.textContent = "Add New Project";

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
      // Add new project to projects array
      addProject(projectName);
      // Then display new project
      renderNewProject();
      selected = projectName;
      document.body.removeChild(modalOverlay);
    } else {
      alert("Project name is required!");
    }
  });
}

// Rendering new projects
function renderNewProject() {
  const projectSidebarParent = document.querySelector(
    ".project-sidebar-parent-div"
  );

  const projectDiv = document.createElement("div");
  const projectName = document.createElement("p");
  const lastAddedProject = getLastAddedProject().name;

  // Call function to remove all selected classes BEFORE adding IT
  removeSelectedClass();

  // Must call it!
  updateProjectHeader();

  //projectDiv.textContent = lastAddedProject;
  projectName.textContent = lastAddedProject;
  projectDiv.classList.add("project");
  projectDiv.classList.add("selected");

  const taskCounter = document.createElement("p");
  taskCounter.classList.add("task-counter");

  // UPDATE THIS WITH FUNCTION CALL LATER
  taskCounter.textContent = taskAmount();

  projectDiv.appendChild(projectName);
  projectDiv.appendChild(taskCounter);
  projectSidebarParent.appendChild(projectDiv);

  // Add event listener to each project div
  projectDiv.addEventListener("click", () => {
    // Clear any selected class first
    removeSelectedClass();

    const currentProjectDiv = document.querySelector(".current-project-div");

    projectDiv.classList.add("selected");
    selected = projectName.textContent;
    //console.log(selected);
    currentProjectDiv.textContent = selected;

    appendHeaderIcons();

    taskAmount();
  });
}

// Select element with class .selected, if there is any remove it!
function removeSelectedClass() {
  const selected = document.querySelector(".selected");
  if (selected) {
    selected.classList.remove("selected");
  }
}
// Hnadle clicks on edit icons
// Add button to add tasks to projects
// Maybe query dom for items as a global variables so you dont have to do it twice
function editProjectName() {
  // Modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");

  // Modal content
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // Title
  const modalTitle = document.createElement("h2");
  modalTitle.textContent = "Edit Project Name";

  // Close button
  const closeButton = document.createElement("button");
  closeButton.classList.add("modal-close");
  closeButton.textContent = "✕";

  // Input field
  const inputContainer = document.createElement("div");
  const inputLabel = document.createElement("label");
  inputLabel.textContent = "Name";
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.placeholder = selected;

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

  // New project name shouldnt be the same as any existing project
  // This function should also be called as new projects are created
  // Handle submit button (add your logic here)
  submitButton.addEventListener("click", () => {
    const newName = inputField.value.trim();
    console.log(newName);
    if (newName && newName !== selected) {
      console.log("Edited project name:", newName);
      // Call function that editsProjectName
      changeName(selected, newName);

      // Change name updated array -> now update UI
      const projectHeader = document.querySelector(".current-project-div");
      const selectedProject = document.querySelector(".selected");

      // Update selected
      selected = newName;

      selectedProject.querySelector("p").textContent = selected;
      projectHeader.textContent = selected;

      // Update project header
      document.body.removeChild(modalOverlay);

      // Update project sidebar
    } else {
      alert("Project name is required!");
    }
  });
}
