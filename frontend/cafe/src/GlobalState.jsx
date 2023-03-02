import { createContext, useState, useEffect } from "react";
import ProductApi from "./api/ProductApi";
import axios from "axios";
export const GlobalState = createContext();
export const DataProvider = ({ children }) => {
    const [ token, setToken] = useState(false);
    const state = {
        token: [token, setToken],
        ProductApi: ProductApi()

    };
    return <GlobalState.Provider value={state}>
        {children}
    </GlobalState.Provider>;
};