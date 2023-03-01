import { createContext } from "react";
import ProductApi from "./api/ProductApi";

export const GlobalState = createContext();
export const DataProvider = ({children}) => {
    ProductApi()
    return <GlobalState value="">
        {children}
    </GlobalState>
}