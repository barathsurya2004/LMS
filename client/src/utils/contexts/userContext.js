import { createContext, useState } from 'react';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    sidebarIsOpen: null,
    setSidebarIsOpen: () => null
})

export const UserContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(false);
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const value = { currentUser, setCurrentUser, setSidebarIsOpen, sidebarIsOpen }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
