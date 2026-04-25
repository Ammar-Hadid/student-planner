import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAnglesLeft,
    faSearch,
    faList,
    faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons"

import SubjectButton from "../filter/SubjectButton.jsx";

const Sidebar = ({ subjects, statuses, isOpen, handleSidebar, handleSubjectFilter, searchQuery, onSearchQueryChange }) => {
    return (
        <div className={`sidebar ${isOpen ? '' : 'closed'}`}>

            {/* Heading */}
            <div className="heading">
                {isOpen && <p>Student planner</p>}
                <button onClick={handleSidebar}>
                    <FontAwesomeIcon className="icon" icon={isOpen ? faAnglesLeft : faAngleDoubleRight} />
                </button>
            </div>


            {/* Filters */}
            <div className="filters">
                {isOpen && <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch} />
                    <input
                        type="search"
                        placeholder="Browse tasks..."
                        value={searchQuery}
                        onChange={e => onSearchQueryChange(e.target.value)}
                    />
                </div>}

                {/* Dashboard */}
                <div className="dashboard">
                    {isOpen && <p className="filters-title">Dashboard</p>}
                    <div className="filters-wrapper">
                        <button onClick={() => handleSubjectFilter(null)}>
                            <FontAwesomeIcon icon={faList} />
                            {isOpen && <p>All tasks</p>}
                        </button>
                    </div>
                </div>

                {/* Subjects */}
                <div className="subjects">
                    {isOpen && <p className="filters-title">Subjects</p>}
                    <div className="filters-wrapper">
                        {
                            subjects.map(s =>
                                <SubjectButton
                                    key={s.id}
                                    isOpen={isOpen}
                                    subject={s}
                                    handleSubjectFilter={handleSubjectFilter}
                                    onClick={() => { console.log('subject button clicked') }}
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