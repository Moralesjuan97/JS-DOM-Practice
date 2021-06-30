window.onload = function () {
  console.log("The website was loaded...");
  let countries = [
    "USA",
    "France",
    "Italy",
    "Brazil",
    "Colombia",
    "Belize",
    "Venezuela",
  ];

  let my_select = document.getElementById("mySelect");
  for (let country in countries) {
    let opt = document.createElement("option");
    opt.text = countries[country];
    my_select.add(opt);
  }

  my_select.addEventListener("change", (event) => {
    alert(event.target.value);
  });
};
