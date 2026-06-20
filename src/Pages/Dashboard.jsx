import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import Sidebar from "../Components/layout/Sidebar.jsx";
import Header from "../Components/layout/Header.jsx"
import Section from "../Components/layout/Section";
import Panel from "../Components/layout/Panel.jsx";
import DetailsPanel from "../Components/task/DetailsPanel.jsx";
import AddTaskModal from "../Components/layout/AddTaskModal.jsx";
import QuoteOfTheDay from "../Components/widgets/QuoteOfTheDay.jsx";

// Data
import { subjects } from "../data/subjects.js";
import { statuses, STATUSES_IDS } from "../data/statuses.js";
import quoteOfTheDayApi from "../services/quotes/quotesApi.js";

import { loadSidebarPreference, saveSidebarPreference } from "../services/uiPreferencesLocalStorage/sidebarPreference.js";

const Dashboard = ({ tasks, setTasks }) => {

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

    // get todo tasks
    const toDoTasks = activeTasks.filter(task => task.status === STATUSES_IDS.TO_DO);

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
    const [isSideBarOpen, setIsSidebarOpen] = useState(loadSidebarPreference);

    useEffect(() => {
        saveSidebarPreference(isSideBarOpen)
    }, [isSideBarOpen])

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

    // #region Add task modal
    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

    const openAddTaskModal = () => {
        setIsAddTaskModalOpen(true)
    }

    const closeTaskModal = () => {
        setIsAddTaskModalOpen(false);
    }

    const handleCreateTask = (formData) => {
        const newTask = {
            id: uuidv4(),
            title: formData.title.trim(),
            subject: formData.subject,
            status: formData.status,
            dueDate: new Date(formData.dueDate),
            teacher: formData.teacher.trim(),
            shortDescription: formData.shortDescription,
            longDescription: formData.longDescription
        }

        setTasks(prev => (
            [
                ...prev,
                newTask
            ]
        ))
    }
    // #endregion

    // #region Quote section
    const [quote, setQuote] = useState('');
    const [quoteLoading, setQuoteLoading] = useState(false);
    const [quoteError, setQuoteError] = useState(null)

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                setQuoteLoading(true);
                setQuoteError(null);
                const data = await quoteOfTheDayApi();
                setQuote(data);
            }

            catch (error) {
                setQuoteError('Failed to load quote');
                console.error(`Something went wrong: ${error}`)
            }

            finally {
                setQuoteLoading(false);
            }
        }

        fetchQuote()
    }, [])
    // #endregion

    const [searchQuery, setSearchQuery] = useState("");

    const isSearching = searchQuery.trim().length > 0;

    const searchedTasks = tasks.filter(task => task.title.toLowerCase().includes(searchQuery.trim().toLowerCase()));

    return (
        <section className="dashboard">

            <DetailsPanel isOpen={!!detailsPanelTask} task={detailsPanelTask} onClose={closeDetailsPanel} />

            <AddTaskModal isOpen={isAddTaskModalOpen} onClose={closeTaskModal} onSubmit={handleCreateTask} />

            <button
                type="button"
                className="mobile-sidebar-button"
                onClick={setIsSidebarOpen}
                aria-label="Open filters"
            >
                ☰
            </button>

            <Sidebar
                subjects={subjects}
                statuses={statuses}
                isOpen={isSideBarOpen}
                handleSidebar={handelSidebar}
                handleSubjectFilter={handleSubjectFilter}
                searchQuery={searchQuery}
                onSearchQueryChange={setSearchQuery}
            />

            <div className="main-content">
                <Header openAddTaskModal={openAddTaskModal} />

                <Panel>

                    {!isSearching &&
                        <>
                            < Section
                                type="featured"
                                title="Due soon"
                                tasks={dueSoonTasks}
                                changeTaskStatus={changeTaskStatus}
                                handleDetailsPanel={handleDetailsPanel}
                            />

                            <Section
                                type="compact"
                                title="To do"
                                tasks={toDoTasks}
                                changeTaskStatus={changeTaskStatus}
                                handleDetailsPanel={handleDetailsPanel}
                            />

                            <Section
                                type="compact"
                                title="In progress"
                                tasks={inProgressTasks}
                                changeTaskStatus={changeTaskStatus}
                                handleDetailsPanel={handleDetailsPanel}
                            />

                            <Section
                                type="compact"
                                title="Completed"
                                tasks={completedTasks}
                                changeTaskStatus={changeTaskStatus}
                                handleDetailsPanel={handleDetailsPanel}
                            />

                            <QuoteOfTheDay
                                title="Quote of the day"
                                quote={quote}
                                loading={quoteLoading}
                                error={quoteError}
                            />
                        </>
                    }

                    {
                        isSearching &&
                        <Section
                            type="featured"
                            title={`Results for "${searchQuery}"`}
                            tasks={searchedTasks}
                            changeTaskStatus={changeTaskStatus}
                            handleDetailsPanel={handleDetailsPanel}
                        />
                    }

                </Panel>
            </div>
        </section >
    )
}

export default Dashboard;
