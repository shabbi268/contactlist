var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection and error
mongoose.connection.on('connected', ()=>{
    console.log("Successfully Connected to DB @27017");
});
mongoose.connection.on('error', (err)=>{
    if(err){
        console.log(`Error while connecting to DB ${err}`);
    }
});

const route = require(`./routes/route`);

//port number
const port = process.event.PORT || 3005;

app.use(cors());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
app.use(bodyParser.json());

//routes part
app.use('/api', route)

app.use(express.static(path.join(__dirname, 'public')));


//gets the mentioned html foobar
app.get('/', (req,res) => {
    res.send(`Hello World`)
})

app.listen(port,() => {
    console.log(`Server started at port: ` + port);
})