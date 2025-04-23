import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    return token ? { token, role } : null;
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({ token, role: decoded.role });
        console.log(decoded);
      } catch (err) {
        console.error("Invalid token", err);
        setUser(null);
      }
    }
    setLoading(false);
  }, []);

  const login = async (username, password, role) => {
    try{
      const res = await axios.post("http://localhost:5000/user/login", { username, password, role });
      const decoded = jwtDecode(res.data.token);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", decoded.role);
      setUser({ token: res.data.token, role: decoded.role });
      return true;
    } catch (error) {
      console.error("Login Error", error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};