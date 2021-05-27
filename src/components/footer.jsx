
import React,{Component} from 'react' ;


class Footer extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div className="footerComponent">
                <div className="footer">
                    <p className="footer-text"> We build relationships,</p>
                    <p className="footer-text">we break walls.</p>
                    <div className="footerdescp">
                    CoTS integrates students from all faculties, which makes us the most 
                    diversified community of students at Pashchimanchal Campus. We reach out to the
                    larger audience by collaborating with all other clubs here. 
                    </div>
                    <div className="collab">
                        <button type="button" className="collab-btn">Collaborate with CoTS</button>
                    </div>
                </div>

                <div className="footer-flexes">
                    <a href="/" className="footer-flex">
                        <span>become a member</span>
                    </a>
                    <a href="/" className="footer-flex">
                        <span>See what’s new around Facebook</span>
                    </a>
                    <a href="/" className="footer-flex">
                        <span>
                        GET THE FRESH CoTS NEWSLETTER
                        </span>
                    </a>
                    <a href="/" className="footer-flex">
                        <span>ONLINE RESOURCES</span>
                    </a>
                </div>
                <hr />
                <div className="copyright">
                    <span> © CoTS 2021, All Rights Reserved     <a href="/">Privacy Policy</a></span>    
                </div>
                <span className="cp-smalltext"> Build by <a href="/">Anjan Poudel</a> </span>                
            </div>

            
        )
    }
   
}

export default Footer;