//@ts-nocheck
import { TiMessages } from 'react-icons/ti'
import { useUserContext } from '../context/UserContext'

const NoChat = () => {
  const { user } = useUserContext();
  return (
    <div className='flex items-center w-full h-full justify-center md:min-w-[450px]'>
      <div className='px-4 text-center sm:text-lg text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Weclome {user.nickname}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}

export default NoChat 
