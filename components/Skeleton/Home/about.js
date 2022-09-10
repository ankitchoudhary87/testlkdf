import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Link from 'next/link';
const Project = () => {
    return (
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="lkdabt">
                    <div className="sec-heading">
                        <h4>About</h4>
                        <h2>LKDF</h2>
                        <Skeleton height={15} style={{ marginTop: '10px' }} />
                        <Skeleton height={15} style={{ marginTop: '10px' }} />
                        <Skeleton height={15} style={{ marginTop: '10px' }} />
                        <Skeleton height={15} style={{ marginTop: '10px' }} />
                        <Skeleton height={15} style={{ marginTop: '10px' }} />
                        <Skeleton height={15} style={{ marginTop: '10px' }} />
                        <Skeleton height={15} style={{ marginTop: '10px' }} />
                    </div>
                    <Link href="/About"><a className="btn btn-blue">Read More <img src="images/icons/arrow-next.png" alt="" /></a></Link>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="abtimg">
                    <Skeleton height={300} />
                </div>
            </div>
        </div>
    );
}
export default Project;