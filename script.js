var menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", function () {
  document.getElementById("nav-sec-2").classList.toggle("hide-item");
});

// projects section

const projectsLinks = {
  "Project-1": "#link1",
  "Project-2": "#link2",
  "Project-3": "#link3",
};
const projectDescription = {
  "Project-1": "This is my project 1",
  "Project-2": "This is my project 2",
  "Project-3": "This is my project 3",
};

var projects = Object.keys(projectsLinks);
var size = projects.length;
var projectName = document.getElementById("project-name");
var projectDesc = document.getElementById("project-desc");
var projectLink = document.getElementById("project-link");
var counter = 0;

function changeData() {
  if (counter === size) {
    counter = 0;
  } else if (counter < size) {
    var project = projects[counter];
    projectName.innerHTML = `${project}`;
    projectDesc.innerHTML = `${projectDescription[project]}`;
    projectLink.innerHTML = `${projectsLinks[project]}`;
  }

  counter += 1;
  setTimeout(changeData, 3000);
}

changeData();
