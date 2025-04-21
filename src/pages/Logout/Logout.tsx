import React from 'react';

type LogoutButtonProps = {
    onLogout: () => void;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
    return (
        <button onClick={onLogout}>
            Logout
        </button>
    );
};
