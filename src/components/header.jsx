import React from 'react' ;

function Header(){
    return(
        <div className="header">
                <header className="App-header ">
                    <video autoPlay muted loop className="videopart">
                        <source src="/videos/vid.mp4" type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                            <div className="container navitems">
                            <a href="/" className="white brandnav"> CoTs </a>
                            <div className="navlinks">
                                <a href="/" className="white nav"> Plans </a>
                                <a href="/" className="white nav"> Blogs </a>
                                <a href="/" className="white nav"> About </a>
                                <i className="fa fa-search"></i>
                            </div>
                            </div>
                            <div className="landing">
                                <div className="landing-page">
                                    We strive for what we aspire
                                </div>
                                <div className="landing-page-image">

                                </div>
                            </div>
            </header>
            <div className="arrowbox">
                <a href="#middle"> <i class="fa fa-angle-double-down"></i>
                </a>
            </div>

        </div>
    )
}

export default Header