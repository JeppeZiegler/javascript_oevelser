window.addEventListener("load", sidenVises);

let forsoeg = 0;
const ranNum = Math.floor(Math.random() * 10);

function sidenVises() {
  console.log("sidenVises");

  document.querySelector("button").addEventListener("click", tryk);
}

function tryk() {
  console.log("tryk");

  forsoeg++;

  const tal = document.querySelector("#tal").value;

  if (ranNum > tal) {
    alert(tal + " var for lavt. Prøv igen :)");
  } else if (ranNum < tal) {
    alert(tal + " var for højt. Prøv igen :)");
  } else {
    alert(tal + " er rigtigt!" + " Du brugte " + forsoeg + " forsøg." + " Prøv igen med et nyt tal.");
    location.reload();
  }
}
