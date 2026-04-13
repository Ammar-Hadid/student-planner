import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatusButton = ({ status, onClick }) => {
    return (
        <button className={`status-button ${status.id}`} onClick={onClick}>
            <FontAwesomeIcon icon={status.icon} />
            <p>{status.label}</p>
        </button>
    )
}

export default StatusButton