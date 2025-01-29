window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  const tid = new Date().getHours();
  if (tid > 5 && tid < 10) {
    console.log("godmorgen");
  } else if (tid > 10 && tid < 18) {
    console.log("goddag");
  } else if (tid > 18 && tid < 24) {
    console.log("godaften");
  } else {
    console.log("godnat");
  }
}
