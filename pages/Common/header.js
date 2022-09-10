import Link from 'next/link';
const Header = () => {
  return (
    <>
      {/* <div style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }}>LKDF Facility</div>
      <div style={{ textAlign: 'center', fontSize: '20px', paddingBottom: '10px', paddingTop: '5px' }}><Link href="/">Home</Link> &nbsp;|&nbsp; <Link href="/About">About Us</Link> &nbsp;|&nbsp; <Link href="/Projects">Projects</Link> &nbsp;|&nbsp; <Link href="/Partnership">Partnering</Link> &nbsp;|&nbsp; <Link href="/Events">Events</Link> &nbsp;|&nbsp; <Link href="/Resources">Resources</Link> &nbsp;|&nbsp; <Link href="/Videos">Videos</Link> &nbsp;|&nbsp; <Link href="/News">News</Link> &nbsp;|&nbsp; <Link href="/Hometest">Home Test</Link></div> */}


      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg p-0">
            <Link href="/">
              <a className="navbar-brand">
                <img src="images/logo.png" alt="" style={{cursor:'pointer'}} />
              </a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa-solid fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
              <ul>
                <li className='dropdmenu'><a href="#javascript" className=''>About LKDF <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg></a>
                  <div className="drop-contain">
                    <ul>
                      <li className='indrop'><a href="#">ABOUT LKDF</a>
                        <div className="inndropcont active">
                          <div className="dropcnt">
                            <h3>ABOUT LKDF</h3>
                            <p>The Learning and Knowledge Development Facility (LKDF) is a platform that promotes industrial skills development among young people in emerging economies. Working with the private sector through Public Private Development Partnerships, the LKDF supports the establishment and upgrading of local industrial training academies to help meet the labour market’s increasing demand for skilled employees, ultimately contributing to inclusive and sustainable industrial development.</p>
                          </div>
                          <div className="dropimg">
                            <img src="images/dropm1.jpg" alt="" />
                          </div>
                        </div>
                      </li>
                      <li className='indrop'><a href="#">LKDF PURPOSE</a>
                        <div className="inndropcont">
                          <div className="dropcnt">
                            <h3>LKDF PURPOSE</h3>
                            <p>Human development is about expanding the richness of human life, rather than simply the richness of the economy in which human beings live. It is an approach that is focused on people and their opportunities and choices.</p>
                          </div>
                          <div className="dropimg">
                            <img src="images/dropm2.jpg" alt="" />
                          </div>
                        </div>
                      </li>
                      <li className='indrop'><a href="#">OUR TEAM</a>
                        <div className="inndropcont">
                          <div className="dropcnt">
                            <h3>OUR TEAM</h3>
                            <p>The Sustainable Development Goals (SDGs), otherwise known as the Global Goals, are a universal people enjoy peace and prosperity.</p>
                          </div>
                          <div className="dropimg">
                            <img src="images/dropm3.jpg" alt="" />
                          </div>
                        </div>
                      </li>
                      <li className='indrop'><a href="#">FAQ</a>
                        <div className="inndropcont">
                          <div className="dropcnt">
                            <h3>FAQ</h3>
                            <p>The Sustainable Development Goals (SDGs), otherwise known as the Global Goals, are a universal people enjoy peace and prosperity.</p>
                          </div>
                          <div className="dropimg">
                            <img src="images/dropm4.jpg" alt="" />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li><a href="">Projects       </a></li>
                <li className='dropdmenu'><a href="#javascript">Partnering <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg></a>
                  <div className="drop-contain">
                    <ul>
                      <li className='indrop'><a href="#">PPDPs</a>
                        <div className="inndropcont active">
                          <div className="dropcnt">
                            <h3>PPDPs</h3>
                            <p>The Sustainable Development Goals (SDGs), otherwise known as the Global Goals, are a universal call to action to end poverty, protect the planet and ensure that all people enjoy peace and prosperity.</p>
                          </div>
                          <div className="dropimg">
                            <img src="images/dropm5.jpg" alt="" />
                          </div>
                        </div>
                      </li>
                      <li className='indrop'><a href="#">JOIN LKDF</a>
                        <div className="inndropcont">
                          <div className="dropcnt">
                            <h3>JOIN LKDF</h3>
                            <p>Human development is about expanding the richness of human life, rather than simply the richness of the economy in which human beings live. It is an approach that is focused on people and their opportunities and choices.</p>
                          </div>
                          <div className="dropimg">
                            <img src="images/dropm6.jpg" alt="" />
                          </div>
                        </div>
                      </li>
                      <li className='indrop'><a href="#">PARTNERS</a>
                        <div className="inndropcont">
                          <div className="dropcnt">
                            <h3>PARTNERS</h3>
                            <p>The Sustainable Development Goals (SDGs), otherwise known as the Global Goals, are a universal people enjoy peace and prosperity.</p>
                          </div>
                          <div className="dropimg">
                            <img src="images/dropm7.jpg" alt="" />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li><a href="">Events</a></li>
                <li><a href="">Resources</a></li>
                <li><Link href="/Videos">Videos</Link></li>
                <li><a href="">News</a></li>
                <li><a href="#" className='hoverNone'><img src="images/icons/search.png" alt="" /></a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>


    </>
  );
}
export default Header;