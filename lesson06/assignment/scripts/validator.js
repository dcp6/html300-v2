
const formData = document.querySelectorAll('.needs-validation');
let nameInputValidity = false;
window.onload = function(){
            const myModal = new bootstrap.Modal(document.getElementById('infoModal'));
            myModal.show();
            const form = document.querySelector("form");
            form.onsubmit = submitted.bind(form);
            }
           
            
function submitted(event) {
event.preventDefault();   

let checkboxInputs = document.getElementsByClassName('checkboxes');
let inputBoolValue = false;

    for(var i = 0; i < checkboxInputs.length; i++) {
        if(checkboxInputs[i].checked) {
            inputBoolValue = true;
        }
        
    }

    if(!inputBoolValue){
        alert('Please check at least one box.')
        return false;
    }



// let checkboxes = document.querySelectorAll(`input[name='${interests}']:checked`);
// let checkboxArray = [];
// checkboxes.forEach((checkbox) => {
//     checkboxArray.push(checkbox.value);
// });
// console.log(checkboxArray);








let nameInput = document.getElementById('name-input');
let nameInputValue = nameInput.value;
let nameTrimmed = nameInputValue.trim();
console.log(nameTrimmed);
let commentsInput = document.getElementById('comments');
let commentsInputValue = commentsInput.value;
let commentsTrimmed = commentsInputValue;
console.log(commentsTrimmed);

if (nameTrimmed !== '' && commentsTrimmed !== '' && inputBoolValue === true){
    alert('Your submission has been recieved');
}
else if (nameTrimmed === '' && commentsTrimmed !== '' && inputBoolValue === true){
    alert('Please input your name. A fake name will do!');
}
else if (nameTrimmed !== '' && commentsTrimmed === '' && inputBoolValue === true ){
    alert('Please add some comments! Gibberish will do.')
}
else {
    alert('Please add add your name and some comments. A fake name and gibberish will do!')
}
}