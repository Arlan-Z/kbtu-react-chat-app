import type Message from '../../../types/message';
import './MessageBox.css';

interface messageBoxProps {
    messages: Message[],
    currentUserId: string
}

export default function MessageBox({ messages = [], currentUserId }: messageBoxProps) {
    return (
        <div className="message-box-wrapper">
            {messages.map((msg, index) => {
                return (
                    <div className={`message ${msg.senderId === currentUserId ? "current" : "other"}`} key={index}>{msg.content}</div>
                );
            })}
        </div>
    );
}