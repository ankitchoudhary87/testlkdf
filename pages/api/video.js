import axios from 'axios';
export const videoHomeData = async () => {
    return await axios(`${process.env.NEXT_PUBLIC_API_URL}/video_section`)
}

export const videoMainData = async () => {
    return await axios(`${process.env.NEXT_PUBLIC_API_URL}/videos_details`)
}

export const videoPageFilter = async () => {
    return await axios(`${process.env.NEXT_PUBLIC_API_URL}/videofilters`)
}