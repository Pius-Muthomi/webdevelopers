
document.addEventListener('DOMContentLoaded', () => { 
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));

  if (storedTasks){
    storedTasks.forEach((task) => tasks.push(task));
    updateTaskList();
  }
});
  let tasks = [];

  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('task-list');
  const addBtn = document.getElementById('newTask');

  const addTask = () => {
    const text = taskInput.value.trim();
    if (!text) return;

    tasks.push({ text, completed: false });
    taskInput.value = '';
    updateTaskList();
    updateStats();
    saveTasks();
  };

  const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
    updateStats();
    saveTasks();
  };



const deleteTask = (index) =>{
    tasks.splice(index, 1);
    updateTaskList();
    updateStats();
    saveTasks();
}

const editTask = (index)=>{
    taskInput.value = tasks[index].text;

    tasks.splice(index, 1);
    updateTaskList();
    updateStats();
    saveTasks();

}

const updateStats = () => {
  const completeTasks = tasks.filter(task => task.completed).length
  const totalTasks = tasks.length;
  const progress = (completeTasks/totalTasks) *100;
  const progressBar = document.getElementById('progress');
  progressBar.style.width =`${progress}%`;

  document.getElementById('numbers').innerText = `${completeTasks} / ${totalTasks}`
}

  const updateTaskList = () => {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
      const listItem = document.createElement('li');

      listItem.innerHTML = `
        <div class="task-item">
          <div class="task ${task.completed ? 'completed' : ''}">
            <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''}>
            <p>${task.text}</p>
          </div>
          <div class="icons">
            <i class="fa-solid fa-pen-to-square" style="color: blue;"></i>
            <i class="fa-solid fa-trash" style="color: red;"></i>
          </div>
        </div>
      `;


    //  
      
        listItem.querySelector('.checkbox').addEventListener('change', () => toggleTaskComplete(index));
        listItem.querySelector('.fa-pen-to-square').addEventListener('click', ()=> editTask(index));
        listItem.querySelector('.fa-trash').addEventListener('click', ()=> deleteTask(index))

        taskList.appendChild(listItem);
    });
  };

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addTask();
  });


