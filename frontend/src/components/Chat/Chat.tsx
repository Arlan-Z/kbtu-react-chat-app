import type Message from '../../types/message';
import ChatFooter from './ChatFooter/ChatFooter';
import ChatHeader from './ChatHeader/ChatHeader';
import MessageBox from './MessageBox/MessageBox';
import './Chat.css';
import { useState } from 'react'


export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);

    const createMessageFunction = (message: Message) => {
        setMessages(prev => [...prev, message]);
    };

    return (
        <div className="chat-wrapper">
            <ChatHeader/>
            <MessageBox messages={messages}/>
            <ChatFooter createMessageFunction={createMessageFunction}/>
        </div>
    );
}