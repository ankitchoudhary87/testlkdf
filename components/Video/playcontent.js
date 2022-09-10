import { useRouter } from 'next/router';
function Playcontent(props) {
    const router = useRouter();
    let { page } = router.query;
    const {videotitle, videocontent, videoid} = props;
    return (
        <div>
            <div style={{fontSize:'20px', fontWeight:'bold'}} dangerouslySetInnerHTML={{__html: videotitle}} />
            <div /* style={{opacity:'1', maxHeight:'97px', position:'relative', overflow:'hidden'}} */ dangerouslySetInnerHTML={{__html: videocontent}} />
            {
                videoid && videoid!==''?
                    <p onClick={() => router.push({pathname: `/Videos/${videoid}`, query: { page: page }})} style={{backgroundColor:'#FFE156', fontWeight:'bold', color:'black', width:'25%', padding:'1.7%', textAlign:'center', cursor:'pointer'}}>LEARN MORE</p>
                : ""
            }
        </div>
    );
}
export default Playcontent;