document.querySelector("body").style.fontSize = "16px";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("main").style.display = "flex";
// document.querySelector("main").style.flexFlow = "column wrap";
document.querySelector("main").style.boxSizing = "border-box";
// document.querySelector("main").style.justifyContent = "space-around";
document.querySelector("main").style.flexWrap = "wrap";
// document.querySelector("main").style.padding = "10px";
// document.getElementsByClassName("category").style
document.querySelector("main").style.alignContent = "center";

const colorGenerator = () => {
  let hexaCol = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  ];
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor = randomColor + hexaCol[Math.floor(Math.random() * 16)];
  }
  return randomColor;
};
const typeofFood = document.getElementsByClassName("category");
console.log(typeofFood);
for (let i = 0; i < typeofFood.length; i++) {
  let color = colorGenerator();
  typeofFood[i].style.color = color;
  //   typeofFood[i].style.padding = "10px";
  //   typeofFood[i].style.fontWeight = "bold";
}

const listColor = document.getElementsByClassName("food-category");
console.log(typeofFood);
for (let i = 0; i < listColor.length; i++) {
  let color = colorGenerator();
  listColor[i].style.backgroundColor = color;
  listColor[i].style.minWidth = "250px";
  listColor[i].style.flex = "1";
  listColor[i].style.padding = "10px";
  listColor[i].style.listStyle = "none";
  listColor[i].style.textAlign = "center";
  listColor[i].style.fontSize = "20px";
  listColor[i].style.margin = "1px";
}

console.log(typeof typeofFood);
console.log(colorGenerator());

// media querries

// function myFunction(x) {
//   if (x.matches) {
//     // If media query matches
//     // document.getElementsByClassName("food-category").style.width = "100%";
//     document.querySelector("main").style.flexFlow = "column wrap";
//     document.querySelector("main").style.backgroundColor = "red";
//     document.querySelector("main").style.justifyContent = "space evenly";
//   } else {
//     document.querySelector("main").style.flexFlow = "row";
//   }
// }

// var x = window.matchMedia("(max-width: 492px)");
// myFunction(x); // Call listener function at run time
// x.addListener(myFunction);
