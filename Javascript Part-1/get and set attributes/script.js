

const link = document.querySelector("a");
console.log(link.getAttribute("href"));  // get the attribute
link.setAttribute("href","www.yootube.com"); // set the new attribute
console.log(link.getAttribute("href"));