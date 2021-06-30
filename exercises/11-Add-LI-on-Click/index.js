let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function () {
	var my_li = document.createElement("li");
	var my_ul = document.getElementById('myList');

	my_li.appendChild(document.createTextNode("Four"));
	my_ul.appendChild(my_li);

});