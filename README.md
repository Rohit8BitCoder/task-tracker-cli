# Task Tracker

Sample solution for the [task-tracker](https://roadmap.sh/projects/task-tracker) challenge from [roadmap.sh](https://roadmap.sh/).

Task tracker is a project used to track and manage your tasks. In this task, you will build a simple command line interface (CLI) to track what you need to do, what you have done, and what you are currently working on. 

## Features

- Add tasks
- Update tasks
- Delete tasks
- Mark tasks as in progress or done
- List all tasks
- List tasks by status (done, todo, in-progress)

## Requirements

- Node.js (version 12 or later)

## How to run

Clone the repository and run the following command:

```bash
git clone https://github.com/Rohit8BitCoder/task-tracker-cli.git
cd task-tracker-cli
```

Run the following command to build and run the project:

# 1. To add a task
```bash
node task-cli.js add "Task description"
```

# example
```
node task-cli.js add "Buy groceries"
```
# 2. To update a task
```
node task-cli.js update <task_id> "New task description"
```
# example
```
node task-cli.js update 1 "Buy groceries and cook dinner"

```

# 3. To delete a task
```
node task-cli.js delete <task_id>
```
# example
```
node task-cli.js delete 1
```

# 4. Marking a Task as In Progress

```
node task-cli.js mark-in-progress <task_id>
```
# example 
```
node task-cli.js mark-in-progress 1

```

# 5. Marking a Task as Done
```
node task-cli.js mark-done <task_id>

```
# example
```
node task-cli.js mark-done 1
```
# 6. Listing All Tasks
```
node task-cli.js list
```
# 7. Listing Tasks by Status

```
node task-cli.js list done
```
```
node task-cli.js list todo
```
```
node task-cli.js list in-progress
```

