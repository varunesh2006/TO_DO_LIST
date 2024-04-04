const input = document.getElementById("input");
const change = document.getElementById("list");

function add() {
    var inputValue = input.value.trim();

    if (inputValue === "") {
        window.alert("Please enter the description."); 
        return; 
    }

    var li = document.createElement("li");
    var t = document.createTextNode(inputValue);
    li.appendChild(t); 

    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
        edit(t);
    };
    li.appendChild(editButton); 

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        li.remove(); 
    };
    li.appendChild(deleteButton); 

    change.appendChild(li); 
}

function edit(textNode) {
    var newText = prompt("Edit:", textNode.textContent);
    if (newText !== null) {
        textNode.textContent = newText;
    }
    else{
        window.alert("please enter the content");
    }
}
