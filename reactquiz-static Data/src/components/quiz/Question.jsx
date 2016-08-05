import React,{Component} from 'react';

class Question extends Component{
    
    onChange(e)
    {
       const {setChosen}=this.props;
       setChosen(e.target.value);
       console.log(e.target.value);
       console.log("choosen"+ this.props.chosen);
      
    }
    
    onClick(e){
        e.preventDefault();
         const {setCurrent, setScore, question}= this.props;
         
         if(this.props.chosen==question.answer)
       {
           setScore(this.props.score+1);
       }
         setCurrent(this.props.current+1);
    }
    
    render(){
        
        if(this.props.current==this.props.questions.length){
            var buttonName="Submit";
        }
        else{
            var buttonName="Next";
        }
        
        return(
           
            <div className="well">
                    <h4 > {this.props.question.text} </h4>
                    <br/> 
                    <ul className="list-group" >
                        {this.props.question.choices.map(choice=>{
                            return(
                            <li className="list-group-item" key={choice.id}>
                            {choice.id} <input type="radio" name={this.props.question.id} value={choice.id} onChange={this.onChange.bind(this)} />{choice.text}
                            </li>
                            )
                        } )
                        }
                        
                    </ul> 
                    
                    <button type="button" className="btn btn-primary " onClick={this.onClick.bind(this)}>{buttonName}</button>
                   
    
            </div>
            
            
            )
    }
    
}

export default Question