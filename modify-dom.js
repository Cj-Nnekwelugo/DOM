// modifying DOM Elements
const introJs= document.getElementById("intro-js");
//console.dir(introJs);
introJs.style.backgroundColor = "gold";
introJs.style.color = "black";
introJs.style.paddingInline = "5rem";
introJs.style.borderRadius = "15px";
// introJs.style.display = "none";

// dataset
console.log(introJs.dataset.introText);
introJs.dataset.uniqueTextId = "ubwdw6728b";


// form value
const fullName = document.getElementById("full-Name");
console.log(fullName.value);