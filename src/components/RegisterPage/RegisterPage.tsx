import React, { useState } from 'react';
import './RegisterPage.scss';

interface RegisterForm {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterPage = () => {
    const [form, setForm] = useState<RegisterForm>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (form.password !== form.confirmPassword) {
            setError('Пароли не совпадают');
            return;
        }

        // Здесь можно добавить логику отправки данных на сервер
        console.log('Регистрационные данные:', form);
        setError('');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    return (
        <div className="register-page">
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>User name:</label>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Repeat password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                {error && <div className="error">{error}</div>}

                <button type="submit">Sign up</button>
            </form>
            <div className="open-login-page">Already have an account? <a href="/login">Log in</a></div>
        </div>
    );
};

export default RegisterPage;
