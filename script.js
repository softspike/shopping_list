//button click eventListener
//access the first element in the array [0]
// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
// 	console.log("Click!!!")
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("deleteMe");
var items = ul.getElementsByTagName("li");

//on and off
// document.querySelector("li").classList.toggle("done");

//add event listener to first 6 btns in HTML file
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}

//from StackOverflow:
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}




//click on a list item and it strikethroughs the text
function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}

// var underline = addEventListener("click", function() {
// 	underline = document.querySelector("li").classList.toggle("done");
// 	console.log("Click!!!")
// })

ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

///////////////////////////////////////////////////////////////////
function inputLength() {
	//length - a number of characters a string has
	return input.value.length;
}

function createListElement () {
	//click creates a new <li> element
	var li = document.createElement("li")
	var btn = document.createElement("button");
	// append the last li element and to display - must have a value
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	
	btn.innerHTML = "X";
	btn.onclick = removeParent;

	ul.appendChild(li);
	li.appendChild(btn);
	// placeholder - after entering the value = empty string
	input.value = "";
}

// function createListButton () {
// 	//click creates a new <button> element
// 	var li = document.createElement("Button")
// 	// append the last li element and to display a text value
// 	li.appendChild(document.createTextNode("x"));
// 	ul.appendChild(li);
// }



button.addEventListener("click", function(){
	//if input value > 0 add to the list
	if (inputLength() > 0) {
		createListElement();
		// createListButton ();
		
			
	}
})

//press enter
input.addEventListener("keypress", function(event){
	//if input value > 0 add to the list 
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		// createListButton ();
		
	}
})

