import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faUser,
    faChevronRight,
    faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";

import {
    useFloating,
    offset,
    useClick,
    useDismiss,
    useInteractions
} from "@floating-ui/react";

import { useAuth } from "../../context/authContext";

const Header = ({ openAddTaskModal }) => {
    const { logout, user } = useAuth();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        open: isDropdownOpen,
        onOpenChange: setIsDropdownOpen,
        placement: "bottom",
        middleware: [
            offset(10)
        ]
    });

    const onClick = useClick(context);
    const onDismiss = useDismiss(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([onClick, onDismiss]);

    return (
        <header>
            <div className="header-main">
                <p>Dashboard</p>
                <button onClick={openAddTaskModal}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>

            <div className="user" ref={refs.setReference} {...getReferenceProps()}>
                <FontAwesomeIcon icon={faUser} />
                <p>{user}</p>
                <FontAwesomeIcon className={`chevron ${isDropdownOpen ? 'open' : ''}`} icon={faChevronRight} />

                {isDropdownOpen && (
                    <ul className="dropdown" ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
                        <li>
                            <div className="row dropdown-user">
                                <FontAwesomeIcon icon={faUser} />
                                {user}
                            </div>
                        </li>

                        <li>
                            <button className="row logout" onClick={logout}>
                                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                Logout
                            </button>
                        </li>
                    </ul>
                )}
            </div>
        </header>
    )
}

export default Header