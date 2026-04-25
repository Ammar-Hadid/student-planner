import initialTasks from "../../data/tasks.js";

export const loadTasks = () => {
    try {
        const storedTasks = localStorage.getItem('tasks');

        if (!storedTasks) return initialTasks;

        const parsedTasks = JSON.parse(storedTasks);

        if (!Array.isArray(parsedTasks)) return initialTasks;

        return parsedTasks.map(task => ({ ...task, dueDate: new Date(task.dueDate) }));

    }

    catch (error) {
        console.log(error);
        return initialTasks
    }
}

export const saveTasks = (tasks) => {

    try {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    catch (error) {
        console.error(`Failed to save tasks: ${error}`)
    }
}
