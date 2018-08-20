const express = require('express'); 
const { json} = require('body-parser');
const cors = require('cors'); 
const port = 3001; 

const main_controller = require('./Controllers/main_controller')




const app = express(); 
app.use(cors()); 
app.use(json()); 



app.get('/api/movies', main_controller.read)
app.post('/api/movies', main_controller.addWatchList)
app.get('/api/watchlist', main_controller.getwatchlist ) 
app.delete('/api/watchlist/:id', main_controller.deleteFunction)
app.put('/api/watchlist/:id', main_controller.updateRating)




app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
})