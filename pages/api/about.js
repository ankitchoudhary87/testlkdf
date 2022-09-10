import axios from 'axios';
export const aboutHomeData = async () => {
    return await axios(`${process.env.NEXT_PUBLIC_API_URL}/about_us`)
}