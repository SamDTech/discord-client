import { styled } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "../components/AppBar";
import FriendSidebar from "../components/FriendSidebar";
import Messenger from "../components/Messenger";
import Sidebar from "../components/Sidebar";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";
import { logout } from "../utils/auth";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("userInfo");

    if (!user) {
      logout();
    } else {
      // Dispatch user info to redux
      dispatch({
        type: "SET_USER_DETAILS",
        payload: JSON.parse(user),
      });

      // connect to socket
      connectWithSocketServer()
    }
  }, [dispatch]);

  return (
    <Wrapper>
      <Sidebar />
      <FriendSidebar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

export default Dashboard;
