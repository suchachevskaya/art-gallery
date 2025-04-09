import React, { useState } from 'react';
import './LoginPage.scss';

interface LoginForm {
    email: string;
    password: string;
}

const LoginPage = () => {
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


                <button type="submit">Login</button>
            </form>
            <div className="open-register-page">Don't have an account? <a href="/register">Sign up</a></div>
        </div>
    );
};

export default LoginPage;
