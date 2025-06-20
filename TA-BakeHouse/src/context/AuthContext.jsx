
// import { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // const login = async (credentials) => {
//   //   const res = await axios.post("http://localhost:5000/api/auth/login", credentials);
//   //   localStorage.setItem("token", res.data.token);
//   //   setUser(res.data.user);
//   // };
//   const login = async (credentials) => {
//   // Clear old session
//   localStorage.removeItem("token");
//   localStorage.removeItem("user");

//   const res = await axios.post("http://localhost:5000/api/auth/login", credentials);

//   // Save new session
//   localStorage.setItem("token", res.data.token);
//   localStorage.setItem("user", JSON.stringify(res.data.user)); // ✅ Save user too
//   setUser(res.data.user);
// };
//   const register = async (data) => {
//     const res = await axios.post("http://localhost:5000/api/auth/register", {
//       ...data,
//       role: "user",
//     });
//     localStorage.setItem("token", res.data.token);
//     setUser(res.data.user);
//   };

//   const logout = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("user");
//   setUser(null);
// };

//   const fetchProfile = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setUser(null);
//       return;
//     }

//     try {
//       const res = await axios.get("http://localhost:5000/api/auth/profile", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUser(res.data.user);
//     } catch (err) {
//       console.error("Error fetching profile", err);
//       setUser(null); // Force logout if profile fetch fails
//     }
//   };

//   useEffect(() => {
//     fetchProfile().finally(() => setLoading(false));
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null); // ✅ NEW: track token
  const [loading, setLoading] = useState(true);

  // ✅ Login
  const login = async (credentials) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    const res = await axios.post("http://localhost:5000/api/auth/login", credentials);

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    setUser(res.data.user);
    setToken(res.data.token); // ✅ save to state
  };

  // ✅ Register
  const register = async (data) => {
    const res = await axios.post("http://localhost:5000/api/auth/register", {
      ...data,
      role: "user",
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    setUser(res.data.user);
    setToken(res.data.token); // ✅ save to state
  };

  // ✅ Logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null); // ✅ clear state
  };

  // ✅ Fetch profile
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
      setToken(storedToken); // ✅ restore token from localStorage
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
