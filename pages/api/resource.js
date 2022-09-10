import axios from 'axios';
export const resourceData = async () => {
    return await axios(`${process.env.NEXT_PUBLIC_API_URL}/resource_details`)
}