//@ts-nocheck
import { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages'
import  Message  from '../Message.tsx';
import MessageSkeleton from '../skeleton/MessageSkeleton';
import getNewMessages from '../../hooks/getNewMessages.ts';

const Messages = () => {
  const { messages , loading} = useGetMessages();
  getNewMessages();
  const lastMsg = useRef()
  useEffect(() =>{
    setTimeout(() => {
      lastMsg.current?.scrollIntoView({behaviour : 'smooth'})
    }, 100)
  },[messages])
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {loading && [...Array(5)].map((_,  idx) => <MessageSkeleton key={idx}/>)}
      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start a conversation</p>
      )}
      {!loading && messages.length > 0 && 
        messages.map((message : any) => (
          <div key={message._id} ref={lastMsg}>
          <Message message={message}/>
          </div>
        ))}
     </div>
  )
}

export default Messages
