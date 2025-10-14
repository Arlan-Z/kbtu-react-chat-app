import type Message from '../../../types/message';
import './MessageBox.css';

interface messageBoxProps {
    messages: Message[]
}

export default function MessageBox({ messages = [] }: messageBoxProps) {
    return (
        <div className="message-box-wrapper">
            {messages.map((msg, index) => {
                return (
                    <div className={`message ${msg.owner}`} key={index}>{msg.content}</div>
                );
            })}
        </div>
    );
}