import { useRef } from 'react'
import './ChatFooter.css'
import type Message from '../../../types/message';

interface ChatFooterProps {
    createMessageFunction: (message: Message) => void
}

export default function ChatFooter({ createMessageFunction }: ChatFooterProps) {
    const textInput = useRef<HTMLInputElement>(null)

    const sendMessage = (): void => {
        const message = textInput.current?.value.trim();
        if (!message) return;

        createMessageFunction({
            owner: 'current',
            content: message,
            isRead: false,
            status: 'pending',
        });

        textInput.current!.value = '';
    };

    return (
        <div className="chat-footer-wrapper">
            <input className="chat-input" type="text" placeholder="Type your message..." ref={textInput}/>
            <button className="chat-send-btn" onClick={sendMessage}>Send</button>
        </div>
    )
}