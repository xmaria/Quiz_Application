import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';
class App extends Component{
   
   constructor(props)
   {
       super(props);
       this.state={
           questions:[
               {
                   id:1,
                   text:'CM of TamilNadu',
                   choices:[
                       {
                      id:'a',
                      text:'Amma'
                   },{
                       id:'b',
                       text:'Appa'
                   },
                   {
                       id:'c',
                       text:'Thatha'
                   }
                   ],
                   answer:'a'
               },
               {
                   id:2,
                   text:'Capital of TN',
                   choices:[
                       {
                      id:'a',
                      text:'Delhi'
                   },{
                       id:'b',
                       text:'Mumbai'
                   },
                   {
                       id:'c',
                       text:'Chennai'
                   }
                   ],
                   answer:'c'
               },
               {
                   id:3,
                   text:'Name of Ross\'s daughter',
                   choices:[
                       {
                      id:'a',
                      text:'Katie'
                   },{
                       id:'b',
                       text:'Emma'
                   },
                   {
                       id:'c',
                       text:'Ginne'
                   }
                   ],
                   answer:'b'
               },
               {
                   id: 4,
                   text:'Author of HP',
                   choices:[
                       {
                      id:'a',
                      text:'JK Rowling'
                   },{
                       id:'b',
                       text:'Jane Irne'
                   },
                   {
                       id:'c',
                       text:'Kristen Hannah'
                   }
                   ],
                   answer:'a'
               }
               ],
               chosen:'',
               score: 0,
               current: 1
               
          
       }
       
       
   }
   
   setCurrent(current)
   {
       this.setState({current});
   }
   
   setScore(score){
       this.setState({score});
   } 
   
   setChosen(chosen){
       this.setState({chosen});
   }
   
    render(){   
        
        if(this.state.current>this.state.questions.length){
            
            var scorebox='';
            var results= <Results {...this.state} />;
        
        }
        else{
            var scorebox=<Scorebox {...this.state} />;
            var results='';
        }
        return(
            <div>
                {scorebox}
               <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} 
               setScore={this.setScore.bind(this)} setChosen={this.setChosen.bind(this)}/>
               {results}
            </div>
            )
    }
}

export default App