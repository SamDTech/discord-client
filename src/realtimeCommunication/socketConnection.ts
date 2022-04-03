import { setPendingFriendsInvitation } from "./../store/actionCreators/friendActions";
import { io } from "socket.io-client";


export const connectWithSocketServer = (user: any) => {
  console.log("user", user);
  const socket = io("http://localhost:4000", {
    withCredentials: true,
    auth: {
      token: user?.token,
    },
  });
  console.log("socket", socket);

  socket.on("connect", () => {
    console.log("Successfully connected to the socket.io server");
    console.log(socket.id);
  });

  socket.on("friendsInvitations", (data: any) => {
    const { pendingInvitations } = data;
    console.log("pendingInvitations", pendingInvitations);
    setPendingFriendsInvitation(data);
  });
};
