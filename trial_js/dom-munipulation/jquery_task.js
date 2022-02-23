
//Function runs on page load 


function trashRow(row_to_delete) {
    var deleteRow = row_to_delete.parentNode.parentNode;
    deleteRow.parentNode.removeChild(deleteRow);
}


