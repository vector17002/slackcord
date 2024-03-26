//@ts-nocheck
import { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../zustand/useConversation'

const MessageContainer = () => {
  const { selectedConversation , setSelectedConversation} = useConversation();

  useEffect(() =>{
    return () => setSelectedConversation(null)
  },[])
  return (
    <div className='flex flex-col md:min-w-[450px] '>
      <div className='bg-slate-500 px-4 py-2 mb-2'>
        <span className='label-text text-white'>To :</span>{" "}
        <span className='text-yellow-500 font-bold'>{selectedConversation.nickname}</span>
      </div>
      <Messages />
      <MessageInput />
    </div>
  )
}

export default MessageContainer
