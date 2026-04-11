import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAnglesLeft,
    faSearch,
    faList
} from "@fortawesome/free-solid-svg-icons"

import SubjectButton from "../filter/SubjectButton.jsx";
import StatusButton from "../filter/StatusButton.jsx";

const Sidebar = ({ subjects, statuses }) => {
    return (
        <div className="sidebar">

            {/* Heading */}
            <div className="heading">
                <p>Student planner</p>
                <FontAwesomeIcon className="icon" icon={faAnglesLeft} />
            </div>


            {/* Filters */}
            <div className="filters">
                {/* Search bar */}
                <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch} />
                    <p>Browse tasks</p>
                </div>

                {/* Dashboard */}
                <div className="dashboard">
                    <p className="filters-title">Dashboard</p>
                    <div className="filters-wrapper">
                        <button>
                            <FontAwesomeIcon icon={faList} />
                            <p>All tasks</p>
                        </button>
                    </div>
                </div>

                {/* Subjects */}
                <div className="subjects">
                    <p className="filters-title">Subjects</p>
                    <div className="filters-wrapper">
                        {
                            subjects.map(s =>
                                <SubjectButton
                                    key={s.id}
                                    subject={s}
                                    onClick={() => { console.log('subject button clicked') }}
                                />
                            )
                        }
                    </div>
                </div>

                {/* Statuses */}
                <div className="statuses">
                    <p className="filters-title">Status</p>
                    <div className="filters-wrapper">
                        {
                            statuses.map(status =>
                                <StatusButton
                                    key={status.id}
                                    status={status}
                                    onClick={() => console.log('Status button clicked')}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar