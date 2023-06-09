
let allShows = getAllShows();
function setup() {
  // makePageForEpisodes(showAllShows)
  // fetch('https://api.tvmaze.com/shows')
  // .then((response) => {
  //   return response.json();
  // })
  // .then((allShows) => {
    makePageForShows(allShows);
}
allShows.sort(function (a,b) {
  return a.name.localeCompare(b.name);
})
// console.log(getAllShows());
let allEpisodes =  getAllEpisodes();
// let allShows = getAllShows();


// Level-500
// function findShow() {
//   const showListing = document.getElementById("showListing").value.toLowerCase();
//   const filterShow = allShows.filter(show => {
//     if (show.name.toLowerCase().includes(showListing) || show.summary.toLowerCase().includes(showListing)) {
//       return show;
//     }
//   });
//   document.querySelector("#number").innerText = filterShow.length;
//   makePageForShows(filterShow);
// };

function makePageForShows(showList) {
  const showsListingDiv = document.getElementById("show-listing");
  // showsListingDiv.innerHTML = "";

  showList.forEach((show) => {
    const showElem = document.createElement("div");
    showElem.classList.add("show");

    const imageElem = document.createElement("img");
    imageElem.src = show.image.medium;
    showElem.appendChild(imageElem);

    const nameElem = document.createElement("h2");
    nameElem.innerText = show.name;
    showElem.appendChild(nameElem);

    const summaryElem = document.createElement("p");
    summaryElem.innerText = show.summary;
    showElem.appendChild(summaryElem);

    const genresElem = document.createElement("p");
    genresElem.innerText = `Genres: ${show.genres}`;
    showElem.appendChild(genresElem);

    const statusElem = document.createElement("p");
    statusElem.innerText = `Status: ${show.status}`;
    showElem.appendChild(statusElem);

    const ratingElem = document.createElement("p");
    ratingElem.innerText = `Rating: ${show.rating.average}`;
    showElem.appendChild(ratingElem);

    const runtimeElem = document.createElement("p");
    runtimeElem.innerText = `Runtime: ${show.runtime}`;
    showElem.appendChild(runtimeElem);

    // Add event listener to show name
    // showElem.addEventListener("click", () => {
    //   displayEpisodeListing(show);
    //   fetchEpisodes(show.id);
    // });

    showsListingDiv.appendChild(showElem);
  });
}


window.onload = setup;

// level 500 practice complete

// function setup() {
//   // makePageForEpisodes(showAllShows)
//   // fetch('https://api.tvmaze.com/shows')
//   // .then((response) => {
//   //   return response.json();
//   // })
//   // .then((allShows) => {
//     makePageForShows(allShows);
// }
    // Add a navigation link to enable the user to return to the "shows listing"
    // const backToShowsLink = document.createElement("a");
    // backToShowsLink.href = "#";
    // backToShowsLink.innerText = "Back to Shows";
    // document.getElementById("episodes-listing").appendChild(backToShowsLink);

  //   backToShowsLink.addEventListener("click", () => {
  //     document.getElementById("episodes-listing").style.display = "none";
  //     document.getElementById("shows-listing").style.display = "block";
  //   });
  
  // .catch((error) => {
  //   console.log(error);
  // });


// level 500 practice more

// const showsListing = document.getElementById("showListing");

// showsListing.addEventListener("input", findShow)

// function findShow() {
// const showListing = document.getElementById("showListing").value.toLowerCase();
// const filterShow = allShows.filter(show =>{
//   if(show.name.toLowerCase().includes(showListing)||show.summary.toLowerCase().includes(showListing)) {
//     return show
//   }
// })
// document.querySelector("#number").innerText = filterShow.length;
// makePageForShows(filterShow);
// };

// complete


// window.onload = function () {
//   const showsListingDiv = document.getElementById("shows-listing");
//   const episodesListingDiv = document.getElementById("episodes-listing");
//   const backToShowBtn = document.getElementById("back-to-shows-btn");

//   function displayShowsListing(shows) {
//     showsListingDiv.style.display = "block";
//     // episodesListingDiv.style.display = "none";
//   }

//   function displayEpisodesListing() {
//     // showsListingDiv.style.display = "none";
//     episodesListingDiv.style.display = "block";
//   }

//   function createShowElements() {
//     const showsContainer = document.createElement("div");
//     showsContainer.classList.add("shows-container");

//     allShows.forEach((show) => {
//       const showElem = document.createElement("div");
//       showElem.classList.add("show");

//       const imageElem = document.createElement("img");
//       imageElem.src = show.image.medium;
//       showElem.appendChild(imageElem);

//       const nameElem = document.createElement("h2");
//       nameElem.textContent = show.name;
//       showElem.appendChild(nameElem);

//       const summaryElem = document.createElement("p");
//       summaryElem.innerHTML = show.summary;
//       showElem.appendChild(summaryElem);

