import './Chat.css';
import ChatFooter from './ChatFooter/ChatFooter';
import ChatHeader from './ChatHeader/ChatHeader';

export default function Chat() {
    return (
        <div className="chat-wrapper">
            <ChatHeader/>
            <ChatFooter/>
        </div>
    );
}