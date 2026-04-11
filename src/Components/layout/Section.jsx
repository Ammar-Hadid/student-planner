import TaskCard from '../task/TaskCard.jsx'

const Section = ({ type, tasks, title }) => {
    return (
        <div className={`child-section ${type ?? ''}`}>
            <p className="title">{title}</p>

            <div className="tasks-wrapper">
                {
                    tasks.map(task => {
                        return <TaskCard key={task.id} variant={type} task={task} />
                    })
                }
            </div>
        </div >
    )
}

export default Section