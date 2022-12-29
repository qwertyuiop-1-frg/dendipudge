let addTask = document.getElementById('addTask')
let task0 = document.querySelector('form input')
let listTask = document.querySelector('#container ul')
let noTask = document.querySelector('.noTask')
let form = document.querySelector('form')
let tasks = [];
createPage()
form.addEventListener('submit', function (event) {
   event.preventDefault();
   let newTask = task0.value;
   const task = {
      id: Date.now(),
      text: newTask,
      done: false
   }

   tasks.push(task)
   let createNewTask = `<li id=${task.id} class="task-start">
          <div>${task.text}</div>
           <div>
           <button class="yes"></button>
        <button class="no"></button>
         </div>
       </li>`;
   if (newTask !== '') {
      listTask.insertAdjacentHTML('beforeend', createNewTask)
      task0.value = '';
      task0.focus()
      if (tasks.length > 0)
         noTask.classList.add('noneList')
   }
   // localStorage.setItem('task',listTask.innerHTML)
   createPage();
})
listTask.addEventListener('click', deleteTask)
function deleteTask(event) {
   if (event.target.closest('.no')) {
      let teg = event.target.closest('.task-start')
      tasks = tasks.filter(item => item.id !== +teg.id)
      teg.remove()
   }

   if (tasks.length == 0)
      noTask.classList.remove('noneList')
   createPage();
}
//=======================

listTask.addEventListener('click', editTask)
function editTask(event) {
   if (event.target.closest('.yes')) {
      let tag = event.target.closest('.task-start');

      let id = tasks.find(item => item.id === +tag.id)
      id.done = !id.done;
      console.log(id.done)
      tag.querySelector('div').classList.toggle('runTask')
   }
   createPage()
}
//=======работа с localStorage
//================================

function createPage() {
   localStorage.setItem('tasks', JSON.stringify(tasks))
}

function updatePage() {

   //listTask.innerHTML= localStorage.getItem('task')
}


