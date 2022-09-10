import axios from 'axios';
export const forumHomeData = async () => {
    return await axios(`${process.env.NEXT_PUBLIC_API_URL}/forum_list`)
}

export const forumMainData = async () => {
    return await axios(`${process.env.NEXT_PUBLIC_API_URL}/events_detail`)
}