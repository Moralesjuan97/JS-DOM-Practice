let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
		var new_el = document.createElement("div");
		new_el.style.background = "yellow";
		new_el.innerHTML = "hello world";
		document.body.appendChild(new_el);

});
