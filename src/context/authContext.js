import axios from "../axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [profileDetail, setProfileDetail] = useState();

  const [userDetails, setUserDetails] = useState();

  const checkUser = async () => {
    try {
      let result = await axios.get("user/get-my-profile");
      setProfileDetail(result.data.data);
      setUserDetails(result.data.data);
      setIsAuthenticated(true);
    } catch (ERR) {
      if (ERR.response.status === 401 || ERR.response.status === 422) {
        localStorage.removeItem("mallToken");
        localStorage.removeItem("_mallUserDetails_");
        setIsAuthenticated(false);
        swal({
          title: "Session Expired",
          text: "Please Login Again?",
          icon: "info",
          dangerMode: true,
          buttons: true,
        }).then(async (willUpdate) => {
          if (willUpdate) {
            navigate("/login");
          }
        });
      }
    }
  };

  useEffect(() => {
    localStorage.getItem("mallToken") && checkUser();
  }, [localStorage.getItem("mallToken")]);

  let user;
  let details;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    user = localStorage.getItem("mallToken");
    details = JSON.parse(localStorage.getItem("_mallUserDetails_"));
  }

  // set the initial state for authenticated status
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    switch (user) {
      case null:
        return setIsAuthenticated(false);
      default:
        return setIsAuthenticated(true);
    }
  }, [user]);

  // set the initial state for authenticated user
  const [authUser, setAuthUser] = useState(() => {
    return user !== null ? user : {};
  });

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        authUser,
        setAuthUser,
        userDetails,
        details,
        profileDetail
        // userRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
