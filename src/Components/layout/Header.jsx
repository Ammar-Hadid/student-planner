import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Header = ({ title, userName }) => {
    return (
        <header>
            <div className="header-main">
                <p>{title}</p>
                <button><FontAwesomeIcon icon={faPlus} /></button>
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