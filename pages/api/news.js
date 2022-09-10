import axios from 'axios';
export const newsHomeData = async () => {
    return await axios(`${process.env.NEXT_PUBLIC_API_URL}/news_section`)
}

export const newsMainData = async () => {
    return await axios(`${process.env.NEXT_PUBLIC_API_URL}/news_details`)
}