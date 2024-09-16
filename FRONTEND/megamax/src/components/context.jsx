import axios from "axios";
import { createContext, useEffect, useState } from "react";

const LoginContext = createContext();

function LoginStatusProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        axios.post("http://localhost:8000/api/token/verify/", {
            token: localStorage.getItem("token")
        })
            .then((response) => {
                if (response.status === 200) {
                    setIsLoggedIn(true);
                }
                else{
                    setIsLoggedIn(false)
                }
            })
            .catch((err) => {
                setIsLoggedIn(false);
            });
    }, []);

    return (
        <LoginContext.Provider value={isLoggedIn}>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginStatusProvider, LoginContext };
