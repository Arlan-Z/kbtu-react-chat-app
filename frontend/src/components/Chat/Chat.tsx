import './Chat.css';
import ChatFooter from './ChatFooter/ChatFooter';
import ChatHeader from './ChatHeader/ChatHeader';
import MessageBox from './MessageBox/MessageBox';

export default function Chat() {
    return (
        <div className="chat-wrapper">
            <ChatHeader/>
            <MessageBox/>
            <ChatFooter/>
        </div>
    );
}