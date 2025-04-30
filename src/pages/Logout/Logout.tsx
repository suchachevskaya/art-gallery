import React from 'react';
import "./Logout.scss"

type LogoutButtonProps = {
    onLogout: () => void;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
    return (
        <button className={`logout`} onClick={onLogout}>
            Logout
        </button>
    );
};
