import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
const userContext = createContext({});
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    

    const registerUser = (email, name, password) => {
        ///user registration
        setLoading(true);
        createUserWithEmailAndPassword(email, name, password)
            .then(() => {
                return updateProfile(auth, currentUser, {
                    displayName: name,
                });
                           
            })
            .then(res => console.log(res))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    };
    const signInUser = (email, password) => {
        //user signin

        
    }
    const logoutUser = () => {
        //user logout
    }
    const forgotPassword = (email) => {
        //forgot password
    }


    const contextValue = {};
    return (
        <UserContext.Provider value={userContext}>{ children}</UserContext.Provider>
    )
}
