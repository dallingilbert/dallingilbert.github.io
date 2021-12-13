const links = [
  {
    label: "Week1",
    url: "week01/index.html",
  },
  {
    label: "Week2",
    url: "week02/index.html",
  },
  {
    label: "Week3",
    url: "week03/index.html",
  },
  {
    label: "Week4",
    url: "week04/index.html",
  },
  {
    label: "Week5",
    url: "week05/index.html",
  },
  {
    label: "Week6",
    url: "week06/index.html",
  },
  {
    label: "Week7",
    url: "week07/index.html",
  },
  {
    label: "Week8",
    url: "week08/index.html",
  },
  {
    label: "Week9",
    url: "week09/index.html",
  },
  {
    label: "Week10",
    url: "week10/index.html",
  },
];

// our list for navigation links
const nav = [
  {
    label: "Home",
    link: "/dallingithubpages/dallingilbert.github.io/index.html",
  },
  {
    label: "About Me",
    link: "#about",
  },
  {
    label: "Notes",
    link: "",
  },
  {
    label: "About Me",
    link: "#about",
  },
];

// get pointer to <ul> element
let ul = document.querySelector("ul");
const div = document.querySelector(".dropdown-content");
const containerDiv = document.querySelector(".container");

// hasNavigated
let hasNavigated = false;

console.log(div);
console.log(containerDiv);

function buildNav() {
  // fill in our dropdown menu
  links.forEach((link) => {
    div.innerHTML += `
                  <a href="https://dallingilbert.github.io/${link.url}" id="weeks">${link.label}</a>
        
          `;
  });
  console.log(div);

  // fill in our unordered list
  ul.innerHTML += `
        <li>
          <a id="menu-item" href="/dallingithubpages/dallingilbert.github.io/index.html">Home</a>
        </li>
        <li>
          <a id="menu-item" href="#about">About Me</a>
        </li>
        <li>
        <a id="menu-item" href="#projects">Projects</a>
        </li>
`;

  // add our image to the navigation
  const img = document.createElement("img");
  img.src = "/dallingithubpages/dallingilbert.github.io/img/logo.png";
  img.className = "logo";
  containerDiv.appendChild(img);
}

window.addEventListener("load", buildNav);

function getURL() {
  let href = window.location.pathname;
  let weekPath = href.split("/");
  return weekPath[3];
}

// prevent directory from looking for weird paths
function directURL() {
  let re = /week\d\d/;
  let path = getURL();
   

  // check if we get a path in the format of 'week##'
  if (re.test(path)) {
    hasNavigated = true;
  } else
    hasNavigated = false;

  // if we 
  if (!hasNavigated) {

  }
}


