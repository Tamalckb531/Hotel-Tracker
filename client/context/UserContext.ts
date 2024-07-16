import { UserContextType } from "@/schema/UserSchema";
import { createContext } from "react";

const UserContext = createContext<UserContextType>({
    user: null,
    token: null,
    setUser: () => { },
    setToken: () => { },
});

export default UserContext;