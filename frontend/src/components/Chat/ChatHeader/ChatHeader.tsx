import SearchIcon from "../../partials/icons/SearchIcon";
import './ChatHeader.css';

export default function ChatHeader() {
    return (
        <div className="chat-header-wrapper">
            <button className="search-btn"><SearchIcon className="search-icon"/></button>
        </div>
    );
}