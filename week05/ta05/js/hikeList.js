// Example of using Classes and modules to organize the code needed to render our list of hikes. Not using MVC here.
const imgBasePath = "//byui-cit.github.io/cit261/examples/";
//create an array of hikes
const hikeList = [
    {
      name: "Bechler Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description:
        "Beautiful short hike along the Bechler river to Bechler Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    },
    {
      name: "Teton Canyon",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description: "Beautiful short (or long) hike through Teton Canyon.",
      directions:
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Stateline Road for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
      name: "Denanda Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "7 miles",
      difficulty: "Moderate",
      description:
        "Beautiful hike through Bechler meadows river to Denanda Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }
  ];

  class HikeModel {
      getAllHikes(){
          return hikeList;
      }
      getHikeByName(name){
          return hikeList.find(hike => hike.name == name);
      }
      showHikeList(){
        console.log("Got to Show Hike List");
        parent = document.getElementById('hikes');
        hikeList.forEach(hike => {
          console.log("Rendering: "+hike.name);
          renderHikeList(parent, hike);
        });
      this.attachZoomListeners();
      }
      attachZoomListeners(){
        //grab the list of nodes attached to UL.hikes
        var lis = document.getElementById("hikes").getElementsByTagName("li");
        //foreac, add the listener that when onpress, runs Zoom In for the hike
        
        Array.from(lis).forEach(hike => {
          console.log("Adding Listening on: "+hike.id);
          addEventListener('click',event=>{
            let hikeName=event.target.id;
            console.log(hikeName);
            if (hikeName != "")
            {
              this.zoomIn(this.getHikeByName(hikeName));
            }

          }, true)
        });
      }
      zoomIn(hike){
        //wipe the list items
        document.getElementById("hikes").innerHTML = "";
        //replace with new item
        document.getElementById("hikes").appendChild(renderOneHikeFull(hike));
      }


  }
   function renderHikeList(parent, hikes) {
     parent.appendChild(renderOneHikeLight(hikes));
   }
   function renderOneHikeLight(hike) {
     const item = document.createElement("li");
     item.id = hike.name;
     item.innerHTML = ` <h2>${hike.name}</h2>
     <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
     <div class="info">
             <div>
                 <h3>Distance</h3>
                 <p>${hike.distance}</p>
             </div>
             <div>
                 <h3>Difficulty</h3>
                 <p>${hike.difficulty}</p>
             </div>
     </div>`;
     return item;
   }
   function renderOneHikeFull(hike) {
     const item = document.createElement("li");
     item.innerHTML = ` <h2>${hike.name}</h2>
     <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
     <div class="info">
             <div>
                 <h3>Distance</h3>
                 <p>${hike.distance}</p>
             </div>
             <div>
                 <h3>Difficulty</h3>
                 <p>${hike.difficulty}</p>
             </div>
     </div>`;
     return item;
   }
 

  export default HikeModel;