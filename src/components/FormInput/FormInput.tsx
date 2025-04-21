import React from "react";

type FormInputProps = {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    error?: string;
}

export const FormInput: React.FC<FormInputProps> = ({ label, type, name, value, onChange, required, error }) =>
    (
        <div className="form-group">
            <label>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
