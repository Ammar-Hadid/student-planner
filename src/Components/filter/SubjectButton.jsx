const SubjectButton = ({ subject, onClick }) => {
    return (
        <button className="subject-btn" onClick={onClick}>
            <div className="subject-button-color" style={{ backgroundColor: subject.color }} />
            <p>{subject.label}</p>
        </button>
    )
}

export default SubjectButton