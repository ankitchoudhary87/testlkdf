import Image from 'next/image'
import {dataformat} from '../../helpers/date';
const News = (props) => {
    let { newsdata } = props;
    return (
        <div className="row">
            {
                newsdata.map((news) => {
                    return <div className="col-12 col-md-4" key={news.news_id}>
                        <div className="ncard">
                            <a href="#">
                                <div className="card-img">
                                    <img src={`${news.news_image}`} alt="" width={437} height={254} />
                                </div>
                                <div className="cbody">
                                    <p className='ndt'>{dataformat(news.news_published_date)}</p>
                                    <h3><div dangerouslySetInnerHTML={{ __html: news.news_title }}></div></h3>
                                </div>
                            </a>
                        </div>
                    </div>
                })
            }
        </div>
    );
}
export default News;