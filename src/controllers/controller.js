let axios = require('axios');
let Weather = require('../model/Weather');
const e = require('express');
require('dotenv').config();





exports.renderHomePage = (req,res)=>{
    res.render('index')
}; 


exports.getWeather = (req,res)=>{
    let API_KEY = process.env.API_KEYS;
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    let weather = new Weather(req.body.city);
    weather.validateUserInput()

    if (weather.error.length){
        res.render('index', {
            error : weather.error.toString(),
        })
    } else {
        axios.get(url).then((response)=>{
            res.render('index',{
                weather : `It is currently ${response.data.main.temp} C in ${response.data.name}`
               
            })
            
        }).catch((error)=>{
            console.log(error)
        });
    }    
}

exports.renderAboutPage = (req,res)=>{
    res.render('about')
};


