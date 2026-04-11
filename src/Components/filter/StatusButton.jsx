import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleStop, faSpinner, faCheck } from "@fortawesome/free-solid-svg-icons";
import { STATUSES_IDS } from "../../data/statuses";

const iconMap = {
    [STATUSES_IDS.IN_PROGRESS]: faSpinner,
    [STATUSES_IDS.COMPLETED]: faCheck,
    [STATUSES_IDS.TO_DO]: faCircleStop
}

const StatusButton = ({ status, onClick }) => {
    const icon = iconMap[status.id] || '';

    return (
        <button className={`status-button ${status.id}`} onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
            <p>{status.label}</p>
        </button>
    )
}

export default StatusButton