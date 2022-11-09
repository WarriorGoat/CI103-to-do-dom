
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

    //Add new task data to newTask object (local) and to taskListArray (global)
    let newTask = {};
    newTask.task = task.value;
    newTask.dueDate = dueDate.value;
    newTask.taskOwner = owner.value;
    newTask.status = "No";
    
    //assign values to variables
    let task1 = newTask.task;
    let owner1 = newTask.taskOwner;
    let date1 = newTask.dueDate;
    let date2 = date1.toDateString()
    let status1 = newTask.status

    //create new row in table
    let row1 = table.insertRow(1); //adds new line to first position below the header
    
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
    cell2.innerText = task1;
    cell3.innerText = owner1;
    cell4.innerText = date2;
    cell5.innerText = status1;

    //set event listeners
    let checkBox = document.querySelectorAll("#checked")
   
    
    document.getElementById("completeButton").onclick = function(){
        for (let n = 0; n<checkBox.length; n++){
            if (checkBox[n].checked === true && complete[n].innerText === "No"){
                complete[n].innerText = "Yes";
            }
        }
    }
    
    document.getElementById("deleteButton").onclick = function(){
        for (let n = 0; n<checkBox.length; n++){
            if (checkBox[n].checked === true){
                let table = document.getElementById("taskList");
                table.deleteRow(n);
            }
    }}
    
    document.getElementById("clearButton").onclick = function(){
        for (let n = checkBox.length; n>0; n--){
            let table = document.getElementById("taskList");
            table.deleteRow(n);
        
    }}
    



    //clear input form
    task.value = "";
    dueDate.value = "";
    owner.value = "";
    

})






