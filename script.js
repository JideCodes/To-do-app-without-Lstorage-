const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

function addNew(){
  let newEl = document.createElement("li");
  newEl.textContent = input.value;
  ul.append(newEl);
}

button.addEventListener('click', function(){
  if (input.value === ""){
    return;
  } else{
    addNew();
  }
});