//@ts-nocheck
import Conversation from '../Conversation'
import useGetConversation from '../../hooks/fetchConversation'

const Conversations = () => {
  const {loading , conversations} = useGetConversation()
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {loading? <span className='loader loader-spinner mx-auto'></span> : null}
      {conversations?.map((conversation , idx) => (
        <Conversation 
        key={conversation._id} 
        conversation={conversation}
        lastIdx={idx === conversations.length - 1}
        />
      ))}
    </div>
  )
}

export default Conversations
