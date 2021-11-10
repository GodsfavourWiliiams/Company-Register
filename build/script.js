const inputVal = document.getElementById("addtodo")
const addTaskBtn = document.getElementsByClassName('btn')[0];

addTaskBtn.addEventListener('click', function() {
    if (inputVal.value.trim() != 0) {
        let localItems = JSON.parse(localStorage.getItem('localItem'))
        if (localItems === null) {
            taskList = []

        } else {
            taskList = localItems;
        }
        taskList.push(inputVal.value)
        localStorage.setItem('localItem', JSON.stringify(taskList));
    }

    showItem()
})

function showItem() {
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if (localItems === null) {
        taskList = []

    } else {
        taskList = localItems;
    }


    let add = '';
    let itemShow = document.querySelector('.todoLists');
    taskList.forEach((data, index) => {


        add += `
        <div class="list">
          <div class="rounded-full w-6 h-6 mt-4 ml-4 border-2 absolute border-black "></div>
            <div class="py-4 pl-14 px-4 flex justify-between border-b-2 cursor-pointer">
                 <p class="text-justify">${data}</p>
              <img src="/todo-app-main/images/times-solid.svg" class="w-4 ml-2" alt="" onClick="deleteItem(${index})">
           </div>
         </div>
        </div>
   `
    })
    itemShow.innerHTML = add;
}
showItem()

const dragArea = document.querySelector(".todoLists");
new Sortable(dragArea, {
    animation: 350
});

function deleteItem(index) {
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    taskList.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showItem()
}

function clearTask() {

    localStorage.clear()
    showItem()
}