"use client"

import { log } from "console"
import { createContext, useContext, useState, ReactNode } from "react"

type User = {
  name: string
  email: string
  picture: string
}

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) throw new Error("useUser must be used within UserProvider");
  const logout = () =>{
  context.setUser(null);
 
}
  return {...context,
    logout
}
};
