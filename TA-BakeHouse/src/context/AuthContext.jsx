
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null); 
  const [loading, setLoading] = useState(true);

  const login = async (credentials) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    const res = await axios.post("http://localhost:5000/api/auth/login", credentials);

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    setUser(res.data.user);
    setToken(res.data.token); 
  };

  const register = async (data) => {
    const res = await axios.post("http://localhost:5000/api/auth/register", {
      ...data,
      role: "user",
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    setUser(res.data.user);
    setToken(res.data.token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null); 
  };

  const fetchProfile = async () => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!storedToken || !storedUser) {
      setUser(null);
      setToken(null);
      return;
    }

    try {
      const res = await axios.get("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });
      setUser(res.data.user);
      setToken(storedToken); 
    } catch (err) {
      console.error("Error fetching profile", err);
      setUser(null);
      setToken(null);
    }
  };

  useEffect(() => {
    fetchProfile().finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
