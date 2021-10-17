const links = [
  {
    label: "Week1 Notes",
    url: "week01/index.html",
  },
  {
    label: "Week2 Notes",
    url: "week02/index.html",
  },
  {
    label: "Week3 Notes",
    url: "week03/index.html",
  },
  {
    label: "Week4 Notes",
    url: "week04/index.html",
  },
  {
    label: "Week5 Notes",
    url: "week05/index.html",
  },
];

// get pointer to <ul> element
let ul = document.querySelector("ul");

links.forEach((link) => {
  ul.innerHTML += `
            <li>
                <a href="${link.url}">${link.label}</a>
            </li>
        `;
});

// prevent directory from looking for wierd paths

