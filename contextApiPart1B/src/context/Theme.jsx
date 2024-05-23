import React, { createContext, useContext } from "react";

export const  ThemeContext = createContext(
    {
       theme: "light",
       darkMode: () => {},
       lightMode: () => {} 
    }
)

export  const ThemeProvider = ThemeContext.Provider

export default function UseTheme() {
    return useContext(ThemeContext)
}