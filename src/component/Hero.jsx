

const Hero = () => {
    return (
        <div>
            <header className="header2">
        <div className="container place-between">
          <div className="logo inline-flex">
            <img
              className="respon"
              src="../src/assets/images/gmh.png"
              alt="logo"
            />
            <h1>Gm Mamun H</h1>
          </div>
          {/* <!-- logo end --> */}
          <div className="main-menu">
            <ul>
              <li>
                <a href="http://">HOME</a>
              </li>
              <li>
                <a href="http://">ABOUT ME</a>
              </li>
              <li>
                <a href="http://">PROJECTS</a>
              </li>
              <li>
                <a href="http://">SERVICES </a>
              </li>
              <li>
                <a href="http://">CONTACT</a>
              </li>
            </ul>
          </div>
          {/* <!-- main menu end --> */}
          <div className="letsTalk">
            <a href="http://">
              <button>LETS TALK</button>
            </a>
          </div>
          {/* <!--  --> */}
        </div>
      </header>
        </div>
    );
};

export default Hero;