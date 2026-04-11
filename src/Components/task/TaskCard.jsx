import { mapSubjects } from "../../data/subjects"
import { mapStatuses } from "../../data/statuses";

const TaskCard = ({ task, variant }) => {
    const cardColor = mapSubjects[task.subject].color;
    const statusColor = mapStatuses[task.status].color;

    return (
        <div className={`task-card card-${variant ?? ''}`} style={{ '--card-color': cardColor, '--status-color': statusColor }}>
            {variant === 'featured' && <div className="badge">{task.status}</div>}

            <p>{task.title}</p>
            <ul>
                <li>{task.subject}</li>
                <li>{task.dueDate.toLocaleString()}</li>
            </ul>
        </div>
    )
}

export default TaskCard