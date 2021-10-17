import HikeModel from "./hikeList.js";
const hike = new HikeModel();


//on load grab the array and insert it into the page
window.addEventListener("load", () => {
  console.log(hike.getAllHikes());
  hike.showHikeList();
  });