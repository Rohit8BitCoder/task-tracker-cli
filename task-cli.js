const fs = require('fs');
const path = require('path');

// File where tasks will be stored
const TASKS_FILE = path.join(__dirname, 'tasks.json');

// Load tasks from the JSON file, or initialize an empty array
function loadTasks() {
    if (fs.existsSync(TASKS_FILE)) {
        const data = fs.readFileSync(TASKS_FILE);
        return JSON.parse(data);
    }
    return [];
}

// Save tasks to the JSON file
function saveTasks(tasks) {
    fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

// Task Tracker CLI
class TaskTracker {
    constructor() {
        this.tasks = loadTasks();
    }

    addTask(description) {
        const task = {
            id: this.tasks.length + 1,
            description,
            status: 'todo',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        this.tasks.push(task);
        saveTasks(this.tasks);
        console.log(`Task added successfully (ID: ${task.id})`);
    }

    updateTask(id, newDescription) {
        const task = this.tasks.find(task => task.id === parseInt(id));
        if (task) {
            task.description = newDescription;
            task.updatedAt = new Date().toISOString();
            saveTasks(this.tasks);
            console.log(`Task ${id} updated successfully.`);
        } else {
            console.log(`Task ${id} not found.`);
        }
    }

    deleteTask(id) {
        const taskIndex = this.tasks.findIndex(task => task.id === parseInt(id));
        if (taskIndex > -1) {
            this.tasks.splice(taskIndex, 1);
            saveTasks(this.tasks);
            console.log(`Task ${id} deleted successfully.`);
        } else {
            console.log(`Task ${id} not found.`);
        }
    }

    markInProgress(id) {
        const task = this.tasks.find(task => task.id === parseInt(id));
        if (task) {
            task.status = 'in-progress';
            task.updatedAt = new Date().toISOString();
            saveTasks(this.tasks);
            console.log(`Task ${id} marked as in progress.`);
        } else {
            console.log(`Task ${id} not found.`);
        }
    }

    markDone(id) {
        const task = this.tasks.find(task => task.id === parseInt(id));
        if (task) {
            task.status = 'done';
            task.updatedAt = new Date().toISOString();
            saveTasks(this.tasks);
            console.log(`Task ${id} marked as done.`);
        } else {
            console.log(`Task ${id} not found.`);
        }
    }

    listTasks(status = null) {
        this.tasks.forEach(task => {
            if (!status || task.status === status) {
                console.log(`${task.id}: ${task.description} [${task.status}]`);
            }
        });
    }
}

// Parse command line arguments
const [,, command, ...args] = process.argv;
const tracker = new TaskTracker();

switch (command) {
    case 'add':
        tracker.addTask(args.join(' '));
        break;
    case 'update':
        tracker.updateTask(args[0], args.slice(1).join(' '));
        break;
    case 'delete':
        tracker.deleteTask(args[0]);
        break;
    case 'mark-in-progress':
        tracker.markInProgress(args[0]);
        break;
    case 'mark-done':
        tracker.markDone(args[0]);
        break;
    case 'list':
        tracker.listTasks(args[0]);
        break;
    default:
        console.log('Invalid command');
}
