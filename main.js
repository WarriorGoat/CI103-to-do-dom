
//New task creation
let itemEntryForm = document.querySelector("#itemEntryForm");
let task = document.querySelector("#task");
let dueDate = document.querySelector("#dueDate");
let owner = document.querySelector("#responsible");
let taskListForm = document.querySelector("#taskListForm")

let table = document.getElementById("taskList")


itemEntryForm.addEventListener("submit", function(event){
    event.preventDefault();
    //get and test input data for validity
    if(task.value.length < 1){
        alert("You must enter a valid task.  Please try again.");
    }else if(dueDate.value.length < 1){
        alert("You must enter a valid due date.  Please try again.");
    }else if( owner.value.length<1){
        alert("You must enter a valid task owner.  Please try again.");
    }else{
    alert(`Your task ${task.value} has been created for ${owner.value} and is due by ${dueDate.value}.`);}

    //create new row in table
    let row1 = table.insertRow(1); //adds new line to first position below the header as a tr element
    //this adds the individual cells as td elements
    let cell1 = row1.insertCell(0);
    let cell2 = row1.insertCell(1);
    let cell3 = row1.insertCell(2);
    let cell4 = row1.insertCell(3);
    let cell5 = row1.insertCell(4);
    //assigns a class to the status td element 
    cell1.setAttribute("id", "checkbox")
    cell2.setAttribute("id", "task")
    cell3.setAttribute("id", "owner")
    cell4.setAttribute("id", "date")
    cell5.setAttribute("id", "complete")

    //populate new row with data
    cell1.innerHTML = "<input type = 'checkbox' id = 'checked'>";
    cell2.innerText = task.value;
    cell3.innerText = owner.value;
    cell4.innerText = dueDate.value;
    cell5.innerText = "No";

    //set event listeners
    let checkBox = document.querySelectorAll("#checked")
    
    document.getElementById("completeButton").onclick = function(){
        checkBox = document.querySelectorAll("#checked");
        for (let i = 0; i<checkBox.length; i++){
            if (checkBox[i].checked === true && complete[i].innerText === "No"){
                complete[i].innerText = "Yes";
            }
    }}
    
    document.getElementById("deleteButton").onclick = function(){
        checkBox = document.querySelectorAll("#checked");
        for (let m = 0; m < checkBox.length; m++){
            if (checkBox[m].checked === true){
                let table = document.getElementById("taskList");
                table.deleteRow(m+1);
            }
    }}
    
    document.getElementById("clearButton").onclick = function(){
        checkBox = document.querySelectorAll("#checked");
        for (let n = checkBox.length; n>0; n--){
            let table = document.getElementById("taskList");
            table.deleteRow(n);
        
    }}
    
    //clear input form
    task.value = "";
    dueDate.value = "";
    owner.value = "";
    

})






