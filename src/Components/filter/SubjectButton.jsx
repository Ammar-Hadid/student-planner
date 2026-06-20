import { useEffect, useRef, useState } from 'react'
import { offset, useFloating, useHover, useInteractions } from "@floating-ui/react"

const SubjectButton = ({ isOpen, subject, handleSubjectFilter }) => {

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
    const referenceRef = useRef(null)
    const floatingRef = useRef(null)

    useEffect(() => {
        refs.setReference(referenceRef.current)
    }, [refs])

    useEffect(() => {
        refs.setFloating(isTooltipOpen ? floatingRef.current : null)
    }, [isTooltipOpen, refs])

    return (
        <button
            {...getReferenceProps({
                onClick: () => handleSubjectFilter(subject)
            })}
            className="subject-btn"
            ref={referenceRef}
        >
            <div className="subject-button-color" style={{ backgroundColor: subject.color }} />
            {!isOpen && isTooltipOpen && <p className="tooltip" ref={floatingRef} style={floatingStyles} {...getFloatingProps()}>{subject.label}</p>}
            {isOpen && <p>{subject.label}</p>}
        </button>
    )
}

export default SubjectButton
