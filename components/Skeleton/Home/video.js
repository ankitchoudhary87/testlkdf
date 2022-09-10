import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const Video = () => {
    return (
        <div className="vidarea">
            <div className="row">
                <div className="col-12 col-md-8">
                    <Skeleton height={310} />
                </div>
                <div className="col-12 col-md-4">
                    <div className="vidplst">
                        <Skeleton height={145} />
                        <Skeleton height={145} style={{ marginTop: '20px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Video;