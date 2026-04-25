import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const AuthPage = () => {
    const initialValues = {
        userName: '',
        password: ''
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
                    <h2>Login</h2>
                    <p>Enter your details to get started</p>
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

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        value={form.password}
                        onChange={handleOnChange}
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default AuthPage