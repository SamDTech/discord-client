import { styled } from "@mui/system";
import React from "react";
import FriendListItem from "./FriendListItem";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";


const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const checkOnlineUsers = (friends: any= [], onlineUsers: any = []) => {
  friends.forEach((friend: any) => {
    const isOnline = onlineUsers.find(
      (onlineUser: any) => onlineUser.userId === friend._id
    );

    friend.isOnline = isOnline ? true : false;
  });

  return friends;
};

const FriendsList = () => {
  const { friends, onlineUsers } = useSelector((state: RootState) => state.friends);

  return (
    <MainContainer>
      {checkOnlineUsers(friends, onlineUsers).map((friend: any) => {
        return <FriendListItem key={friend._id} friend={friend} />;
      })}
    </MainContainer>
  );
};

export default FriendsList;
