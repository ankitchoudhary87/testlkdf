const Video = (props) => {
    let { videodata } = props;
    return (
        <div className="vidarea">
            <div className="row">
                <div className="col-12 col-md-8">
                    <iframe width="100%" height="505" src={`https://youtube.com/embed/${videodata[0].video_url}?autoplay=1&controls=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="col-12 col-md-4">
                    <div className="vidplst">
                        <iframe className='mb-3' width="100%" height="240"src={`https://youtube.com/embed/${videodata[1].video_url}?autoplay=1&controls=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe className='mb-3' width="100%" height="240" src={`https://youtube.com/embed/${videodata[2].video_url}?autoplay=1&controls=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Video;