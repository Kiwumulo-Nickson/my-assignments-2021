
document.getElementById('submit').onclick = function() {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'car';
    checkbox.name = 'interest';
    checkbox.value = 'car';
 
    var label = document.createElement('label')
    label.htmlFor = 'car';
    label.appendChild(document.createTextNode('Car'));
 
    var br = document.createElement('br');
 
    var container = document.getElementById('container');
    container.appendChild(checkbox);
    container.appendChild(label);
    container.appendChild(br);
}

//jquery  long and short codes


$(document).ready(function() {
    $('#submit').click(function() {
      $('#container')
        .append('<input type="checkbox" id="car" name="interest" value="car">')
        .append('<label for="car">Car</label></div>')
        .append(`<br>`);
    })
});



//shorter code

$(document).ready(function() {
    $('#submit').click(function() {
      $('#container')
        .append('<input type="checkbox" id="car" name="interest" value="car">')
        .append('<label for="car">Car</label></div>')
        .append(`<br>`);
    })}

