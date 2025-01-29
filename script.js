window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  document.querySelector("#cola").addEventListener("click", tjek);
  document.querySelector("#fanta").addEventListener("click", tjek);
  document.querySelector("#snaps").addEventListener("click", tjek);
  document.querySelector("#tuborg").addEventListener("click", tjek);
}

function tjek() {
  console.log();

  if (this.alt == "tuborg" || this.alt == "snaps") {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}
