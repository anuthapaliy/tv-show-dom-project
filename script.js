//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
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

//   for(let i =0; i < episodeList.lengths; i++) {
//     const div1 = document.createElement("div");
//     div1.classList.add("div1");
//     rootElem.appendChild(div1)
//   }


//   div1.innerHTML =`<h2>${episodeList[i].name}-${episodeList[i].season} -${episodeList[i].number}</h2>
//   <img src="${episodeList[i].image.medium}">
//    <p>${episodeList[i].summary}</p>`;
// }
// window.onload = setup;

