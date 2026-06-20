import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const AuthPage = () => {
    const initialValues = {
        userName: '',
    };

    const [form, setForm] = useState(initialValues);

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setForm(prev => (
            {
                ...prev,
                [name]: value
            }
        ))
    }

    const navigate = useNavigate();

    const { login } = useAuth();


    const handleAuthSubmit = (e) => {
        e.preventDefault();
        login(form.userName);
        navigate('/');
    }

    return (
        <div className="auth-page">
            <div className="auth-header">
                <p>Student planner</p>
            </div>

            <div className="auth-form">
                <div className="form-heading">
                    <h2>Welcome</h2>
                    <p>Enter your name to personalize your planner</p>
                </div>
                <form onSubmit={handleAuthSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        name="userName"
                        required
                        value={form.userName}
                        onChange={handleOnChange}
                    />

                    <button type="submit">Continue</button>
                </form>
            </div>
        </div>
    )
}

export default AuthPage