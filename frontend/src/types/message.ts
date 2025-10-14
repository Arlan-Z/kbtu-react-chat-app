export default interface Message {
    owner: "current" | "other",
    content: string,
    sendDate?: Date,
    status: "pending" | "send" | "error",
    isRead: boolean
}