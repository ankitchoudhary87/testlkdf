import axios from 'axios';
export const highlightHomeData = async () => {
    return await axios(`${process.env.NEXT_PUBLIC_API_URL}/events_detail`);
    //http://52.201.123.57:9000/wp-json/unido/v1/highlight_area
}