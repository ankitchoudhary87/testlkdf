import Image from "next/image";
import Link from "next/link";
function About(props) {
    let { about_lkdf_section_content, about_lkdf_section_image} = props.aboutus;
    return (
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="lkdabt">
                    <div className="sec-heading">
                        <h4>About</h4>
                        <h2>LKDF</h2>
                        <div dangerouslySetInnerHTML={{__html: about_lkdf_section_content}}></div>
                    </div>
                    <Link href="/About"><a className="btn btn-blue">Read More <img src="images/icons/arrow-next.png" alt="" /></a></Link>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="abtimg">
                    <img src={`${about_lkdf_section_image}`} alt="" width={575} height={493} />
                </div>
            </div>
        </div>
    );
}
export default About;