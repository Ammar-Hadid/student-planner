import { useState } from "react";

import Sidebar from "../Components/layout/Sidebar.jsx";
import Header from "../Components/layout/Header.jsx"
import Section from "../Components/layout/Section";
import Panel from "../Components/layout/Panel.jsx";

// Data
import { subjects } from "../data/subjects.js";
import { statuses, STATUSES_IDS } from "../data/statuses.js";

import initialTasks from '../data/tasks.js'

const Dashboard = () => {

    const [tasks, setTasks] = useState(initialTasks);

    // #region Get due soon tasks
    const now = new Date();

    const dueSoonTasks = tasks.filter(task => {
        const dueDate = task.dueDate;

        const differenceInDays = (dueDate - now) / (1000 * 60 * 60 * 24);

        return differenceInDays <= 3 && differenceInDays > 0
    })
    // #endregion

    // Get in progress tasks
    const inProgressTasks = tasks.filter(task => task.status === STATUSES_IDS.IN_PROGRESS);

    // Get completed tasks
    const completedTasks = tasks.filter(task => task.status === STATUSES_IDS.COMPLETED);

    return (
        <section className="dashboard">
            <Header title="All tasks" userName="El Pridro" />

            <Sidebar subjects={subjects} statuses={statuses} />

            <Panel>
                {/* Due soon section */}
                <Section type="featured" title="Due soon" tasks={dueSoonTasks} />

                {/* In progress section */}
                <Section type="compact" title="In Progress" tasks={inProgressTasks} />

                {/* Completed section */}
                <Section type="compact" title="Completed" tasks={completedTasks} />
            </Panel>
        </section>
    )
}

export default Dashboard;
