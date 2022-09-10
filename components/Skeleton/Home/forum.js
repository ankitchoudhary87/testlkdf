import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const Forum = (props) => {
    return (
        <div className="row">
            {
                Array(props.loopvalue).fill().map((_, i) => {
                    return <div className="col-12 col-md-4" key={i}>
                        <div className="fcard">
                            <div className="card-img">
                                <Skeleton height={300} />
                            </div>
                            <div className="cbody">
                                <Skeleton height={30} />
                                <Skeleton height={15} style={{ marginTop: '10px' }} />
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
}
export default Forum;