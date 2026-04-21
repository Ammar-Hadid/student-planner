import { useState } from "react";

import Sidebar from "../Components/layout/Sidebar.jsx";
import Header from "../Components/layout/Header.jsx"
import Section from "../Components/layout/Section";
import Panel from "../Components/layout/Panel.jsx";
import DetailsPanel from "../Components/task/DetailsPanel.jsx";
import AddTaskModal from "../Components/layout/AddTaskModal.jsx";

// Data
import { subjects } from "../data/subjects.js";
import { statuses, STATUSES_IDS } from "../data/statuses.js";

import initialTasks from '../data/tasks.js'

const Dashboard = () => {

    const [tasks, setTasks] = useState(initialTasks);
    const [activeSubjectId, setActiveSubjectId] = useState(null);

    const activeTasks = activeSubjectId ? tasks.filter(task => task.subject === activeSubjectId) : tasks

    // #region Get due soon tasks
    const now = new Date();

    const dueSoonTasks = activeTasks.filter(task => {
        const dueDate = task.dueDate;

        const differenceInDays = (dueDate - now) / (1000 * 60 * 60 * 24);

        return differenceInDays <= 3 && differenceInDays > 0
    })
    // #endregion

    // Get in progress tasks
    const inProgressTasks = activeTasks.filter(task => task.status === STATUSES_IDS.IN_PROGRESS);

    // Get completed tasks
    const completedTasks = activeTasks.filter(task => task.status === STATUSES_IDS.COMPLETED);

    // change task status
    const changeTaskStatus = ({ taskId, newStatusId }) => {
        setTasks(prevTasks =>
            prevTasks.map(task => {
                if (task.id === taskId) {
                    return { ...task, status: newStatusId }
                };

                return task
            })
        )
    }

    // #region Details panel 
    const [detailsPanelTask, setDetailsPanelTask] = useState(null);

    const handleDetailsPanel = ({ task }) => {
        setDetailsPanelTask(task);
    }

    const closeDetailsPanel = () => {
        setDetailsPanelTask(null);
    }

    // #endregion

    // #region Sidebar
    const [isSideBarOpen, setIsSidebarOpen] = useState(true);

    const handelSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    }


    const handleSubjectFilter = (subject) => {
        if (subject) {
            setActiveSubjectId(subject.id)
            return
        }

        setActiveSubjectId(null)
    }
    // #endregion

    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

    const openAddTaskModal = () => {
        setIsAddTaskModalOpen(true)
    }

    const closeTaskModal = ({ setFormData, initialValues }) => {
        setFormData(initialValues);
        setIsAddTaskModalOpen(false);
    }


    return (
        <section className="dashboard">

            <DetailsPanel isOpen={!!detailsPanelTask} task={detailsPanelTask} onClose={closeDetailsPanel} />

            <AddTaskModal isOpen={isAddTaskModalOpen} onClose={closeTaskModal} />

            <Sidebar
                subjects={subjects}
                statuses={statuses}
                isOpen={isSideBarOpen}
                handleSidebar={handelSidebar}
                handleSubjectFilter={handleSubjectFilter}
            />

            <div className="main-content">
                <Header title="All tasks" userName="El Pridro" openAddTaskModal={openAddTaskModal} />

                <Panel>
                    {/* Due soon section */}
                    <Section
                        type="featured"
                        title="Due soon"
                        tasks={dueSoonTasks}
                        changeTaskStatus={changeTaskStatus}
                        handleDetailsPanel={handleDetailsPanel}
                    />

                    {/* In progress section */}
                    <Section
                        type="compact"
                        title="In Progress"
                        tasks={inProgressTasks}
                        changeTaskStatus={changeTaskStatus}
                        handleDetailsPanel={handleDetailsPanel}
                    />

                    {/* Completed section */}
                    <Section
                        type="compact"
                        title="Completed"
                        tasks={completedTasks}
                        changeTaskStatus={changeTaskStatus}
                        handleDetailsPanel={handleDetailsPanel}
                    />
                </Panel>
            </div>
        </section >
    )
}

export default Dashboard;
