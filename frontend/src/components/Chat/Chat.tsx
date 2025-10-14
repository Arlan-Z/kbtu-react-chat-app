import type Message from '../../types/message';
import ChatFooter from './ChatFooter/ChatFooter';
import ChatHeader from './ChatHeader/ChatHeader';
import MessageBox from './MessageBox/MessageBox';
import './Chat.css';
import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client';
import UserUtils from '../../utils/userUtils';

const socket = io("http://localhost:5000");

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [filteredMessages, setFilteredMessages] = useState<Message[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const userUtils = useRef(new UserUtils());

    useEffect(() => {
        socket.on("initMessages", (msgs: Message[]) => setMessages(msgs));
        socket.on("newMessage", (msg : Message) => setMessages((prev) => [...prev, msg]));

        return () => {
            socket.off("initMessages");
            socket.off("newMessage");
        };
    }, []);

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setFilteredMessages(messages);
        } else {
            setFilteredMessages(
                messages.filter(msg =>
                    msg.content.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        }
    }, [messages, searchQuery]);

    const createMessageFunction = (message: Message) => {
        socket.emit("sendMessage", message);
    };

    const filterMessageFunction = (filterText: string) => {
        setSearchQuery(filterText);
    };

    return (
        <div className="chat-wrapper">
            <ChatHeader filterMessagesFunction={filterMessageFunction}/>
            <MessageBox messages={filteredMessages} currentUserId={userUtils.current.getUserId()}/>
            <ChatFooter createMessageFunction={createMessageFunction} currentUserId={userUtils.current.getUserId()}/>
        </div>
    );
}