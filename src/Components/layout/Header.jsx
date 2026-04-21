import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Header = ({ title, userName, openAddTaskModal }) => {
    return (
        <header>
            <div className="header-main">
                <p>{title}</p>
                <button onClick={() => openAddTaskModal()}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>

            <div className="user">
                <FontAwesomeIcon icon={faUser} />
                <p>{userName}</p>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </header>
    )
}

export default Header