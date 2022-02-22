// Create a "close" button and append it to each list item

// const input =document.querySelector("#editor")

var myNodelist = document.getElementsByClassName("checkboxBox");
console.log(myNodelist)
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


function newCheckboxlist() {
  var checkbox = document.createElement('input');
checkbox.type = 'checkbox';
    checkbox.id = 'car';
    checkbox.name = 'interest';
       checkbox.className = 'checkboxBox';
		//  checkbox.setAttribute('readonly', 'readonly');


    var label = document.createElement('label')
    var inputValue = document.getElementById("editor").value;
    var t = document.createTextNode(inputValue);
     label.className = 'checkbox';
    // label.appendChild(document.createTextNode('Car'));
    label.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("myForm").appendChild(label);
      }
      document.getElementById("editor").value = "";

    var br = document.createElement('br');

    var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  label.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

//     var edit = document.createElement("button");
// edit.href ="#";
// edit.innerText="Edit";


// var deleteBtn = document.createElement("button");
// deleteBtn.href = "#";
// deleteBtn.innerText = "delete";

 
    var container = document.getElementById('container');
    container.appendChild(checkbox);
    container.appendChild(label);
    // container.appendChild(edit);
    // container.appendChild(deleteBtn);
    container.appendChild(br);






// edit.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (edit.innerText.toLowerCase() == "edit") {
//     edit.innerText = "Save";
//     checkbox.removeAttribute("readonly");
//     checkbox.focus();
//   } else {
//     edit.innerText = "Edit";
//     checkbox.setAttribute("readonly", "readonly");
//   }
// });
    
};

// Button Actions
// var myForm = document.querySelector(#myform);
// myForm.addEventListener('click', (event) => {
//   if(event.target.tagName === 'BUTTON') {
//     const button = event.target;
//     const li = button.parentNode;
//     const ul = li.parentNode;
//     if(button.textContent === 'remove') {
//       ul.removeChild(li);
//     } else if(button.textContent === 'edit') {
//       const span = li.firstElementChild;
//       const input = document.createElement('input');
//       input.type = 'text';
//       input.value = span.textContent;
//       li.insertBefore(input, span);
//       li.removeChild(span);
//       button.textContent = 'save';
//     } else if(button.textContent === 'save') {
//       const input = li.firstElementChild;
//       const span = document.createElement('span');
//       span.textContent = input.value;
//       li.insertBefore(span, input);
//       li.removeChild(input);
//       button.textContent = 'edit';
//     }
//   }
// });
