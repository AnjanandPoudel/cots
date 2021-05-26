import React,{Component} from 'react' ;


class CarouselComp extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div className="carouselComp">
                <h3>FEATURED WORKS</h3>
               <div className="cards">
                   <div className="featured-box">
                        <div className="featured">
                            <img src="/images/rect.png" alt="" />
                            
                        </div>
                        <p>Featured text</p>
                   </div>
                   
                   <div className="featured-box">
                        <div className="featured">
                        <img src="/images/Frame.png" alt="" />
                        </div>
                        <p>Featured text</p>
                   </div>
                   <div className="featured-box">
                        <div className="featured">
                            <img src="/images/c.png" alt="" />
                        </div>
                        <p>Featured text</p>

                   </div>
                   <div className="featured-box">
                    <div className="featured">
                        <img src="/images/cots.png" alt="" />
                    </div>
                    <p>Featured text</p>

                   </div>
                   
               </div>
            </div>
        )
    }
   
}

export default CarouselComp;