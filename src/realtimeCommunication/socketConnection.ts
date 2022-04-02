import { io } from "socket.io-client";

export const connectWithSocketServer = (user: any) => {
  console.log("user", user);
  const socket = io("http://localhost:5000", {
      auth: {
          token: user?.token,
      }



  });
  console.log("socket", socket);


  socket.on("connect", () => {
    console.log("Successfully connected to the socket.io server");
    console.log(socket.id);
  });
};
