export default interface Message {
    senderId: string
    content: string,
    sendDate?: Date,
    status: "pending" | "send" | "error",
    isRead: boolean
}