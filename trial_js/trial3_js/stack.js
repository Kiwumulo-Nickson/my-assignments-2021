
function updateItemStatus() {
var cbId = this.id.replace("cb_", "");
var itemText = document.getElementById("item_" + cbId);
if (this.checked) {
  itemText.style.textDecoration = "line-through";
} else {
  itemText.style.textDecoration = "none";
}
}

function addNewItem(list, itemText) {
var date = new Date();
var id = "" + date.getMinutes(); + date.getSeconds() +
  date.getMilliseconds() + "";

var listItem = document.createElement("li");
listItem.id = "li_" + id;

var checkBox = document.createElement("input");
checkBox.type = "checkbox";
checkBox.id = "cb_" + id;
checkBox.onclick = updateItemStatus;

var span = document.createElement("span");
span.id = "item_" + id;
span.innerText = itemText;
listItem.appendChild(checkBox);
listItem.appendChild(span);
list.appendChild(listItem);
}
  // test
var span = document.createElement("span");
span.id = "item_" + id;
span.innerText = itemText;
//create edit
var edit = document.createElement("a");
edit.href = "#";
edit.innerText = "edit";
//create delete
var deleteBtn = document.createElement("a");
deleteBtn.href = "#";
deleteBtn.innerText = "delete";


listItem.appendChild(checkBox);
listItem.appendChild(span);
//and append them in li
listItem.appendChild(edit);
listItem.appendChild(deleteBtn);

list.appendChild(listItem);
// test

var inItemText = document.getElementById("inItemText");
inItemText.focus();

var btnNew = document.getElementById("btnAdd");
btnNew.onclick = function() {
var inItemText = document.getElementById("inItemText");
var itemText = inItemText.value;
if (!itemText || itemText === "" || itemText === " ") {
  return false;
}

addNewItem(document.getElementById("todolist"), itemText);
};

inItemText.onkeyup = function(event) {
if (event.which == 13) {
  var itemText = inItemText.value;

  if (!itemText || itemText === "" || itemText === " ") {
    return false;
  }

  addNewItem(document.getElementById("todolist"), itemText);
  inItemText.focus();
  inItemText.select();
}
};