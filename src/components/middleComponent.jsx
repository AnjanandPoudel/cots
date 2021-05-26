import React,{Component} from 'react' ;


class MiddleComponent extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div className="middleComponent" id="middle">
                <div className="cots-image"></div>
                <div className="cots-descp">
                    <h4>Club of Technical Students</h4>
                    <p>is a student club based in Pashchimanchal Campus, Lamachaur, Pokhara</p>
                </div>
                <div className="videoeventbox">
                </div>
            </div>
        )
    }
   
}

export default MiddleComponent