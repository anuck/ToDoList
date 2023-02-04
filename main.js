todoMain();

function todoMain() { 

    let inputElement, ulElement, discriptionElement, button;
    getElemtnts();
    addListners();

    function getElemtnts() {

        inputElement = document.getElementsByTagName("input")[0];
        discriptionElement = document.getElementsByTagName("input")[1]; 
        button = document.getElementById("addButton");
        ulElement = document.getElementsByTagName("ul")[0];
    }

    function addListners() {
        button.addEventListener("click", addEntry, false);
    }

    function addEntry(event) { 

        let flag = true;

        //Enter Task 
        let inputValue = inputElement.value;
        //    clear the input text after every entry 
        inputElement.value = "";  
        //Enter Discription
        let discriptionValue = discriptionElement.value;
        discriptionElement.value = "";

        // Add new Row

        let table = document.getElementById("todoTable");

        let trElement = document.createElement("tr");
        table.appendChild(trElement);

        // for checkbox
        let checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.addEventListener("click", done, false);
        let tdElement1 = document.createElement("td");
        tdElement1.appendChild(checkboxElement);
        trElement.appendChild(tdElement1);

        // for tasks
        let tdElement2 = document.createElement("td");
        tdElement2.innerText = discriptionValue;
        trElement.appendChild(tdElement2);

        // for discription
        let tdElement3 = document.createElement("td");
        tdElement3.innerText = inputValue;
        trElement.appendChild(tdElement3);

        // for removing
        let spanElement = document.createElement("span");
        spanElement.innerText="delete";
        spanElement.className="material-symbols-outlined";

        spanElement.addEventListener("click", deleteItem, false);

        let tdElement4 = document.createElement("td");
        tdElement4.appendChild(spanElement);
        trElement.appendChild(tdElement4);


        
         
         function deleteItem () {
            trElement.remove();
         }

         //strike off the done list
         function done() {

            trElement.classList.toggle("strike");  
         } 
    } 
}