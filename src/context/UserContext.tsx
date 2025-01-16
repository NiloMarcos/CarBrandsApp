import React, { 
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode
} from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';

interface ContextType {
  logged: boolean;
  login: (user: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const MyContext = createContext<ContextType | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

export function MyProvider({ children }: MyProviderProps) {
  const [logged, setLogged] = useState<boolean>(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const storedData = await AsyncStorage.getItem('user');
        if (storedData) {
          setLogged(true);
        }
      } catch (error) {
        console.error("Erro ao verificar o login:", error);
      }
    };

    checkLoginStatus();
  }, []);

  const login = async (user: string, password: string) => {
    try {
      const response = await fetch("https://test-api-y04b.onrender.com/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, password }),
      });

      if (response.ok) {
        const data = await response.json();
        await AsyncStorage.setItem('user', JSON.stringify(data));
        setLogged(true);
      } else {
        console.error("Failed to log in. Check credentials.");
        setLogged(false);
      }
    } catch (error) {
      console.error("Error trying to log in:", error);
      setLogged(false);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setLogged(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <MyContext.Provider value={{ logged, login, logout }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
}

export default MyContext;
