import React from "react";
import { User } from "../models/User";

// state structure
interface LoggedInterface {
    user?: User,
    isAuthenticated: boolean
};


// starting state
const state : LoggedInterface = {
    isAuthenticated: false
};

// register context
const LoggedInContext = React.createContext(state);

export default LoggedInContext;
