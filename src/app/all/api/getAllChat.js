export const getAllChat = async()=>{
    const res = await fetch('https://devapi.beyondchats.com/api/get_all_chats?page=1')
    const allChat  = res.json()
    return allChat
}
