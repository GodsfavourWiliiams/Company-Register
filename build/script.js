const addtodo = document.getElementById("addtodo");
const divList = document.querySelector('.listHolder');

function addTodo() {
    const userEnteredValue = addtodo.value
    if (userEnteredValue == "") {
        console.log("the time is 10 pm")
        addtodo.style.borderColor = "red"
    } else {
        addtodo.style.borderColor = "green"
        const ul = divList.querySelector('ul');
        const li = document.createElement('li');
        li.innerHTML = addtodo.value;
        addtodo.value = '';
        ul.appendChild(li);
        createBtn(li);
    }
}

addtodo.addEventListener('keyup', (event) => {
    if (event.which === 13) {
        addTodo();
    }
});