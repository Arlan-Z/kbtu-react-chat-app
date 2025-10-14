import type Message from '../../types/message';
import ChatFooter from './ChatFooter/ChatFooter';
import ChatHeader from './ChatHeader/ChatHeader';
import MessageBox from './MessageBox/MessageBox';
import './Chat.css';
import { useEffect, useState } from 'react'
import { io } from 'socket.io-client';
import UserUtils from '../../utils/userUtils';

const socket = io("http://localhost:5000");
const userUtils = new UserUtils();

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        socket.on("initMessages", (msgs: Message[]) => setMessages(msgs));
        socket.on("newMessage", (msg : Message) => setMessages((prev) => [...prev, msg]));

        return () => {
            socket.off("initMessages");
            socket.off("newMessage");
        };
    }, []);

    const createMessageFunction = (message: Message) => {
        socket.emit("sendMessage", message);
        console.log(userUtils.getUserId());
    };

    return (
        <div className="chat-wrapper">
            <ChatHeader/>
            <MessageBox messages={messages} currentUserId={userUtils.getUserId()}/>
            <ChatFooter createMessageFunction={createMessageFunction} currentUserId={userUtils.getUserId()}/>
        </div>
    );
}