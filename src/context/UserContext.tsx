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
  userName: string | null;
  login: (user: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  errorMessage: string | null;
}

const MyContext = createContext<ContextType | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

export function MyProvider({ children }: MyProviderProps) {
  const [logged, setLogged] = useState<boolean>(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const storedData = await AsyncStorage.getItem('user');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setUserName(parsedData.user?.name || null);
          setLogged(true);
        }
      } catch (error) {
        console.error("Error verifying login:", error);
      }
    };
    checkLoginStatus();
  }, []);
  

  const login = async (user: string, password: string) => {
    setErrorMessage(null);
    try {
      if (!user || !password) {
        setErrorMessage("Username and password are required.");
        return;
      }
  
      const response = await fetch("https://test-api-y04b.onrender.com/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, password }),
      });
  
      if (response.ok) {
        const data = await response.json();

        if (data.user?.name) {
          await AsyncStorage.setItem('user', JSON.stringify(data));
          setUserName(data.user.name);
          setLogged(true);
        } else {
          setErrorMessage("Error: Username not found in API response.");
        }
      } else {
        setErrorMessage("Invalid credentials.");
        setLogged(false);
      }
    } catch (error) {
      console.error("Error trying to log in:", error);
      setErrorMessage("Error trying to log in. Please try again.");
      setLogged(false);
    }
  };  

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUserName(null);
      setLogged(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <MyContext.Provider value={{ logged, userName, login, logout, errorMessage }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used inside a MyProvider");
  }
  return context;
}

export default MyContext;
