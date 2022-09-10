import axios from 'axios';
export const bannerHomeData = async () => {
    return await axios(`${process.env.NEXT_PUBLIC_API_URL}/slider`)
}