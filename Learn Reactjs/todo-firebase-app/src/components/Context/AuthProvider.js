import { Spin } from "antd";
import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase/config"; //dieu huong nguoi dung

export const AuthContext = createContext();

function AuthProvider({ children }) {
	const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
	const history = useHistory(); //dieu huong

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			console.log({user});
			if (user) {
				const { displayName, email, photoURL, uid } = user;
				setUser({ 
                    displayName, 
                    email, 
                    photoURL, 
                    uid, 
                });
                setIsLoading(false);
				history.push("/");
			}
            else {
                //neu user login sai dieu huong tro lai login page
                history.push("/login");
            }
		});

		return () => {
			return unsubscribe();
		};
	}, [history]);

	return <AuthContext.Provider value={user}>
        {isLoading ? <Spin /> : children}
    </AuthContext.Provider>;
}

export default AuthProvider;
