import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

interface User {
    id: string;
    email: string | null;
    name?: string;
}

interface AuthContextType {
    user: FirebaseAuthTypes.User | null;
    isAuthenticated: boolean;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string, userName: string, confirmPass: string) => Promise<void>;
    logOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
    children: ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setIsAuthenticated(true);
            } else {
                setUser(null);
                setIsAuthenticated(false);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signUp = async (
        userName: string,
        email: string,
        password: string,
        confirmPass: string
    ) => {
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPass);

        if (password !== confirmPass) {
            console.error("Passwords do not match");
            throw new Error("Passwords do not match");
        }

        try {
            const userCredential = await auth().createUserWithEmailAndPassword(email, password);
            const newUser = userCredential.user;

            await firestore().collection('users').doc(newUser.uid).set({
                name: userName,
                email,
                createdAt: firestore.FieldValue.serverTimestamp(),
            });

            setUser(newUser);
            setIsAuthenticated(true);
        } catch (err: any) {
            console.error("Sign Up Error:", err.message);
            throw new Error(err.message);
        }
    };


    const login = async (email: string, password: string) => {
        try {
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            setUser(userCredential.user);
            setIsAuthenticated(true);
        } catch (err: any) {
            throw new Error(err.message);
        }
    };

    const logOut = async () => {
        try {
            await auth().signOut();
            setUser(null);
            setIsAuthenticated(false);
        } catch (err: any) {
            throw new Error(err.message);
        }
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, loading, login, signUp, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthContextProvider");
    }
    return context;
};

export default AuthContextProvider;
