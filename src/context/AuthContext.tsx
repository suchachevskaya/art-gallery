import React, { createContext, useContext, useState, useEffect } from "react";

const USER = 'user';
const ISLOGGEDIN = 'isLoggedIn';

type AuthContextType = {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem(ISLOGGEDIN);
        setIsLoggedIn(storedIsLoggedIn === 'true');
    }, []);

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem(USER);
        localStorage.removeItem(ISLOGGEDIN);
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
