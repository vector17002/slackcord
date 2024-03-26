import useGetConversation from "../../hooks/fetchConversation";
import NoChat from "../NoChat";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  const { conversations } = useGetConversation();
  if(conversations.length === 0) return <NoChat/>;
  
  return <div className="border-r border-slate-500 p-4 flex flex-col">
    <SearchInput />
    <div className="divider px-3" />
    <Conversations />
    <LogoutButton />
  </div>
};

export default Sidebar;
