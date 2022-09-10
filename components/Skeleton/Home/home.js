import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const Home = (props) => {
    return (
        <>
            {
                Array(props.loopvalue).fill().map((_, i) => {
                    return <div key={i} style={{ float: 'left', width: '24%', margin: '5px' }}>
                        <Skeleton height={150} />
                        <Skeleton height={30} style={{ marginTop: '10px' }} />
                        <Skeleton height={15} style={{ marginTop: '10px' }} />
                    </div>
                })
            }
        </>
    );
}
export default Home;