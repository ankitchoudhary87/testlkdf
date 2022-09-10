import Contacts from "../../components/Footer/contacts";
import Newsletter from "../../components/Footer/newsletter.js";
import Quicklinks from "../../components/Footer/quicklinks";
import Socialmedia from "../../components/Footer/socialmedia";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <Quicklinks />
          </div>
          <div className="col-12 col-md-12 col-lg-5">
            <Newsletter />
          </div>
          <div className="col-12 col-md-12 col-lg-3">
            <Contacts />
          </div>
        </div>
        <div className="fbottm">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-5">
              <Socialmedia />
            </div>
            <div className="col-12 col-md-12 col-lg-7">
              <div className="fright">
                <ul>
                  <li>© 2022, lkdfacility.org | All rights reserved.     </li>
                  <li>Website Designed/Developed by <a href="#" className='text-decoration-underline'>SynapseIndia®</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;