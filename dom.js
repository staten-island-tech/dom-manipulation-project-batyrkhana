/*
Directions for the project
Using JavaScript you will allow users to input information into a form. The
form will then push data from a JavaScript object into the HTML through
DOM manipulation. The project must contain the following
Create an object called “DOMSelectors” to hold your DOM Selectors*/
const DOMSelectors = {
    form: document.querySelector("#input-form"),
    box: document.querySelector(".cardBox"),
    albumImage: document.querySelector(".q-album-image-input"),
    albumName: document.querySelector(".q-album-name-input"),
    albumReleaseDate: document.querySelector(".q-album-releaseDate-input"),
    albumArtist: document.querySelector(".q-album-artist-input"),
}
/*Create a function that creates an object and calls the following functions*/
function createAlbum() {
    DOMSelectors.box.insertAdjacentHTML("beforeend",
  `<div class="create-album">
      <img src=${DOMSelectors.albumImage.value} alt="Album Cover" class="card-img">
      <h1 class="card-albumName">${DOMSelectors.albumName.value}</h1>
      <h2 class="card-release">${DOMSelectors.albumReleaseDate.value}</h2>
      <h3 class="card-artist">${DOMSelectors.albumArtist.value}</h3>
      <button class="delete">DELETE</button>
    </div>`);
}
/*Create a function to remove an object after they have been created*/
function deleteAlbum () {
    const removeAlbum = document.querySelectorAll(".delete");
    removeAlbum.forEach((album) => {
      album.addEventListener("click", function (album) {
        album.target.parentElement.remove();
      })
    });
  }
/*Create a function that clears the input fields after injecting the object */
function clear() {
    DOMSelectors.albumName.value = "";
    DOMSelectors.albumReleaseDate.value = "";
    DOMSelectors.albumArtist.value = "";
    DOMSelectors.albumImage.value = "";
}
/*Create a function that injects the newly created object into the DOM*/ 
DOMSelectors.form.addEventListener ("submit", function (event) {
    event.preventDefault(); /* Prevents from refreshing the browser*/
    createAlbum(); /*Creates a new Card*/
    clear(); /*clears all input fields*/
    deleteAlbum(); /*Deletes a Card(album)*/
});