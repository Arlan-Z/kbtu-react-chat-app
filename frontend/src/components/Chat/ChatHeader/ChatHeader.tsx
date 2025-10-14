import { useRef, useState } from "react";
import SearchIcon from "../../partials/icons/SearchIcon";
import "./ChatHeader.css";

interface ChatHeaderProps {
    filterMessagesFunction: (filter: string) => void
}

export default function ChatHeader({ filterMessagesFunction } : ChatHeaderProps ) {
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleSearchBtn = () => {
        setIsOpen(!isOpen);

        if (isOpen) {
            if (inputRef.current) {
                inputRef.current.value = "";
            }
            filterMessagesFunction(""); 
        }
    }

    return (
        <div className="chat-header-wrapper">
            <div className={`search-container ${isOpen ? "open" : ""}`}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                    onChange={(e) => filterMessagesFunction(e.target.value)}
                />

                <button
                    className="search-btn"
                    onClick={handleSearchBtn}
                >
                    <SearchIcon className="search-icon" />
                </button>
            </div>
        </div>
    );
}
