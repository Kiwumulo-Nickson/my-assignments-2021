    // Add products to <table>
    function productsAdd() {
        // First check if a <tbody> tag exists, add one if not
        if (document.querySelector("#productTable tbody").length == 0) {
            document.querySelector("#productTable").insertAdjacentHTML("beforeend","<tbody></tbody>");
        }
        
        // Append product to the table
        document.querySelector("#productTable tbody").insertAdjacentHTML("beforeend","<tr>" +
            "<td>Extending Bootstrap with CSS, JavaScript and jQuery</td>" +
            "<td>6/11/2015</td>" +
            "<td>http://bit.ly/1SNzc0i</td>" +
            "</tr>");
            
        document.querySelector("#productTable tbody").insertAdjacentHTML("beforeend","<tr>" +
            "<td>Build your own Bootstrap Business Application Template in MVC</td>" +
            "<td>1/29/2015</td>" +
            "<td>http://bit.ly/1I8ZqZg</td>" +
            "</tr>");
}

document.querySelector(document).ready(function () {
    productsAdd();
});

