import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

// Define the shape of the user object
interface User {
  id: string;
  name: string;
  // Add more fields as needed
}

// Define the shape of the authentication context
interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

// Create a context for authentication
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to access the authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Authentication provider component
export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    // Logic for logging in the user
    setUser(userData);
  };

  const logout = () => {
    // Logic for logging out the user
    setUser(null);
  };

  // Value provided by the authentication context
  const authValues: AuthContextType = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};
