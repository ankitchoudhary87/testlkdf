import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router';
import HomepageSkeleton from '../Skeleton/Home/home';
const Video = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    let { page } = router.query;
    let { videodata, changeVideoURL } = props;
    if (page && page !== '' && page !== 0) {
        page = page
    } else {
        page = 1;
    }
    const itemsPerPage = 8;
    const slice_end = page * itemsPerPage;
    const slice_start = Number(slice_end) - Number(itemsPerPage);
    const pageCount = Math.ceil(videodata.length / itemsPerPage)
    const handlePageClick = (event) => {
        setLoading(true);
        const nexpage = Number(1) + Number(event.selected);
        if (event.selected && event.selected !== '' && event.selected !== 0) {
            router.push(`/Videos?page=${nexpage}`)
        } else {
            router.push('/Videos')
        }
        setLoading(false);
    };
    return (
        <>
            <div style={{width:'100%'}}>
            {
                loading ? <HomepageSkeleton loopvalue={4} /> :
                videodata.slice(slice_start, slice_end).map((videos) => {
                    return <div key={videos.video_id} style={{ position:'relative', width: '23%', float:'left', marginTop: '20px', marginLeft: '18px', cursor: 'pointer' }} onClick={() => { changeVideoURL(`${videos.video_url.replace("watch?v=", "")}`, `${videos.video_tile}`, `${videos.description}` , `${videos.video_id}`) }}>
                        <img src={`https://img.youtube.com/vi/${videos.video_url.replace("watch?v=", "")}/hqdefault.jpg`} style={{ width: '100%' }} />
                        <div style={{ position:'absolute', fontSize: '13px', color:'white', fontWeight: 'bold', top:'5px', left:'5px' }} dangerouslySetInnerHTML={{__html:videos.video_tile}}></div>
                        {/* <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{videos.post_modify_date}</div> */}
                    </div>
                })
            }
            </div>
            <div style={{paddingTop:'1%', clear:'both'}}>
            <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    );
}
export default Video;