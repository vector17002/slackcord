import { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage.ts'

const MessageInput = () => {
  const [message , setMessage] = useState("")
  const {loading , sendMessage} = useSendMessage();
  const handleSubmit = async (e : any) =>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("")
  }
  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input type='text' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-500 text-white border-slate-500' placeholder='Type a Message' value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
        {loading ? <div className='loading loading-spinner'></div> : <BsSend className='w-6 h-6 rounded-full' />}  
        </button>
      </div>
    </form>
  )
}

export default MessageInput