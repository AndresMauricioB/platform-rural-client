import axios from "axios";
import { createContext, useContext } from "react";
import { backendEnv } from "../env";

const ServerContext = createContext(undefined);

export const ServerProvider = ({children}) => {
    const api = axios.create({
        baseURL: backendEnv.url,
        withCredentials: true,
    });

    const getRequest = (url, data, callback) => {
        let requestOptions =  {
            params: data,
            // headers: {
            //     'Authorization': 'Bearer ' + getToken()
            // }
        };

        api.get(url, requestOptions).then(res => {
            callback([true, res.data]);
        }).catch((res) => {
            callback([false, res]);
        });
    }

    const postRequest = (url, data, callback) => {
        let requestOptions =  {
            // headers: {
            //     'Authorization': 'Bearer ' + getToken()
            // }
        };

        api.post(url, data, requestOptions).then(res => {
            callback([true, res.data]);
        }).catch((res) => {
            callback([false, res]);
        });
    }

    const value = {
        getRequest,
        postRequest
    };

    return (
        <ServerContext.Provider
            value={value}
        >
            {children}
        </ServerContext.Provider>
    );
}

export const useServer = () => useContext(ServerContext);