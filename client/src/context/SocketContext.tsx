//@ts-nocheck
import React, {createContext, useContext, useEffect, useState } from 'react'
import { useUserContext } from './UserContext';
import { io } from 'socket.io-client';

const SocketContext = createContext(); 

export const useSocketContext = () =>{
   return useContext(SocketContext)
}

const SocketContextProvider = ({children} : {children : any}) => {
 const { user } = useUserContext()
  const [socket , setSocket] = useState(null)
  const [onlineUser , setOnlineUser] = useState([])
  
  useEffect(() => {
    if (user) {
      const socket = io("https://slackcord.onrender.com/", {
        query: {
          userId: user._id
        }
      });
      setSocket(socket);
      socket.on("getOnlineUsers", (users) => {
        setOnlineUser(users);
      });
      return () => socket.close();
    }
    else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  },[user])
  return (
    <SocketContext.Provider value={{socket , onlineUser}}>{children}</SocketContext.Provider>
  )
}
export default SocketContextProvider