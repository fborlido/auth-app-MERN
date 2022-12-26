import { createContext, useContext, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUser, logoutUser } from "../api/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const { data: user, refetch: refetchUser } = useQuery(["user"], getUser, {
    retry: false,
    onSuccess: () => setIsLoggedIn(true),
    onError: () => setIsLoggedIn(false),
  });

  const { mutate: logout } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => setIsLoggedIn(false),
  });

  useEffect(() => {
    if (isLoggedIn !== null) {
      if (isLoggedIn) {
        navigate("/");
      } else {
        navigate("/login");
      }
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, refetchUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
