import React, {Component} from 'react'; 
import axios from 'axios'; 

class WatchList extends Component {
    
    constructor(props){
        super(props); 

        this.state = {
            watchList: [],
            updaterating: ''
        }
    this.deleteWatchList = this.deleteWatchList.bind(this)
    this.changeRating=this.changeRating.bind(this)
    this.handlechangeRating=this.handlechangeRating.bind(this)
    }
    componentDidMount(){
    axios
    .get('/api/watchlist')
    .then(response => { 
        console.log(response.data)
        this.setState({watchList: response.data})

    })}
    deleteWatchList = (id) => {
        axios.delete(`/api/watchlist/${id}`)
        .then(response => this.setState({watchList: response.data}))
    }
    
    changeRating (id, rating){
        axios.put(`/api/watchlist/${id}`, {rating})
        .then(response => this.setState({watchList: response.data}) )
        
    }

    handlechangeRating(val){
        this.setState({updaterating: val})
    }
    render() {
    console.log(this.state.watchList)
    let watchlistmap = this.state.watchList && this.state.watchList.map((e, i)  =>{ 
        return (
         <div key={i}>
            <div className="watchlist-title">
                
             <h3>Title:  {e.title} </h3> 
                <br/> 
    
            </div>
                <div>
                    Rating: {e.vote_average} 
                    <input placeholder="change rating" onChange={(e) => this.handlechangeRating(e.target.value)} /> 
                    <button onClick={()=> {this.changeRating(e.id, this.state.updaterating)}} />
                    <br/> 
                    <br/>
                    Overview:
                    <br/>
                    {e.overview}
                    <br/>
                    <button className="deletebutton" onClick={() => this.deleteWatchList(e.id)}>Remove From Watch List</button>

                </div> 
                 <br/>
               
                
         </div>
        )
    })
        return (
        <div className="watchlistitems"> 
            {/* <h1>Your Watch List: </h1> */}
            {watchlistmap}
        </div>
        )
    }
};
export default WatchList; 