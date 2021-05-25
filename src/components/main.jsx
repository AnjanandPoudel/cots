import React,{Component} from 'react' ;
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
            </div>
        )
    }
   
}

export default Main