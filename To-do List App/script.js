const task = document.getElementById('task');
const addTaskBtn = document.getElementById('button-addon2')

addTaskBtn.addEventListener('click', () => {
    if (task.value === "") {
        alert('Please Enter a task...');
        return;
    }

    console.log(task.value);
})