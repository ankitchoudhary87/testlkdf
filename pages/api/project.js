import axios from 'axios';
export const projectHomeData = async () => {
    return await axios(`${process.env.NEXT_PUBLIC_API_URL}/project_section`)
}

export const projectMainData = async () => {
    return await axios(`${process.env.NEXT_PUBLIC_API_URL}/project_details`)
}