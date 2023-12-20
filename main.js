const menuItem = document.getElementById('menu-icon');
const nav = document.querySelector('nav')

menuItem.addEventListener('click' , () =>{
 nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex' ;
})

const newTaskBtn = document.getElementById('new-task-btn');
newTaskBtn.addEventListener('click', () => {
    const taskName = prompt('Enter the task name:');
    if (taskName) {
        const newTask = document.createElement('li');
        newTask.innerHTML = `<input type="checkbox"> <label>${taskName}</label>`;
        document.querySelector('ul').appendChild(newTask);
    }
});