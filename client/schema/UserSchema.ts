export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date;
}

export interface UserContextType{
    user: User | null;
    token: string | null;
    setUser: (user: User | null) => void;
    setToken: (token: string | null) => void;
}