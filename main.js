// ! yellow
let allYellows = document.querySelectorAll(".yellow");
console.log(allYellows);
allYellows.forEach((y) => (y.style.backgroundColor = "yellow"));

// ! list

let thisList = document.querySelector(".thisList");
thisList.style.color = "pink";

// add ()
let actualList = document.querySelector(".actualList");
actualList.classList.add("skyBlue");

// document.getElementsByTagName
// HTMLCollection
let allLi = document.getElementsByTagName("li");
for (let i = 0; i < allLi.length; i++) {
  allLi[i].style.fontFamily = "cursive";
}

// ! button

// toggle ()
let para = document.getElementById("para");
let but = document.getElementById("but");

but.addEventListener("click", () => {
  // code execute
  para.classList.toggle("original");
  para.classList.toggle("onClickBGCol");
});

// ! selectionBox
let parentElement = document.getElementById("selectionBox");
let childrenElements = parentElement.children;

for (let i = 0; i < childrenElements.length; i++) {
  let childElement = childrenElements[i];
  childElement.style.backgroundColor = "magenta";
}

// ! footer
let footerStyle = document.querySelector("#foot");
footerStyle.className = "footerStyle";
