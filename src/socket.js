import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        forceNew: true,                 
        reconnectionAttempts: Infinity, 
        timeout: 10000,                 
         transports: ['websocket'],   
    };

    // Ensure this logs the correct backend URL
    console.log("Connecting to backend:", process.env.REACT_APP_BACKEND_URL);

    return io(process.env.REACT_APP_BACKEND_URL, options);
};
