import { useState, useEffect } from 'react';
import * as React from 'react';
import {Link, Navigate} from "react-router-dom";
import {ROUTES} from "@/constants/routes";
import {FormInput} from "@/components/FormInput/FormInput.tsx";
import { validateForm } from '@/components/Validation/Validation.tsx';
import type {UserType} from "@/store/types/user.type";
import {useAuth} from "@/context/AuthContext.tsx";

const USER: string = 'user';
const USERS: string = 'users';
const ISLOGGEDIN: string = 'isLoggedIn';

type LoginForm = {
    email: string;
    password: string;
};

export const LoginPage = () => {
    const { login } = useAuth();
    const [form, setForm] = useState<LoginForm>({ email: '', password: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [error, setError] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem(USER);
        const storedIsLoggedIn = localStorage.getItem(ISLOGGEDIN);

        if (storedIsLoggedIn === 'true' && storedUser) {
            setRedirect(true);
        }
    }, []);

    if (redirect) {
        return <Navigate to={ROUTES.HOME} />;
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formErrors = validateForm(form);

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            const usersJSON = localStorage.getItem(USERS);
            const users: UserType[] = usersJSON ? JSON.parse(usersJSON) as UserType[] : [];

            const user = users.find(u => u.email === form.email);

            if (user && user.password === form.password) {
                localStorage.setItem(USER, JSON.stringify({ email: user.email }));
                localStorage.setItem(ISLOGGEDIN, 'true');
                login();  // глобальный вход
                setRedirect(true);
                setError('');
            } else {
                setError(user ? 'Incorrect password.' : 'User with this email does not exist.');
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

