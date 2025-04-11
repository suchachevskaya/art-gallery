import React, { useState } from 'react';
import './LoginPage.scss';
import {Link} from 'react-router-dom';
import {FormInput} from "../FormInput/FormInput";
import {ROUTES} from "../Routes/Routes.tsx";

type LoginForm = {
    email: string;
    password: string;
}

export const LoginPage = () => {
    const [form, setForm] = useState<LoginForm>({
        email: '',
        password: '',
    });


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log('Данные для входа:', form);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email:"
                    type="email"
                    name="pmail"
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
                <button type="submit">Login</button>
            </form>
            <div className="open-register-page">Don't have an account? <Link to={ROUTES.signup}>Sign up</Link></div>
        </div>
    );
};


