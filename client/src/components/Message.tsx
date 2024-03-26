//@ts-nocheck
import { useUserContext } from '../context/UserContext'
import useConversation from '../zustand/useConversation'
import { extractTime } from '../utils/extractTime';

const Message = ({message}) => {
  const {user} = useUserContext();
  const {selectedConversation} = useConversation();

  const fromMe = message.senderId === user._id
  const chatClass = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? user.profilePic : selectedConversation.profilePic
  const color = fromMe ? 'bg-indigo-500' : '';
  const time = extractTime(message.createdAt)
  return (
    <div className={`chat ${chatClass}`}>
      <div className='chat-image avatar'>
        <div className='rounded-full w-10'>
          <img src={profilePic} alt='chat-avatar' />
        </div>
      </div>
      <div className={`chat-bubble text-white ${color}`}>
        {message.message}
      </div>
      <div className='chat-footer opactity-50 text-xs gap-1 items-center text-white'>{time}</div>
    </div>
  )
}

export default Message
