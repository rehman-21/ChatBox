import React, { createContext, useEffect, useState, ReactNode, useMemo } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

interface AuthContextType {
    user: FirebaseAuthTypes.User | null;
    setUser: React.Dispatch<React.SetStateAction<FirebaseAuthTypes.User | null>>;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
    signup: (name: string, email: string, password: string, confirmPass: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const signup = async (name: string, email: string, password: string, confirmPass: string) => {
        setLoading(true);
        setError(null);
        try {
            if (password !== confirmPass) {
                throw new Error("Passwords do not match");
            }

            const userCredential = await auth().createUserWithEmailAndPassword(email, password);
            const { user } = userCredential;
            const uid = user.uid;

            console.log("User created With UID:", uid);

            await firestore().collection("users").doc(uid).set({
                name,
                email,
                createdAt: firestore.FieldValue.serverTimestamp(),
                uid,
            });

            setUser(user);
        } catch (error: any) {
            setError(error.message);
            console.error("Sign Up or Firestore document creation failed:", error.message);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email: string, password: string) => {
        setLoading(true);
        setError(null);
        try {
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            setUser(userCredential.user);
        } catch (error: any) {
            setError(error.message);
            console.error("Login failed:", error.message);
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        setError(null);
        try {
            await auth().signOut();
            setUser(null);
        } catch (error: any) {
            setError(error.message);
            console.error("Logout failed:", error.message);
        } finally {
            setLoading(false);
        }
    };

    const authContextValue = useMemo(
        () => ({ user, setUser, isAuthenticated: !!user, loading, error, signup, login, logout }),
        [user, loading, error]
    );

    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
