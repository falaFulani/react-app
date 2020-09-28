import React, { Component } from 'react';
import ListAppoitment from './components/ListAppoitmnet'
import SearchAppoitment from './components/SearchAppointment'
import AddAppoitment from './components/AddAppointment'
import './css/App.css';


class App extends Component{
  constructor(){
    super()
    //
    this.state = {
      myName: 'Wanjiru',
      myAppoitments: []
    }
  }

  componentDidMount (){
    fetch('./data.json')
    .then(response => response.json())
    .then(result=> {
      const apts = result.map (item => {
        return item; 
      });
      this.setState({
        myAppoitments: apts,
        lastIndex: 0
      })
    })
  }
  render() {

   
    return(
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
        
        
                      <AddAppoitment />
                      <SearchAppoitment />
                      <ListAppoitment appointments={this.state.myAppoitments}/>
                 </div>
             </div>
         </div>
       </div>
       </main>
      
    )
  }
}


export default App;
