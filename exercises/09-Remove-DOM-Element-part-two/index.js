let my_ul = document.getElementById('parentLI');

let secondchild = my_ul.childNodes[3];

my_ul.removeChild(secondchild);

console.log(secondchild);
