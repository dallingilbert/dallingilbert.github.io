


import HikeModel from "./hikeList.js";

export default class Hikes {
    constructor(elementId) {
      this.parentElement = document.getElementById(elementId);
      // we need a back button to return back to the list. This will build it and hide it. When we need it we just need to remove the 'hidden' class
      this.backButton = this.buildBackButton();
    }

    //show a list of hikes in the parentElement

    // show one hike with full details in the parentElement
    showOneHike(hikeName) {}
    // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
    addHikeListener() {
      // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
    }
    buildBackButton() {
      const backButton = document.createElement("button");
  
      return backButton;
    }
  }