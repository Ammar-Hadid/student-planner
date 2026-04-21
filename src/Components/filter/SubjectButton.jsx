import { useState } from 'react'
import { offset, useFloating, useHover, useInteractions } from "@floating-ui/react"

const SubjectButton = ({ isOpen, subject, onClick, handleSubjectFilter }) => {

    const [isTooltipOpen, setIsTooltipOpen] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        open: isTooltipOpen,
        onOpenChange: setIsTooltipOpen,
        placement: "right",
        strategy: "fixed",
        middleware: [
            offset(15)
        ]
    });

    const onHover = useHover(context)
    const { getReferenceProps, getFloatingProps } = useInteractions([onHover])

    return (
        <button
            {...getReferenceProps({
                onClick: () => handleSubjectFilter(subject)
            })}
            className="subject-btn"
            ref={refs.setReference}
        >
            <div className="subject-button-color" style={{ backgroundColor: subject.color }} />
            {!isOpen && isTooltipOpen && <p className="tooltip" ref={refs.setFloating} style={floatingStyles} {...getFloatingProps}>{subject.label}</p>}
            {isOpen && <p>{subject.label}</p>}
        </button>
    )
}

export default SubjectButton
