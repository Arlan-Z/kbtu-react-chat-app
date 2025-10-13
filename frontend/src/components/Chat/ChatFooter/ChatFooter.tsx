import './ChatFooter.css'

export default function ChatFooter() {
    return (
        <div className="chat-footer-wrapper">
            <input className="chat-input" type="text" placeholder="Type your message..." />
            <button className="chat-send-btn">Send</button>
        </div>
    )
}