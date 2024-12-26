import binIcon from "../icons/bin-icon.png";
import pencilIcon from "../icons/pencil-outline.png";
import plusIcon from "../icons/plus.png";

export default function createProjects() {
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
  const projectSidebar = document.createElement("div");
  projectSidebar.classList.add("project-sidebar");
  projectSidebar.textContent = "Projects";

  const plus = document.createElement("img");
  plus.src = plusIcon;
  plus.alt = "Plus Icon";

  projectSidebar.appendChild(plus);
  content.appendChild(projectSidebar);
}
