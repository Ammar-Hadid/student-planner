import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom";
import { useFloating, flip, offset, shift, useClick, useDismiss, useInteractions } from "@floating-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faEllipsisVertical,
    faCircle,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons"

import { statuses } from "../../data/statuses"


const EllipsisMenu = ({ task, changeTaskStatus }) => {
    const [menuState, setMenuState] = useState(false);
    const [subMenu, setSubmenu] = useState(null);

    // #region Main menu floating UI
    const { refs: mainRefs, floatingStyles: mainFloatingStyles, context: mainContext } = useFloating({
        open: menuState,
        onOpenChange: (open) => {
            setMenuState(open);

            if (!open) {
                setSubmenu(null);
            }
        },
        placement: "bottom-start",
        strategy: "fixed",
        middleware: [
            offset(10),
            flip(),
            shift()
        ],
    });

    const click = useClick(mainContext);
    const dismiss = useDismiss(mainContext);

    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
        dismiss
    ])
    // #endregion

    const mainReferenceRef = useRef(null)
    const mainFloatingRef = useRef(null)
    const subReferenceRef = useRef(null)
    const subFloatingRef = useRef(null)

    const isSubMenuOpen = subMenu === 'status';
    const { refs: subRefs, floatingStyles: subFloatingStyles } = useFloating({
        open: isSubMenuOpen,
        onOpenChange: (open) => {
            setSubmenu(open ? 'status' : null)
        },
        placement: "right-start",
        strategy: "fixed",
        middleware: [
            offset(-5),
            flip(),
            shift()
        ]
    });

    useEffect(() => {
        mainRefs.setReference(mainReferenceRef.current)
    }, [mainRefs])

    useEffect(() => {
        mainRefs.setFloating(menuState ? mainFloatingRef.current : null)
    }, [mainRefs, menuState])

    useEffect(() => {
        subRefs.setReference(subReferenceRef.current)
    }, [subRefs])

    useEffect(() => {
        subRefs.setFloating(isSubMenuOpen ? subFloatingRef.current : null)
    }, [isSubMenuOpen, subRefs])

    return (
        <div className="ellipsis-menu">
            <button
                ref={mainReferenceRef}
                className="trigger"
                {...getReferenceProps({
                    onClick: e => e.stopPropagation()
                })}
            >
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>

            {menuState && createPortal(<ul ref={mainFloatingRef} style={mainFloatingStyles} {...getFloatingProps()} className="dropdown-menu">
                <li className="has-submenu">
                    <button ref={subReferenceRef} onClick={e => { e.stopPropagation(); setSubmenu('status') }}>
                        <FontAwesomeIcon icon={faCircle} />
                        Status
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>


                    {subMenu === 'status' && <ul ref={subFloatingRef} style={subFloatingStyles} className="dropdown-submenu">
                        {statuses
                            .filter(status => status.id !== task.status)
                            .map(status => {
                                return (
                                    < li key={status.id}>
                                        <button onClick={(e) => { e.stopPropagation(); changeTaskStatus?.({ taskId: task.id, newStatusId: status.id }); }} style={{ '--li-status-color': status.color }}>
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
                , document.body)
            }
        </div >
    )
}

export default EllipsisMenu




