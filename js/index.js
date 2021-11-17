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
  {
    label: "Week6 Notes",
    url: "week06/index.html",
  },
  {
    label: "Week7 Notes",
    url: "week07/index.html",
  },
  {
    label: "Week8 Notes",
    url: "week08/index.html",
  },
  {
    label: "Week9 Notes",
    url: "week09/index.html",
  },
  {
    label: "Week10 Notes",
    url: "week10/index.html",
  }
];

// get pointer to <ul> element
let ul = document.querySelector("ul");

links.forEach((link) => {
  ul.innerHTML += `
            <li id="week-link">
                <a href="${link.url}" id="weeks">${link.label}</a>
            </li>
        `;
});


// let weekLinks = document.querySelectorAll('weeks');

// function getURL() {
//   let href = window.location.pathname;
//   let weekPath = href.split('/');
//   return weekPath[3];
// }

// // prevent directory from looking for weird paths
// function directURL(previousPath) {
//   let path = getURL();
//   if (previousPath !== path) {
//     return true;
//   }
  
// }

// function addEventListenerList(list, event, fn) {
//   for (let i = 0; i < list.length; i++) {
//     list[i].addEventListener(event, fn, false);
//   }
// }

// addEventListenerList(weekLinks, 'click', directURL(weekLinks));
