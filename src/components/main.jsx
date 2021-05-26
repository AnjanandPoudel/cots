import React,{Component} from 'react' ;
import CarouselComp from './carouselsComp';
import Footer from './footer';
import Header from './header'
import MiddleComponent from './middleComponent'

class Main extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div className="header">
                <Header />
                <MiddleComponent />
                <CarouselComp />
                <Footer />
            </div>
        )
    }
   
}

export default Main