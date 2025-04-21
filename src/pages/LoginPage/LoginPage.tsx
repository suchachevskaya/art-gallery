
import React, { useState, useEffect } from 'react';
import {Link, Navigate} from "react-router-dom";
import {ROUTES} from "@/constants/routes";
import {FormInput} from "@/components/FormInput/FormInput.tsx";
import { validateForm } from '@/components/Validation/Validation.tsx';



type LoginForm = {
    email: string;
    password: string;
};

export const LoginPage = () => {
    const [form, setForm] = useState<LoginForm>({
        email: '',
        password: '',
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [error, setError] = useState('');

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

        if (storedIsLoggedIn === 'true' && storedUser) {
            setIsLoggedIn(true);
            setForm(JSON.parse(storedUser));
        }
    }, []);

    if (isLoggedIn) {
        return <Navigate to={ROUTES.HOME} />;
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        const formErrors = validateForm({
            email: form.email,
            password: form.password,
        });

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            const usersJSON = localStorage.getItem('users');
            const users = usersJSON ? JSON.parse(usersJSON) : [];

            const user = users.find((u: { email: string; password: string }) => u.email === form.email);

            if (user) {
                if (user.password === form.password) {
                    localStorage.setItem('user', JSON.stringify({ email: user.email }));
                    localStorage.setItem('isLoggedIn', 'true');
                    setIsLoggedIn(true);
                    setError('');
                } else {
                    setError('Incorrect password.');
                }
            } else {
                setError('User with this email does not exist.');
            }
        } else {
            setError('Please correct the errors in the form.');
        }


    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setForm((prevForm) => ({ ...prevForm, [name]: value }));
        const newErrors = validateForm({ ...form, [name]: value });

        setErrors(newErrors);
    };

    return (
        <div className="form-input-page">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email:"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    error={errors.email}
                />

                <FormInput
                    label="Password:"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    error={errors.password}
                />
                {error && <div className="error">{error}</div>}
                <button type="submit">Login</button>
            </form>
            <div className="open-another-page">
                Don't have an account? <Link to={ROUTES.SIGNUP}>Sign up</Link>
            </div>
        </div>
    );
};

