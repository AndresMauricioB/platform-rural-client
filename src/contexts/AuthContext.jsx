import axios from "axios";
import { createContext, useContext, useState } from "react";
import { backendEnv, endpoints } from "../env";
import Cookies from "universal-cookie";

const AuthContext = createContext(undefined);

export const AuthProvider = ({children}) => {
    const api = axios.create({
        baseURL: backendEnv.url,
        withCredentials: true,
    });

    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(null);
    const [timeArticles, setTimeArticles] = useState(null);

    const checkAuth = () => {
        api.get(endpoints.getUser).then((res) => {
            res = res.data;
            if (res.success) {
                setIsAuth(true);
                setUser(res.user);
                //getTimes(res.user.id);
            } else {
                setUser(null);
                setIsAuth(false);
                setTimeArticles(null);
            }
        }).catch((res) => {
        });
    }

    const login = (email, password, callback) => {
        api.post(endpoints.login, { email: email, password: password}).then(res => {
            if (res.success) {
                setToken(res.token);
                checkAuth();
                
            }
            callback([true, res.data]);
        }).catch((res) => {
            setIsAuth(false);
            callback([false, res]);
        });
    }

    const logout = (callback) => {
        api.post(endpoints.logout, {}).then(res => {
            setIsAuth(false);
            setUser(null);
            deleteToken();
            checkAuth();
            callback(true);
        }).catch((res) => {
            setIsAuth(false);
            setUser(null);
            deleteToken();
            checkAuth();
            callback(false);
        });
    }

    const setToken = (token) => {
        const cookies = new Cookies();
        let d = new Date();
        d.setTime(d.getTime() + (10 * 365 * 24 * 60 * 60 * 1000));

        cookies.set("auth_token", token, {
            expires: d,
        });

        checkAuth();
    }

    const deleteToken = () => {
        const cookies = new Cookies();
        cookies.remove("auth_token");
    }

    const getTimes = (idUser) => { 
        api.post(endpoints.getTime, {platform_user_id: idUser}).then (res => { 
            setTimeArticles(res.data.times);
        }).catch((res) => {
            console.log("Error server", res);  
        });         
    };

    const values = {
        user,
        isAuth,
        login,
        checkAuth,
        logout,
        timeArticles,
        getTimes,

    }

    return (
        <AuthContext.Provider
            value={values}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);