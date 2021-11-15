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
    inputVal.value = ''
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
        <div class="list border-b-2">
                        <div class="absolute rounded-full p-2 h-6 w-6 mt-4 ml-4 border-2 bg-gradient-to-r from-blue-400 to-pink-500 dark:border-white border-gray-300 cursor-pointer"></div>
            <div class="pl-16 pr-2 py-4 flex justify-between cursor-pointer">
                 <p class="todo-text text-justify pr-6 capitalize">${data}</p>
               <div class="flex gap-4">
                 <button type="button" onclick="edittask(${index})"class=""><i class="fa fa-edit"></i></button>
                 <button type="button" onclick="openDeleteModal(${index})"class=""><i class="fa fa-trash"></i></button>
            </div>
          </div>
        </div>
<Style>
.deleteModal{
    display:block;
}
    .active {
        opacity: 1;
    }
    .completed {
        text-decoration: line-through;
    }
</Style>
<div class="delete hidden fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
   
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <!-- Heroicon name: outline/exclamation -->
            <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              Delete Todo
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Are you sure you want to delete your todo? All of your data will be permanently removed. This action cannot be undone.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" onclick="deleteItem(${index})">
          Delete
        </button>
        <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onclick="closeDeleteModal()">
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>

   `

    })
    itemShow.innerHTML = add;
}
showItem()

function edittask(index) {
    let saveindex = document.getElementById("addtodo");
    let addtaskbtn = document.getElementById("addtaskbtn");
    let savetaskbtn = document.getElementById("savetaskbtn");
    saveindex.value = index;
    let webtask = localStorage.getItem("localItem");
    let task = JSON.parse(webtask);


    inputVal.value = task[index];
    addtaskbtn.style.display = "none";
    savetaskbtn.style.display = "block";
};

let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener("click", function() {
    let addtaskbtn = document.getElementById("addtaskbtn");
    let webtask = localStorage.getItem("localItem");
    let task = JSON.parse(webtask);
    let saveindex = document.getElementById("saveindex").value;



    for (keys in task[saveindex]) {
        if (keys == 'taskList') {
            task[saveindex] = inputVal.value;
        }
    }

    savetaskbtn.style.display = "none";
    addtaskbtn.style.display = "block";
    localStorage.setItem("localItem", JSON.stringify(task));
    inputVal.value = '';
    showItem();
});



const pendingTasksNumb = document.querySelector(".pendingTasks");
pendingTasksNumb.textContent = taskList.length; //passing the length of todo in pendingtask


const dragArea = document.querySelector(".todoLists");
new Sortable(dragArea, {
    animation: 500
});



function deleteItem(index) {
    let webtask = localStorage.getItem("localItem");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("localItem", JSON.stringify(taskObj));
    showItem();
}

function clearTask() {

    localStorage.clear()
    showItem()
};

function openDeleteModal() {;
    document.querySelector('.delete').classList.add('deleteModal');
}

function closeDeleteModal() {;
    document.querySelector('.delete').classList.remove('deleteModal');
};