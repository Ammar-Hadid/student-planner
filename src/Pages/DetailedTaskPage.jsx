import { useParams, Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faList,
    faClock,
    faCircle,
    faAddressCard,
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons"

import DescriptionRow from "../Components/task/DescriptionRow";

import { mapStatuses } from '../data/statuses';
import { mapSubjects } from '../data/subjects';


const DetailedTaskPage = ({ tasks }) => {
    const { id } = useParams();

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return <p>Task not found</p>
    }

    const subject = mapSubjects[task.subject] || {};
    const status = mapStatuses[task.status] || {};

    return (
        <div className="task-details-page">
            <Link to="/" className="navigate-back" >
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>

            <div className="content">
                <h1>{task.title}</h1>

                <dl>
                    <DescriptionRow
                        icon={faList}
                        label="Subject"
                        value={subject.label}
                        color={subject.color}
                    />

                    <DescriptionRow
                        icon={faCircle}
                        label="Status"
                        value={status.label}
                        color={status.color}
                    />

                    <DescriptionRow
                        icon={faClock}
                        label="Due date"
                        value={task.dueDate.toLocaleDateString('en-GB', { day: "numeric", month: "short" })}
                    />

                    <DescriptionRow
                        icon={faAddressCard}
                        label="Teacher"
                        value={task.teacher}
                    />
                </dl>

                <div className="description">
                    <h2>Description</h2>
                    <p>{task.longDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailedTaskPage;














