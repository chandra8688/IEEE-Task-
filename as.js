let addToDoButton = document.getElementById('addTodo');
let toDoContainer = document.getElementById('TODOC');
let inputField = document.getElementById('input');

addToDoButton.addEventListener('click', function(){
    var divi = document.createElement('p');
    if(inputField.value!=""){
      divi.innerText = inputField.value;
      toDoContainer.appendChild(divi);
      inputField.value="";
    var deleteButton = document.createElement('button');
        deleteButton.id = 'delete-button';
        deleteButton.innerHTML="Delete";
        toDoContainer.appendChild(deleteButton);
        deleteButton.addEventListener('click',function(){
          toDoContainer.removeChild(divi);
          deleteButton.remove('button');
        })
      }


})

function showAlert() {
    if(inputField.value!=""){
    alert("YOUR Task is Added");
   }
  }