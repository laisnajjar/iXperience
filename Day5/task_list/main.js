class Task {
    constructor(task){
        this.task = task;
    }
}

class UserInterface{
    constructor(){
        this.taskInput = document.getElementById('task-input');
        this.btn = document.getElementById('button-input');
        this.tableBody = document.getElementById('table-body');
        this.tasks = [];
    }
    
    bindEventListener(){
        this.btn.addEventListener('click', (e) => {
            this.handleButtonClick(e);
        });
    }

    handleButtonClick(event){
        const task = new Task(
            this.taskInput.value
        );

        this.tasks.push(task);
        this.populateTaskTable();

        this.taskInput.value = '';
    }
    
    populateTaskTable(){
        this.tableBody.innerHTML = '';
        for(let task of this.tasks){
            const row = document.createElement('tr');
            const taskCell = document.createElement('td');
            const completedCell = document.createElement('td');
            const checkCell = document.createElement('input');
            checkCell.setAttribute('type', 'checkbox');
            const actionsCell = document.createElement('td');
            const removeButton = document.createElement('button');
            row.append(taskCell);
            row.append(checkCell);
            row.append(completedCell);
            row.append(actionsCell);
            
            
            taskCell.innerHTML = task.task;
            removeButton.innerHTML = 'X';
            removeButton.addEventListener('click', (e) => this.onRemoveButtonClick(task));
            actionsCell.append(removeButton);

            this.tableBody.append(row);
        }
    }

    onRemoveButtonClick(taskToRemove) {
        this.tasks = this.tasks.filter((task) => {
          return task.task !== taskToRemove.task;
        });
        this.populateTaskTable();
    }
}




const ui = new UserInterface();
ui.bindEventListener();