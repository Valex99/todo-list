import projectIcon from "../images/check-icon.png";

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
