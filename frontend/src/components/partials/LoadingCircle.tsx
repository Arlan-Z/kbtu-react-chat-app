import './LoadingCircle.css';

export default function LoadingCircle() {
    return (
        <div className="loading-wrapper">
            <div className="loading"></div>
            <h1 className='loading-title'>Waiting for your Chat Buddy</h1>
        </div>
    );
}