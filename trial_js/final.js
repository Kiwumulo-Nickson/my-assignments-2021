// function newCheckbox(){
//     var checkbox = document.createElement('input');


// }

document.getElementById('checkboxAdd').onclick = function() {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'car';
    checkbox.name = 'interest';
    // checkbox.value = 'car';


    var label = document.createElement('label')
    var inputValue = document.getElementById("editor").value;
    var t = document.createTextNode(inputValue);
    // label.htmlFor = 'car';
    // label.appendChild(document.createTextNode('Car'));
    label.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("myForm").appendChild(label);
      }
      document.getElementById("editor").value = "";

    var br = document.createElement('br');
 
    var container = document.getElementById('container');
    container.appendChild(checkbox);
    container.appendChild(label);
    container.appendChild(br);
}