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
  addTaskToSelectedProject,
  displayAllTasksForSelectedProject,
} from "./logic.js";

let selected = null;
let selectedTask = null;
const content = document.getElementById("content");
const html = document.querySelector("html");

let noTasksDivMessageExists = false;

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
  // First call so taskdiv gets created - to append later
  taskDivContainer();
  // When nav is created add default project to projects array
  initializeDefaultProject();
  // Update selected ->
  selected = getLastAddedProject().name;

  // Create header element
  createProjectHeader();
}

// Function that creates selected project header
function createProjectHeader() {
  const currentProjectDiv = document.createElement("div");
  currentProjectDiv.classList.add("current-project-div");

  content.appendChild(currentProjectDiv);

  updateProjectHeader();
  projectSidebar(); // Once header is created, append sidebar to it
  createAddTask();
}

// Update project header -> last added project
function updateProjectHeader() {
  const projectHeader = document.querySelector(".current-project-div");
  const lastAddedProject = getLastAddedProject().name;
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
  });

  bin.addEventListener("click", () => {
    // Check if there is more than one project present
    if (projectCout() <= 1) {
      alert("App requires a minimum of one project!");
    } else {
      removeProject(selected);
      // Now project needs to be removed from the dom!
      const selectedProject = document.querySelector(".selected");
      const projectSidebarParent = document.querySelector(
        ".project-sidebar-parent-div"
      );

      // Remove project
      projectSidebarParent.removeChild(selectedProject);

      // set selected to last project in the projects array
      selected = getLastAddedProject().name;

      const taskContainer = document.querySelector(".task-container");
      taskContainer.innerHTML = "";
      console.log(
        "CHECKING VARIABLE AFTER CLEARING HTML",
        noTasksDivMessageExists
      );
      if (taskAmount(selected) === 0 && noTasksDivMessageExists === false) {
        noTasksDivMessage();
      } else {
        displayAllTasksForSelectedProject(selected);
      }

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

  renderNewProject(); // Render ALL projects
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

  submitButton.addEventListener("click", () => {
    const projectName = inputField.value.trim();
    if (projectName) {
      // This is new
      const taskContainer = document.querySelector(".task-container");
      taskContainer.innerHTML = "";
      noTasksDivMessage();

      //console.log("New project name:", projectName);
      selected = projectName;
      addProject(projectName); // Add new project to projects array
      renderNewProject(); // Then display new project

      // No need for this since when adding new project it will have no tasks
      //displayAllTasksForSelectedProject(selected)

      document.body.removeChild(modalOverlay); // Hide modal
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
  if (taskAmount(selected) === 0 && noTasksDivMessageExists === false) {
    noTasksDivMessage();
    //noTasksDivMessageExists = true;
    console.log("ZERO TASKS");
  } else {
    console.log("task amount is bigger than 0");
  }

  taskCounter.textContent = taskAmount(selected);

  projectDiv.appendChild(projectName);
  projectDiv.appendChild(taskCounter);
  projectSidebarParent.appendChild(projectDiv);

  // Add event listener to each project div
  projectDiv.addEventListener("click", () => {
    removeSelectedClass(); // Clear any selected class first

    const currentProjectDiv = document.querySelector(".current-project-div");

    projectDiv.classList.add("selected");
    selected = projectName.textContent;
    console.log("SELECTED: ", selected);
    currentProjectDiv.textContent = selected;
    appendHeaderIcons();

    // Clear task-container as well (bin icon should do the same)
    const taskContainer = document.querySelector(".task-container");
    taskContainer.innerHTML = "";

    noTasksDivMessageExists = false;

    if (taskAmount(selected) === 0 && noTasksDivMessageExists === false) {
      noTasksDivMessage();
    } else {
      displayAllTasksForSelectedProject(selected);
    }

    taskAmount(selected);
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
    //console.log(newName);
    if (newName && newName !== selected) {
      //console.log("Edited project name:", newName);
      // Call function that editsProjectName
      changeName(selected, newName);
      selected = newName;

      // Change name updated array -> now update UI
      const projectHeader = document.querySelector(".current-project-div");
      const selectedProject = document.querySelector(".selected");

      selectedProject.querySelector("p").textContent = selected;
      projectHeader.textContent = selected;
      
      appendHeaderIcons();
      // WORKS
      

      const taskContainer = document.querySelector(".task-container")
      taskContainer.textContent = "";
      noTasksDivMessageExists = false;


      if (taskAmount(selected) === 0 && noTasksDivMessageExists === false) {
        noTasksDivMessage();
      } else {
        displayAllTasksForSelectedProject(selected);
      }

      // Update project header
      document.body.removeChild(modalOverlay);

      // Update project sidebar
    } else {
      alert("Project name is required!");
    }
  });
}

function createAddTask() {
  const addTaskDiv = document.createElement("div");
  addTaskDiv.classList.add("circle-div");

  const plus = document.createElement("p");
  plus.classList.add("plus");
  plus.textContent = "+";

  addTaskDiv.appendChild(plus);
  html.appendChild(addTaskDiv);

  // Add event listener
  addTaskDiv.addEventListener("click", () => {
    displayTaskModal();
  });
}

function taskDivContainer() {
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");

  //const currentProjectDiv = document.querySelector(".current-project-div")
  content.appendChild(taskContainer);
}

function noTasksDivMessage() {
  const taskContainer = document.querySelector(".task-container");

  const emptyTaskDiv = document.createElement("div");
  emptyTaskDiv.classList.add("empty-task-div");
  emptyTaskDiv.textContent = "No tasks for slected project were found";
  taskContainer.appendChild(emptyTaskDiv);

  noTasksDivMessageExists = true;
  // Function could update noTaskDivMessage
}

// USE true / false if emptyTaskDivExists

// NEXT STEPS
// Tasks on right side should always be displayed for current project
// -> display all tasks for specific project
// If there is no task, display on the right (no tasks for this project)

// TODO
// Add functon that checks for the same names (no duplication)
// figure out why your git host is not updating

function displayTaskModal() {
  // Modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");

  // Modal content
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // Title
  const modalTitle = document.createElement("h2");
  modalTitle.textContent = "Add New Task";

  // Close button
  const closeButton = document.createElement("button");
  closeButton.classList.add("modal-close");
  closeButton.textContent = "✕";

  // Description textarea
  const descriptionContainer = document.createElement("div");
  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description*";
  const descriptionTextarea = document.createElement("textarea");
  descriptionTextarea.placeholder = "Enter task description";
  descriptionTextarea.rows = 4;

  descriptionContainer.appendChild(descriptionLabel);
  descriptionContainer.appendChild(descriptionTextarea);

  // Priority dropdown
  const priorityContainer = document.createElement("div");
  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority*";
  const prioritySelect = document.createElement("select");
  const priorities = ["First Priority", "Second Priority", "Third Priority"];
  priorities.forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority.toLowerCase().replace(" ", "-");
    option.textContent = priority;
    prioritySelect.appendChild(option);
  });

  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(prioritySelect);

  // Submit button
  const submitButton = document.createElement("button");
  submitButton.classList.add("modal-submit");
  submitButton.textContent = "SUBMIT";

  // Append children to modal
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(closeButton);
  modalContent.appendChild(descriptionContainer);
  modalContent.appendChild(priorityContainer);
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

  // Handle submit button
  submitButton.addEventListener("click", () => {
    if (noTasksDivMessageExists === true) {
      removeNoTaskDivMessage();
    }

    const taskContainer = document.querySelector(".task-container");
    taskContainer.innerHTML = "";

    const description = descriptionTextarea.value.trim();
    const priority = prioritySelect.value;

    addTaskToSelectedProject(selected, description, priority);

    // add code here to push description and priority into array
    const selectedProject = document.querySelector(".selected");
    const selectedTaskCounter = selectedProject.querySelector(".task-counter");
    selectedTaskCounter.textContent = taskAmount(selected);

    displayAllTasksForSelectedProject(selected);

    //createAndAppendTasks(description, priority);
    if (description) {
      console.log("New Task:", { description, priority });
      document.body.removeChild(modalOverlay);

      //displayAllTasksForSelectedProject(selected);

      //createAndAppendTasks();
    } else {
      alert("Description is required!");
    }
  });
}

export function createAndAppendTasks(description, priority) {
  const taskContainer = document.querySelector(".task-container");

  const task = document.createElement("div");
  task.classList.add("task");
  // This should be a description of the task
  // Get value from projects array
  task.textContent = description;

  // Color should be picked with IF (add class list to it)
  const priorityDiv = document.createElement("div");
  priorityDiv.classList.add("priority-div");

  if (priority == "first-priority") {
    priorityDiv.classList.add("blue");
  } else if (priority == "second-priority") {
    priorityDiv.classList.add("orange");
  } else {
    priorityDiv.classList.add("lightblue");
  }

  // ADD AND APPEND ICONS
  const iconsDiv = document.createElement("div");
  iconsDiv.classList.add("icons-div");

  const editIcon = document.createElement("img");
  editIcon.classList.add("task-icon");
  editIcon.src = pencilIcon;
  editIcon.alt = "Edit Icon";

  const deleteIcon = document.createElement("img");
  deleteIcon.classList.add("task-icon");
  deleteIcon.src = binIcon;
  deleteIcon.alt = "Delete Icon";

  iconsDiv.appendChild(editIcon);
  iconsDiv.appendChild(deleteIcon);

  task.appendChild(priorityDiv);
  task.appendChild(iconsDiv);

  taskContainer.appendChild(task);
}

function removeNoTaskDivMessage() {
  const taskContainer = document.querySelector(".task-container");
  const emptyTaskDiv = document.querySelector(".empty-task-div");

  taskContainer.removeChild(emptyTaskDiv);
  noTasksDivMessageExists = false;
}

// When you add project and next one gets auto selected -> it should also clean inner html
// and append projects for specific project

// Click on the task should add it to completed - line over text, less opacity
// When projct is selecteed - task counmter should also turn black

// IF YOU DELETE THE PROJECT AND PRESS ADD TASK BUTTON ON THE NEXT AUTO SELECTED PROJECT
// IT WILL NOT WORK (Remove child error)

// Next - for tasks do the same as with projects.

// HANDLE CHANGING PROJECT NAME AS WELL!
// Handle pencil event listener

// FIGURE IT OUT WITH GIT...
