import React, { Component } from 'react';
import logo from './logo.svg';
import newlogo from './Components/logo/newlogo';
import './App.css';
import axios from 'axios'; 

import WatchList from './Components/WatchList/WatchList'; 
import Trailer from './Components/Trailer/Trailer'; 

class App extends Component {
  constructor(){
    super(); 

    this.state = {
      movies : [],
      didErr: false, 
      
    }
    this.addWatchList=this.addWatchList.bind(this); 
  }
  componentDidMount(){
    axios
    .get("/api/movies")
    .then(response => {
      this.setState({ movies: response.data.results})
    })};


  addWatchList(movie){ 
      axios.post("/api/movies", movie)
    }
   
 
  
  render() {
    let displayData = this.state.movies.map((e,i) => { 
     return(
        <div key={i}>
          <div className="card"> 
            {e.title}
            <div >
            {/* {newlogo}  */}
            <img className="cardlogo" src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}/>
            </div>  
            <br/> 
            <button   id="buttonId" onClick={() => this.addWatchList(e)}>Get info/Add to List</button> 
            {/* <div><img src={e.poster_path}/></div>       */}
             
          </div> 
         
         </div>
     )
    });
    return (
      <div className="container">
        <div>
          <div className="App-header">
            <img src="http://www.dreadcentral.com/wp-content/uploads/2016/02/nic-cage-s.jpg" className="App-logo" alt="logo" />
            <h1 className="App-title"> Movies Now Playing </h1>
              
          </div>
        
                
            <div className="allmovies"> 
                <div className="cards"> 
                {displayData}
                </div>
                <div className="watchlist">
                <Trailer /> 
              
                <h1 id="watchlisttitle">Your Watch List: </h1>
                  <WatchList   />     
                 

               

                </div> 


            </div>
                    
                
        </div>
      </div>
    );
  }
}

export default App;
