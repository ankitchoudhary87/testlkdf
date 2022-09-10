import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const Highlight = () => {
    return (
        <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
                <div>
                    <Skeleton height={430} />
                </div>
            </div>
            <div className="col-12 col-md-12 col-lg-8">
                <div className="bgtxtcontainer">
                    <div className="row">
                        <div className="col-12">
                            <div>
                                <Skeleton height={200} />
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div>
                                <Skeleton height={200} style={{ marginTop: '30px' }} />
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div>
                                <Skeleton height={200} style={{ marginTop: '30px' }} />
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div>
                                <Skeleton height={200} style={{ marginTop: '30px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Highlight;