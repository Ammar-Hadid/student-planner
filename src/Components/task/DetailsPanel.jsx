import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faAnglesRight,
    faUpRightAndDownLeftFromCenter,
    faList,
    faClock,
    faCircle,
    faAddressCard
} from "@fortawesome/free-solid-svg-icons"

import { mapSubjects } from "../../data/subjects"
import { mapStatuses } from "../../data/statuses"
import DescriptionRow from "./DescriptionRow"

const DetailsPanel = ({ isOpen, task, onClose }) => {

    const subject = mapSubjects[task?.subject] || {};
    const status = mapStatuses[task?.status] || {};


    return (
        <div className={`details-panel ${isOpen ? 'open' : ''}`}>

            <div className="util-btns">
                {/* Close button */}
                <button onClick={onClose}>
                    <FontAwesomeIcon icon={faAnglesRight} />
                </button>

                {/* View full page button */}
                <button>
                    <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                </button>
            </div>

            {task && <div className="content">
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
                        value={task.dueDate.toLocaleTimeString()}
                    />

                    <DescriptionRow
                        icon={faAddressCard}
                        label="Teacher"
                        value={task.teacher}
                    />
                </dl>

                <div className="description">
                    <h2>Description</h2>
                    <p>{task.shortDescription}</p>
                </div>
            </div>}
        </div>
    )
}

export default DetailsPanel;
