import React, { createContext, useContext } from "react";

export const ThemeContext = createContext({       // create context
    defaultTheme : "light",
    lightMode : () => {},
    darkMode : () => {},
})

export const ThemeProvider = ThemeContext.Provider  // making provider

export default function useTheme(){
    return useContext(ThemeContext);         // coustum hook for getting data
}