//       const genresElem = document.createElement("p");
//       genresElem.textContent = `Genres: ${show.genres.join(", ")}`;
//       showElem.appendChild(genresElem);

//       const statusElem = document.createElement("p");
//       statusElem.textContent = `Status: ${show.status}`;
//       showElem.appendChild(statusElem);

//       const ratingElem = document.createElement("p");
//       ratingElem.textContent = `Rating: ${show.rating.average}`;
//       showElem.appendChild(ratingElem);

//       const runtimeElem = document.createElement("p");
//       runtimeElem.textContent = `Runtime: ${show.runtime} minutes`;
//       showElem.appendChild(runtimeElem);

//       // Add event listener to show name
//       showElem.addEventListener("click", () => {
//         displayEpisodeListing(show);
//         fetchEpisodes(show.id);
//       });

//       showsContainer.appendChild(showElem);
//     });

//     showsListingDiv.innerHTML = "";
//     showsListingDiv

// // level 500 complete



function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = "";
  // rootElem.textContent = `Got $(episodeList.length) episode(s)`;

  episodeList.forEach((episode)=> {
    const episodeElem = document.createElement("div");
  episodeElem.classList.add("Div1")

  // set the episode code
  const season = episode.season.toString().padStart(2, "0");
  const number = episode.number.toString().padStart(2, "0");
  const episodeCode = `S${season} E${number}`;

  // create the episode content
  const nameElem = `<h2>${episode.name} - ${episodeCode}</h2>`;
  const imageElem = `<img src = "${episode.image.medium}" alt="${episode.name}"/>`;
  const summaryElem = `<p>${episode.summary}</p>`;
  const linkElem = `<a href="${episode.url}">View on TVMaze.com</a>`; 

  // add the content to the episode element
  episodeElem.innerHTML = `${nameElem}${imageElem}${summaryElem}${linkElem}`;
  
  // add the episode element to the root element
  rootElem.appendChild(episodeElem);

});
}

// window.onload = setup;

// (level 200-Add Searchbar)

// get search bar Element
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", findEpisode)

function findEpisode() {
const searchInput = document.getElementById("searchInput").value.toLowerCase();
const filterEpisode = allEpisodes.filter(episode =>{
  if(episode.name.toLowerCase().includes(searchInput)||episode.summary.toLowerCase().includes(searchInput)) {
    return episode
  }
})
document.querySelector("#number").innerText = filterEpisode.length;
makePageForEpisodes(filterEpisode);
};

// level300-
let selectElm = document.getElementById("select");
let optionElm = document.createElement("option");
optionElm.innerText = "Select Episodes";
selectElm.appendChild(optionElm);

allEpisodes.forEach(elm => {
  
  let optionEpisode = document.createElement("option");
  optionEpisode.value = elm.name;
  optionEpisode.innerText = `${elm.name} - S${elm.season.toString().padStart(2, "0")}E${elm.number.toString().padStart(2, "0")};`

  selectElm.appendChild(optionEpisode);
});

selectElm.addEventListener("change", function(){
  let selectedEpisode = selectElm.value;
   const chosenEpisode = allEpisodes.filter((episode) => {
 if(episode.name.includes(selectedEpisode || episode.summary.includes(selectedEpisode))) {
  // console.log(selectedEpisode);
      return episode;
    }else if(selectedEpisode === optionElm.innerText){
      return allEpisodes
    }
   });
   makePageForEpisodes(chosenEpisode);
});


// level 350


function setup() {
  // makePageForEpisodes(showAllShows)
  fetch('https://api.tvmaze.com/shows/82/episodes')
  .then((response)=> {
   return response.json();
  })
   
  .then((allEpisodes) => {
    makePageForEpisodes(allEpisodes);
    
    })

    // .then((showAllShows) => {
    //   makePageForEpisodes(showAllShows)
    //   })
    
   .catch((error) => {
    console.log(error);
   })
}
  

  // level 400-:
  let showListElm = document.getElementById("show-list");
  let showOptionElm = document.createElement("option");
  showOptionElm.innerText = "Select a show from the list";
  showListElm.appendChild(showOptionElm);


// fv 
function showAllShows(){
  allShows.forEach((show)=> {
let option = document.createElement("option");
option.innerText = show.name;
showListElm.appendChild(option);
  });
}
showAllShows();

let shortedAllShows = allShows.sort();
console.log(shortedAllShows);


showListElm.addEventListener("change", selectAShow)
function selectAShow() {
  const showName = showListElm.value
  const selectedShow = allShows.filter(show => showName === show.name)

  const selectedShowId = selectedShow[0].id;


  fetch(`https://api.tvmaze.com/shows/${selectedShow.id}/episodes`)
  .then(function (response) {
    return response.json();
})
.then((result) => {
  makePageForEpisodes(result)
  makePageForShows(result);
    
})

.catch((error) => {
  console.log(error);
});
}

