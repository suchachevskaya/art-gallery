const validateUsername = (username: string) => {
    const regex = /^[a-zA-Z0-9_]{3,20}$/;

    return regex.test(username);
};

const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return regex.test(email);
};

const validatePassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return regex.test(password);
};

const validateConfirmPassword = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
};


type PartialForm = Partial<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}>;

export const validateForm = (form: PartialForm): { [key: string]: string } => {
    const errors: { [key: string]: string } = {};

    if ('username' in form) {
        if (!validateUsername(form.username!)) {
            errors.username = 'Login must contain from 3 to 20 characters (letters, numbers and underscores).';
        }
    }

    if ('email' in form) {
        if (!validateEmail(form.email!)) {
            errors.email = 'Incorrect email format.';
        }
    }

    if ('password' in form) {
        if (!validatePassword(form.password!)) {
            errors.password = 'The password must contain at least one uppercase letter, one lowercase letter, one number and one special character (minimum 8 characters).';
        }
    }

    if ('confirmPassword' in form && 'password' in form) {
        if (!validateConfirmPassword(form.password!, form.confirmPassword!)) {
            errors.confirmPassword = 'The passwords do not match.';
        }
    }

    return errors;
};

