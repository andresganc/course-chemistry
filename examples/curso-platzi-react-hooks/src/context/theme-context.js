
import React from 'react';

const ThemeContext = React.createContext(null);

export default ThemeContext;



/* 
Ejemplo 2 :
import React from "react";

export const themes = {
  dark: {
    color: "#4ecca3",
    background: "#232931",
  },
  light: {
    color: "#1e56a0",
    background: "#f5feff",
  },
};

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;
*/