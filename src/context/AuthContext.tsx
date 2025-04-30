import { ISLOGGEDIN, USER_LS_KEY,  } from "@/constants/constants";
import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";



type AuthContextType = {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const getStoredIsLoggedIn = (): boolean => {
  const storedIsLoggedIn = localStorage.getItem(ISLOGGEDIN);

  return storedIsLoggedIn === 'true';
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        setIsLoggedIn(getStoredIsLoggedIn());
    }, []);

    const login = useCallback(() => {
        localStorage.setItem(ISLOGGEDIN, 'true');
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem(USER_LS_KEY);
        localStorage.removeItem(ISLOGGEDIN);
        setIsLoggedIn(false);
    }, []);

    const contextValue = useMemo(() => ({
        isLoggedIn,
        login,
        logout
    }), [isLoggedIn, login, logout]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
};
