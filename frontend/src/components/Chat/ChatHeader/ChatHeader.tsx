import { useState } from "react";
import SearchIcon from "../../partials/icons/SearchIcon";
import "./ChatHeader.css";

export default function ChatHeader() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="chat-header-wrapper">
            <div className={`search-container ${isOpen ? "open" : ""}`}>
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                />

                <button
                    className="search-btn"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <SearchIcon className="search-icon" />
                </button>
            </div>
        </div>
    );
}
