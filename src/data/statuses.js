import { faCircleStop, faSpinner, faCheck } from "@fortawesome/free-solid-svg-icons";

export const STATUSES_IDS = {
    IN_PROGRESS: 'in-progress',
    TO_DO: 'to-do',
    COMPLETED: 'completed'
}

export const statuses = [
    { id: STATUSES_IDS.TO_DO, label: 'To do', color: '#eb0f0f', icon: faCircleStop },
    { id: STATUSES_IDS.IN_PROGRESS, label: 'In progress', color: '#FF8C00', icon: faSpinner },
    { id: STATUSES_IDS.COMPLETED, label: 'Completed', color: '#0CB35A', icon: faCheck }
];

export const mapStatuses = Object.fromEntries(
    statuses.map(status => [status.id, status])
)
