
let express = require('express');
let app = express();
let router = require('./src/router')
require('dotenv').config();


app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'hbs');




app.use('/',router )

let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    let arg = "app is listening at port: ";
    console.log(arg , port)

})