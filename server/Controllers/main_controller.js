const axios = require('axios'); 
let data = []; 
let watchList =[];

    
  
       const read = (req, res) => {
          axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=1804676f1b55a2933afea5da94faca31&language=en-U')
            .then( results => {
                
                data = results.data
                res.status(200).send(data)
            })
            
            .catch(error => console.log(error));
        }

  
        const addWatchList = (req, res, next) => {
            watchList.push(req.body)
            res.status(200)
            // .send(watchList)
        }   
        const getwatchlist = (req, res, next) => {
            res.status(200).send(watchList)
        }

        const deleteFunction = (req, res, next) => {
            const filtered = watchList.filter(val => val.id !== parseInt(req.params.id))
            watchList=filtered
            res.status(200).send(watchList)
        }

        const updateRating = (req, res, next) => { 
            

            let index = watchList.findIndex((movie) => movie.id == req.params.id);
            watchList[index].vote_average = req.body.rating;
                res.status(200).send(watchList)
            }
        


     
module.exports = {
    read, 
    addWatchList,
    getwatchlist, 
    deleteFunction,
    updateRating
};
