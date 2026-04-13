import { useState, useEffect, useRef } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faEllipsisVertical,
    faCircle,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons"

import { statuses } from "../../data/statuses"


const EllipsisMenu = ({ activeStatusId }) => {
    const [menuState, setMenuState] = useState(false);
    const [subMenu, setSubmenu] = useState(null);

    const [mainFilpped, setMainFlipped] = useState(false);
    const [subFlipped, setSubFlipped] = useState(false);


    // Flip menus when not enough space
    const mainUlRef = useRef(null);
    const subUlRef = useRef(null);
    useEffect(() => {
        const screenWidth = window.innerWidth;

        if (menuState && mainUlRef.current) {
            const rec = mainUlRef.current.getBoundingClientRect();
            setMainFlipped(rec.right > screenWidth)
        }

        if (subMenu && subUlRef.current) {
            const rec = subUlRef.current.getBoundingClientRect();
            setSubFlipped(rec.right > screenWidth)
        }
    }, [menuState, subMenu])

    // Close on outside click event listener
    const menuRef = useRef(null);
    useEffect(() => {

        const onOutsideClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuState(false);
                setSubmenu(null);
            }
        }
        document.addEventListener('mousedown', onOutsideClick)

        return () => { document.removeEventListener('mousedown', onOutsideClick) }
    }, [])


    const toggleMenu = () => {
        setMenuState(prev => {
            const next = !prev;

            if (!next) {
                setSubmenu(null);
                setMainFlipped(false);
                setSubFlipped(false);
            }

            return next
        })
    }


    return (
        <div className="ellipsis-menu" ref={menuRef}>
            <button className="trigger" onClick={() => toggleMenu()}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>


            {menuState && <ul ref={mainUlRef} className={`menu ${mainFilpped ? 'is-flipped' : ''}`}>
                <li className="has-submenu">
                    <button onClick={() => setSubmenu('status')}>
                        <FontAwesomeIcon icon={faCircle} />
                        Status
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>


                    {subMenu === 'status' && <ul ref={subUlRef} className={`submenu ${subFlipped ? 'is-flipped' : ''}`}>
                        {statuses
                            .filter(status => status.id !== activeStatusId)
                            .map(status => {
                                return (
                                    < li key={status.id}>
                                        <button style={{ '--li-status-color': status.color }}>
                                            <FontAwesomeIcon icon={status.icon} />
                                            {status.label}
                                        </button>
                                    </li>
                                )
                            })}
                    </ul>
                    }
                </li>
            </ul >
            }
        </div >
    )
}

export default EllipsisMenu
