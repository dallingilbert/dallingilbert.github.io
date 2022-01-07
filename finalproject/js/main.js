// create logic for fetching data from our API
async function fetchArtistAlbum(url = "", data = {}) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
      "x-rapidapi-key": "42593a33bdmshb5c601c8132dd01p1383bbjsn94dee164f4e3",
      "Content-Type": "application/json",
    },
  });

  // error checking response
  if (!response.ok) {
    throw new Error("Network response not OK");
  } else {
    // if response is good, return it in json format
    return response.json();
  }
}

// append artist to URL
function getURL(art) {
  let newUrl =
    "https://theaudiodb.p.rapidapi.com/searchalbum.php?s=" + art.toString();
  // console.log(newUrl);
  return newUrl;
}

// create an eventListener for our button
const searchBtn = document.getElementById("album");

searchBtn.addEventListener("click", function () {
  const artist = document.querySelector("input").value;
  // console.log(artist);

  // fetch our data
  fetchArtistAlbum(getURL(artist))
  .then((data) => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
});
