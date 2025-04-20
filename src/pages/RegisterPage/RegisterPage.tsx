import React, { useState } from 'react';
import './RegisterPage.scss';
import {FormInput} from "@/components/FormInput/FormInput.tsx";
import {ROUTES} from "@/constants/routes";
import {Link} from "react-router-dom";

type RegisterForm = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const RegisterPage = () => {
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
        setError('');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    return (
        <div className="register-page">
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="User name:"
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    label="Email:"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    label="Password:"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    label="Repeat password:"
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                />

                {error && <div className="error">{error}</div>}

                <button type="submit">Sign up</button>
            </form>
            <div className="open-login-page">Already have an account? <Link to={ROUTES.LOGIN}>Log in</Link></div>
        </div>
    );
};

