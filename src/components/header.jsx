import React from 'react' ;

function Header(){
    return(
        <div className="header">
                <header className="App-header ">
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
                        <img className="landing-image" src="/images/image.png" alt="" />
                    </div>
                </div>
                <i className="fa fa-arrow"></i>

            </header>
        </div>
    )
}

export default Header