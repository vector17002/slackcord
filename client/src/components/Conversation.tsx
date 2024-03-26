//@ts-nocheck
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation"

interface IndividualProps{
  nickname: String,
  profilePic: String,
  username: String,
  _id : String,
  password: String,
  gender: String
}
interface ConversationProp{
  conversation : IndividualProps
  lastIdx : Number
}
const Conversation = ( { conversation , lastIdx } : ConversationProp) => {
const {selectedConversation , setSelectedConversation} = useConversation();

const { onlineUser } = useSocketContext()
const isOnline = onlineUser.includes(conversation._id)

const isSelected = selectedConversation?._id === conversation._id
  return (<>
    <div className={`flex gap-2 items-center hover:bg-indigo-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-indigo-500" : ""}`} onClick={()=>setSelectedConversation(conversation)}>
      <div className={`avatar ${isOnline ? "online"  : ""}`}>
        <div className='w-12 rounded-full'>
          <img src={conversation.profilePic} alt='user-avatar' />
        </div>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
          <p className='font-bold text-yellow-200'>{conversation.nickname}</p>
        </div>
        <div className="text-xs font-semibold text-indigo-300">
          <p>{conversation.username}</p>
        </div>
      </div>
    </div>
    {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}
    
  </>
  )
}

export default Conversation
