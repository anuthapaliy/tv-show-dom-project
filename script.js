//You can edit ALL of the code here
let allEpisodes =  getAllEpisodes();
// function setup() {
//   let allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }

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

window.onload = setup;

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


const allShows = showAllShows();
function showAllShows(){
  allShows.forEach((show)=> {
let option = document.createElement("option");
option.innerText = show.name;
showListElm.appendChild(option);
  });
}
showAllShows();


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
  makePageForEpisodes(showAllShows)
})
.catch((error) => {
  console.log(error);
});
}

// function listAllEpisodes(allEpisodes){
//   allEpisodes.forEach((episode)
