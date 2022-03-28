import { io } from "socket.io-client";

export const connectWithSocketServer = (user: any) => {
  const socket = io("http://localhost:5000", {
      auth: {
          token: user.token,
      }
  });

  socket.on("connect", () => {
    console.log("Successfully connected to the socket.io server");
    console.log(socket.id);
  });
};
