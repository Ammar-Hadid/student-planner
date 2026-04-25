import TaskCard from '../task/TaskCard.jsx'

const Section = ({ type, tasks, title, changeTaskStatus, handleDetailsPanel }) => {
    return (
        <div className={`child-section ${type ?? ''}`}>
            <p className="title">{title}</p>

            <div className="tasks-wrapper">

                {tasks.length === 0 && <p>No results found</p>}


                {tasks.length > 0 && tasks.map(task => (
                    <TaskCard
                        key={task.id}
                        variant={type}
                        task={task}
                        changeTaskStatus={changeTaskStatus}
                        handleDetailsPanel={handleDetailsPanel}
                    />
                ))}
            </div>
        </div>
    );
}

export default Section;