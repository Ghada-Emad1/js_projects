const input=document.getElementById('input-val');
const AddButton=document.getElementById('add');
const table=document.getElementById('tablecontainer');

    AddButton.addEventListener("click", function () {
        const taskName = input.value;
        if (taskName !== "") {
            //1.create row
            newRow = document.createElement("tr");
            
             //make three td [checkbox , taskName, Delete Button]

            //2.create checkbox data 
            const checkboxCell = document.createElement("td");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkboxCell.appendChild(checkbox);

            //create task data
            const taskNameCell = document.createElement("td");
            taskNameCell.innerText = taskName;

            //create delete button
            const deleteCell = document.createElement("td");
            const deleteButton = document.createElement("button");
            deleteButton.className = "deleted";
            deleteButton.innerText = "Delete";
            deleteCell.appendChild(deleteButton);
            
            //append them in the row
            newRow.appendChild(checkboxCell);
            newRow.appendChild(taskNameCell);
            newRow.appendChild(deleteCell);

            table.appendChild(newRow);
            input.value = ""; // Clear the input field after you added one task 
            
            //delete row 
            const deleteButtons = document.querySelectorAll(".deleted");
            deleteButtons.forEach( function(button) {
                button.addEventListener("click", function (e) {
                    const row = button.parentElement.parentElement; 
                    if(confirm("Are You Sure You Want To Delete It?")){
                       row.remove();
                    }
                   
                });
            });
            
            //when you clicked in checkbox change style
            const checkboxes = document.querySelectorAll("input[type='checkbox']");
            checkboxes.forEach(function(checkbox) {
                checkbox.addEventListener("click", function () {
                    const row = checkbox.parentElement.parentElement; 
                    if (checkbox.checked) {
                        row.classList.add("completed");
                    } else {
                        row.classList.remove("completed");
                    }
                });
            });

            
        }
    });



       
            


