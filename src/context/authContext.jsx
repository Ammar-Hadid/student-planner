import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        try {
            const stored = localStorage.getItem('user');

            return stored ? JSON.parse(stored) : null
        }
        catch {
            return null
        }
    });

    const login = (userName) => {
        setUser(userName)
        localStorage.setItem('user', JSON.stringify(userName));
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
    }

    return (
        < AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

