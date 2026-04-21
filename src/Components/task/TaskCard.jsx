import { mapSubjects } from "../../data/subjects"
import { mapStatuses } from "../../data/statuses";
import EllipsisMenu from "./EllipsisMenu";

const TaskCard = ({ task, variant, changeTaskStatus, handleDetailsPanel }) => {
    const cardColor = mapSubjects[task.subject]?.color || "#ccc";
    const statusColor = mapStatuses[task.status]?.color || "#ccc";

    return (
        <div onClick={() => handleDetailsPanel?.({ task })} className={`task-card card-${variant ?? ''}`} style={{ '--card-color': cardColor, '--status-color': statusColor }}>
            {(variant === 'featured' || variant === 'compact') && <EllipsisMenu task={task} changeTaskStatus={changeTaskStatus} />}
            {(variant === 'featured' || variant === 'preview') && <div className="badge">{task.status || 'Status'}</div>}

            <p>{task.title || 'Task Title'}</p>
            <ul>
                <li>{task.subject || 'Task subject'}</li>
                <li>{!isNaN(task.dueDate.getTime()) ? task.dueDate.toLocaleString() : '' || 'Task Date'}</li>
            </ul>
        </div>
    )
}

export default TaskCard