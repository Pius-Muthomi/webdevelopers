
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

  document.getElementById('numbers').innerText = `${completeTasks} / ${totalTasks}`;

  if (tasks.length && completeTasks === totalTasks){
    blaskConfetti();
  }
};



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

const blaskConfetti = () => {
  const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}
