//@ts-nocheck
import MessageContainer from '../../components/messages/MessageContainer'
import NoChat from '../../components/NoChat';
import useConversation from '../../zustand/useConversation';
import Sidebar from '../../components/sidebar/Sidebar';
const Home = () => {
  const { selectedConversation} = useConversation()
  const nochat = selectedConversation ? false : true;
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar />
      {nochat ? <NoChat /> : <MessageContainer />}
    </div>
  )
}

export default Home
