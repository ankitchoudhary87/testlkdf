import { useEffect, useState, useCallback } from 'react';
import { highlightHomeData } from '../api/highlight';
import HomeHighlightSkeleton from '../../components/Skeleton/Home/highlight';
import HighlightData from '../../components/Home/highlight';
const Highlight = () => {
    const [highlightdata, setHighlightdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const gethighlightdata = useCallback(async () => {
        let response = await highlightHomeData();
        setHighlightdata(response.data.data);
        setLoading(false)
    }, []);
    useEffect(() => {
        /* async function gethighlightdata() {
            let response = await highlightHomeData();
            setHighlightdata(response.data.data);
            setLoading(false)
        } */
        gethighlightdata()
    }, [gethighlightdata])
    return (
        <section className="highlt ptb-80">
            <div className="container">
                <div className="sec-heading">
                    <h2>Highlights</h2>
                </div>
                {
                    loading ? <HomeHighlightSkeleton />: <HighlightData highlightdata={highlightdata} /> 
                }
            </div>
        </section>

    );
}
export default Highlight;