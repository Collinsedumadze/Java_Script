// DOM - Document Object Model

const view1 = document.getElementById("view1");
console.log(view1); // <div id="view1">...</div>

const view2 = document.querySelector("#view2"); // CSS selector
console.log(view2); // <div id="view2">...</div>

view1.style.display = "none"; // Hide view1
view2.style.display = "flex"; // Show view2

//Another way of selectimg elemeents

const views = document.getElementsByClassName("view"); // Get all elements with class "view"
console.log(views); // HTMLCollection of elements with class "view"
const sameViews = document.querySelectorAll(".view"); // Get all elements with class "view"
console.log(sameViews); // NodeList of elements with class "view"

// -------Nodes are everything in the DOM tree while the elements are the HTML tags-------
// -------Nodes are the building blocks of the DOM tree------- 

const divs = view1.querrySelctorAll("div");
console.log(divs);
//different approach
const sameDivs = view1.getElementByTagName("div");
console.log(sameDivs);


//trying to navigate our selection of element
const evenDivs = view1.querrySelctorAll("div:nth-of-type(2n)");
console.log(evenDivs);
for (let i = 0; i < evenDivs.length; i++){
    evenDivs[1].style.background = "blue";
}

const navText = document.querrySelector