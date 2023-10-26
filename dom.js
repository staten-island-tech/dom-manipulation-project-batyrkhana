const DOMSelectors = {
    form: document.querySelector("#input-form"),
    box: document.querySelector(".cardBox"),
    albumImage: document.querySelector(".q-album-image-input"),
    albumName: document.querySelector(".q-album-name-input"),
    albumReleaseDate: document.querySelector(".q-album-releaseDate-input"),
    albumArtist: document.querySelector(".q-album-artist-input"),
}

DOMSelectors.form.addEventListener ("submit", function (event) {
    event.preventDefault(); /* Prevents from refreshing the browser*/
    createCard(); /*Creates a new Card*/
    clear(); /*clears all input fields*/
    removeCard(); /*Deletes a Card(album)*/
});

function createCard() {
    DOMSelectors.box.insertAdjacentHTML("beforeend",
  `<div class="create-album">
      <img src=${DOMSelectors.albumImage.value} alt="Album Cover" class="album-cover-img">
      <h1 class="album-name-card">${DOMSelectors.albumName.value}</h1>
      <h2>${DOMSelectors.albumReleaseDate.value}</h2>
      <h3>${DOMSelectors.albumArtist.value}</h3>
      <button class="delete">Delete</button>
    </div>`);
}

function clear() {
    DOMSelectors.albumName.value = "";
    DOMSelectors.albumReleaseDate.value = "";
    DOMSelectors.albumArtist.value = "";
    DOMSelectors.albumImage.value = "";
}


function removeCard() {
    DOMSelectors.form.addEventListener ("")
}

















/*
Directions for the project

Using JavaScript you will allow users to input information into a form. The
form will then push data from a JavaScript object into the HTML through
DOM manipulation. The project must contain the following
-Create an object called “DOMSelectors” to hold your DOM Selectors
-Create a function that creates an object and calls the following functions
-Create a function that injects the newly created object into the DOM
-Create a function that clears the input fields after injecting the object
-Create a function to remove an object after they have been created 
*/

/*
CLASS DEMO
const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
};
console.log(DOMSelectors.firstName),
DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach((el)=>el.textContent = DOMSelectors.firstName.value
    );
});
*/