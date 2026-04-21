import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { subjects } from '../../data/subjects';
import { statuses } from '../../data/statuses';

import TaskCard from '../task/TaskCard';

const AddTaskModal = ({ isOpen, onClose }) => {

    const initialValues = {
        title: '',
        subject: '',
        dueDate: '',
        status: '',
        teacher: '',
        shortDescription: '',
        longDescription: ''
    }

    const [formData, setFormData] = useState(initialValues)

    const previewTask = {
        title: formData.title,
        subject: formData.subject,
        status: formData.status,
        dueDate: new Date(formData.dueDate),
    }

    const onChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value

        }))
    }

    return (
        <div className={`add-task-modal ${isOpen ? 'open' : ''}`}>
            <div className="wrapper">
                <button className="close" onClick={() => onClose({ setFormData, initialValues })}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                <div className="form">
                    <p className="title">Create task</p>
                    <form>
                        <div className="row row-multiple-inputs">
                            {/* Title */}
                            <input
                                type="text"
                                placeholder="Title"
                                name="title"
                                value={formData.title}
                                required
                                maxLength={25}
                                onChange={onChange}
                            />

                            {/* Subject */}
                            <select name="subject" value={formData.subject} placeholder="Subject" required onChange={onChange}>
                                <option value="">Subject</option>
                                {
                                    subjects.map(subject => {
                                        return <option key={subject.id} value={subject.id}>{subject.label}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div className="row row-multiple-inputs">
                            {/* Due date */}
                            <input
                                type="date"
                                placeholder="Due date"
                                name="dueDate"
                                value={formData.dueDate}
                                required
                                onChange={onChange}
                            />

                            {/* Status */}
                            <select name="status" value={formData.status} placeholder="Status" required onChange={onChange}>
                                <option value="">Status</option>
                                {
                                    statuses.map(status => {
                                        return <option key={status.id} value={status.id}>{status.label}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div className="row">
                            {/* Teacher */}
                            <input
                                type="text"
                                placeholder="Teacher"
                                name="teacher"
                                value={formData.teacher}
                                maxLength={15}
                                required
                                onChange={onChange}
                            />
                        </div>

                        <div className="row">
                            <textarea
                                name="shortDescription"
                                value={formData.shortDescription}
                                placeholder="Short description"
                                required
                                minLength={50}
                                maxLength={250}
                                onChange={onChange}
                            />
                        </div>

                        <div className="row">
                            <textarea
                                name="longDescription"
                                value={formData.longDescription}
                                placeholder="Long description"
                                required
                                minLength={200}
                                maxLength={700}
                                onChange={onChange}
                            />
                        </div>

                        <button>Create task</button>
                    </form>
                </div>

                <div className="preview">
                    <p className="title">Preview</p>
                    <TaskCard
                        task={previewTask}
                        variant="preview"
                    />
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal