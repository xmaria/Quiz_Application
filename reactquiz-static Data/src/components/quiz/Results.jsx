import React,{Component} from 'react';


class Results extends Component{
    
    render(){
        
        var percent= this.props.score/this.props.questions.length*100;
        
        return(
               
            <div className="well">
                <h4 className="Center">You have scored <strong>{percent}%</strong></h4>
            
            
            <hr/>
            <h5 className="Center"><a href="index.html">Take Again</a></h5>
            </div>
            )
    }
    
}

export default Results