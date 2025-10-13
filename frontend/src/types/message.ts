export default interface Message {
    owner: "current" | "other",
    content: string,
    date: Date,
    status: "pending" | "send" | "error",
    isRead: boolean
}