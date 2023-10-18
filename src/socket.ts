import { Socket, io } from "socket.io-client";

// const SERVER_IP = "socket-koyeb-ekobyte.koyeb.app"; // e.g., '10.13.1.215'
// const SERVER_PORT = 3000;
// const URL = `https://${SERVER_IP}:${SERVER_PORT}`;
// const URL = `http://localhost:8000`;
const URL = `https://socket-koyeb-ekobyte.koyeb.app`;
interface SocketData extends Socket {
  userID?: string;
  username?: string;
  sessionID?: string;
}
const socket: SocketData = io(URL, {
  autoConnect: false,
});

socket.onAny((event, ...args) => {
  console.log("any event running");
  console.log(event, args);
});

export default socket;
