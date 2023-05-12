//You can edit ALL of the code here
let allEpisodes = getAllEpisodes()
function setup() {
  let allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

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
// const searchInput = document.getElementById("searchInput");

// searchInput.addEventListener("input", findEpisode)

// function findEpisode() {
// const searchInput = document.getElementById("searchInput").value.toLowerCase();
// const filterEpisode = allEpisodes.filter(episode =>{
//   if(episode.name.toLowerCase().includes(searchInput)||episode.summary.toLowerCase().includes(searchInput)) {
//     return episode
//   }
// })
// document.querySelector("#number").innerText = filterEpisode.length;
// makePageForEpisodes(filterEpisode);
// };

// level3-
// let selectElm = document.getElementById("select");
// let optionElm = document.createElement("option");
// optionElm.appendChild(optionElm);

// allEpisodes.forEach(elm => {
//   let optionEpisode = document.createElement("option");
//   optionEpisode.value = elm.name;
//   optionEpisode.innerText = `${elm.name} - S${elm.season.toString().padStart(2, "0")}E${elm.number.toString().padStart(2, "0")};`

//   selectElm.appendChild(optionEpisode);
// });

// selectElm.addEventListener("change", function(){
//   let selected = selectElm.value;
// })

// episodes.forEach((episode) => {
//   let h1Element = episode.querySelector

// })

  