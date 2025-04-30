import  { useState } from 'react';
import * as React from 'react';
import '../../components/FormInput/FormInput.scss';
import {FormInput} from "@/components/FormInput/FormInput.tsx";
import {ROUTES} from "@/constants/routes";
import {Link, useNavigate} from "react-router-dom";
import {validateForm} from "@/components/Validation/Validation.tsx";
import type {UserType} from "@/store/types/user.type";

const USERS: string = 'users';

type RegisterForm = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export const RegisterPage = () => {
    const [form, setForm] = useState<RegisterForm>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        const formErrors = validateForm({
            username: form.username,
            email: form.email,
            password: form.password,
            confirmPassword: form.confirmPassword,
        });

        setErrors(formErrors);


        if (Object.keys(formErrors).length === 0) {
            const storedUsers = localStorage.getItem(USERS);
            const users: UserType[] = storedUsers ? JSON.parse(storedUsers) as UserType[] : [];

            const userExists = users.some(
                (user: { email: string; username: string }) =>
                    user.email === form.email || user.username === form.username
            );

            if (userExists) {
                setError('User with this email or username already exists.');

                return;
            }

            const newUser = {
                username: form.username,
                email: form.email,
                password: form.password,
            };

            users.push(newUser);
            localStorage.setItem(USERS, JSON.stringify(users));

            setError('');
            alert('Registration successful! You can now log in.');

            setForm({
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            });

          await  navigate(ROUTES.LOGIN);
        } else {
            setError('Please correct the errors in the form.');
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    return (
        <div className="form-input-page">
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit} noValidate>
                <FormInput
                    label="User name:"
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    required
                    error={errors.username}
                />

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

                <FormInput
                    label="Repeat password:"
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                    error={errors.confirmPassword}
                />

                {error && <div className="error">{error}</div>}

                <button type="submit">Sign up</button>
            </form>
            <div className="open-another-page">
                Already have an account? <Link to={ROUTES.LOGIN}>Log in</Link>
            </div>
        </div>
    );
};